const questions = [
    'Where did Frodo destroy the One Ring?',
    'What is Batman\'s real name?',
    'Which company developed the video game Minecraft?',
    'Which character is portrayed by Henry Cavill in the Netflix adaptation of The Witcher?',
    'Who likes to jump around on his tail in the Winnie The Pooh stories?'
];
const answers = ['Mount Doom', 'Bruce Wayne', 'Mojang', 'Geralt of Rivia', 'Tigger'];

function oefening3() {
    // Maak hier oefening 3
    document.querySelector(".oefening3").innerHTML = "";
    let antwoorden = [];
    for (let i = 0; i < questions.length; i++) {
        let antwoord = prompt(questions[i]);

        antwoorden[i] = antwoord;
    }

    for (let i = 0; i < antwoorden.length; i++) {
        if (antwoorden[i] == answers[i]) {
            const div = document.createElement("div");
            div.innerHTML = '<h3>' + questions[i] + '</h3>' +
                "You answered: " + antwoorden[i];
            div.style.backgroundColor = "green";
            div.style.color = "white";
            div.style.textAlign = "center";
            div.classList.add("m-2");
            document.querySelector(".oefening3").appendChild(div);
        } else {
            const div = document.createElement("div");
            div.innerHTML = '<h3>' + questions[i] + '</h3>' +
                "You answered: " + antwoorden[i] + "<br>" + "Correct answer: " + answers[i];
            div.style.backgroundColor = "red";
            div.style.color = "white";
            div.style.textAlign = "center";
            div.classList.add("m-2");
            document.querySelector(".oefening3").appendChild(div);
        }
    }


}