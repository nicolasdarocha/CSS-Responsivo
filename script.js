let btn1_Clicked,btn2_Clicked, btn3_Clicked = false;
function float() {
    if (btn1_Clicked == false) {
        document.getElementById("newAction").style.display = "inline";
        btn1_Clicked = true;
    } else {
        document.getElementById("newAction").style.display = "none";
        btn1_Clicked = false;
    }
}

function cardOnline() {
    if (btn2_Clicked == false) {
        document.getElementById("formOnline").style.display = "flex";
        btn2_Clicked = true;
    } else {
        document.getElementById("formOnline").style.display = "none";
        btn2_Clicked = false;
    }
}

function cardLocal() {
    if (btn3_Clicked == false) {
        document.getElementById("formLocal").style.display = "flex";
        btn3_Clicked = true;
    } else {
        document.getElementById("formLocal").style.display = "none";
        btn3_Clicked = false;
    }
}

function escape() {
    if (btn1_Clicked == true) {
        document.getElementById("newAction").style.display = "none";
        btn1_Clicked = false;
    }
    if (btn2_Clicked == true) {
        document.getElementById("formOnline").style.display = "none";
        btn2_Clicked = false;
    }
    if (btn3_Clicked == true) {
        document.getElementById("formLocal").style.display = "none";
        btn3_Clicked = false;
    }
}

class hem {
    constructor(hora,minuto){
        this.hora = hora;
        this.minuto = minuto;
    }
    horario() {
        return `${this.hora}:${this.minuto}`
    }
}

let horarios = [];
for (let h = 14; h <= 19; h++) {
    // console.log(h);
    if (h < 19) {
        for (let j = 0; j < 6; j++) {
            let m = j * 10;
            let hora = h + ':' + m;

            if (m == 0) {
                // console.log(h,': 00');
                hora = h +':00';

                hora = hora.split(":");
                let classHora = new hem(hora[0],hora[1]);
                horarios.push(classHora);
            } else {
                // console.log(h,':',m);

                hora = hora.split(":");
                let classHora = new hem(hora[0],hora[1]);
                horarios.push(classHora);
            }
        }
    } else {
        let hora = h + ':00';

        hora = hora.split(":");
        let classHora = new hem(hora[0],hora[1]);
        horarios.push(classHora);
    }
}

let tam = horarios.length;
for (let i = 0; i < tam; i++) {
    let horario = horarios[i].horario();
    // console.log(horario);
    document.getElementById("time").innerHTML += `<option value = "${horario}">${horario}</option>`
}