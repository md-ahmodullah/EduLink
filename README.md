# **EduLink - Online Group Study Platform** 🎓

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
