let botao = document.querySelector(".imgButton")
let p =  document.querySelector("P")
let span = document.querySelector(".numberAdvice")



botao.addEventListener("click" , async  () => {

    let req = await fetch("https://api.adviceslip.com/advice")

    let con = await req.json()
    
    p.innerHTML = `" ${con.slip.advice} "`
    
    span.innerHTML = con.slip.id


})




