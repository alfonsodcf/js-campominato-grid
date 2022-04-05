// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max -min) + min);
// }



function setLevel(){
    const level = document.getElementById("level").value;
    console.log(level);

    let numCol;
    switch (level) {
        case "1":
            default: //lo puoi metere anche alla fine
            numCol = 100;
        break;
        case "2":
            numCol = 81;
        break;
        case "3":
            numCol = 49;
        break;

           
    }
//console.log(numCol);
generaGriglia(numCol); 
}

function generaGriglia(numCol){S
    console.log(numCol)


}


document.getElementById("play").addEventListener("click", setLevel);






// function stampareGriglia() {
//     const colNumber = 64;
//     const colperRow = 8;
//     let app = document.getElementById('app');
//     let row = document.createElement('div');
//     row.setAttribute('class', 'row');
//     let cols = creaColonne(colNumber);
//     console.log(cols);
//     row.innerHTML = cols;
//     app.append(row);
// }


// function creaColonne(numerocolonne){
//     let cols = '';
//     let numeriusati = [];
//     while(numeriusati.length < 64){
//         let numeroCella = getRandomInt(0, 64);
//         if(!numeriusati.includes(numeroCella)){
//             numeriusati.push(numeroCella);
//             cols += `
//             <div class="col">${numeroCella}</div>
//             `;
//         }
       
//     }
//     return cols;
// }
// document.getElementById('generate').addEventListener('click', stampareGriglia);