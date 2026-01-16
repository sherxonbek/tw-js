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
    case kun3 ==3:
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
    case yil %   400 == 0:
        console.log("kabisa yil");
        break;
    default:
        console.log("kabisa yil emas");
}