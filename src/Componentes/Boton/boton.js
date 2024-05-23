import './boton.css'

export const boton = (texto, clase) => {
  return `<button id="boton" class="${clase}" type="submit"> ${texto} </button>`
}

export const btnTexto = (texto, clase) => {
  return `<button id="btntexto" class="${clase}"> ${texto} </button>`
}
export const btnImg = (img, clase) => {
  return `<input id="btnimagen" class="${clase}" type= "image" src="${img}">`
}

export const btnSugerencia = (texto) => {
  return `<button class="btnsugerencia" data-termino="${texto}" onclick="buscarImagenes('${texto})"> ${texto} </button>`
}

/* export const btnSugerencia = (texto) => {
  return `<button class="btnsugerencia" > ${texto} </button>`
} */
