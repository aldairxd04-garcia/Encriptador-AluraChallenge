//VARIABLES
const textArea = document.querySelector("#texto");
const btnEncriptar = document.querySelector("#btn-encriptar");
const btnDesencriptar = document.querySelector("#btn-desencriptar");
const btnCopiar = document.querySelector("#btn-copiar");
const divTextoCopiar = document.querySelector("#texto-copiar");

//EVENT LISTENERS
leerEventos();
function leerEventos() {
    
  textArea.addEventListener("input", function (e) {
    let textoIngresado = e.target.value.toLowerCase();
    const caracteresValidos = /[a-z\s]+/g;
    textoIngresado = textoIngresado.match(caracteresValidos)?.join("") || "";

    textArea.value = textoIngresado;
  });

  btnEncriptar.addEventListener("click", encriptarTexto);

  btnDesencriptar.addEventListener("click", desencriptarTexto);

  btnCopiar.addEventListener("click", copiarTexto);
}

//FUNCIONES

function encriptarTexto() {
  const textoLeido = textArea.value;
  let textEncriptado = "";

  if (
    textoLeido.includes("a") ||
    textoLeido.includes("e") ||
    textoLeido.includes("i") ||
    textoLeido.includes("o") ||
    textoLeido.includes("u")
  ) {
    textEncriptado = textoLeido
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/o/g, "ober")
      .replace(/a/g, "ai")
      .replace(/u/g, "ufat");
  }

  if (textoLeido !== "") {
    textArea.value = textEncriptado;
  }

  if(textArea.value !== ""){
    while (divTextoCopiar.firstChild) {
      divTextoCopiar.removeChild(divTextoCopiar.firstChild);
    }
  
    const p = document.createElement('P');
    p.textContent = textEncriptado;
    p.classList.add("break-words","text-[#0A3871]");
    divTextoCopiar.appendChild(p);
  }


}

function desencriptarTexto() {
  const textoLeido = textArea.value;
  let textDesencriptado = "";

  if (
    textoLeido.includes("ai") ||
    textoLeido.includes("enter") ||
    textoLeido.includes("imes") ||
    textoLeido.includes("ober") ||
    textoLeido.includes("ufat")
  ) {
    textDesencriptado = textoLeido
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ober/g, "o")
      .replace(/ai/g, "a")
      .replace(/ufat/g, "u");
  }

  if (textoLeido !== "") {
    textArea.value = textDesencriptado;
  }

  if(textArea.value !== ""){
    while (divTextoCopiar.firstChild) {
      divTextoCopiar.removeChild(divTextoCopiar.firstChild);
    }
  
    const p = document.createElement('P');
    p.textContent = textDesencriptado;
    p.classList.add("break-words","text-[#0A3871]");
    divTextoCopiar.appendChild(p);
  }

}

function copiarTexto() {
  const textoCopiar = divTextoCopiar.textContent;
  navigator.clipboard.writeText(textoCopiar).then(() => {
    btnCopiar.textContent = "TEXTO COPIADO";
    setTimeout(() => {
      btnCopiar.textContent = "Copiar";
    }, [3000]);
  });
}
