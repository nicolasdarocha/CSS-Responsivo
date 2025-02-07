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
    if (btn2_Clicked == false || btn3_Clicked == true) {
        document.getElementById("formOnline").style.display = "flex";
        document.getElementById("formLocal").style.display = "none";
        btn2_Clicked = true;
        btn3_Clicked = false;
    } else {
        document.getElementById("formOnline").style.display = "none";
        btn2_Clicked = false;
    }
}

function cardLocal() {
    if (btn3_Clicked == false || btn2_Clicked == true) {
        document.getElementById("formLocal").style.display = "flex";
        document.getElementById("formOnline").style.display = "none";
        btn3_Clicked = true;
        btn2_Clicked = false;
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

const section = document.getElementById("section-cards1");
function createCardOnline(event)
{
    event.preventDefault();
    const dadosDoForm = new FormData(event.target);
    const nome = dadosDoForm.get('name');
    const horarioMarcado = dadosDoForm.get('time');
    section.innerHTML += `
    <div class="card"> <!--ONLINE-CARD-->
        <div class="card1">
            <div class="card1-content">
                <img src="img/perfil-2.jpg" class="card-avatar" alt="">
                <div class="card-text-container">
                    <h4 class="card-name">${nome}</h4>
                    <ion-icon class="card-icon-video" name="videocam-outline"></ion-icon>
                    <p class="card-type-appoint">Remote appointment</p>
                </div>
                <button type="button" class="card-btn-chat"><svg class="card-icon-chat" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.33325 1.66671C2.15644 1.66671 1.98687 1.73695 1.86185 1.86197C1.73682 1.98699 1.66659 2.15656 1.66659 2.33337V11.3906L3.19518 9.86197C3.32021 9.73695 3.48977 9.66671 3.66659 9.66671H11.6666C11.8434 9.66671 12.013 9.59647 12.138 9.47145C12.263 9.34642 12.3333 9.17685 12.3333 9.00004V2.33337C12.3333 2.15656 12.263 1.98699 12.138 1.86197C12.013 1.73695 11.8434 1.66671 11.6666 1.66671H2.33325ZM0.919038 0.91916C1.29411 0.544088 1.80282 0.333374 2.33325 0.333374H11.6666C12.197 0.333374 12.7057 0.544088 13.0808 0.91916C13.4559 1.29423 13.6666 1.80294 13.6666 2.33337V9.00004C13.6666 9.53047 13.4559 10.0392 13.0808 10.4143C12.7057 10.7893 12.197 11 11.6666 11H3.94273L1.47132 13.4714C1.28066 13.6621 0.993913 13.7191 0.744796 13.616C0.49568 13.5128 0.333252 13.2697 0.333252 13V2.33337C0.333252 1.80294 0.543966 1.29423 0.919038 0.91916Z" fill="#4894FF"/>
                    </svg>
                </button>
            </div>
        </div>
        <div class="card2">
            <p class="card-hour">${horarioMarcado}(tempo de consulta)</p>
            <input class="btn-video" type="button" value="Call by video">
            <input class="btn-audio" type="button" value="Call by audio">
        </div>
    </div>
    `
}

function createCardLocal(event)
{
    event.preventDefault();
    const dadosDoForm = new FormData(event.target);
    const nome = dadosDoForm.get('name');
    const horarioMarcado = dadosDoForm.get('time');
    section.innerHTML += `
        <div class="card"> <!--LOCAL-CARD-->
        <div class="card1">
            <div class="card1-content">
                <img src="img/perfil-3.jpg" class="card-avatar" alt="">
                <div class="card-text-container">
                    <h4 class="card-name">${nome}</h4>
                    <ion-icon class="card-icon-location" name="location-outline"></ion-icon>
                    <p class="card-type-appoint">Local appointment</p>
                </div>
                <button type="button" class="card-btn-chat"><svg class="card-icon-chat" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.33325 1.66671C2.15644 1.66671 1.98687 1.73695 1.86185 1.86197C1.73682 1.98699 1.66659 2.15656 1.66659 2.33337V11.3906L3.19518 9.86197C3.32021 9.73695 3.48977 9.66671 3.66659 9.66671H11.6666C11.8434 9.66671 12.013 9.59647 12.138 9.47145C12.263 9.34642 12.3333 9.17685 12.3333 9.00004V2.33337C12.3333 2.15656 12.263 1.98699 12.138 1.86197C12.013 1.73695 11.8434 1.66671 11.6666 1.66671H2.33325ZM0.919038 0.91916C1.29411 0.544088 1.80282 0.333374 2.33325 0.333374H11.6666C12.197 0.333374 12.7057 0.544088 13.0808 0.91916C13.4559 1.29423 13.6666 1.80294 13.6666 2.33337V9.00004C13.6666 9.53047 13.4559 10.0392 13.0808 10.4143C12.7057 10.7893 12.197 11 11.6666 11H3.94273L1.47132 13.4714C1.28066 13.6621 0.993913 13.7191 0.744796 13.616C0.49568 13.5128 0.333252 13.2697 0.333252 13V2.33337C0.333252 1.80294 0.543966 1.29423 0.919038 0.91916Z" fill="#4894FF"/>
                    </svg>
                </button>
            </div>
        </div>
        <div class="card2">
            <p class="card-hour">${horarioMarcado}(tempo de consulta)</p>
            <input class="btn-address" type="button" value="See address">
        </div>
    </div>
    `
}

// input horarios
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
    document.getElementById("time-local").innerHTML += `<option value = "${horario}">${horario}</option>`;
    document.getElementById("time-online").innerHTML += `<option value = "${horario}">${horario}</option>`;
}

// listClients
listClients = [
    'Luciana Dias',
    'Larissa Santana',
    'Marcos Correia', 
    'Clara Lemos'
]
let list = document.getElementById('listClients');
for (let i = 0; i < listClients.length; i++) {
    let nome = listClients[i];
    list.innerHTML += `<option value = "${nome}">${nome}</option>`
}
