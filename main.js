let money = document.getElementById("money")
const getCoffee = (price,name) => {
    if (money.value >= price) {
        console.log(name+" готов")
        console.log("Сдача: "+(money.value=money.value-price))

    } else {
        console.log("Нет денег, нет кофе!")
    }
}
