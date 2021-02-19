//クリア
const clear = document.getElementById('clear');
const text = document.getElementById('text');
clear.onclick = function () {
  text.textContent = '';

}


//peace表示
function peace(landmarks) {
  const text = document.getElementById('text');
  const endtext = text.value[text.value.length - 1]
  if (landmarks[2].x < landmarks[4].x && landmarks[14].y < landmarks[16].y && landmarks[18].y < landmarks[20].y && landmarks[8].y < landmarks[7].y && landmarks[12].y < landmarks[11].y) {
    if (endtext != 'e' && landmarks[9].x - landmarks[5].x < landmarks[12].x - landmarks[8].x) {
      text.innerHTML = text.innerHTML + 'peace';
    } else if (endtext != 'う' && landmarks[9].x - landmarks[5].x > landmarks[12].x - landmarks[8].x) {
      text.innerHTML = text.innerHTML + 'う';
      console.log("う")
    }
  } else if (landmarks[4].x < landmarks[2].x && landmarks[6].y < landmarks[8].y && landmarks[10].y < landmarks[12].y && landmarks[14].y < landmarks[16].y && landmarks[18].y < landmarks[20].y) {
    if (endtext != 'あ') {
      text.innerHTML = text.innerHTML + 'あ';
    }
  } else if (landmarks[3].x < landmarks[4].x && landmarks[6].y < landmarks[8].y && landmarks[10].y < landmarks[12].y && landmarks[14].y < landmarks[16].y && landmarks[20].y < landmarks[18].y) {
    if (endtext != 'い') {
      text.innerHTML = text.innerHTML + 'い';
    }
  } else if (landmarks[3].x < landmarks[4].x && landmarks[6].y < landmarks[8].y && landmarks[10].y < landmarks[12].y && landmarks[14].y < landmarks[16].y && landmarks[18].y < landmarks[20].y) {
    if (endtext != 'え') {
      text.innerHTML = text.innerHTML + 'え';
    }
  };
}