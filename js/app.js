const b = document.querySelector('button.button--no')
b.addEventListener("click", change)


function change() { 

    const i = Math.floor(Math.random()*320) + 1;
    const j = Math.floor(Math.random()*320) + 1;

    b.style.left=i+"px";
    b.style.top=j+"px";

    document.getElementById("h1_text").innerHTML = "CAN WE MEET TOMORROW??";
    h1_text.style.color = "brown";

}

const c = document.querySelector('button.button--yes')
c.addEventListener("click", changetext)

function changetext () {
    document.getElementById("h1_text").innerHTML = "SEE YOUUUUUUUUU!!!!!";
    h1_text.style.color = "White";
    location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdR_SM-aTgpBuUK00BQpPIYuPbmXamk4xhI8UMWCYmA_AfzAQ/viewform"
}