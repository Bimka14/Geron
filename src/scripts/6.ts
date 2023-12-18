type Tcompany ={
    income:number,
    employees:number,
    fired:number,
    newEmployees:number
}

let company:Tcompany = {
    income:3200000,
    employees:416,
    fired:60,
    newEmployees:45
}
company.employees = 400
company.fired = 44
company.newEmployees = 64

console.log(`Доход ${company.income}, Количество сотрудников ${company.employees}, Уволенных сотрудников ${company.fired}, Новых сотрудников ${company.newEmployees}`)