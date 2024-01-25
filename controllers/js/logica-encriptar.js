export default function encriptarTexto(texto) {
    let textoEncriptado = texto.toLowerCase(); //Convertimos todo a minúsculas para facilitar las transformaciones
    textoEncriptado = textoEncriptado.replace(/e/g, "enter");
    textoEncriptado = textoEncriptado.replace(/i/g, "imes");
    textoEncriptado = textoEncriptado.replace(/a/g, "ai");
    textoEncriptado = textoEncriptado.replace(/o/g, "ober");
    textoEncriptado = textoEncriptado.replace(/u/g, "ufat");
    return textoEncriptado;
}
const encriptarButton = document.querySelector("[data-encriptar]");
const txt = document.getElementById("hola");

encriptarButton.addEventListener("click", (event) => {
    event.preventDefault();
    const textoEncriptar = document.querySelector("[data-text]").value;
    const lengthText = textoEncriptar.length;
    if ( lengthText > 0 ) {
        const resultadoEncriptado = document.getElementById("resultadoEncriptado");
        const textoEncriptado = encriptarTexto(textoEncriptar);
        // console.log(textoEncriptar.length);
        resultadoEncriptado.textContent = textoEncriptado;
        copiarBoton.style.display = "flex" 
    } else {
        copiarBoton.style.display = "none" 
        resultadoEncriptado.textContent = txt.innerHTML
        console.log(txt.innerHTML);
    }
});