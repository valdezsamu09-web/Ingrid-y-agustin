const START = new Date("2025-10-26T00:00:00");
function openLove(){document.getElementById('home').classList.add('hide');document.getElementById('love').classList.remove('hide');startPetals();updateCounter();}
function goHome(){document.getElementById('love').classList.add('hide');document.getElementById('home').classList.remove('hide');}
function updateCounter(){
  const now=new Date(), diff=Math.max(0,now-START), sec=Math.floor(diff/1000);
  const days=Math.floor(sec/86400), hours=Math.floor(sec%86400/3600), mins=Math.floor(sec%3600/60), s=sec%60;
  document.getElementById('counter').textContent=`${days} días, ${hours} horas, ${mins} minutos y ${s} segundos`;
}
setInterval(updateCounter,1000);
function startPetals(){
 if(document.querySelector('.petal')) return;
 for(let i=0;i<22;i++){
   const p=document.createElement('div'); p.className='petal';
   p.style.left=Math.random()*100+'vw';
   p.style.animationDuration=(5+Math.random()*7)+'s';
   p.style.animationDelay=(-Math.random()*8)+'s';
   p.style.transform=`rotate(${Math.random()*360}deg)`;
   document.body.appendChild(p);
 }
}
