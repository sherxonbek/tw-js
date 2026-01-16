//////////Switch Case//////////

/////1-misol/////
let k1 = 2;

switch (true) {
    case k1 == 1:
        console.log("yamon");
        break;
    case k1 == 2:
        console.log("qoniqarsiz");
        break;
    case k1 == 3:
        console.log("qoniqarli");
        break;
    case k1 == 4:
        console.log("yamon");
        break;
    case k1 == 5:
        console.log("alo");
    default:
        console.log("bunday qiymat mavjud emas");
}

/////2-misol/////
let oy2 = 2;

switch (true) {
    case oy2 == 1:
    case oy2 == 2:
    case oy2 == 12:
        console.log("qish");
        break;
    case oy2 == 3:
    case oy2 == 4:
    case oy2 == 5:
        console.log("bahor");
        break;
    case oy2 == 6:
    case oy2 == 7:
    case oy2 == 8:
        console.log("yoz");
        break;
    case oy2 == 9:
    case oy2 == 10:
    case oy2 == 11:
        console.log("kuz");
        break;
    default:
        console.log("Yilda faqat 12 oy bor");
}

/////3-misol/////
let kun3 = 5;

switch (true) {
    case kun3 == 1:
    case kun3 == 3:
    case kun3 == 5:
    case kun3 == 7:
    case kun3 == 8:
    case kun3 == 9:
    case kun3 == 11:
    case kun3 == 12:
        console.log("31 kun bor");
        break;
    case kun3 == 2:
        console.log("28 kun bor");
        break;
    case kun3 == 4:
    case kun3 == 6:
    case kun3 == 10:
        console.log("30 kun bor");
        break;
    default:
        console.log("bunday kun mavjud emas");
}

/////4-misol/////
let birlik4 = 3;

switch (true) {
    case birlik4 == 1:
        console.log("distemetr");
        break;
    case birlik4 == 2:
        console.log("kilometr");
        break;
    case birlik4 == 3:
        console.log("metr");
        break;
    case birlik4 == 4:
        console.log("santimetr");
        break;
    case birlik4 == 5:
        console.log("millimetr");
        break;
    default:
        console.log("bunday birlik mavjud emas");
}

/////5-misol/////
let birlik5 = 3;

switch (true) {
    case birlik5 == 1:
        console.log("kilogram");
        break;
    case birlik5 == 2:
        console.log("miligram");
        break;
    case birlik5 == 3:
        console.log("gram");
        break;
    case birlik5 == 4:
        console.log("tonna");
        break;
    case birlik5 == 5:
        console.log("sentner");
        break;
    default:
        console.log("bunday birlik mavjud emas");
}

/////6-misol/////
let yil = 2020;

switch (true) {
    case yil % 4 == 0:
        console.log("kabisa yil");
        break;
    case yil % 100 == 0:
        console.log("kabisa yil emas");
        break;
    case yil % 400 == 0:
        console.log("kabisa yil");
        break;
    default:
        console.log("kabisa yil emas");
}

/////7-misol/////
let oy = 4; 

switch (true) {
    case oy == 1:
        var kun = 31;
        console.log(kun);
        break;
    case oy == 2:
        var kun = 31 + 28;
        console.log(kun);
        break;
    case oy == 3:
        var kun = 31 + 28 + 31;
        console.log(kun);
        break;
    case oy == 4:
        var kun = 31 + 28 + 31 + 30;
        console.log(kun);
        break;
    case oy == 5:
        var kun = 31 + 28 + 31 + 30 + 31;
        console.log(kun);
        break;
    case oy == 6:
        var kun = 31 + 28 + 31 + 30 + 31 + 30;
        console.log(kun);
        break;
    case oy == 7:
        var kun = 31 + 28 + 31 + 30 + 31 + 30 + 31;
        console.log(kun);
        break;
    case oy == 8:
        var kun = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31;
        console.log(kun);
        break;
    case oy == 9:
        var kun = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30;
        console.log(kun);
        break;
    case oy == 10:
        var kun = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31;
        console.log(kun);
        break;
    case oy == 11:
        var kun = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30;
        console.log(kun);
        break;
    case oy == 12:
        var kun = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31;
        console.log(kun);
        break;
    default:
        console.log("bunday oy mavjud emas");
}

/////8-misol/////

let son = 456;

let natija = "";

let yuz = Math.floor(son / 100);
let on = Math.floor((son % 100) / 10);
let birlik = son % 10;

switch (yuz) {
    case 1:
        natija += "yuz ";
        break;
    case 2:
        natija += "ikki yuz ";
        break;
    case 3:
        natija += "uch yuz ";
        break;
    case 4:
        natija += "to'rt yuz ";
        break;
    case 5:
        natija += "besh yuz ";
        break;
    case 6:
        natija += "olti yuz ";
        break;
    case 7:
        natija += "yetti yuz ";
        break;
    case 8:
        natija += "sakkiz yuz ";
        break;
    case 9:
        natija += "to'qqiz yuz ";
        break;
    default:
        break;
}

switch (on) {
    case 1:
        natija += "o'n ";
        break;
    case 2:
        natija += "yigirma ";
        break;
    case 3:
        natija += "o'ttiz ";
        break;
    case 4:
        natija += "qirq ";
        break;
    case 5:
        natija += "ellik ";
        break;
    case 6:
        natija += "oltmish ";
        break;
    case 7:
        natija += "yetmish ";
        break;
    case 8:
        natija += "sakson ";
        break;
    case 9:
        natija += "to'qson ";
        break;
    default:
        break;
}
switch (birlik) {
    case 1:
        natija += "bir";
        break;
    case 2:
        natija += "ikki";
        break;
    case 3:
        natija += "uch";
        break;
    case 4:
        natija += "to'rt";
        break;
    case 5:
        natija += "besh";
        break;
    case 6:
        natija += "olti";
        break;
    case 7:
        natija += "yetti";
        break;
    case 8:
        natija += "sakkiz";
        break;
    case 9:
        natija += "to'qqiz";
        break;
    default:
        break;
}
console.log(natija);

/////9-misol/////
let son1 = 12; 

let natija1 = "";
let on1 = Math.floor((son1 % 100) / 10);
let birlik1 = son1 % 10;   switch (on1) {
    case 1:
        natija1 += "o'n ";
        break;
    case 2:
        natija1 += "yigirma ";
        break;
    case 3:
        natija1 += "o'ttiz ";
        break;
    case 4:
        natija1 += "qirq ";
        break;
    case 5:
        natija1 += "ellik ";
        break;
    case 6:
        natija1 += "oltmish ";
        break;
    case 7:
        natija1 += "yetmish ";
        break;
    case 8:
        natija1 += "sakson ";
        break;
    case 9:
        natija1 += "to'qson ";
        break;
    default:
        break;
}
switch (birlik1) {
    case 1:
        natija1 += "bir";
        break;
    case 2:
        natija1 += "ikki";
        break;
    case 3:
        natija1 += "uch";
        break;
    case 4:
        natija1 += "to'rt";
        break;
    case 5:
        natija1 += "besh";
        break;
    case 6:
        natija1 += "olti";
        break;
    case 7:
        natija1 += "yetti";
        break;
    case 8:
        natija1 += "sakkiz";
        break;
    case 9:
        natija1 += "to'qqiz";
        break;
    default:
        break;
}
console.log(natija1 + " ta masala");