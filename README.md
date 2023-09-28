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

## Run the following commmands to load prisma db

```bash
pscale connect lujan_world develop --port 3309
pscale connect lujan_world develop --port 3306
```

run => npx prisma db push, for syncronize to planetscale.

```bash
npx prisma db push
```

```bash
pscale shell star-app initial-setup
```

[see documentation for more info](https://planetscale.com/docs/prisma/prisma-quickstart)

## Load schema from existing database

The typical workflow for projects that are not using Prisma Migrate, but instead use plain SQL or another migration tool looks as follows:

update de .env variable for database connect:

```bash
DATABASE_URL=mysql://USER:PASSWORD@HOST:PORT/DATABASE?connection_limit=5&socket_timeout=3
```

Run

```bash
prisma db pull
```

to update the Prisma schema

Run

```bash
prisma generate
```

to update Prisma Client

Use the updated Prisma Client in your application

[see documentation for more info](https://www.prisma.io/docs/concepts/components/introspection#the-prisma-db-pull-command)

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
