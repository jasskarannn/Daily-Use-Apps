// quote div handling starts
let quoteArray = ["Hello Jasskaran.", "How has been your day so far?", "Focus on your tasks for the day.", "Stay true, to yourself.", "This can help you give work life and entertainment balance.", "Also, here are some inspirational quotes that can help you keep going.","Opportunities don’t happen, you create them.", "Don’t raise your voice, improve your argument.", "No masterpiece was ever created by a lazy artist."];
var finalQuoteArray = setInterval(changeQuote, 3000);
let i = 0;
function changeQuote(){
  if(i == quoteArray.length){
    i = 0;
  }
  document.getElementById("quote-id").innerText = quoteArray[i];
  i++; 
}
// quote div handling ends

// functions 
function toMusicApp(){
  console.log("music app is being called");
  window.location.href = "./music-player/music-player.html";
}

function toCricketApp(){
  window.location.href = "/cricket-app/cricket.html"
}

function toWeatherApp(){
  window.location.href = "./weather-app/weather-index.html";
}

function toExpenseApp(){
  window.location.href = "./expenses-tracker/expense-index.html";
}

function updateClock(){
  var now = new Date();
  var dname = now.getDay(),
  mo = now.getMonth(),
  dnum = now.getDate(),
  yr = now.getFullYear(),
  hou = now.getHours(),
  min = now.getMinutes(),
  sec = now.getSeconds(),
  pe = "AM";

  if(hou >= 12){
    pe = "PM";
  }
  if(hou == 0){
    hou = 12;
  }
  if(hou > 12){
    hou = hou - 12;
  }

  Number.prototype.pad = function(digits){
    for(var n = this.toString(); n.length < digits; n = 0 + n);
    return n;
  }

  var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
  var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
  var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
  for(var i = 0; i < ids.length; i++)
  document.getElementById(ids[i]).firstChild.nodeValue = values[i];
  }

function initClock(){
  updateClock();
  window.setInterval("updateClock()", 1);
  showTasks();  
  closeNav();
}

// nav bar starts
function openNav() {
  
  document.getElementById("mySidenav").style.width = "400px";
  document.getElementById("main").style.marginLeft = "400px";

}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
// nav bar ends

function showTasks(){
  let getLocalStorageData = localStorage.getItem("New Todo");
  if(getLocalStorageData == null){
    listArray = [];
  }else{
    listArray = JSON.parse(getLocalStorageData);
  }
  let newLiTags = "";
  listArray.forEach((element, index) =>{
    newLiTags = newLiTags + `<li style="font-style: italic; color: white; font-size : 28px">${element}</li>`
  });
  document.getElementById("ulid").innerHTML = newLiTags;
}

var taskno = 1;
document.querySelector(".tasks input").addEventListener("keypress", function(e){
  if(e.key == 'Enter'){
    var task = document.querySelector("#newinputbox").value;
    let getLocalStorageData = localStorage.getItem("New Todo");
    if(getLocalStorageData == null){
      listArray = [];
    } else{
      listArray = JSON.parse(getLocalStorageData);
    }
    listArray.push(task);
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks();
    document.querySelector("#newinputbox").value = '';
    var newTask = document.createElement("li");
    newTask.style.fontStyle = "italic";
    newTask.style.color = "white";
  }
})

// sinle click : task completed; line over
document.querySelector(".my-tasks ul").addEventListener("click", function(e){
  var selected = e.target.style.textDecoration = "line-through";
  let getLocalStorageData = localStorage.getItem("New Todo");
  for(let i = 0; i < getLocalStorageData.length; i++){
    if(getLocalStorageData[i] == e.target.innerText){
    }
  }
  console.log(getLocalStorageData);

})

// double click : task completed; remove from list
document.querySelector(".my-tasks ul").addEventListener("dblclick", function(e){
  
  let parentList = document.getElementById("ulid");
  parentList.removeChild(e.target);

})
let ctx = document.getElementById("canvas").getContext("2d");
let ctx2 = document.getElementById("canvas").getContext("2d");
make_base();
resize();
window.addEventListener("resize", resize);
function make_base()
{
  base_image = new Image();
  base_image.src = './codeimg/srcImg2.png';
  base_image.onload = function(){
    ctx2.drawImage(base_image, 150, 350);
  }
}





let mousePos = {
  x: 0,
  y: 0,
};

document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", mousePosition);
document.addEventListener("mouseenter", mousePosition);


function mousePosition(e) {
  mousePos.x = e.clientX;
  mousePos.y = e.clientY;
}

function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

function draw(e) {
  if (e.buttons !== 1) return;

  ctx.beginPath();
  ctx.lineCap = "round";

  ctx.moveTo(mousePos.x, mousePos.y);

  mousePosition(e);
  ctx.lineTo(mousePos.x, mousePos.y);
  ctx.stroke();
}



// upper canvas for bg effect
var canvas1 = document.getElementById("canvas1");
var ctx1 = canvas1.getContext("2d");
canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;
var particles = [];
var num_particles = 150;
//Helper function to get a random color - but not too dark
function GetRandomColor() {
    var r = 0, g = 0, b = 0;
    while (r < 100 && g < 100 && b < 100)
    {
      r = Math.floor((1 + Math.random()) * 256/3);
      g = Math.floor((1 + Math.random()) * 256/3);
      b = Math.floor((1 + Math.random()) * 256/3);
    }

    return "rgb(" + r + "," + g + ","  + b + ")";
}
//Particle object with random starting position, velocity and color
var Particle = function () {
    this.x = canvas1.width * Math.random();
    this.y = canvas1.height * Math.random();
    this.vx = 4 * Math.random() - 2;
    this.vy = 4 * Math.random() - 2;
    this.Color = GetRandomColor();
}

Particle.prototype.Draw = function (ctx) {
    ctx1.fillStyle = this.Color;
    ctx1.fillRect(this.x, this.y, 4, 4);
}
Particle.prototype.Update = function () {
  this.x += this.vx;
  this.y += this.vy;

  if (this.x<0 || this.x > canvas1.width) this.vx = -this.vx;

  if (this.y < 0 || this.y > canvas1.height) this.vy = -this.vy;
}
function loop() {
  ctx1.clearRect(0, 0, canvas1.width, canvas1.height);

  for (var i = 0; i < num_particles; i++) {
      particles[i].Update();
      particles[i].Draw(ctx1);
  }
  requestAnimationFrame(loop);
}
//Create particles
for (var p = 0; p < num_particles; p++)
    particles.push(new Particle());
loop();