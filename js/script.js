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
    for(let i = 1; i <= numerocolonne; i++){
        cols += `
            <div class="col">${i}</div>
        `;
    }
    return cols;
}
document.getElementById('generate').addEventListener('click', stampareGriglia);