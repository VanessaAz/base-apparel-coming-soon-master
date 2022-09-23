const inputEmail = document.getElementById('input-email')
const submitBtn = document.getElementById('submit-btn')
const errorMessage = document.getElementById('error-message')
const iconError = document.getElementById('error-icon')
let text = []
let letter = []


submitBtn.addEventListener('click', () => {
    text.unshift(inputEmail.value)
    if(text.length > 0){
        for(let i = 0; i < text[0].length; i++){
            letter.push(text[0][i])
        }
    }
    checKEmail()
    inputEmail.value = ''
})

function checKEmail(){
    if(letter.includes('@') && letter.includes('.')){
        errorMessage.classList.add('error-display__none')
        iconError.style.display = 'none'
        inputEmail.style.border = '1px solid hsl(0, 36%, 70%)'
        letter= []
    } else {
        errorMessage.textContent = 'Please enter a valid email!'
        errorMessage.classList.add('error-display__block')
        iconError.style.display = 'block'
        inputEmail.style.border = '1.5px solid hsl(0, 93%, 68%)'
        letter = []
    }
}