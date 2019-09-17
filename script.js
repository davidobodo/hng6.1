
const displaySignup = () => {
    document.querySelector('.sign_in').style.display = 'none'
    document.querySelector('.sign_up').style.display = 'flex'
    document.querySelector('.sign_up').style.width = '100%'
}
document.querySelector('.sign_in>a').addEventListener('click', displaySignup)