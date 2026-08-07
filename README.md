# 📰 BriefX – Final Major Project (Summer Training)

## 📌 Project Overview

**BriefX** is the **Final Major Project** developed as part of our **Summer Training Program**. This project was designed and developed by **Me** and **Deepanshu(https://github.com/DeepRao580)** as a team to demonstrate practical knowledge of modern web development technologies.

The objective of BriefX is to provide users with a fast, responsive, and user-friendly platform for reading the latest news. The application allows users to browse news, search articles, explore different categories, view detailed news information, and bookmark their favorite articles for offline reading.

Built using **React.js**, **Vite**, **Tailwind CSS**, **React Router DOM**, and **Zustand**, the project follows modern frontend development practices and focuses on performance, responsiveness, and an intuitive user experience.

---

# 🚀 Features

* 📰 Browse the latest news
* 🔍 Search news by keywords
* 📂 Explore news by category
* 📖 Read detailed news articles
* 🤖 AI-powered news summarization
* 🔖 Bookmark favorite articles
* 💾 Offline access to bookmarked articles
* 🌐 Multi-language support
* 🌙 Dark & Light theme
* 📱 Fully responsive design
* ⚡ Fast navigation and smooth user experience

---

# 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM
* Zustand
* Zustand Persist Middleware
* React Icons

 ### Backend
 
- 🟢 Node.js
- 🚀 Express.js
- 🍃 MongoDB
- 📦 Mongoose
- 🔐 JWT Authentication
- 🔒 Bcrypt.js
- 🌍 CORS

### API

* Currents News API

---

# 📂 Project Structure

```text
BriefX_News_Web/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── node_modules/
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   ├── node_modules/
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# 📸 Application Screens

* Home Page
* Search Page
* Category Pages
* News Details Page
* Bookmark Page
* Signup % Login Page
* Profile Page

---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone https://github.com/Mayankahuja005/BriefX_News_Web.git
```

---

## 2. Install Frontend Dependencies

```bash
cd frontend
npm install
npm run dev
```

---

## 3. Install Backend Dependencies

```bash
cd backend
npm install
npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file inside both the frontend and backend folders.

### Frontend

```env
VITE_NEWS_API_KEY=YOUR_API_KEY
```

### Backend

```env
PORT=YOUR_PORT_NUMBER
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET_KEY
```

---

# 📖 Working of the Application

1. The application fetches the latest news from the Currents News API.
2. Users can browse news articles on the homepage.
3. News can be searched using keywords.
4. Users can explore different news categories.
5. Clicking a news card opens a detailed article page.
6. Favorite articles can be bookmarked.
7. Bookmarks are stored locally using Zustand Persist.
8. Saved bookmarks remain available even after refreshing the browser.
9. Previously bookmarked articles can also be viewed without an internet connection.

---

# 💾 Offline Bookmark Support

BriefX supports offline reading of bookmarked articles.

* Bookmarked articles are saved locally using **Zustand Persist**.
* The complete article data is stored on the user's device.
* Users can access bookmarked news without an internet connection.
* New articles still require an active internet connection because they are fetched from the News API.

---

# 🌟 Highlights

* Modern UI with Tailwind CSS
* Responsive on Mobile, Tablet, and Desktop
* Client-side Routing
* Fast State Management using Zustand
* Persistent Bookmarks
* Offline Bookmark Reading
* Multi-language Support
* Clean and Organized Code Structure

---

# 📚 React Concepts Used

* Functional Components
* JSX
* React Hooks
* useState
* useEffect
* React Router DOM
* Zustand State Management
* Persist Middleware
* Conditional Rendering
* Props
* Component Reusability

---

# 📦 Dependencies

```text
React
Vite
Tailwind CSS
React Router DOM
Zustand
React Icons
```

---

# 🚀 Future Enhancements

* Voice search
* Push notifications
* Progressive Web App (PWA)
* Personalized news recommendations
* Reading history
* User authentication
* Social media sharing
* Trending news section

---

# 👨‍💻 Team

### Mayank Ahuja

* Frontend Development
* React Development
* UI/UX Design
* State Management
* Routing Integration

### Deepanshu

* Backend Development
* Feature Implementation
* Testing and Debugging
* API Integration
* Project Support

---

# 🙏 Acknowledgements

We sincerely thank our Summer Training's(Brain Mentors) mentors and faculty members for their continuous guidance and support throughout the development of this project. Their valuable feedback and encouragement helped us successfully complete our Final Major Project.

---

# 📄 License

This project was developed for educational purposes as the **Final Major Project** of our **Summer Training Program**.

---

# ⭐ GitHub Repository

If you found this project useful, consider giving it a ⭐ on GitHub.

