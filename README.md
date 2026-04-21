# The Champions Academy - Backend & User Portal

This project is a full-stack solution for The Champions Academy, featuring a robust Node.js backend, MongoDB integration, and a premium student portal.

## Features

- **User Authentication:** Secure registration and login using JWT and HttpOnly cookies.
- **Student Dashboard:** Real-time view of submitted course applications and their status.
- **Course Applications:** Integrated admission form with course selection.
- **Lead Management:** Functional "Request Callback" and "Contact Us" forms.
- **Interactive UI:** Clickable faculty profiles with detailed biographies.
- **Responsive Design:** Fully mobile-responsive using Tailwind CSS.

## Tech Stack

- **Frontend:** HTML5, Tailwind CSS, JavaScript (Vanilla)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Security:** bcryptjs (password hashing), jsonwebtoken (JWT)

## Setup Instructions

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Environment Variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/impose_hr
   JWT_SECRET=your_super_secret_key_here
   ```

3. **Database:**
   Ensure MongoDB is running on your local machine or provides a valid connection URI.

4. **Run the Server:**
   ```bash
   node server.js
   ```

5. **Access the Website:**
   Open `http://localhost:5000` in your browser.

## Project Structure

- `/controllers`: Logic for auth, applications, and contact.
- `/models`: Mongoose schemas (User, Application, Contact, Callback).
- `/routes`: API endpoints.
- `/middleware`: Auth protection logic.
- `/assets`: Images and styling assets.
- `index.html`: Main landing page.
- `dashboard.html`: Student portal.
- `server.js`: entry point.

Developed with ❤️ for The Champions Academy.
