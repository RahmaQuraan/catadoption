function initializePage() {
    // Get Button Reference
    var btn = document.getElementById("addCatButton");
    btn.addEventListener('click', () => {
        addCat();
        return false;
    });
}

function addCat() {
    var table = document.getElementById('table');

    var name = document.getElementById('nameInput').value;
    var breed = document.getElementById('breedInput').value;
    var color = document.getElementById('colorInput').value;
    var age = document.getElementById('ageInput').value;

    if (!name || name.length == 0) {
        alert('Please enter the cat name');
        return;
    }

    if (!breed || breed.length == 0) {
        alert('Please enter the cat breed');
        return;
    }

    if (age && age.length > 0) {

        if (isNaN(age)) {
            alert('Please enter a valid cat age');
            return;
        }
    } else {
        alert('Please enter the cat age');
        return;
    }

    if (!color || color.length == 0) {
        alert('Please enter the cat color');
        return;
    }

    var tRow = document.createElement('tr');

    var tData1 = document.createElement('td');
    tData1.innerHTML = name;
    var tData2 = document.createElement('td');
    tData2.innerHTML = breed;
    var tData3 = document.createElement('td');
    tData3.innerHTML = age;
    var tData4 = document.createElement('td');
    tData4.innerHTML = color;

    tRow.appendChild(tData1);
    tRow.appendChild(tData2);
    tRow.appendChild(tData3);
    tRow.appendChild(tData4);
    table.appendChild(tRow);

    clearForm();
}

function clearForm() {
    var form = document.getElementById("catForm");
    form.reset();
}
window.addEventListener('load', function () {
    initializePage();
});