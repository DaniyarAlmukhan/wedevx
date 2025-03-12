# System Design Document

## 1. Overview
This document outlines the system design for a web application built using Next.js, Redux, and JSON Forms. The application includes authentication, form management, file uploads, and lead management functionalities.

## 2. System Architecture
- **Frontend**: Next.js for UI rendering and client-side logic.
- **Backend**: Next.js API routes handle server-side logic.
- **State Management**: Redux.
- **Form Handling**: JSON Forms.
- **Localization**: `next-intl`.
- **Styling**: styled components and scss.

## 3. Components

### 3.1 UI Components
- **Button**: Reusable button component with multiple variants.
- **Modal**: Modal component for displaying pop-ups.
- **Table**: Displays paginated and sortable data with filters.

### 3.2 Form Components
- **Form**: Wraps JSON Forms for rendering forms with dynamic data.
- **CustomLabelRenderer**: Renders custom labels with icons.
- **FileUploadRenderer**: Renders custom file upload input.
- **TextAreaRenderer**: Renders a text area input.

## 4. API Routes
- **Authentication API (`/api/auth`)**
  - Accepts: `POST { username, password }`
  - Response: `{ success: boolean, message: string, data: object }`
- **Lead Submission API (`/api/lead`)**
  - Accepts: `POST { name, surname, email, fileUpload, ...nonRequiredData }`
  - Response: `{ success: boolean, message: string, data: object }`

## 5. State Management
- **Redux Store**:
  - `auth`: Stores user and authentication state.
  - `leads`: Stores leads data.

## 6. Functionalities
### 6.1 Authentication
- Users can login and logout.

### 6.2 Lead Management
- Users can submit a form with name, surname, email, and upload a file.
- Submitted leads are stored in the Redux store and displayed in a table.

### 6.3 Form Handling
- JSON Forms dynamically render forms based on schema and UI schema.
- Validation errors are displayed before submission.
- Submitting is disabled if there is a validation error.

### 6.4 File Upload
- Users can upload PDF files, which are processed using FileReader.

### 6.5 Table Management
- Users can filter leads by status and search by name.
- Data can be sorted by columns and paginated.

## 7. Technologies Used
- **Frontend**: Next.js, React, Redux, JSON Forms, Styled Components
- **Backend**: Next.js API Routes
- **Utilities**: `next-intl`, Lucide React (icons)

