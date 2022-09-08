const form = document.getElementById('form');

form.addEventListener('submit',function(e){
    e.preventDefault()

    const miUrl = "https://formsubmit.co/ajax/sfredy188@gmail.com"

    const input = e.currentTarget.elements;

    const formData = {
        name: input.name.value,
        email: input.email.value,
        message: input.message.value
    }

    window.fetch(miUrl, {
        method: "POST",
        headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(formData)
})

alert('Tu información fue enviada')
e.currentTarget.reset()

})