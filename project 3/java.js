let speech = new SpeechSynthesisUtterance();
let voices = [];
let voicesSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    // Clear previous options
    voicesSelect.innerHTML = "";

    voices.forEach((voice, i) => {
        voicesSelect.options[i] = new Option(voice.name + ' (' + voice.lang + ')', i);
    });
};

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

