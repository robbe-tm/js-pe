// Maak hier oefening 1
function validatieForm() {
    let waarschuwingen = "";

    checkFields("form", "voornaam", "Voornaam is verplicht in te vullen.");
    checkFields("form", "naam", "Naam is verplicht in te vullen.");
    checkFields("form", "email", "E-mail is verplicht in te vullen.");
    checkFields("form", "adres", "Adres is verplicht in te vullen.");
    checkFields("form", "land", "Land is verplicht in te vullen.");
    checkFields("form", "provincie", "Provincie is verplicht in te vullen.");
    checkFields("form", "postcode", "Postcode is verplicht in te vullen.");


    const element = document.getElementById('melding');
    const container = document.getElementById('meldingcontainer');
    const h4 = document.getElementById('meldingtitel');

    function checkEmail() {
        const x = document.forms["form"]["email"].value;
        let at = String(x).indexOf("@")
        let punt = String(x).lastIndexOf(".")
        if (at < 3 || punt - 3 <= at) {
            waarschuwingen += "\nEmail is niet geldig"
        }
    }

    function checkPostcode() {
        let x = document.forms["form"]["postcode"].value;
        if (x < 0 || x > 9999 || String(x).length != 4) {
            waarschuwingen += "\nPostcode is niet geldig."
        }
    }

    if (waarschuwingen != "") {
        container.classList.add("alert", "alert-danger", "col-md-3", "container-fluid");
        element.innerText = waarschuwingen;
        h4.innerText = "Er is iets fout...";

    } else {
        checkEmail()
        checkPostcode()

        if (waarschuwingen != "") {

            container.classList.add("alert", "alert-danger", "col-md-3", "container-fluid");
            element.innerText = waarschuwingen;
            h4.innerText = "Er is iets fout...";

        } else {
            container.classList.remove("alert", "alert-danger", "col-md-3", "container-fluid");
            container.classList.add("alert", "alert-success", "col-md-3", "container-fluid");
            element.innerText = "Je bent succesvol geabonneerd";
            h4.innerText = "Geen fouten gevonden";
        }
    }

    function checkFields(form, field, melding) {

        x = document.forms[form][field].value;
        if (field == "Land") {
            if (x == "Kies een land") {
                waarschuwingen += "\n" + melding;
                return false;
            }
        } else if (field == "Provincie") {
            if (x == "Kies een provincie") {
                waarschuwingen += "\n" + melding;
                return false;
            }
        } else {
            if (x == "") {
                waarschuwingen += "\n" + melding;
                return false;
            }
            return false
        }
    }
}