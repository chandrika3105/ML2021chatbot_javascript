//Declare a variable x and storing it in x and making it as disable
var x = document.getElementById("BEN");
x.disabled = true;

//Creating a function greet(),by calling it the chatbot introduces itself
function greet(){
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = "Hello I am your Spell Bot, and my name is JACOB!,I want to know your name so please click on below button and enter your name";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    //Removing heading,which is an instruction,and start button(after clicking)
    document.getElementById("h3").remove();
    document.getElementById("btn").remove();
    //Bot introduces itself(voice)
    window.speechSynthesis.speak(speech);

    //enabling the name button
    x.disabled = false;
}

//Creating a clickedTheButton() function which calls the greet() function
function clickedTheButton(){
    greet();
}
