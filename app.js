var transalte = document.querySelector("#button_translate");
var textInput = document.querySelector("#text-input");
var Output = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/pirate.json";

function getTranslationURL(input) {
  return serverURL + "?" + "text=" + input;
}

function clickHandler() {
  var Text = textInput.value;
  fetch(getTranslationURL(Text))
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      var translatedText = json.contents.translated;
      Output.innerText = translatedText;
    })
    .catch(errorHandler);
}

function errorHandler(error) {
  console.log("Error Occured", error);
  alert("Something wrong with Server! Please try again after some time");
}

transalte.addEventListener("click", clickHandler);
