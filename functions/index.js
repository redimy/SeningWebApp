const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const admin = require("firebase-admin");
admin.initializeApp();

const nodemailer = require("nodemailer");

require("dotenv").config();

const { SENDER_EMAIL, SENDER_PASSWORD } = process.env;

exports.sendEmailNotification = functions.database
  .ref("users/{docId}")
  .onCreate((snap, ctx) => {
    const data = snap.val();

    let authData = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: SENDER_EMAIL,
        pass: SENDER_PASSWORD
      }
    });

    authData
      .sendMail({
        from: "granadosdimitri7@gmail.com",
        to: `${data.email}`,
        subject: "SeningStudio",
        text: `${data.email} - Hola mundo`,
        html: "<b>Sening Studio represent hiphop </b>"
      })
      .then(res => console.log("successfully sent that mail"))
      .catch(err => console.log(err));
  });
