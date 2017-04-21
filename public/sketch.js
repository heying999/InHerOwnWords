var startTime, endTime;

function countStart(){
  var p = document.getElementById("breath");
  startTime = new Date();
  var startpress = "font-size: 2.95em;";
  p.setAttribute("style",startpress);
}

function countEnd(){

  endTime = new Date();
  var result = (endTime.getSeconds() - startTime.getSeconds())*0.8 + 0.3;
  var p = document.getElementById("breath");
  var presstime = "-webkit-animation:loading " + result + "s ease-out infinite;";
  console.log(result);
  p.setAttribute("style",presstime);

  startTime= 0;
  endTime = 0;



  //p.setAttribute("style",);
  //console.log(p);
  //p.style("-webkit-animation", presstime);
}



// document.addEventListener('mousedown', countStart, false);
// document.addEventListener('mouseup', countEnd, false);

// function countStart(){
//   startTime = new Date();
//   // console.log(startTime);
// }
//
// function countEnd(){
//   endTime = new Date();
//   var result = endTime.getSeconds() - startTime.getSeconds();
//   console.log(result);
// }
