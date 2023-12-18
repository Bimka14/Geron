"use strict";
// let bread1: string = "московский"
// let bread2: string = "бородинский"
// if (bread1 == "московский" && bread2 == "бородинский") {
//     console.log("Молодец")
// }
// if (bread1 == "московский" || bread2 == "бородинский") {
//     console.log("Молодец")
// }
// if (bread1 != "московский")
//     console.log("Молодец")   
let engeeniere = "Инженер1";
let experience = 10;
let projects = 10;
let qualityOfWorking = projects / experience;
if (qualityOfWorking >= 4) {
    console.log(` ${engeeniere}  эффективен`);
}
else if (qualityOfWorking >= 3) {
    console.log(` ${engeeniere} +  должен увеличить результаты работы`);
}
else {
    console.log(` ${engeeniere}  должен пройти переквалификацию`);
}
