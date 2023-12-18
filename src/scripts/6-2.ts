let months = [
    {
        title:"Январь",
        days:23
    },
    {
        title:"Февраль",
        days:25
    },
    {
        title:"Март",
        days:21
    },
    {
        title:"Апрель",
        days:30
    },
    {
        title:"Май",
        days:31
    }
]
// Добавить в массив новый элемент
months.push({
    title:"Июнь",
    days:32
})
for(let i = 0; i < months.length; i++){
    if(months[i].days > 30) {
        console.log(months[i]);
    }
}
console.log(months)