import { app } from '../src/services/firebase.js'; 
import './html-equal.js';
// import utilities and custom assertions
import './profile.test.js';
import './RoomItem.test.js';

QUnit.done(() => {
    app.delete();
}); 