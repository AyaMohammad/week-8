const fris = 2.50;
const bier = 3.00;
const wijn = 3.50;

var aantalFris = 0;
var aantalBier = 0;
var aantalWijn = 0;
 
var totaalFris = 0;
var totaalBier = 0;
var totaalWijn = 0;

var totaalPrijs = 0;

function addToOrder() {
    var keuze = prompt('Place Order kies uit:   firs, bier of wijn');//prompt asks for a drink
    if (keuze == "fris") {
        aantalFris = parseInt(prompt('Voer het aantal Fris in dat je wilt bestellen.')); //prompt asks the amound of drinks
        console.log(aantalFris);
        document.write("Fris:  " + aantalFris + "<br>");
        document.write("€" + aantalFris * fris + "<br><hr><p>");
        totaalFris = aantalFris * fris; //calculates the total price and stores it in a 'Var' called 'totaalFris'
        addToOrder();
    }
     else if (keuze == "bier") {
        aantalBier = parseInt(prompt('Voer het aantal Bier in dat je wilt bestellen.')); //prompt asks the amound of drinks
        console.log(aantalBier);
        document.write("Bier:  " + aantalBier + "<br>"); 
        document.write("€" + aantalBier * bier + "<br><hr><p>");
        totaalBier = aantalBier * bier; //calculates the total price and stores it in a 'Var' called 'totaalBier'
        addToOrder();
    }
    else if (keuze == "wijn") {
        aantalWijn = parseInt(prompt('Voer het aantal Wijn in dat je wilt bestellen.'));//prompt asks the amound of drinks
        console.log(aantalWijn);
        document.write("Wijn:  " + aantalWijn + "<br>");
        document.write("€" + aantalWijn * wijn + "<br><hr><p>");
        totaalWijn = aantalWijn * wijn; //calculates the total price and stores it in a 'Var' called 'totaalWijn'
        addToOrder();
    }
    else if (keuze == "stop" || keuze == "nee") { //interrupts the program with the word 'stop' or 'nee'
        alert("bestelling is geplaatst.");
        totaalPrijs = totaalFris + totaalBier + totaalWijn; //calculated the total amount
        document.write("<hr>");
        document.write("€" + totaalPrijs); //writes the total
    }
    else {
        alert("Uw kan dit niet bestellen.");
        addToOrder();
    }
}
 addToOrder();