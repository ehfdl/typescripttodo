import { dbService } from "./firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { Todo } from "./d";

export const addTodo = async (todo: any) => {
  await addDoc(collection(dbService, "Todos"), todo);
};

export const deleteTodo = async (id: string) => {
  await deleteDoc(doc(dbService, "Todos", id));
};

export const changeDone = async (id: string) => {
  const snapshot = await getDoc(doc(dbService, "Todos", id));
  const snapdata = snapshot.data();
  if (snapdata) {
    await updateDoc(doc(dbService, "Todos", id), {
      isDone: !snapdata.isDone,
    });
  }
};
