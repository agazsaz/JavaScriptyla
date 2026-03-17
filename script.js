// const firstDiv = document.querySelector(".firstDiv");
// //firstDiv.addEventListener('mouseenter', () => firstDiv.classList.add("active"))
// firstDiv.addEventListener('mouseenter', () => { firstDiv.textContent = "DVA"})
// firstDiv.addEventListener('mouseleave', () => {firstDiv.textContent = "Adin"})



// function Tokopeks(rubles){
//     return rubles * 100           ФУНКЦИЯ НА УМНОЖЕНИЕ
// }
// let result = Tokopeks(100)
// console.log(result)


// function smartLight(hour) {
//     if (hour >= 20) {
//         return "Включаю свет"
//     }
//     else {
//         return "Выключаю свет"                функция с ответвлениями
//     }
// }
// console.log(smartLight(20)); 
// console.log(smartLight(15)); 

const myButton = document.querySelector("button");   // нашли кнопку
const mybox = document.querySelector(".box")      // нашли класс .box
function sayHi(){
    mybox.textContent = "Привет"     // написали функцию для будущего вызова
    mybox.style.color = "green"
}
myButton.addEventListener("click", sayHi);   // дали кнопке параметры sayHi
