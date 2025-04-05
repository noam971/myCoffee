# Coffee Tracker

A modern web application for tracking coffee consumption, monitoring caffeine levels, and analyzing user-specific statistics such as cost, frequency, and top drinks. Built with **React**, **Vite**, and **Firebase**, the app provides a responsive user experience and modular architecture.

---

## Features

- **User Authentication** – Register, log in, and log out using Firebase Authentication
- **Personal Coffee History** – Each user sees their own caffeine intake and saved entries
- **Caffeine Analytics** – Tracks total intake, daily averages, costs, and most consumed drinks
- **Real-Time Stats** – Dynamic visualization of current caffeine levels based on decay over time
- **Modular Components** – Clean structure using `Layout`, `Hero`, `CoffeeForm`, `Stats`, and `History`
- **Responsive Design** – Styled using a combination of custom CSS and `fanta.css`

---

## Tech Stack

- **Frontend**: React 18 with Vite
- **Backend/Services**: Firebase (Authentication + Firestore)
- **Styling**: Custom CSS and `fanta.css`
- **State Management**: React Context API (`AuthContext`)
- **Deployment**: Compatible with Firebase Hosting, Netlify, Vercel, etc.

---

## Project Structure

```
src/
├── components/
│   ├── Layout.jsx
│   ├── Hero.jsx
│   ├── CoffeeForm.jsx
│   ├── Stats.jsx
│   └── History.jsx
├── context/
│   └── AuthContext.jsx
├── App.jsx
├── main.jsx
├── index.js            # Caffeine logic and mock data
├── index.css
├── fanta.css
firebase.js
```

---

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/noam971/myCoffee.git
cd coffee-tracker
```

2. Install dependencies:

```bash
npm install
```

3. Add your Firebase credentials:

Create a `.env` file in the root directory:

```env
VITE_FIREBASE_APIKEY=your-api-key
VITE_FIREBASE_AUTHDOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_PROJECTID=your-project-id
VITE_FIREBASE_STORAGEBUCKET=your-bucket.appspot.com
VITE_FIREBASE_MESSAGINGSENDERID=your-id
VITE_FIREBASE_APPID=your-app-id
```

4. Run the app:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Notes

- User data is stored in Firestore under each authenticated user's UID
- Caffeine decay is calculated using a half-life formula (default: 5 hours)
- `AuthContext` handles session state and Firestore fetch logic
- Styling is mobile-friendly and uses both utility classes and custom layouts
