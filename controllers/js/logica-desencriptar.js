function desencriptar(texto) {
    let textoDesencriptado = texto.toLowerCase(); // Convertimos todo a minúsculas para facilitar las transformaciones
    textoDesencriptado = textoDesencriptado.replace(/enter/g, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/g, "i");
    textoDesencriptado = textoDesencriptado.replace(/ai/g, "a");
    textoDesencriptado = textoDesencriptado.replace(/ober/g, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, "u");
    return textoDesencriptado;
}

const btnDesencriptar = document.querySelector("[data-desencriptar]");
const resultadoEncriptado = document.getElementById("resultadoEncriptado");

btnDesencriptar.addEventListener("click", (event) => {
    event.preventDefault();
    const textoDesencriptar = document.querySelector("[data-text]").value;
    const textoDesencriptado = desencriptar(textoDesencriptar)
    console.log("Texto desencriptado: " + textoDesencriptado)
    resultadoEncriptado.textContent = textoDesencriptado;
    copiarBoton.style.display= "flex"
});



