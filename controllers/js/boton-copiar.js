const encriptarButton = document.querySelector("[data-encriptar]");
const resultadoEncriptado = document.getElementById("resultadoEncriptado");
const copiarBoton = document.getElementById("copiarBoton");


encriptarButton.addEventListener("click", (event) => {
    event.preventDefault();
    const textoEncriptar = document.querySelector("[data-text]").value;
    // const textoEncriptado = encriptarTexto(textoEncriptar);
    // resultadoEncriptado.textContent = textoEncriptado;
    copiarBoton.style.display = "flex"; 
    copiarBoton.textContent = "Copiar";
});

copiarBoton.addEventListener("click", () => {
    const textoEncriptado = resultadoEncriptado.textContent;
    copiarAlPortapapeles(textoEncriptado);
    copiarBoton.textContent = "¡Copiado!";
    setTimeout(() => {
        copiarBoton.textContent = "Copiar";
    }, 2500); 
});

function copiarAlPortapapeles(texto) {
    const elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = texto;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand("copy");
    document.body.removeChild(elementoTemporal);
}
