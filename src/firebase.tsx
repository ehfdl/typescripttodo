import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 아래 데이터는 본인의 Firebase 프로젝트 설정에서 확인할 수 있습니다.
const firebaseConfig = {
  apiKey: "AIzaSyD-i2rnANXpdcrxtoLXliI5pFWCgsYqDZI",
  authDomain: "typescript-todo-852ea.firebaseapp.com",
  projectId: "typescript-todo-852ea",
  storageBucket: "typescript-todo-852ea.appspot.com",
  messagingSenderId: "829556222182",
  appId: "1:829556222182:web:e01c79c30373f0dba17327",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const dbService = getFirestore(app); // fireStore 이용을 위한 변수!
