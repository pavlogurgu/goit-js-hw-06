const refs = {
    input: document.querySelector('#name-input'),
    title: document.querySelector('#name-output')
}


refs.input.addEventListener('input', onInputChange)


function onInputChange(event){
    if(event.currentTarget.value == ""){
        refs.title.textContent = "Anonymous"
    }else{
    console.log(event.currentTarget.value)
    refs.title.textContent = event.currentTarget.value
    }
}





