const config = {
    apiKey: 'AIzaSyDUHoK0LEke3L8r7o4URsMqrVZvLLSb01E',
    authDomain: 'raen-room.firebaseapp.com',
    databaseURL: 'https://raen-room.firebaseio.com',
    projectId: 'raen-room',
    storageBucket: 'raen-room.appspot.com',
    messagingSenderId: '587087519674',
    appId: '1:587087519674:web:88b1cabdcb37fe00'
};

firebase.initializeApp(config);

export const auth = firebase.auth();

// export const db = firebase.database();