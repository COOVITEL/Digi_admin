const close = document.getElementById('close')

close.addEventListener('click', () => {
    console.log("click close")
    if (window.localStorage.getItem('displayApp')) {
        window.localStorage.removeItem('displayApp')
    }
    if (window.localStorage.getItem('displayLogin')){
        window.localStorage.removeItem('displayLogin')
    }
})