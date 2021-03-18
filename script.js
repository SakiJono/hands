//クリア
const clear = document.getElementById('clear');
const text = document.getElementById('text');
clear.onclick = function () {
  text.textContent = '';

}



//peace表示
function peace(landmarks, isRightHand) {
  const text = document.getElementById('text');
  if (landmarks) {
    text.textContent = "ok";
  };

  //3秒間記録
  const count3 = document.getElementById('count3');
  const handsarray = document.getElementById('handsarray');
  if (count3.classList.contains('record') == true) {
    if (isRightHand == true) {
      handsarray.innerHTML = handsarray.innerHTML += landmarks[0].x + "right" + "</br>";
    } else {
      handsarray.innerHTML = handsarray.innerHTML += landmarks[0].x + "left" + "</br>";
    }
    console.log(landmarks, isRightHand);
  }

  count3.onclick = function () {
    count3.style.color = "red";
    count3.classList.toggle('record');
    function timeup() {
      count3.style.color = "#000000";
      count3.classList.toggle('record');
    };
    setTimeout(timeup, 3000);
  }

}