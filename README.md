This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
> Project contains .env file with my Clerk account app credentials for convenience reasons (I will remove it soonish).

## Issue with Clerk
Once user creates an account and attempts to login, the home page still doesn't contain `user` info.

