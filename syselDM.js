//create body element and it's settings //
var body = document.querySelector('body');
body.style.backgroundColor = '#8f866d';
//creating grid container//
var gridContainer = document. createElement('div');
gridContainer.classList.add('.gridContainer');
gridContainer.style.border = ' 0.2em solid black';
body.appendChild(gridContainer);
//placing head tag and head item//
var itemHead = document.createElement('div');
gridContainer.appendChild(itemHead);
itemHead.classList.add('.itemHead');
itemHead.classList.add('.items');
itemHead.style.border = ' 0.5em  solid brown';
var headElement = document.createElement('h1');
headElement.textContent = ' Disco metal playlist';
headElement.classList.add('.itemHead');
headElement.style.color = 'black';
headElement.style.border = '0.2em dashed red';
itemHead.appendChild(headElement);
//styling head tag//
headElement.style.textTransform = ' uppercase';
headElement.style.textShadow = '-3px 4px 2px rgba(53, 16, 0, 0.81) ';
headElement.style.textAlign = 'center';
// time in the left corner//
var datum = document.createElement('p');
datum.setAttribute('id','date');
body.appendChild(datum);
//time function//
function clockTick() {
  var currentTime = new Date(),
      day = currentTime.getDate(),
      month = currentTime.getMonth() + 1,
      year = currentTime.getFullYear(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes(),
      seconds = currentTime.getSeconds(),
      text = (day + '.' + month + '.' + year + ' ' + hours + ':' + minutes + ':' + seconds);
 
  document.getElementById('date').innerHTML = text;
}
setInterval(clockTick, 1000);
//css to <p id='date'>//
datum.style.position = 'fixed';
datum.style.top = '1.8em';
datum.style.left = '1.07em';
datum.style.maxWidth = '10em';
datum.style.padding = '0.18em 0.42em';
datum.style.backgroundColor = '#7d8a9e ';
datum.style.border = ' 0.2em outset rgb(12,155,74)';
datum.style.borderRadius = '25em';
datum.style.opacity = "0.58 ";
datum.style.zIndex = -2;
//hr line//
let HrLine =  document.createElement('hr');
body.appendChild(HrLine);
HrLine.style.lineHeight = '1.5em';
HrLine.style.color = 'black';
//input fields grid-item//
var itemInp = document.createElement('div');
itemInp.classList.add('.itemInp');
itemInp.classList.add('.items');
itemInp.style.border = ' 3px solid green';
gridContainer.appendChild(itemInp);
//adding an input fields-first bandname//
var inpBand = document.createElement('input');
inpBand.setAttribute('id','bandName');
inpBand.setAttribute('placeholder','Enter band name');
inpBand.setAttribute('class','inputClass');
inpBand.setAttribute('type','text');
itemInp .appendChild(inpBand);
//adding an input fields-second, song name//
var inpSong = document.createElement('input');
inpSong.setAttribute('id','songName');
inpSong.setAttribute('placeholder','Enter song name');
inpSong.setAttribute('class','inputClass');
inpSong.setAttribute('type','text');
itemInp .appendChild(inpSong);
//adding an input fields-third, album name//
var inpAlb = document.createElement('input');
inpAlb.setAttribute('id','albumName');
inpAlb.setAttribute('placeholder','Enter album name');
inpAlb.setAttribute('class','inputClass');
inpAlb.setAttribute('type','text');
itemInp .appendChild(inpAlb);
//adding an input fields-fourth, Country//
var inpState = document.createElement('input');
inpState.setAttribute('id','stateName');
inpState.setAttribute('placeholder','Enter country band is from');
inpState.setAttribute('class','inputClass');
itemInp .appendChild(inpState);
//adding an input fields-fifth, year released//
var inpYear = document.createElement('input');
inpYear.setAttribute('id','publishYear');
inpYear.setAttribute('placeholder','Year song was released ');
inpYear.setAttribute('class','inputClass');
inpYear.type = 'number';
itemInp .appendChild(inpYear);
//adding an submit button//
var subBtn = document.createElement('button');
subBtn.setAttribute('id','subSongBtn');
subBtn.classList.add('.BtnClass');
subBtn.textContent  = 'Submit song ';
subBtn.addEventListener('click',songAdder)
itemInp.appendChild(subBtn);
//adding songcharter  array lists//
var itemWanted = document.createElement('div');
gridContainer.appendChild(itemWanted);
itemWanted.classList.add('.items');
gridContainer.appendChild(itemWanted);

//unwanted lists//
var itemUnwanted = document.createElement('div');
gridContainer.appendChild(itemUnwanted);
itemUnwanted.classList.add('.items');
gridContainer.appendChild(itemUnwanted);
//creating function//
function songAdder(){
    let mark = document.createElement('p');
itemWanted.appendChild(mark);
    suma = inpBand.value;
    console.log(suma);
    mark = suma.innerHTML;
    console.log(mark);
    
 
}





