var myImage = document.querySelector('img');

myImage.onclick = function ()
{
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/hippo.jpeg')
  {
	   myImage.setAttribute('src', 'images/hammer.png');
  } else
  {
	   myImage.setAttribute('src', 'images/hippo.jpeg');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('이름을 적으세요.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = '임채현의 포트폴리오입니다, ' + myName + '님';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = '임채현의 포트폴리오입니다, ' + storedName + '님 또오셨군요.';
}

myButton.onclick = function() {
  setUserName();
}
