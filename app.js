const ranks = document.querySelectorAll('.rank')
const etiqueta_puntaje = document.querySelector('.etiqueta')
console.log(ranks)


ranks.forEach((rank, i)=>{
  rank.onclick = function (){
    let puntaje_rank = (i+1)
    etiqueta_puntaje.innerHTML = `You selected  ${puntaje_rank} out of 5`
  }
})

function cargarGracias(){
  document.getElementById('card').style.display='none';
  document.getElementById('card_gracias').style.display='block'

}