
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const studentCollection = collection(db, "student");

export const fetchStudent = createAsyncThunk("student/fetch", async (_, thunkAPI) => {
  try {
    const snapshot = await getDocs(studentCollection);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});


export const addStudent = createAsyncThunk("student/add", async (data) => {
  const docRef = await addDoc(studentCollection, data);
  return { id: docRef.id, ...data };
});

export const deleteStudent = createAsyncThunk("student/delete", async (id) => {
  await deleteDoc(doc(db, "student", id));
  return id;
});

export const updateStudent = createAsyncThunk(
  "student/update",
  async ({ id, newData }) => {
    await updateDoc(doc(db, "student", id), newData);
    return { id, newData };
  }
);
