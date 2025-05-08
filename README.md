# Sociopedia

A modern social media application built with React, Redux Toolkit, and Material UI, featuring authentication, likes functionality, and dark mode support.

## 🌟 Features

- **User Authentication** - Secure JWT-based authentication system
- **Responsive Design** - Fully responsive UI that works on mobile, tablet, and desktop
- **Dark Mode** - Toggle between light and dark themes
- **Social Interactions** - Like posts, comment, and share content
- **File Uploads** - Support for image uploads using React Dropzone
- **Persistent State** - Redux Persist for maintaining user sessions
- **MongoDB Database** - Robust data storage with Mongoose ODM

## 🚀 Technologies Used

### Frontend
- **React** - UI library for building user interfaces
- **Redux Toolkit** - State management
- **Material UI** - Component library for consistent styling
- **React Router** - Navigation and routing
- **Redux Persist** - Local storage persistence
- **React Dropzone** - File upload functionality
- **Formik** - Form management
- **Yup** - Form validation

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JSON Web Token** - Authentication
- **Multer** - File upload middleware
- **GridFS-Storage** - File storage for MongoDB

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/en/download/) (v14 or above)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Git](https://git-scm.com/downloads)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Sociopedia.git
   cd Sociopedia
   ```

2. **Install dependencies for both frontend and backend**
   ```bash
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the server directory with the following variables:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Start the development servers**
   ```bash
   # Start the backend server
   cd server
   npm run dev

   # In a new terminal, start the frontend server
   cd client
   npm start
   ```

5. **Access the application**
   
   Open your browser and navigate to `http://localhost:3000`

## 📂 Project Structure

```
Sociopedia/
├── client/                # Frontend React application
│   ├── public/            # Public files
│   ├── src/               # Source files
│   │   ├── components/    # Reusable components
│   │   ├── scenes/        # Page components
│   │   ├── state/         # Redux store & slices
│   │   ├── theme/         # Theme configuration
│   │   └── App.js         # Main application component
│   └── package.json       # Frontend dependencies
│
└── server/                # Backend Node.js application
    ├── controllers/       # Request handlers
    ├── middleware/        # Custom middleware
    ├── models/            # Mongoose models
    ├── routes/            # API routes
    ├── utils/             # Utility functions
    ├── index.js           # Entry point
    └── package.json       # Backend dependencies
```

## 🔒 Authentication

The application uses JWT (JSON Web Token) for authentication:
- Register with email, password, and profile information
- Login with email and password
- Tokens are stored using Redux Persist for session persistence
- Protected routes for authenticated users only

## 🌙 Dark Mode

Toggle between light and dark themes:
- Theme preference is stored in Redux
- Persisted across sessions
- Implemented using Material UI's ThemeProvider

## 👍 Likes Functionality

Users can interact with posts:
- Like/unlike posts
- View like counts

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Mobile devices
- Tablets
- Desktop computers

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

Made with ❤️ using React, Redux, and Material UI
