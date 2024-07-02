const body = document.getElementsByTagName('body')[0];
const darkModeButton = document.getElementById('dark-mode-button');

let state = 0;
const states = 3;
const DARK = 0;
const LIGHT = 1;
const WEIRD = 2;

let toggleDarkModeMessage = 'dark-on';
let toggleLightModeMessage = 'light-on';
let toggleWeirdModeMessage = 'weird-on';

darkModeButton.addEventListener('click', function () {
    setState((state + 1) % states);
});

function setState(newState) {
    state = newState;

    switch (state) {
        case DARK:
            darkModeButton.innerHTML = toggleLightModeMessage;
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
            body.classList.remove('weird-mode');
            break;
        case LIGHT:
            darkModeButton.innerHTML = toggleWeirdModeMessage;
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
            body.classList.remove('weird-mode');
            break;
        case WEIRD:
            darkModeButton.innerHTML = toggleDarkModeMessage;
            body.classList.add('weird-mode');
            body.classList.remove('light-mode');
            body.classList.remove('dark-mode');
            break;
    }
}

function initDarkMode(enableDarkMsg, enableLightMsg, enableWeirdMsg) {
    toggleDarkModeMessage = enableDarkMsg;
    toggleLightModeMessage = enableLightMsg;
    toggleWeirdModeMessage = enableWeirdMsg;

    const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");
    darkModePreference.addEventListener('change', function () {
        setState(darkModePreference.matches ? DARK : LIGHT);
    });

    setState(darkModePreference.matches ? DARK : LIGHT);
}
