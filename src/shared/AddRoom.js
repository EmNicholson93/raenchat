import Component from '../Component.js';
import { auth, roomsRef } from '../services/firebase.js';

class AddRoom extends Component {
    
    render() {
        const form = this.renderDOM();
        const input = form.querySelector('input');
    
        form.addEventListener('submit', event => {
            event.preventDefault();

            const roomRef = roomsRef.push();

            roomRef.set({
                key: roomRef.key,
                name: input.value,
                owner: auth.currentUser.uid
            }).then(() => {
                form.reset();
            });
        });
    
        return form;
        
    }
    renderTemplate() {
        return /*html*/`
        <form class="add-room">
            <label>Room: <input name="room"></label>
            <button>Add</button>
        </form>
        `;
    }
}

export default AddRoom;