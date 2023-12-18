let year = [2019,2020,2021,2022,2023,2024]
let season = ["winter", "spring", "summer", "autumn"]
console.log(year[3])
console.log(season[2])
console.log(season[3])
console.log(year[0])

type Tcomp = {
    name: string
    age: number
    id: number
}
let comp:Tcomp[] = [
    {
    name:"123",
    age:123,
    id:123
    },
    {
        name:"1234",
        age:1234,
        id:1234
    },
    {
        name:"12345",
        age:12345,
        id:12345
    }
]
console.log(comp[1].age)
console.log(comp[0].name)
console.log(comp[2])