const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

let oefening2 = () => {
    // Maak hier oefening 2
    let body = document.getElementById("tableBody");
    let row = document.getElementById("tableRow");
    row.innerHTML = "";

    for (let i = 0; i < rainbow.length; i++) {
        let vakItem = document.createElement("td");
        vakItem.innerText = rainbow[i];
        vakItem.style.width = (100 / rainbow.length) + "%";
        vakItem.addEventListener("mouseover", function() {
            vakItem.style.color = "white";
            vakItem.style.backgroundColor = rainbow[i];
        });
        vakItem.addEventListener("mouseout", function() {
            vakItem.style.color = "black";
            vakItem.style.backgroundColor = "white";
        });
        vakItem.addEventListener("click", function() {
            let getal = 0;
            while (getal > rainbow.length || getal < 1 || isNaN(getal)) {
                getal = prompt(`At which position should i add it (1-${rainbow.length})`);
            }
            let newRow = document.createElement("tr");
            body.append(newRow);
            for (let i = 0; i < rainbow.length; i++) {
                if (i == getal - 1) {
                    let newVakItem = document.createElement("td");
                    newVakItem.innerText = vakItem.innerText;
                    newVakItem.style.backgroundColor = vakItem.innerText;
                    newVakItem.style.textAlign = "center";
                    newVakItem.style.color = "white";
                    newVakItem.style.width = (100 / rainbow.length) + "%";
                    newVakItem.addEventListener("click", function() {
                        let kleur = "Dit is geen kleur.";
                        while (isValidColor(kleur) == false && (kleur.lastIndexOf('#') != 0 || kleur.length != 7)) {
                            kleur = prompt("Which color whould you like to add?");
                        }
                        newVakItem.style.backgroundColor = kleur;
                        newVakItem.style.color = "white";
                        newVakItem.innerText = kleur;
                    });
                    newRow.appendChild(newVakItem);
                } else {
                    let newVakItem = document.createElement("td");
                    newVakItem.style.width = (100 / rainbow.length) + "%";
                    newVakItem.addEventListener("click", function() {
                        let kleur = "Dit is geen kleur.";
                        while (isValidColor(kleur) == false && (kleur.lastIndexOf('#') != 0 || kleur.length != 7)) {
                            kleur = prompt("Which color whould you like to add?");
                        }
                        newVakItem.style.backgroundColor = kleur;
                        newVakItem.style.color = "white";
                        newVakItem.innerText = kleur;
                    });
                    newRow.appendChild(newVakItem);
                }
            }
        });
        row.appendChild(vakItem);
        row.style.textAlign = "center";
    }

    function isValidColor(strColor) {
        var s = new Option().style;
        s.color = strColor;
        return s.color == strColor.toLowerCase();
    }
}