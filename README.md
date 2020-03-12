# Owasp Top 10 information guide

## Created by Michael Wells

## Description

This application demonstrates a React based single page app that is dynamically buildt and updated via database information. For this app, information from the Owasp top 10 was placed in a database which the react app then lays out based on a set of rules defined within the app.

User authentication from Firebase is enable in this app which will enable more interactivity in future features.

## Setup/Installation Requirements

- clone and open the file locally
- _in terminal run:_

  > \$git clone https://github.com/Michael-Wayne-Wells/tap-room.git

- Navigate into project folder

> \$cd tap-room

- _install node modules_

> \$npm install

- _set up Firebase for user Authentication_
  - in the src/components folder, create a file called Firebase.js.
  - Set up user a FireBase account, register your app, and enable user email Authentication (here)[https://firebase.google.com/]
  - you will be given credentials for your app that will look something like:

```
     var firebaseConfig = {
        apiKey: "api-key",
        authDomain: "project-id.firebaseapp.com",
        databaseURL: "https://project-id.firebaseio.com",
        projectId: "project-id",
        storageBucket: "project-id.appspot.com",
        messagingSenderId: "sender-id",
        appId: "app-id",
        measurementId: "G-measurement-id",
        };
```

    * Back in your Firebase.js folder, you will use that information and to make your the file look like:

```

    import firebase from "firebase/app";
    import "firebase/database";
    import "firebase/auth";


    const firebaseConfig = {
        apiKey: "api-key",
        authDomain: "project-id.firebaseapp.com",
        databaseURL: "https://project-id.firebaseio.com",
        projectId: "project-id",
        storageBucket: "project-id.appspot.com",
        messagingSenderId: "sender-id",
        appId: "app-id",
        measurementId: "G-measurement-id",
        };
    firebase.initializeApp(firebaseConfig);

    export const provider = new firebase.auth.GoogleAuthProvider();
    export const auth = firebase.auth();

    export default firebase;
```

- _run the program_
  - _this command will also start a local JSON API server which is located in the tools directory in the root folder. There, you can edit and customize data._

> \$npm run start

## Known Bugs

_Currently, there is an editable feature for when you click the information on the information pages. Information will update on the DOM but is not updating in the Database_

## To-Do

- Update Datebase on Editable dom Components
- Create Admin privalges for editing content
- Add more Dynamic elements with user functionality such as:
  - quizes
  - message boards
  - progress tracking for learning modules.

## Support and contact details

_If you have any issues with the program or want to reach out, email [mwells1286@gmail.com](href="mailto:mwells1286@gmail.com")_

## Technologies Used

_This program utilized:_

- _React_
- _FireBase_
- _ReactSpring_
  _ React Router
  _
- _JavaScript_
- _HTML_
- _CSS_
- _Bootstrap_

### License

_Licensed under MIT license_
