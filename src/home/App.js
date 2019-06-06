import Component from '../Component.js';
import Header from '../shared/Header.js';
import ChatList from '../shared/ChatList.js';
import AddRoom from '../shared/AddRoom.js';
import { roomsRef } from '../services/firebase.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        const headerDOM = header.render();
        dom.insertBefore(headerDOM, main);

        const chatList = new ChatList({ rooms: [] });
        const chatListDOM = chatList.render();
        main.appendChild(chatListDOM);

        const addRoom = new AddRoom();
        const addRoomDOM = addRoom.render();
        dom.insertBefore(addRoomDOM, main);

        roomsRef.on('value', snapshot => {
            const value = snapshot.val();
            const rooms = value ? Object.values(value) : [];
            chatList.update({ rooms });
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default App;