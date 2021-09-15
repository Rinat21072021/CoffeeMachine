let money = document.getElementById("money")
let display = document.getElementById("display")
const getCoffee = (price, name) => {
    if (money.value >= price) {
        display.innerHTML = name + " готов"

        console.log("Сдача: " + (money.value = money.value - price))

    } else {
        display.innerHTML = "Нет денег, нет кофе!"
    }
}
const oldGetChange = (num) => {
    if (num >= 10) {
        console.log(10)
        getChange(num - 10)
    } else if (num >= 5) {
        console.log(5)
        getChange(num - 5)
    } else if (num >= 2) {
        console.log(2)
        getChange(num - 2)
    } else if (num >= 1) {
        console.log(1)
        getChange(num - 1)
    } else {
        console.log('Вся сдача выдана')
    }
}
const getChange = (num) => {
    let coin
    if (num >= 10) coin = 10
    else if (num >= 5) coin = 5
    else if (num >= 2) coin = 2
    else if (num >= 1) coin = 1
    console.log(coin)
    if(num-coin!==0){
        getChange(num-coin)
    }
}
