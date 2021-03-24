
function getCatInfo(callBack) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            var cats = JSON.parse(xhttp.responseText);
            var id = cats[0].id;
            var url = cats[0].url;
            callBack({ catID: id, CatImageUrl: url })
        }
    };
    xhttp.open("GET", "https://api.thecatapi.com/v1/images/search?breed_ids=beng", false);
    xhttp.send();
}

function fillCatImages(numberofCats) {
    var boxWrapper = document.createElement('div');

    for (let index = 0; index < numberofCats; index++) {
        getCatInfo((value) => {
            addCatImage(value, boxWrapper);
        })
    }

    var container = document.getElementById('container');
    container.appendChild(boxWrapper)
}

function addCatImage(catInfo, parent) {
    var box = document.createElement('div');
    box.className = 'box';

    var lable = document.createElement('label');
    lable.innerText = 'Cat ID : ' + catInfo.catID;

    var image = document.createElement('img');
    image.className = 'image'
    image.src = catInfo.CatImageUrl;
    image.alt = 'Cat Image';

    box.appendChild(lable);
    box.appendChild(image);

    parent.appendChild(box);
}


window.addEventListener('load', function () {
    fillCatImages(8);
});