import RoomItem from '../src/shared/RoomItem.js';
const test = QUnit.test;

test('renders template from a room object', assert => {
    //arrange
    const room = {
        key: '123',
        name: 'chat 1'
    };

    const roomItem = new RoomItem({ room });
    const expected = /*html*/ `
        <li>
            <a href="./chatroom.html?key=123"> chat 1 </a>
        </li>
    `;

    const html = roomItem.renderTemplate();

    assert.htmlEqual(html, expected);
});