
document.getElementById('zoom+')

document.getElementsByTagName('p')[0].style.fontSize = '16px';
document.getElementsByTagName('h1')[0].style.fontSize = '30px';
document.getElementsByTagName('h2')[0].style.fontSize = '26px';

let zoomCounter = 0;

let carrouselCounter = 0;

const interval = setInterval(() => {
    
    let topic = "";

    switch (carrouselCounter) {
        case 0:
            topic = "Sports";
            break;
        case 1:
            topic = "Books";
            break;
        case 2:
            topic = "Environment";
            break;
        default:
            break;
    }

    let divSpan = document.getElementById("my-carrousel");
    divSpan.getElementsByTagName("span")[0].innerText = " " + topic;

    document.getElementById("img-carrousel").setAttribute("src", `carrousel${carrouselCounter}.jpeg`);

    if (carrouselCounter == 2) {
        carrouselCounter = 0;
    } else {
        carrouselCounter++;
    }

    console.log(1)
    
}, 3000);



zoomIn = function() {
    if (zoomCounter < 3) {
        ++zoomCounter;
        alterTagSize('+', 'p');
        alterHeaderTagSize('+', 'h1');
        alterHeaderTagSize('+', 'h2');
    }
    
}

zoomOut = function() {
    if (zoomCounter > 0) {
        --zoomCounter;
        alterTagSize('-', 'p');
        alterHeaderTagSize('-', 'h1');
        alterHeaderTagSize('-', 'h2');
    }
    
}

alterTagSize = function(operation, tagElement){
        let increment = 5;
        let elemSize = Number(document.getElementsByTagName(tagElement)[0].style.fontSize.replace("px",""))
        fontSize = eval(elemSize + operation + increment);
        
        console.log(zoomCounter);
        let elements = document.getElementsByTagName(tagElement);
        for (const element of elements) {
            element.style.fontSize = `${fontSize}px`;
        }
}

alterHeaderTagSize = function(operation, tagElement){
    let increment = 25;

    let elemSize = Number(document.getElementsByTagName(tagElement)[0].style.fontSize.replace("px",""))
    const fontSize = eval(elemSize + operation + increment);
    
    console.log(zoomCounter);
    let elements = document.getElementsByTagName(tagElement);
    for (const element of elements) {
        element.style.fontSize = `${fontSize}px`;
    }
}

darkTheme = function() {
    changeTheme("black", "white");
}

lightTheme = function() {
    changeTheme("white", "black");
}

changeTheme = function(backgroundColor, foregroundColor) {
    document.getElementsByTagName("body")[0].style.backgroundColor = backgroundColor;

    let tags = document.getElementsByClassName('changable-theme');
    for (const tag of tags) {
        tag.style.color = foregroundColor;
    }
}