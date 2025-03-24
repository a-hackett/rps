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
    console.log("here");
    container.innerHTML='';
    createBoxes(0);
    });
body.appendChild(button);
document.getElementById("button").style.order="2";


const container = document.querySelector("#container");
document.getElementById("container").style.order="3";
container.classList.add("flex", "autoMargins");

function createBoxes(size){
    if(size==0){
        console.log("in 0")
        size=prompt("enter number of boxes:");
    }
    if(size>0 && size<100){
        for (let i=0;i<size;i++){
            const row = document.createElement("div");
            row.classList.add("flex","row");

            for (let j=0;j<size;j++){
                const box = document.createElement("div");
                box.classList.add("box");
                box.addEventListener('mouseover', () => {
                    const randomHexColorCode = () => {
                        let n = (Math.random() * 0xfffff * 1000000).toString(16);
                        return '#' + n.slice(0, 6);
                      };
                      
                    box.style.backgroundColor = randomHexColorCode();
                });
                row.append(box);
            }container.appendChild(row);
        }
    }
}button.click(true)