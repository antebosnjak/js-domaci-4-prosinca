/* Zadatak 1. 
Napisi program koji ovisno o varijabli time mogucih vrijednosti ZORA, JUTRO, POSLIJEPODNE, POPODNE, PRIJEPODNE, PREDVECER, 
NOC ispisuje Dobro jutro, Dobar dan ili Dobra vecer. Unos time varijable neka bude preko konzole, te ako korisnik nije unio 
ni jednu od mogucnosti neka ispis bude: Koje je to doba dana? Program napisi uz pomoc if-a i switch case-a. 
 */

var time = process.argv.slice(2)[0];

if (time === "ZORA" || time === "JUTRO" || time === "PRIJEPODNE") {
    console.log("Dobro jutro");
} else if (time === "POSLIJEPODNE" || time === "POPODNE") {
    console.log("Dobar dan");
} else if (time === "PREDVECER" || time === "NOC") {
    console.log("Dobra večer");
} else {
    console.log("Koje je to doba dana?");
}


switch (time) {
    case "ZORA":
    case "JUTRO":
    case "PRIJEPODNE":
        console.log("Dobro jutro");
        break;
    case "POSLIJEPODNE":
    case "POPODNE":
        console.log("Dobar dan");
        break;
    case "PREDVECER":
    case "NOC":
        console.log("Dobra vecer");
        break;
    default:
        console.log("Koje je to doba dana?");
}



/* 
Zadatak 2. 
Napisi program koji omogucava unos proizvoljnog broja godina preko konzole, 
te napisi ternarni izraz koji bira vrijednosti MALOLJETAN i PUNOLJETAN. 
Potom za MALOLJETAN ispisi "Korisnik je maloljentan", a za punoljetan "Korisnik je punoljetan". Ako korisnik nije unio broj napisi "Pogresan unos!". 
  */


var age = process.argv.slice(2)[0];

switch (isNaN(age)) {
    case false:
        var granicapunoljetnosti = (age >= 18) ? "PUNOLJETAN" : "MALOLJETAN"
        switch (granicapunoljetnosti) {
            case "PUNOLJETAN":
                console.log("Korisnik je punoljetan");
                break;
            default:
                console.log("Korisnik je maloljetan");
                break;
        }
        break;
    default:
        console.log("Pogresan unos");
        break;
} 



/* 
Zadatak 3.
Napisi program u kojem korisnik unosi broj preko konzole. Ako korisnik nije unio broj, 
program racuna da je korisnik unio broj 7. Program zatim ispisuje "Tvoj sretni broj je ___" i potom preko Math.random funkcije izvlaci cijeli broj od 0 do 9. Ukoliko je izvuceni broj identican korisnikovom sretnom broju ispisi "Jackpot!", a u suprotnom "Vise srece drugi put!". 
Napomena: Ukoliko ne znate koristiti Math.random pokusajte guglati kako se koristi.  */


var broj = process.argv.slice(2)[0];

switch (isNaN(broj)) {
    case true:
        var unesenibroj = 7;
        var unesenibroj = unesenibroj.toString();
        console.log("Tvoj sretni broj je " + unesenibroj);
        break;
    default:
        var sretnibroj = Math.floor(Math.random() * 10);
        var sretnibroj = sretnibroj.toString();
        console.log("Tvoj sretni broj je " + sretnibroj);
        break;
}
