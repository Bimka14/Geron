import { format } from "date-fns";

const currentDate = new Date ()
const formattedDate = format(currentDate, "d MMMM")
console.log(formattedDate)