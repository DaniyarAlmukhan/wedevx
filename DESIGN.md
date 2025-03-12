# **Design & Architecture Document**

## **State Management**
The application uses **Redux** as the state manager. It is responsible for:  
- Storing user authentication state, including whether the user is authenticated and their name.  
- Storing the list of leads, enabling modification of individual leads, and adding new leads.  

## **Authentication**
Authentication is handled using a **mock Next.js API**.  
- The user state is stored in Redux for convenient access across components.  
- Additionally, user information is stored in **localStorage** to persist authentication status across page reloads.  
- Any username and password combination works for authentication.  

To avoid issues, **users should clear their localStorage** if facing login problems.  

## **Project Structure**
The project follows a modular structure with the following key folders:  

- **`pages/`** – Contains Next.js pages (e.g., login, main, leads).  
- **`components/`** – Reusable UI components.  
- **`store/`** – Redux store setup and slices.  
- **`hooks/`** – Custom React hooks.  
- **`interfaces/`** – TypeScript interfaces and types.  
- **`constants/`** – Static values used across the app.  
- **`locales/`** – Localization files.  
- **`helpers/`** – Utility functions.  
- **`styles/`** – SCSS and Styled Components for styling.  

## **Styling**
- The project uses **Styled-Components** and **SCSS** for styling.  
- Additionally, **JSON Forms’ built-in Material UI styling** is used for form rendering.  

## **UI/UX Considerations**
The application was designed with the following principles in mind:  
- **Simplicity** – The UI is kept minimal and clean.  
- **Responsiveness** – Ensures the app works across different screen sizes.  

## **Testing**
- The project uses **Jest** for unit testing.  
- Test coverage includes:  
  - **Redux reducers**  
  - **Utility functions**  
  - **Some components**  
  - **Login and logout functionality**  

