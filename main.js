for (let i = 1; i < 101; i++){

    let col8 = document.getElementById("col_8")
    // controllo se il resto di i / 3 e i / 5 è = 0  se lo è faccio comparire a scehermo un div a  cui ho dato le ptoprietà
    if (( (i % 3) === 0) && ( (i % 5) === 0)){
        console.log("Feez Buzz")
        col8.innerHTML += `<div id="box_feezbuzz" class= "box_generic">Feez Buzz</div>`
    }
     // controllo se il resto di i / 3 è = 0 
    else if(( i % 3) === 0) {
        console.log("Feez")
        col8.innerHTML += `<div id="box_feez" class= "box_generic">Feez</div>`
    }
    // controllo se il resto di i / 5 è = 0 
    else if (( i % 5) === 0){
        console.log("Buzz")
        col8.innerHTML += `<div id="box_buzz" class= "box_generic">Buzz</div>`
    }
    // nel caso il resto sia != da 0 faccio comparire a schermo i
    else{
        console.log(i)
        col8.innerHTML += `<div id="box_i" class= "box_generic">${i}</div>`
    }
}
