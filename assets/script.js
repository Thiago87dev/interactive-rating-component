let nota = 0
let num = document.querySelectorAll('.numb');

num.forEach(i => {
    i.addEventListener('click',() =>{
        let texto = document.querySelector('.rating-text')
        let valor = i.textContent;
        for(j = 0; j < num.length; j++){
            num[j].style.backgroundColor = ''
        }
        i.style.backgroundColor = "hsl(216, 12%, 54%)"
        texto.innerHTML = `You selected ${valor} out of 5`
        nota = valor
    })
})

let btn = document.querySelector('.btn');

btn.addEventListener('click',()=>{
    if (nota === 0){
        alert('choose a grade between 1 and 5')
        return
    }
    ratingState = document.querySelector('.Rating-state')
    tksState = document.querySelector('.Thank-state')

    ratingState.style.display = "none"
    tksState.style.display = 'flex'
})
