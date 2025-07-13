function updateText() {
  document.getElementById('textPreview').innerText = document.getElementById('textInput').value;
}

function updateStyle() {
  document.getElementById('textPreview').style.fontSize = document.getElementById('fontSize').value + 'px';
  document.getElementById('textPreview').style.color = document.getElementById('textColor').value;
  document.getElementById('canvasArea').style.backgroundColor = document.getElementById('bgColor').value;
}

function downloadImage() {
  html2canvas(document.querySelector("#canvasArea")).then(canvas => {
    let link = document.createElement('a');
    link.download = 'reel_text_image.png';
    link.href = canvas.toDataURL();
    link.click();
  });
}
