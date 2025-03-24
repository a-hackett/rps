const body = document.querySelector("body");
body.classList.add("flex");

const title = document.createElement("h1");
title.classList.add("autoMargins");
title.id= "title";
title.textContent=("Title");
body.appendChild(title);
document.getElementById("title").style.order="1";

const button = document.createElement("button");
button.id = "button";
button.classList.add("flex", "autoMargins");
button.textContent=("Submit");
button.addEventListener("click", ()=> {
    size=0;
    size=prompt("enter number of boxes:");
    createBoxes(size);
    console.log(size);
    });

body.appendChild(button);
document.getElementById("button").style.order="2";

const container = document.querySelector("#container");
document.getElementById("container").style.order="3";
container.classList.add("flex", "autoMargins");

function createBoxes(size){
    if(size<100){
        for (let i=0;i<size;i++){
            const row = document.createElement("div");
            row.classList.add("flex","row");
            console.log("i", i)
    
            for (let j=0;j<size;j++){
                const box = document.createElement("div");
                box.classList.add("box");
                row.append(box);
                console.log("j", j);

                box.addEventListener('mouseover', () => {
                    box.style.backgroundColor = 'green';
                    });
            }
            container.appendChild(row);
        }
    }
}

button.click()