import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useRouter } from 'next/router'

const Order = ({ setOpenForm, product, quantity }) => {
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      email: '',
      phone: '',
      name: '',
      address: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Required')
        .min(4, 'Must be 4 characters or more'),
      email: Yup.string()
        .required('Required')
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          'Please enter a valid email address'
        ),
      phone: Yup.string()
        .required('Required')
        .matches(
          /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
          'Must be a valid phone number'
        ),
      address: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        let orderInfo = {
          buyername: values.name,
          phonenumber: values.phone,
          email: values.email,
          buyeraddress: values.address,
          productid: product.id,
          quantity: parseInt(quantity),
          totalpaid: parseInt(quantity) * product.discountprice,
        }
        console.log(orderInfo)
        await axios.post(process.env.NEXT_PUBLIC_SERVER_URL + '/order/insert', {
          orderInfo,
        })
        window.alert('Buy successful')
        router.push('/')
      } catch (e) {
        window.alert('Buy fail')
      }
    },
  })

  return (
    <section className="order-container">
      <p className="close-form" onClick={() => setOpenForm(false)}>
        Close
      </p>
      <form className="order-form" onSubmit={formik.handleSubmit}>
        <label> Your name </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="Enter your name"
        />
        {formik.errors.name && (
          <p className="errorMsg"> {formik.errors.name} </p>
        )}
        <label> Email address </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Enter your email"
        />
        {formik.errors.email && (
          <p className="errorMsg"> {formik.errors.email} </p>
        )}
        <label> Phone number </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          placeholder="Enter your phone numbers"
        />
        {formik.errors.phone && (
          <p className="errorMsg"> {formik.errors.phone} </p>
        )}
        <label> Address </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          placeholder="Enter your address"
        />
        {formik.errors.phone && (
          <p className="errorMsg"> {formik.errors.address} </p>
        )}
        <button type="submit"> Buy </button>
      </form>
    </section>
  )
}

export default Order
