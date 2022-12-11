
let opt=0;
// Paragraph Section

let para="Paragraphs are medium-sized units of writing, longer than sentences, but shorter than sections, chapters, or entire works. Because they connect the “small” ideas of individual sentences to a “bigger” idea, paragraph structure is essential to any writing for organization, flow, and comprehension.";

let myPara=para.split(" ");

for(let i=0;i<myPara.length;i++){
  // select p 
  let text=myPara[i]+" ";

  let element=document.createElement("span");
  element.setAttribute("id", "id-"+i);
 element.appendChild(document.createTextNode(text));
document.querySelector("#pText").appendChild(element);
}
// Function work for reset and home button

let per=0;
let accx=0;
let d=0;

function timerZone(){
  
  // ACCURACY SECTION
  accx=acc;

  per=hits;
  hits=per-accx;
 
  acc=Math.round((hits*100)/per);
  timer = 0;
  min=0;
  sec=0;
  z=1;

document.getElementById("minute").innerHTML="00 :"; document.getElementById("second").innerHTML="00";
  
  if(per>accx ){
    if(per>25){document.querySelector(".wpm-text").textContent="Your are awesome, Your "  + " wpm." +hits;
    document.querySelector(".wpm-text2").textContent= " Your accuracy is "+ acc +"%";}else{
   document.querySelector(".wpm-text").textContent="Your typing speed is " +hits + " wpm.";
    document.querySelector(".wpm-text2").textContent= " Your accuracy is "+ acc +"%";}}else{document.querySelector(".wpm-text").textContent="Your typing speed is 0 wpm." ;
                                                                                           document.querySelector(".wpm-text2").textContent= "";}
document.querySelector(".wpm").classList.toggle("wpmx")
    document.querySelector(".wpm-text").classList.toggle("wpm-textx");
    document.querySelector(".small-btn").classList.toggle("small-btnx");
document.querySelector("div").classList.toggle("writing"); 
document.querySelector(".container").classList.toggle("containerx"); 
  document.querySelector(".first-text").classList.toggle("text");
document.querySelector("textarea").classList.toggle("big-box");
document.querySelector("p").classList.toggle("write");
document.querySelector(".reset").classList.toggle("cut");

 document.querySelector(".first-view").classList.toggle("first-viewx");
  document.querySelector(".second-Main").classList.toggle(".second-Mainx");

      hits=0;
}

 // START BUTTON

document.querySelector(".first-button").addEventListener("click",function(point){
   document.querySelector(".time-icon").classList.toggle("time-iconx");
    document.querySelector(".first-text").textContent="";
 
   document.querySelector(".first-img").classList.toggle("first-imgx");
  document.querySelector(".first-button").classList.toggle("buttonx");
document.querySelector(".timer").classList.toggle("timerx"); document.querySelector("div").classList.toggle("writing"); 
document.querySelector(".container").classList.toggle("containerx"); 
  document.querySelector(".first-text").classList.toggle("text");
 document.querySelector("textarea").classList.toggle("big-box");
   document.querySelector("textarea").value="";
document.querySelector("p").classList.toggle("write");
   
  document.querySelector(".reset").classList.toggle("cut")
  ;
  document.querySelector(".second-Main").classList.toggle(".second-Mainx");

  for(let i=0;i<myPara.length;i++){
     document.querySelector("#id-"+i).style.color="black";
  }
  // for reset they are keys
   index=0;
   space=1;
   aj=0;
   i=0;
   d=0;
   double=0;
   userPara="";
   acc=0;
  accx=0;
   sec=60;
  limit=0;
  opt=0;
 

});

// FOR HERE TIMER SECTION START AND DONE SOME BUGS

let min=0;
let sec=60;
let timer=0;
let z=0;
let double=0;
document.querySelector("textarea").addEventListener("keypress",function go(P){
  // Space timer bug
   if(P.keyCode === 32){z=1;}else{
       z=0;double++}
 if(z<1){
  if(double==1){
    timer = 1;
  stopwatch();}
 z++;}
});
  
