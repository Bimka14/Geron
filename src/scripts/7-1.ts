// // map
// let agesToNumber = ages.map((e) => parseInt(e))
// agesToNumber.sort((a, b) =>{
//     return b-a
// }

type Tcategory = "smartphones" | "laptop"

type Tproduct = {
    category: Tcategory,
    price: number,
    count: number
}
let product: Tproduct [] = [
    {
        category: "smartphones",
        price: 300000,
        count: 10
    },
    {
        category: "laptop",
        price: 300000,
        count: 20
    },
    {
            category: "smartphones",
            price: 250000,
            count: 10
    },
    {
            category: "laptop",
            price: 400000,
            count: 10
    },
    {
            category: "smartphones",
            price: 500000,
            count: 10
    }
]

let smartphones = product.filter((e) => e.category === "smartphones")
let laptop = product.filter((e) => e.category === "laptop")

smartphones.sort((a,b) => {
    return a.price - b.price
})
laptop.sort((a,b) => {
    return a.price - b.price
})

console.log(smartphones);
console.log(laptop)

let addProduct = (product:Tproduct) => {

if (product.category === "smartphones") {
    smartphones.push(product)
}
else {
    laptop.push(product)
}
}
addProduct({category:"smartphones",price:1223,count:10})
addProduct({category:"smartphones",price:123,count:10})
addProduct({category:"laptop",price:1223,count:10})
addProduct({category:"laptop",price:123,count:10})
console.log(smartphones)
console.log(laptop)

let priceEdit = product.map((product:Tproduct) =>{
    if (product.category === "smartphones") {
        product.price * 1.1
}
else {product.price * 0.8}
})
console.log(priceEdit)
