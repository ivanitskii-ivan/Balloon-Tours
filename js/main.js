

const cards = document.querySelectorAll('.card-rotate__inner')

cards.forEach(card =>{
    card.addEventListener('click',(e)=> {
        if(e.target.closest('button')){
            return
        }
        card.classList.toggle('is-flipped')
    })
})


