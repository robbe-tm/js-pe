let oefening0 = () => {
    document.title = "Robbe Peeters";

    var naamBrand, index, element, bestandsnaam;
    naamBrand = document.getElementsByClassName('navbar-brand');
    for (index = 0; index < naamBrand.length; ++index) {
        element = naamBrand[index];
        bestandsnaam = element.innerHTML.toLowerCase().replace(/ /g, '-').replace(/([^0-9a-z-])/g, '');
        element.innerHTML = "<img src='Javascript_Logo.png'/>";
    }
}