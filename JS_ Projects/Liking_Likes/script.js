let num=3

function addcounter() {
    num++;
    let span=document.getElementById("likes-counter");
    span.innerText=num;
}
