# Nuxt 3 Minimal Starter

This project is a minimal starter template for Nuxt 3, providing a solid foundation for building modern web applications with Vue.js. It includes essential dependencies and configurations to get you up and running quickly.


Continuous Integration and Deployment (CI/CD)

This project is set up with CI/CD to automatically deploy changes to production. When you push changes to the **_main_** branch, the CI/CD pipeline will trigger and update the production environment.

The production site is available at: https://solana-staking-one.vercel.app/

## Project Description

This Nuxt 3 application template includes the following features:

	•	Nuxt 3: The latest version of the popular Vue.js framework.
	•	Pinia: A state management library for Vue.js.
	•	Axios: A promise-based HTTP client for the browser and Node.js.
	•	Vue Router: The official router for Vue.js.
	•	Yup: A JavaScript schema builder for value parsing and validation.
	•	Nuxt Modules: Integrated support for fonts, icons, UI components, and internationalization (i18n).

## Setup

Make sure to install the dependencies:

### npm
npm install

### pnpm
pnpm install

### yarn
yarn install

### bun
bun install

## Development Server

Start the development server on http://localhost:3000:

### npm
npm run dev

### pnpm
pnpm run dev

### yarn
yarn dev

### bun
bun run dev

## Production

Build the application for production:

### npm
npm run build

### pnpm
pnpm run build

### yarn
yarn build

### bun
bun run build

## Locally preview production build:

### npm
npm run preview

### pnpm
pnpm run preview

### yarn
yarn preview

### bun
bun run preview

## Additional Scripts

The package.json file includes additional scripts for generating static sites and preparing the project after installation:

	•	Generate Static Site: Generate a static version of your site.

### npm
npm run generate

### pnpm
pnpm run generate

### yarn
yarn generate

### bun
bun run generate


	•	Post Install: Automatically run after dependencies are installed to prepare the project.
### npm
npm run postinstall

Dependencies

The project relies on the following key dependencies:

	•	@nuxt/fonts: Font management for Nuxt applications.
	•	@nuxt/icon: Icon management for Nuxt applications.
	•	@nuxt/ui: UI components for Nuxt applications.
	•	@nuxtjs/i18n: Internationalization (i18n) support for Nuxt applications.
	•	@pinia/nuxt: Integration of Pinia state management with Nuxt.
	•	axios: Promise-based HTTP client.
	•	nuxt: The core Nuxt framework.
	•	pinia: State management library.
	•	vue: JavaScript framework for building user interfaces.
	•	vue-router: Official router for Vue.js.
	•	yup: Schema builder for value parsing and validation.