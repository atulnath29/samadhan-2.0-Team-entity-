# Day 21: Professional Developer Portfolio 🚀

👨‍💻 This is the final project of my intensive learning journey! Today, I built a complete, professional portfolio website to showcase my skills, my story, and the projects I've built. This site acts as my digital resume, a central hub for my work, and a point of contact for potential employers and collaborators.

---

## ✨ Key Features

1.  **Personal Branding:** A clean and modern design with a consistent theme that reflects my professional identity as a MERN stack developer. I've included an 'About Me' section detailing my skills and passion for technology.
2.  **Dynamic Project Showcase:** A dedicated, visually appealing section displaying my major projects from this series, including the E-commerce Store, Trello Clone, and Social Media Dashboard. Each project includes a description, the tech stack used, and links to the code.
3.  **Functional Contact Form:** A fully operational contact form that allows visitors to send me a message directly. It's powered by a dedicated **Node.js/Express** backend that uses **Nodemailer** to forward the message to my email address.
4.  **Responsive Design:** The entire website is fully responsive and optimized for all screen sizes, ensuring a seamless experience on desktops, tablets, and mobile phones.

---

## ▶️ How to Run the Project

You need to run both the frontend and the small backend for the contact form.

### 1. Run the Backend (for the Contact Form)

```bash
# Navigate to the backend folder
cd backend-contact-form

# Create a .env file and add your email credentials.
# You may need to create an "App Password" for Gmail.
# EMAIL_USER=your-email@gmail.com
# EMAIL_PASS=your-gmail-app-password
# RECIPIENT_EMAIL=the-email-address-to-receive-messages

# Install dependencies and start
npm install
npm start
```

### 2. Run the Frontend

```bash
# In a new terminal, navigate to the frontend folder
cd frontend

# Install dependencies and start
npm install
npm start
# The portfolio will open and run on http://localhost:3000
