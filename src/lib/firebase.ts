
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZwAI2w0ZmJJyYAdZcKDLt_YPJZqirPeA",
  authDomain: "dimajqdid-47e37.firebaseapp.com",
  projectId: "dimajqdid-47e37",
  storageBucket: "dimajqdid-47e37.firebaseapp.com",
  messagingSenderId: "815748050639",
  appId: "1:815748050639:web:6bf70f3cbaa84e6d6111ba",
  measurementId: "G-Y17D1GFPDZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
