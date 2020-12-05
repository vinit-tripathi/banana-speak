var textInput = document.querySelector("#text-Input");
var btnTranslate = document.querySelector("#btn-Translate");
var outputDiv = document.querySelector("#output-Div");
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslateURL(text){
return serverURL + "?" + "text=" + text
}
function errorHandler(error){
    console.log("error occured", error);
    alert("something went wrong with server! Try again after sometime")
}
function clickHandler() {
    var inputText = textInput.value;
    fetch(getTranslateURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
};


btnTranslate.addEventListener("click", clickHandler)