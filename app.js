let text =['devloper','programmer']
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){
    if(count === text.length){
        count = 0
    }
    
    currentText = text[count];
    letter = currentText.slice(0, ++index)
    console.log(currentText)
    document.getElementById('typing').textContent = letter;

    if(letter.length === currentText.length){
        count++;
        index = 0;
    }

    setTimeout(type,400)
}())