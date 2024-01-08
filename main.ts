import { Order } from './src/models/Order';
// // // import { addTest, test } from "./src/scripts/8-1";

// // // addTest()
// // // console.log(test);

// // // import * as test from "./src/scripts/8-1";
// // // test.addTest();

// // // import addTest from "./src/scripts/8-1";

// // const office = {
// //     tech:{
// //         employeeCount: 15,
// //         avgSallary: 200000
// //     },
// //     design:{
// //         employeeCount: 10,
// //         avgSallary: 400000
// //     }
// // }

// // let avgSallaryOffice = 0

// // Object.entries(office).forEach(([part,partInfo]) => {
// //     console.log(part,partInfo)
// // })

// import {finishMaxSeason} from "./src/scripts/8/working";

// console.log(`Самый прибыльный сезон, ` , finishMaxSeason);
// import { Order } from "./src/models/Order"

const user = "Victor Mash"
const address = "Pavlodar city"
const sum = 30000

const order = new Order({user, address, sum});

order.newAddress = "Pavlodar city, st Kutuzov 1-1";

console.log(order.getInfoOrder());