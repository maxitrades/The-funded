// ── firebase-config.js ──────────────────────────────────────────────
// Shared across all pages. Import with:
//   import { app, auth, db } from './firebase-config.js';

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth }        from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore }   from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey:            "AIzaSyDaKGU5Nrtof0lA7GwZN9baIwdpVZaftbQ",
  authDomain:        "the-funded.firebaseapp.com",
  projectId:         "the-funded",
  storageBucket:     "the-funded.firebasestorage.app",
  messagingSenderId: "656425279116",
  appId:             "1:656425279116:web:d309fc0a731066f28225a9",
};

export const app  = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);
