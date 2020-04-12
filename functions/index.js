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
        pass: SENDER_PASSWORD,
      },
    });

    authData
      .sendMail({
        from: "SeningStudio.com",
        to: `${data.email}`,
        subject: "Contacto - Sening Studio ",
        text: `${data.email} - Nos gustaria saber un poco mas sobre tu proyecto y un horario en el que te podamos contactar -- Sening Studio`,
        html:
          `Buen dia ${data.name},<br> nos gustaria saber un poco mas sobre tu proyecto y un horario en el que te podamos contactar, saludos. <br>` +
          "<b>Llevemos su proyecto al siguiente nivel.</b>",
      })
      .then((res) => console.log("successfully sent that mail"))
      .catch((err) => console.log(err));
  });
