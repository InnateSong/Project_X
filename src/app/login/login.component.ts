import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

// Firebase
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { environment } from 'src/environments/environment';

// Enviroment holds this information
const firebaseConfig = environment.firebase;

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  // Form control 
  LoginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })


  LoginSubmit(): void{
    
    console.log("Button pressed"); // Debug

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const uid = user.uid;
        console.log("User already logged in: ", uid);

      } else {
        // User is signed out
        console.log("User not logged in yet");
        // Attempt to sign user in
        signInWithEmailAndPassword(auth, this.LoginForm.value.email , this.LoginForm.value.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;

          console.log("You logged in successfully!"); // Debug
          
        })
        .catch((error) => {
          // Failure 
          console.log("You have failed to log in!");
          const errorCode = error.code;
          const errorMessage = error.message;
        });

      }

    });

  }

  ngOnInit(): void {

  


  }

}
