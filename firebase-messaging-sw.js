// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// 1. Initialize Firebase inside Service Worker
// DO NOT CHANGE THIS CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyAafXkJwyZ5F7Xuax0VktZ9cpqWD4oCvxU",
  authDomain: "tournament-97743.firebaseapp.com",
  projectId: "tournament-97743",
  storageBucket: "tournament-97743.firebasestorage.app",
  messagingSenderId: "584797187828",
  appId: "1:584797187828:web:4c643f83dfd9b700adb8a1"
};

firebase.initializeApp(firebaseConfig);

// 2. Initialize Messaging
const messaging = firebase.messaging();

// 3. Handle Background Notifications
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/3233/3233483.png' // Standard icon
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});