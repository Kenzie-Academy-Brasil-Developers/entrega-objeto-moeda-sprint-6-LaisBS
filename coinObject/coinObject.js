
const coin = {
    state: 0,
    
    flip: function () {
        
      this.state = Math.round(Math.random() * (1 - 0) + 0)
    },
    
    toString: function () {
      console.log(this.state)
      if(this.state===0){
        return "Heads"
      }else{
        return "Tails"
      }
    },
  
    toHTML: function () {
      const image = document.createElement('img');
      image.classList.add("imagem")
        if(this.state===0) {
            image.src = './images/head.jpg';
            image.alt = 'Heads';
        }if(this.state===1) {
            image.src = './images/tails2.webp';
            image.alt = 'Tails';
        }
        return image;
    }
}
let ul = document.createElement('ul')
function display20Flips() {
    const results = [];
    for(let i=0;i<20;i++){
      coin.flip()
      results.push(coin.toString())
    }
  
    results.forEach((item)=>{
      const li=document.createElement('li');
      li.textContent=item+"-"
      document.body.appendChild(ul)
      ul.appendChild(li)
    })
    console.log(results)
    return results
  }
  display20Flips();
  

  let CampoJogo=document.createElement("div")
  CampoJogo.classList.add("campoJogo")
  document.body.appendChild(CampoJogo)
  
  const campo= document.createElement("div")
  campo.classList.add("campo")
  document.body.appendChild(campo)
  
  
  function display20Images() {
    const results = [];

    for(let i=0;i<20;i++){
      coin.flip();
      let image=coin.toHTML();
      results.push(image)
      campo.appendChild(image)
      
    }
    console.log(results)
    return results
  }
  display20Images()
  function carregarTela(){
    CampoJogo.innerHTML=
      `<img src="./images/head.jpg" id="cara">
      <img src="./images/tails2.webp" id="coroa">`
  }
  
  carregarTela()
