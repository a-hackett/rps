const body = document.querySelector("body");
body.classList.add("flex");

const container = document.querySelector("#container");
document.getElementById("container").style.order="3";
container.classList.add("flex", "autoMargins");

const title = document.createElement("h1");
title.classList.add("autoMargins");
title.id= "title";
title.textContent=("Etch-a-Sketch");
body.appendChild(title);
document.getElementById("title").style.order="1";

const button = document.createElement("button");
button.id = "button";
button.classList.add("flex", "autoMargins");
button.textContent=("Replay");
body.appendChild(button);
document.getElementById("button").style.order="2";


button.addEventListener("click", ()=> {
    container.innerHTML='';
    size=prompt("Enter a number between 1-50:");
    if(size<=0 || size >50){

        size=prompt("Number must be between 1 and 50. Enter a number between 1-50:");
        createBoxes(size);
    }
    createBoxes(size);
});

function createBoxes(size){
    if(size>0 && size<100){
        for (let i=0;i<size;i++){
            const row = document.createElement("div");
            row.classList.add("flex","row");

            for (let j=0;j<size;j++){
                const box = document.createElement("div");
                box.classList.add("box");
                row.append(box);

                box.addEventListener('mouseover', () => {  
                    // highlight the mouseover target
                    const randomHexColorCode = () => {
                        let n = (Math.random() * 0xfffff * 1000000).toString(16);
                        return ('#' + n.slice(0, 6));
                    };

                    box.style.backgroundColor = randomHexColorCode();
                    box.style.opacity = (parseFloat(box.style.opacity) || 0) + 0.5;
                  });

                }container.appendChild(row);
        }
    }
}

button.click(true)