function reset(){
 
  hits=opt;
timerZone();
  
}
let limit=0;
function stopwatch(){
  
  if(document.getElementById('minutes').value=="5"){
    if(limit==0){
       min=4;
    limit++;}}
   if(document.getElementById('minutes').value=="2"){
      if(limit==0){
       min=1;
      limit++;}}
      if(document.getElementById('minutes').value=="3"){
      if(limit==0){
       min=2;
      limit++;}}
  if(timer == 1){
    sec=sec-1;  
    if(sec==0){
    
      if(min!=0){
      sec=60;
        min=min-1;}else{sec=0;min=0;}
    }
    let minstring=min;
    let secstring=sec;
   
    // TIMER-SECTION
if(document.getElementById('minutes').value=="1"){
  opt=hits;
  min=0;
  if(secstring=="0"&&minstring=="0"){

 timerZone();
}   }
 
   // TWO-MINUTE 
    
    if(document.getElementById('minutes').value=="2"){
   
  
     if(d==0){
      opt=hits; 
       opt=Math.round(opt/2);
         
       d++;
     }
     
  if(secstring=="0"&&minstring=="0"){

     
timerZone();  
}   }
    // 3-MINUTES 
    if(document.getElementById('minutes').value=="3"){
      if(d==0){
      opt=hits; 
       opt=Math.round(opt/3);    
       d++;
     }
  if(secstring=="0"&&minstring=="0"){
  timerZone();
}}
    // 5-MINUTES
     if(document.getElementById('minutes').value=="5"){
       if(d==0){
      opt=hits; 
       opt=Math.round(opt/5);
         
       d++;
     }
  if(minstring=="0"){
 timerZone();
}}
    
    if(min<10){
      minstring="0"+minstring+" :";
    }
    if(sec<10){
      secstring="0"+secstring;
    }
document.getElementById("minute").innerHTML=minstring; 
    document.getElementById("second").innerHTML=secstring;
    setTimeout("stopwatch()",1000);
  }
}
// USER PARA VALUE

  let hits = 0;
  let userPara="";
  let i=0;
  let space=0;
let aj=0;
let acc=0;

document.querySelector("textarea").addEventListener("keypress",function(e) {
       if(event.key==="Enter"){
                event.preventDefault();
   }
   if(e.key){
     if(e.keyCode!=32){
       aj=1;
     }
     if(aj>0){
if(e.keyCode==32){
// Check words

 console.log(myPara[index],userPara);
  if(myPara[index] == userPara){
    // green color
    document.querySelector("#id-"+index).style.color="green";
  }else{document.querySelector("#id-"+index).style.color="red";
       acc=acc+1;}
  ++index;
  userPara="";
 ;}
else{
       userPara+=e.key;
} }
   }
          // SPACE BUG
     if(e.keyCode!=32){
     space=0;}
 
  if(space>0){
                e.preventDefault();
     }else{if(e.keyCode==32){
  hits++;
  aj=0;
       d=0;
   space=1;}}
        });
// ACCURACY PERCENTAGE

document.querySelector(".small-btn").addEventListener("click",function home(){
document.querySelector(".wpm").classList.toggle("wpmx")
    document.querySelector(".wpm-text").classList.toggle("wpm-textx");
    
    
    document.querySelector(".small-btn").classList.toggle("small-btnx");
timer = 0;
  min=0;
  sec=0;
  z=0;
 
  document.getElementById("minute").innerHTML="00 :"; document.getElementById("second").innerHTML="00";
  
  document.querySelector("div").classList.toggle("writing"); 

  document.querySelector(".first-text").classList.toggle("text");
       document.querySelector(".first-text").textContent="Welcome To Typing Test.";
  document.querySelector(".first-button").classList.toggle("buttonx");
  document.querySelector(".timer").classList.toggle("timerx"); 
 document.querySelector(".first-img").classList.toggle("first-imgx"); 
     document.querySelector("div").classList.toggle("writing"); 
  document.querySelector(".first-view").classList.toggle("first-viewx");
   document.querySelector(".time-icon").classList.toggle("time-iconx");

  z=0;
});
/** BACKSPACE-BUG **/

  var backSp=0;
document.querySelector("textarea").addEventListener("keydown",function(backS) {
       if(event.key=="Backspace"){
                event.preventDefault();}
       });

 

