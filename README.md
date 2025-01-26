<div align="center" id="top"> 
  <img src="./web/public/logo.png" alt="Pizza Shop" />
</div>

<hr/>
<br>

## About

This applications is a dashboard for establishment management and order control.

## Screenshots

<div align="center" id="top"> 
  <img src="./web/public/sign-in.png" alt="Página de login" />
</div>
<br/>
<br/>
<div align="center" id="top"> 
  <img src="./web/public/sign-up.png" alt="Página de cadastro" />
</div>
<br/>
<br/>
<div align="center" id="top"> 
<img src="./web/public/dashboard.png" alt="Dashboard" />
</div>
<br/>
<br/>
<div align="center" id="top"> 
  <img src="./web/public/orders.png" alt="Página de pedidos" />
</div>



## Features

This project is a React-based dashboard for managing establishments and controlling orders, inspired by iFood's functionality. It provides tools for businesses to oversee their menu, track orders, manage customer feedback, and analyze performance metrics.

## Technologies

The following tools were used in this project:

- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router DOM](https://reactrouter.com/)
- [Tailwind](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [React Query](https://tanstack.com/query/latest/docs/framework/react/overview)
- [Radix](https://www.radix-ui.com/)
- [React Hook Form](https://www.react-hook-form.com/)
- [Testing Library](https://testing-library.com/)

## Requirements

Before starting, you need to have [Git](https://git-scm.com), [Node](https://nodejs.org/en/) and [Docker](https://www.docker.com/) installed.

## Starting

```bash
# Clone this project
$ git clone https://github.com/PedroHConrado/pizza-shop

# Access
$ cd pizza-shop/api

# Install API dependencies
$ docker compose up -d
$ bun i
$ bun migrate
$ bun seed
# Run the project
$ bun dev

# Access
$ cd pizza-shop/web

# Install Web dependencies
$ npm i
# Run the project
$ npm run dev

```
