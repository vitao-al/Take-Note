import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import firebaseAuth from "./firebase/config";
import { useEffect, useState } from 'react';
import NavButtom from './Rotas/NavButtom';

export default function App() {

  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      setUser(user);
    });
  }, []);
  if (user) {
    return <NavButtom></NavButtom>;
  }

  return <Login></Login>;
}
