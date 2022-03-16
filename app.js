var number = prompt("Enter a number here");
let box=document.getElementById("box")
for(var i=1 ; i<=number; i++){
    if(number%i==0){
        box.innerHTML += `<p>${i}<p>`
        
        
    }
}
