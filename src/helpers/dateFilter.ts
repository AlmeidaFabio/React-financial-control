import { Item } from "../types/Item";

export function getCurrentMonth() {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`
}

export function filterListByMonth(list:Item[], date:string): Item[] {
    let newList:Item[]= [];

    let [year, month] = date.split('-');

    for(let i in list) {
        if(list[i].date.getFullYear() === parseInt(year) && (list[i].date.getMonth() + 1) ===  parseInt(month)) {
            newList.push(list[i])
        }
    }

    return newList;
}

export function formatDate(date:Date):string {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`
}

export function addZeroToDate(n:number):string {
    if(n < 10) {
        return `0${n}`;
    } else {
        return `${n}`;
    }
}

export function formatMonth(currentMonth:string):string {
    let [ year, month ] = currentMonth.split('-');
    let months = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ]

    return `${months[parseInt(month)-1]} ${year}`
}