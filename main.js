for (let i = 1; i < 101; i++){

    let col8 = document.getElementById("col_8")
    
    if (( i % 3 === 0) && ( i % 5 === 0)){
        console.log("Feez Buzz")
        col8.innerHTML += `<div id="box_feezbuzz" class= "box_generic">Feez Buzz</div>`
    }

    else if(( i % 3) === 0) {
        console.log("Feez")
        col8.innerHTML += `<div id="box_feez" class= "box_generic">Feez</div>`
    }

    else if (( i % 5) === 0){
        console.log("Buzz")
        col8.innerHTML += `<div id="box_buzz" class= "box_generic">Buzz</div>`
    }

    else{
        console.log(i)
        col8.innerHTML += `<div id="box_i" class= "box_generic">${i}</div>`
    }
}
