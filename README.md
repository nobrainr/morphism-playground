[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/zeit/next.js/tree/master/examples/custom-server-typescript) [![Greenkeeper badge](https://badges.greenkeeper.io/nobrainr/morphism-playground.svg)](https://greenkeeper.io/)

# Custom server with TypeScript + Nodemon example

## How to use

### Using `create-next-app`

Execute [`create-next-app`](https://github.com/segmentio/create-next-app) with [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) or [npx](https://github.com/zkat/npx#readme) to bootstrap the example:

```bash
npx create-next-app --example custom-server-typescript custom-server-typescript-app
# or
yarn create next-app --example custom-server-typescript custom-server-typescript-app
```

### Download manually

Download the example:

```bash
curl https://codeload.github.com/zeit/next.js/tar.gz/canary | tar -xz --strip=2 next.js-canary/examples/custom-server-typescript
cd custom-server-typescript
```

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```

## The idea behind the example

The example shows how you can use [TypeScript](https://typescriptlang.com) on both the server and the client while using [Nodemon](https://nodemon.io/) to live reload the server code without affecting the Next.js universal code.
Server entry point is `server/index.ts` in development and `production-server/index.js` in production.
The second directory should be added to `.gitignore`.
