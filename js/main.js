function muda_cor() {

let body = document.getElementById("bg");
let flag = parseInt(Math.random() * 10) + 1;

    switch (flag) {
        case 0:
            body.style.backgroundColor = "#6A0DAD";
            break;
        case 1:
            body.style.backgroundColor = "#1a012c";
            break;
        case 2:
            body.style.backgroundColor = "#483D8B";
            break;
        case 3:
            body.style.backgroundColor = "#8A2BE2";
            break;
        case 4:
            body.style.backgroundColor = "#9370DB";
            break;
        case 5:
            body.style.backgroundColor = "#6495ED";
            break;
        case 6:
            body.style.backgroundColor = "#7B68EE";
            break;
        case 7:
            body.style.backgroundColor = "#C71585";
            break;
        case 8:
            body.style.backgroundColor = "#DC143C";
            break;
        case 9:
            body.style.backgroundColor = "#4169E1";
            break;
        case 10:
            body.style.backgroundColor = "#BA55D3";
            break;
        default:
            body.style.backgroundColor = "#000000";
            break;
    }
}

function fundoOriginal() {
    
    let body = document.getElementById("bg");
    body.style.backgroundColor = "#4B0082";
}
