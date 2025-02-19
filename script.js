let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passbox = document.getElementById("passbox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copy = document.getElementById("copy");
let clear = document.getElementById("clear");


sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent = inputSlider.value;
})

genBtn.addEventListener('click', ()=>{
    passbox.value = generatePassword();
})

clear.addEventListener('click', ()=>{
   passbox.value = "";
})

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numberChars = "0123456789";
let symbolsChars = "@!~#$%&^*/";

function generatePassword(){
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : ""; 
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? numberChars : "";
    allChars += symbols.checked ? symbolsChars : "";

    if(allChars == "" || allChars.length == 0){
        return genPassword;
    }

    let i = 1;
    while(i <= inputSlider.value){
        genPassword += allChars.charAt(Math.floor(Math.random()* allChars.length));
        i++
    }
    return genPassword;
}

copy.addEventListener('click', ()=>{
    if(passbox.value != "" || passbox.value.length >= 1){
        navigator.clipboard.writeText(passbox.value);
        copy.innerHTML = "check";
        copy.title = "Password Copied";
    }

    setTimeout(()=>{
        copy.innerHTML = "content_copy";
        copy.title = "";
    }, 2000)
    
})

