function initializePage() {
    // Get Button Reference
    var btn = document.getElementById("btn");
    btn.addEventListener('click', () => {
        addCat();
        return false;
    });
}


function addCat(){
    var table = document.getElementById('table');
    var name  = document.getElementById('nameInput').value;
    var breed  = document.getElementById('breedInput').value;
    var age  = document.getElementById('ageInput').value;
    var color  = document.getElementById('colorInput').value;

    var tRow = document.createElement('tr');

    var tData1 = document.createElement('td');
    tData1.innerHTML=name;
    var tData2 = document.createElement('td');
    tData2.innerHTML=breed;
    var tData3 = document.createElement('td');
    tData3.innerHTML=age;
    var tData4 = document.createElement('td');
    tData4.innerHTML = color;
    
    tRow.appendChild(tData1);
    tRow.appendChild(tData2);
    tRow.appendChild(tData3);
    tRow.appendChild(tData4);

    table.appendChild(tRow);
}

window.addEventListener('load', () => {
    initializePage();
});