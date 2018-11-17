import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Routes from './Routes';
import reducers from './reducers';

export default class App extends Component {

    initializeFirebase() {
        const firebase = require("firebase");
       
        // Initialize Firebase
        firebase.initializeApp({
            apiKey: "AIzaSyBgqjLUH9W72jIgDIKBkUbyf_PT--inIXk",
            authDomain: "whatsapp-clone-6ba4c.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-6ba4c.firebaseio.com",
            projectId: "whatsapp-clone-6ba4c",
            storageBucket: "whatsapp-clone-6ba4c.appspot.com",
            messagingSenderId: "632104395162"
        });
       
        //inicializando o firestore
        const firestore = require("firebase/firestore");
        db = firebase.firestore();
        db.settings({ timestampsInSnapshots: true });
      }

    componentWillMount() {
        this.initializeFirebase();
    }

    render () {
        return (
            <Provider store={createStore(reducers)}>
                <Routes />
            </Provider>
        );
    }
}
