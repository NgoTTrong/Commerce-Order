# E-commerce Website Admin Dashboard, Product Display Page and Order Page

This is a simple E-commerce website that includes an admin dashboard for managing products and displaying orders. The website is built using NextJS for the frontend, while Nodejs, Supabase is used as the backend and API.

## Tech Stack

Nextjs

## Features
- Main page

    • Have a main theme of web, and a bottom use go to shopping
        
    • List all products that fetch from API

- Detail and checkout page

List Products

    • One product on lists show some infomation such as:
        ◦ Product name
        ◦ Main Image
        ◦ Base Price (the original price)
        ◦ Promotional Price
    • Click on one product to go to buy that product

View detail infomation and checkout page

    • This page simply displays the product infomation, choose quantity and when click on check out button, one form appear
    • The check out form has some field need to fill in like: name, email, address, phone number.
    • Afer filling in form, the customer can click on buy button to submit form to store order data to database.


## Run Locally

Clone the project

```bash
  git clone https://github.com/NgoTTrong/Commerce-Order.git
```

Go to the project directory

```bash
  cd Commerce-Order
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file

`NEXT_PUBLIC_SERVER_URL`

## Demo

https://commerce-order-nine.vercel.app/

## Deployment

To deploy this project run this command in the CLI

```bash
  vercel
```

If you haven't installed vercel yet. Install the Vercel CLI by running

```bash
  npm install -g vercel
```

## Documentation

[Nextjs](https://nextjs.org/docs)

[Supabase](https://supabase.com/docs)

## Support

For support, email trongngo08082002@gmail.com
