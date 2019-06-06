import Profile from '../src/shared/Profile.js';

const test = QUnit.test;

test('renders all user props', assert => {
    //arrange
    const user = {
        displayName: 'Eli Nicholson',
        photoUrl: 'https://lh5.googleusercontent.com/-EnRNBAYvURk/AAAAAAAAAAI/AAAAAAAAAK8/cMJNFAVX5SE/photo.jpg'
    };
    const profile = new Profile({ user });
    const expected = /*html*/`
    <div class="profile">
        <img src="./assets/avatar.png">
        <span>Eli Nicholson</span>
        <button>Sign Out</button>
    </div>
`;
    //act
    const rendered = profile.renderTemplate();
    //assert
    assert.htmlEqual(rendered, expected);
});

test('renders user with no image', assert => {
    //arrange
    const user = {
        displayName: 'Eli Nicholson',
        photoUrl: null
    };
    const profile = new Profile({ user });
    const expected = /*html*/`
    <div class="profile">
        <img src="./assets/avatar.png">
        <span>Eli Nicholson</span>
        <button>Sign Out</button>
    </div>
`;
    //act
    const rendered = profile.renderTemplate();
    //assert
    assert.htmlEqual(rendered, expected);
});

test('renders empty div if no user signed in', assert => {
    //arrange
    const user = null;
    const profile = new Profile({ user });
    const expected = /*html*/`
    <div></div>
`;
    //act
    const rendered = profile.renderTemplate();
    //assert
    assert.htmlEqual(rendered, expected);
});