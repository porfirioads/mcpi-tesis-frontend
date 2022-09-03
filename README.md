## **TESIS MCPI FRONTEND**

Proyecto de desarrollo para la tesis de la Maestría en Ciencias del Procesamiento de la Información.

- [Creation of new angular project](#creation-of-new-angular-project)
- [Development server](#development-server)
- [Code scaffolding](#code-scaffolding)
  - [Modules generation](#modules-generation)
  - [Components generation](#components-generation)
  - [Services generation](#services-generation)
- [How to make commits](#how-to-make-commits)
- [Build](#build)
- [Running unit tests](#running-unit-tests)
- [Running end-to-end tests](#running-end-to-end-tests)
- [Further help](#further-help)

# Creation of new angular project

Install angular:

```bash
npm install -g @angular/cli
```

Create angular app:

```bash
ng new <APP_NAME>
```

Enter to the app folder:

```bash
cd <APP_NAME>
```

Install angular material:

```bash
ng add @angular/material
```

Install angular flex layout:

```bash
npm install @angular/flex-layout
```

Install prettier:

```bash
npm install --save-dev prettier pretty-quick
```

Add the format script in the `package.json`:

```json
"format": "pretty-quick --staged"
```

Install commitlint:

```bash
npm install --save-dev @commitlint/cli @commitlint/config-conventional
```

Create a `.commitlintrc.json` file with the desired rules:

```json
{
  "extends": ["@commitlint/config-conventional"]
}
```

Install husky hooks:

```bash
npm install husky --save-dev
```

Enable husky hooks:

```bash
npx husky install
```

Add husky hook to format code:

```bash
npx husky add .husky/pre-commit "npm run format"
```

Add husky hool to lint commit messages:

```bash
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

# Development server

Enter to the app folder:

```bash
cd <APP_NAME>
```

Install dependencies:

```bash
npm install
```

Enable husky hooks:

```bash
npx husky install
```

Run angular app:

```bash
ng serve
```

or

```bash
npm run start
```

# Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Modules generation

Generate a module:

```bash
npm run ng g m modules/<MODULE_NAME>
```

Generate a module with specific parent:

```bash
npm run ng g m modules/<MODULE_NAME> -- --module=app.module
```

Generate module with specific parent, and routing:

```bash
npm run ng g m modules/<MODULE_NAME> -- --module=<PARENT_MODULE>.module --routing
```

Generate module with specific parent, routing and route (this also create a component):

```bash
npm run ng g m modules/<MODULE_NAME> -- --module=<PARENT_MODULE>.module --routing --route=<ROUTE_NAME>
```

## Components generation

Generate component in a module:

```bash
npm run ng g c modules/<MODULE_NAME>
```

## Services generation

Generate service:

```bash
npm run ng g s services/dataset
```

# How to make commits

General pattern of a commit message:

```
type(scope?): subject
```

Commit message examples:

```
ci: run tests on travis ci
```

```
fix(server): send cors headers
```

```
feat(blog): add comment section
```

Common types of commit:

- `build`: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- `ci`: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- `docs`: Documentation only changes
- `feat`: A new feature
- `fix`: A bug fix
- `perf`: A code change that improves performance
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `revert`: A commit that reverts other commit, you should mention the SHA of the commit being reverted.
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `test`: Adding missing tests or correcting existing tests

# Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

# Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

# Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
