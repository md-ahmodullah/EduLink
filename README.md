# **EduLink - Online Group Study Platform** 🎓

![Website Image](https://i.ibb.co.com/Zf6sXcY/gitedu.png)

Welcome to the **EduLink**, a web application designed to enhance group study experiences among friends. This project fulfills the job assessment for **BJET Inc.**, showcasing your MERN stack development skills.

---

## **Project Purpose** 🌟

This platform allows users to create, attempt, and grade assignments collaboratively in a secure and user-friendly environment. It is tailored to reflect a recruiter-friendly, professional, and responsive design, aligned with the **Online Group Study** theme.

---

## **Live URL** 🔗

[Visit EduLink](https://edulink-f2125.web.app/)

---

## **Key Features** 🚀

### **User Authentication**

- Email and password-based login/register.
- Google social login integration.
- Validation for password strength.
- JWT-based authentication to secure private routes.

### **Assignments**

- Create assignments
- View all assignments with filtering and search functionality.
- Update assignments with pre-filled data for the creator.
- Delete assignments (only by their creator).

### **Submission and Grading**

- Submit assignments with Google Docs link and notes.
- Grade pending assignments with marks and feedback.
- Prevent users from grading their own submissions.

### **Dynamic Pages**

- Pending Assignments Page: For evaluators to review and mark assignments.
- My Attempted Assignments Page: Displays submissions of the logged-in user.

### **UI/UX Enhancements**

- Fully responsive design for mobile, tablet, and desktop.
- Eye-catching light and dark mode toggling.
- Validation feedback with SweetAlert2.

## **Technologies Used** 🛠️

### **Frontend**

- **Framework**: React
- **Styling**: Tailwind CSS, DaisyUI
- **Packages**:
  - `axios`: For API requests.
  - `firebase`: Authentication and hosting.
  - `react-datepicker`: Date picker for assignment deadlines.
  - `react-router-dom`: Routing and navigation.
  - `react-icons`: Icons for enhanced UI.
  - `sweetalert2`: Toasts and alerts.
  - `match-sorter` & `sort-by`: Efficient filtering and sorting.
  - `localforage`: Local storage management.

### **Backend**

- **Framework**: Express.js
- **Database**: MongoDB
- **Packages**:
  - `dotenv`: Manage environment variables.
  - `cors`: Enable cross-origin requests.
  - `jsonwebtoken`: JWT-based authentication.
  - `cookie-parser`: Parse cookies.

---

## Dependencies

This project relies on the following dependencies:

### Production Dependencies

```json
{
  "axios": "^1.7.9",
  "firebase": "^11.1.0",
  "localforage": "^1.10.0",
  "match-sorter": "^8.0.0",
  "react": "^18.3.1",
  "react-datepicker": "^7.5.0",
  "react-dom": "^18.3.1",
  "react-icons": "^5.4.0",
  "react-router-dom": "^7.1.0",
  "sort-by": "^1.2.0",
  "sweetalert2": "^11.15.3"
}
```

### Development Dependencies

```json
{
  "@eslint/js": "^9.17.0",
  "@types/react": "^18.3.17",
  "@types/react-dom": "^18.3.5",
  "@vitejs/plugin-react": "^4.3.4",
  "autoprefixer": "^10.4.20",
  "daisyui": "^4.12.22",
  "eslint": "^9.17.0",
  "eslint-plugin-react": "^7.37.2",
  "eslint-plugin-react-hooks": "^5.0.0",
  "eslint-plugin-react-refresh": "^0.4.16",
  "globals": "^15.13.0",
  "postcss": "^8.4.49",
  "tailwindcss": "^3.4.17",
  "vite": "^6.0.3"
}
```

---

## Installation

Follow these steps to set up the project on your local machine:

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) as your package manager

### Steps

1. **Clone the repository:**

   ```bash
   git clone <repository_url>
   ```

2. **Navigate to the project directory:**

   ```bash
   cd <project_directory>
   ```

3. **Install dependencies:**
   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Or with yarn:
   ```bash
   yarn dev
   ```

---

## Usage Instructions

- **Start the project in development mode:**
  ```bash
  npm run dev
  ```
- **Build for production:**
  ```bash
  npm run build
  ```
- **Preview the production build:**
  ```bash
  npm run preview
  ```
- **Lint the code:**
  ```bash
  npm run lint
  ```

---

## Folder Structure

A basic outline of the project's folder structure:

```
project-root
├── public          # Static assets
├── src             # Source code
│   ├── components  # Reusable components
│   ├── pages       # Page components
│   ├── styles      # CSS/Tailwind styles
│   ├── utils       # Utility functions
│   └── main.jsx    # Entry point
├── .eslintrc.js    # ESLint configuration
├── postcss.config.js # PostCSS configuration
├── tailwind.config.js # Tailwind configuration
└── vite.config.js  # Vite configuration
```

---

## Contributing

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/my-new-feature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/my-new-feature`.
5. Submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).
