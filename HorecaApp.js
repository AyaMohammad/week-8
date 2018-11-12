// gemaakt door Aya Mohammad

const prijsFris = 2.50;
const prijsBier = 3.50;
const prijsWijn = 4.50;
const prijsschaal8 = 6.50;
const prijsschaal16 = 12;

var aantalFris = 0;
var aantalBier = 0;
var aantalWijn = 0;
var aantalschalenvan8 = 0;
var aantalschalenvan16 = 0;

var prijstotaalFris = 0;
var prijstotaalBier = 0;
var prijstotaalWijn = 0;
var prijstotaalSchaal8 = 0;
var prijstotaalSchaal16 = 0;


//maak een berekening bij het aantal
function calculate(){
    prijstotaalFris = prijsFris * aantalFris;
    prijstotaalBier = prijsBier * aantalBier;
    prijstotaalWijn = prijsWijn * aantalWijn;
    prijstotaalSchaal8 = prijsschaal8 * aantalschalenvan8;
    prijstotaalSchaal16 = prijsschaal16 * aantalschalenvan16;
    console.log('PrijstotaalFris ' + prijstotaalFris);
    console.log('PrijstotaalBier ' + prijstotaalBier);
    console.log('PrijstotaalWijn ' + prijstotaalWijn);
    console.log('PrijstotaalSchaal8 ' + prijstotaalSchaal8);
    console.log('PrijstotaalSchaal16 ' + prijstotaalSchaal16);
}

// telt alle berekeningen bij elkaar op
function Prijstotaal(){
    calculate();
    prijstotaal = prijstotaalFris + prijstotaalBier + prijstotaalWijn + prijstotaalSchaal8 + prijstotaalSchaal16;
    console.log('Prijstotaal' + prijstotaal);
    document.getElementById('totaal').innerHTML = ('De eind prijs is : ' + prijstotaal );
    document.getElementById('Fris').innerHTML = (aantalFris + 'x' + " Fris = "+ "€"+prijstotaalFris);
    document.getElementById('Bier').innerHTML = (aantalBier + 'x' + " Bier = "+ "€"+ prijstotaalBier);
    document.getElementById('Wijn').innerHTML = (aantalWijn + 'x' + " Wijn = " + "€"+prijstotaalWijn);
    document.getElementById('schaal van 8').innerHTML = ('<br>' + aantalschalenvan8 + 'x' + " schaal van 8 = "+ "€"+prijstotaalSchaal8);
    document.getElementById('schaal van 16').innerHTML = (aantalschalenvan16 + 'x' + " schaal van 16 = "+ "€"+ prijstotaalSchaal16);
}

while (keuze != 'stop'){
// maakt de bestelling over drank
    var keuze = prompt("Kies tussen fris, bier, wijn of snack (stop).");

    if (keuze == "fris") {
        input = parseInt(prompt("kies hoeveel glazen " + keuze + " uw wilt."));
        aantalFris= aantalFris + input;
        console.log('aantalFris: ' + aantalFris);

    }else if (keuze == "bier") {
        input = parseInt(prompt("kies hoeveel glazen " + keuze + " uw wilt."));
        aantalBier= aantalBier + input;
        console.log('aantalBier: '+ aantalBier);            
        }
     else if (keuze== 'wijn') {
        input = parseInt(prompt("kies hoeveel glazen " + keuze + " uw wilt."));
        aantalWijn= aantalWijn + input;
        console.log('aantalWijn: ' + aantalWijn);
        
     }else if (keuze== 'snack'){
        // maakt de bestelling over eten
            var keuze = prompt("Kies tussen 2 bitterbalschalen.","van 8 of van 16 of drank (stop)");
    
            if (keuze == "van 8"){
                input = parseInt(prompt("kies hoeveel schalen " + keuze + " uw wilt."));
                aantalschalenvan8= aantalschalenvan8 + input;
                console.log('aantalschalenvan8: ' + aantalschalenvan8);
            }else if (keuze == "van 16"){
                input = parseInt(prompt("kies hoeveel schalen " + keuze + " uw wilt."));
                aantalschalenvan16= aantalschalenvan16 + input;
                console.log('aantalschalenvan16: '+ aantalschalenvan16);
            }else if (keuze == 'stop'){
                Prijstotaal();
                document.getElementById('totaal').innerHTML = ('Rekening:'+'<br>'+ '€'+prijstotaal);
            }else{
                alert('Wij hebben geen ' + keuze + '!!');
            }

     }else if (keuze == 'stop'){
        Prijstotaal();
        
     }else{
        alert('Wij hebben geen ' + keuze + '!!');   
     }
}


