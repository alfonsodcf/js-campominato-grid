function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max -min) + min);
}



function stampareGriglia() {
    const colNumber = 64;
    const colperRow = 8;
    let app = document.getElementById('app');
    let row = document.createElement('div');
    row.setAttribute('class', 'row');
    let cols = creaColonne(colNumber);
    console.log(cols);
    row.innerHTML = cols;
    app.append(row);
}


function creaColonne(numerocolonne){
    let cols = '';
    let numeriusati = [];
    while(numeriusati.length < 64){
        let numeroCella = getRandomInt(0, 64);
        if(!numeriusati.includes(numeroCella)){
            numeriusati.push(numeroCella);
            cols += `
            <div class="col">${numeroCella}</div>
            `;
        }
       
    }
    return cols;
}
document.getElementById('generate').addEventListener('click', stampareGriglia);