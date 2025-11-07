
const colors = ["lightgreen", "aquamarine", "lightblue", "lightblue", "lightblue",]


for (let i = 0; i < colors.length; i++) {
    const headings = document.createElement("h1")
    headings.innerText = `Rad ${i + 1}`;
    document.body.appendChild(headings);
    headings.style.fontSize = `${15 + i * 5}px`;
    headings.style.textAlign = "center";
    headings.style.backgroundColor = colors[i];
    headings.style.width = "55%";

}
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center";


const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

for (let i = 0; i < numbers.length; i++) {
    const p = document.createElement("p");
    p.innerText = numbers[i];
    p.classList.add("numbers");

    if (numbers[i] === 4) {
        p.style.backgroundColor = "#5b5bad";
    }
    else if (i % 2 === 0) {
        p.style.backgroundColor = "black";
        p.style.color = "white";
    }

    container.appendChild(p);

}


const middleContainer = document.createElement("div");
middleContainer.classList.add("container", "second-column");
document.body.appendChild(middleContainer);

for (let i = 9; i >= 0; i--) {
    const p = document.createElement("p");
    p.innerText = i;
    p.classList.add("numbers");

    if (numbers[i] === 8) {
        p.style.backgroundColor = "#5b5bad";
        p.style.color = "white";
    }
    else if (i % 2 === 0) {
        p.style.backgroundColor = "black";
        p.style.color = "white";
    }

    // else {
    //     p.style.backgroundColor = "white";
    //     p.style.color = "black";
    // }
    middleContainer.appendChild(p);
}



const numberWords = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"]

const thirdContainer = document.createElement("div");
thirdContainer.classList.add("container", "third-column")
document.body.appendChild(thirdContainer);

for (let i = 0; i < numberWords.length; i++) {
    const p = document.createElement("p");
    p.innerText = numberWords[i];
    p.classList.add("numbers");
    
    if (numbers[i] === 5) {
        p.style.backgroundColor = "#5b5bad";
        p.style.color = "white";
    }
    else if (i % 2 === 0) {
        p.style.backgroundColor = "black";
        p.style.color = "white";
    }
    thirdContainer.appendChild(p);

}




// wrapper för mina containers för flex
const wrapper = document.createElement("div");
document.body.appendChild(wrapper);
wrapper.style.display = "flex";
wrapper.style.marginTop = "50px";
wrapper.style.gap = "255px"

// lägg till containers till wrapper, 
wrapper.appendChild(container);
wrapper.appendChild(middleContainer);
wrapper.appendChild(thirdContainer);

wrapper.style.border = "1px solid black";
wrapper.style.padding = "0px 150px 100px 150px";