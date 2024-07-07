const body = document.getElementsByTagName('body')[0];
const prismStyleLink = document.getElementById('prism-theme');
const darkModeSelect = document.getElementById('dark-mode-select');
const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");

const states = [
    'dark',
    'light',
    'weird',
];

let state = 'dark';

let toggleDarkModeMessage = 'dark-on';
let toggleLightModeMessage = 'light-on';
let toggleWeirdModeMessage = 'weird-on';

darkModeSelect.addEventListener('change', function (e) {
    setState(e.target.value);
});

function setState(newState) {
    if (!states.includes(newState)) {
        console.error('[darkMode.js] setState called with invalid new state');
        return;
    }

    state = newState;

    switch (state) {
        case 'dark':
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
            body.classList.remove('weird-mode');
            prismStyleLink.href = '/prism-a11y-dark.css';
            break;
        case 'light':
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
            body.classList.remove('weird-mode');
            prismStyleLink.href = '/prism-material-light.css';
            break;
        case 'weird':
            body.classList.add('weird-mode');
            body.classList.remove('light-mode');
            body.classList.remove('dark-mode');
            prismStyleLink.href = '/prism-synthwave84.css';
            break;
    }

    window.localStorage.setItem('darkModeState', state);
}

function setDefault() {
    setState(darkModePreference.matches ? 'dark' : 'light');
}

function initDarkMode(enableDarkMsg, enableLightMsg, enableWeirdMsg) {
    toggleDarkModeMessage = enableDarkMsg;
    toggleLightModeMessage = enableLightMsg;
    toggleWeirdModeMessage = enableWeirdMsg;

    darkModePreference.addEventListener('change', () => setDefault());

    const savedPreference = window.localStorage.getItem('darkModeState');
    if (savedPreference) {
        setState(savedPreference);
    } else {
        setDefault();
    }

    darkModeSelect.value = state;
}
