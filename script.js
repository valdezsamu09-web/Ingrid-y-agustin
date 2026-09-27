// FECHA DEL CONTADOR: cambiá esta fecha si querés contar desde el día que se conocieron.
const START = new Date("2025-10-26T00:00:00-03:00");

const stars = document.getElementById("stars");
for(let i=0;i<55;i++){
  const s=document.createElement("span");
  s.className="star";
  s.style.left=Math.random()*100+"%";
  s.style.top=Math.random()*100+"%";
  s.style.animationDelay=(Math.random()*3)+"s";
  s.style.animationDuration=(2+Math.random()*4)+"s";
  stars.appendChild(s);
}

const petals=document.getElementById("petals");
for(let i=0;i<18;i++){
  const p=document.createElement("span");
  p.className="petal";
  p.style.left=(Math.random()*100-10)+"%";
  p.style.animationDuration=(7+Math.random()*8)+"s";
  p.style.animationDelay=(-Math.random()*12)+"s";
  p.style.width=(9+Math.random()*12)+"px";
  p.style.height=(6+Math.random()*7)+"px";
  petals.appendChild(p);
}

function openLove(){
  document.getElementById("welcome").classList.add("hidden");
  document.getElementById("love").classList.remove("hidden");
  document.getElementById("love").scrollIntoView({behavior:"smooth"});
  updateCounter();
}

function diffParts(start,end){
  let years=end.getFullYear()-start.getFullYear();
  let months=end.getMonth()-start.getMonth();
  let days=end.getDate()-start.getDate();
  if(days<0){
    months--;
    const prevMonth=new Date(end.getFullYear(),end.getMonth(),0).getDate();
    days+=prevMonth;
  }
  if(months<0){years--;months+=12;}
  const totalDays=Math.floor((end-start)/86400000);
  return {years,months,days,totalDays};
}

function updateCounter(){
  const d=diffParts(START,new Date());
  document.getElementById("counter").innerHTML=`
    <div class="unit"><div class="num">${d.years}</div><div class="lab">años</div></div>
    <div class="unit"><div class="num">${d.months}</div><div class="lab">meses</div></div>
    <div class="unit"><div class="num">${d.days}</div><div class="lab">días</div></div>
    <div class="unit"><div class="num">${d.totalDays}</div><div class="lab">días juntos</div></div>`;
}
setInterval(updateCounter,60000);
updateCounter();
