let money = document.getElementById("money")
const getCoffee = () => {
    if (money.value >= 50) {
        console.log("Кофе готов")
    } else {
        console.log("Нет денег, нет кофе!")
    }
}
