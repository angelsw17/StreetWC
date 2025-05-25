function iniciarSesion() {
    document.getElementById("login").style.display = "none";
    document.getElementById("loading").style.display = "block";
    
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
        document.getElementById("servicios").style.display = "block";

        setTimeout(() => {
            document.getElementById("comentarios").style.display = "block"; // Aparece después de los servicios
        }, 500);
    }, 5000);
}

function imprimirTicket(servicio, precio) {
    let usuario = document.getElementById("usuario").value.trim() || "Usuario Desconocido";
    let fecha = new Date().toLocaleString();
    
    alert("¡Gracias por tu compra Mamad@!");

    let ticket = `
        -------------------------------
        Street Workout Calisthenics ®
        -------------------------------
        Usuario: ${usuario}
        Fecha: ${fecha}
        Servicio: ${servicio}
        Precio: $${precio} MXN
        Contacto: workoutcalisthenicsstreet@gmail.com
        -------------------------------
        ¡Gracias por tu confianza!
    `;

    let ventana = window.open('', '', 'width=400,height=500');
    ventana.document.write(`<pre>${ticket}</pre>`);
    ventana.document.close();
    ventana.print();
}

function enviarCorreo() {
    let correo = "workoutcalisthenicsstreet@gmail.com";
    let asunto = encodeURIComponent("DUDAS");
    let cuerpo = encodeURIComponent("Escriba aquí sus dudas sobre el servicio...");
    window.location.href = `mailto:${correo}?subject=${asunto}&body=${cuerpo}`;
}

function agregarComentario() {
    let nombreUsuario = document.getElementById("nombreUsuario").value.trim();
    let comentarioTexto = document.getElementById("nuevoComentario").value.trim();
    let comentariosContainer = document.getElementById("comentarios-container");

    if (!comentariosContainer) {
        console.error("Error: No se encontró el contenedor de comentarios.");
        return;
    }

    if (nombreUsuario === "" || comentarioTexto === "") {
        alert("Por favor, ingresa un usuario y un comentario válido.");
        return;
    }

    let comentarioElemento = document.createElement("div");
    comentarioElemento.classList.add("comentario");

    let usuarioElemento = document.createElement("p");
    usuarioElemento.classList.add("usuario");
    usuarioElemento.innerText = `@${nombreUsuario}`;

    let textoElemento = document.createElement("p");
    textoElemento.innerText = comentarioTexto;

    let reacciones = document.createElement("div");
    reacciones.classList.add("reacciones");

    let btnLike = document.createElement("button");
    btnLike.innerText = "👍";
    btnLike.onclick = function () {
        alert(`Te gusta el comentario de @${nombreUsuario}`);
    };

    let btnDislike = document.createElement("button");
    btnDislike.innerText = "👎";
    btnDislike.onclick = function () {
        alert(`No te gusta el comentario de @${nombreUsuario}`);
    };

    reacciones.appendChild(btnLike);
    reacciones.appendChild(btnDislike);

    comentarioElemento.appendChild(usuarioElemento);
    comentarioElemento.appendChild(textoElemento);
    comentarioElemento.appendChild(reacciones);

    comentariosContainer.appendChild(comentarioElemento);

    document.getElementById("nombreUsuario").value = "";
    document.getElementById("nuevoComentario").value = "";
}
