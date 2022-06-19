function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('image');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas!`;
    var p1 = document.getElementById('p1');
    
    if (hora >= 0 && hora < 12) {
        img.src = "./img/bom_dia.jpg";
        document.body.style.background = '#e2cd9f';
        p1.innerHTML = "Bom Dia!"
    } else if (hora >=12 && hora <= 18) {
        img.src = "./img/boa_tarde.jpg";
        document.body.style.background = '#b9846f';
        p1.innerHTML = "Boa Tarde!"
    } else {
        img.src = "./img/boa_noite.jpg";
        document.body.style.background = '#515154';
        p1.innerHTML = "Boa Noite!"
    }
}

