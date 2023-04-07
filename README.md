## auth

---

## [Description](README.md)

You can use this repository for authentication in any project.
it multilanguage and supports **jwt** authentication method
it has 3 pages, a **login** page, a **register** page and a home page.
If the user is not logged in, cannot enter the home page
this project creates with vite and uses tailwind for design.

## [Src](README.md)

### components:

> > button and input components that are reusable are in this folder.
> > protectedRoute component which checks whether the user is logged in or not is in this section
> > in inputs, we use **react-hook-form** for validation.

### pages:

> > login, register and home components are in this folder.
> > user after login navigate to home page, in home page user can logged out.
> > we use **react-query** for catching data.

### components:

> > button and input components that are reusable are in this folder.
> > in inputs, we use **react-hook-form** for validation.

### pages:

> > login and register components are in this folder.
> > we use **react-query** for catching data.

### redux:

> > in this project, we use the **redux-toolkit**.
> > in the features folder, save data in the reducer.
> > store folder is a redux config.

### router:

> > in this file, we import all pages and set data in an array to use in the App.tsx page.

### services:

> > api file is axios config.
> > in authSrv file, request is sent to api.
> > in endpoints file, endpoints are maintained.

### utils:

> > custom hooks are here.
> > in the useAuth file, we checked if the user has a refresh token, send a refresh token, and got token.
> > usePasswordShow file is for showing or hiding password text.

### i18n.ts

this folder is i18n config,i18n is package make the project multilingual
This project supports both English and Persian languages

### App.tsx

routes config and i18n are in this file
