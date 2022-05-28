// Selectors
let btnTranslate = document.querySelector('#btn-translate');
let userInputBox = document.querySelector('.user-input-box');
let outputBox = document.querySelector('.output-box');

// API serverURL
let serverURL = "https://api.funtranslations.com/translate/leetspeak.json";

// Parameter to serverURL
function getTranslationURL(text) {
    return serverURL+"?text="+text;
}

// Error
function errorHandler(error) {
    console.log('Error occured', error);
    alert('Something went wrong, Try again after some time.')
}

// Click eventListener
btnTranslate.addEventListener('click', clickHandler)

// Click function
function clickHandler() {
    let inputText = userInputBox.value;
    fetch(getTranslationURL(inputText))
        .then(response=>response.json())
        .then(json => {
            let translatedText = json.contents.translated;
            outputBox.innerText = translatedText})
        .catch(errorHandler)
}