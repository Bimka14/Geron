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

let engeeniere:string = "Инженер1"
let experience:number = 10
let projects:number = 10
let qualityOfWorking:number = projects / experience

if (qualityOfWorking >= 4){
console.log(` ${engeeniere}  эффективен`)
}
else if (qualityOfWorking >= 3){
    console.log(` ${engeeniere} +  должен увеличить результаты работы`)
}
else {
    console.log(` ${engeeniere}  должен пройти переквалификацию`)
}
