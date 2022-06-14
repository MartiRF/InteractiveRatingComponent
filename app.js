
const crearCardGracias = (valor)=>{
    let cardHTML = `<section class="card_gracias">
    <img src="images/illustration-thank-you.svg" alt="Gracias">
    <p class="etiqueta">You selected ${valor} out of 5</p>
    <h1>Thank you!</h1>
    <p>We appreciate you taking the time to give a rating. If you ever need more support, 
      don’t hesitate to get in touch!</p>
  </section> -->`
  return cardHTML;
}
const cargarGracias = (valorBTN)=>{
    document.getElementById('body').innerHTML = crearCardGracias();
}