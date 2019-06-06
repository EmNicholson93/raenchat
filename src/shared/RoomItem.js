import Component from '../Component.js';
import { auth, roomsRef } from '../services/firebase.js';

class RoomItem extends Component {
    render() {
        const dom = this.renderDOM();
        const room = this.props.room;

        const button = dom.querySelector('button');
        if(button) {
            button.addEventListener('click', () => {   
                roomsRef.child(room.key).remove();
            });
    
        }

        return dom;
    }
    
    renderTemplate() {
        const room = this.props.room;
        const isOwner = auth.currentUser && auth.currentUser.uid === room.owner;
        const button = isOwner ? '<button>delete</button>' : '';

        return /*html*/ `
            <li>
                <a href="./chatroom.html?key=${room.key}">
                ${room.name}
                </a>
                ${button}
            </li>
        `;
    }
}

export default RoomItem;