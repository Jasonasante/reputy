const form = document.forms[0]
const displayNameInput = document.getElementById('display-name')
const emailInput = document.getElementById('email')
const thanksContainer = document.querySelector('.thanks-container')
const thanksMessage = document.getElementById('thanks-message')
const errorMessage = document.getElementById('error-message')
const eraseButtons = Array.from(document.getElementsByClassName('input-wrapper'))

eraseButtons.forEach(div => {
    div.children[2].onclick = (e) => {
        div.children[0].value = ""
    }
})
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
form.onsubmit = (evt) => {
    evt.preventDefault()
    const data = new FormData(evt.target);
    let values = Object.fromEntries(data.entries())
    if (!validateEmail(values.email)) {
        errorMessage.innerHTML = "Invalid Email! Please Try Again"
        errorMessage.style.visibility = 'visible'
        setTimeout(() => {
            errorMessage.style.visibility = 'hidden'
        }, 5000)
    } else {
        displayNameInput.value = ''
        emailInput.value = ''
        thanksContainer.style.display = 'flex'
        thanksMessage.innerHTML = `Thanks for signing up, ${values["display-name"]}! <br>
            Your Magic Link has been sent to your email`
        setTimeout(() => {
            thanksMessage.innerHTML = ""
            thanksContainer.style.display = 'none'
        }, 5000)
    }
}