const refs = {
   
    input: document.getElementById('font-size-control'),
    text: document.getElementById('text')
    
}

refs.input.addEventListener("input", function(){
    refs.text.style.fontSize = refs.input.value + 'px'
})
