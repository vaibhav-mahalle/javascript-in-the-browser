var btnTranslate = document.querySelector("#btn");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");


var URL = "https://api.funtranslations.com/translate/dothraki.json";

function urlGenerator(input)
{
    var finalURL = URL + "?text=" + input;
    return finalURL;
}


function clickEventHandle()
{
    var input1 = txtInput.value ;

    fetch(urlGenerator(input1))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        txtOutput.innerText = translatedText; // output
       })
    
}

btnTranslate.addEventListener("click",clickEventHandle)