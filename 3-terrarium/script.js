function dragElement(terrariumElement) {
  // set 4 positions for positioning on the screen
  let [pos1, pos2, pos3, pos4] = [0, 0, 0, 0];

  terrariumElement.onpointerdown = pointerDrag;

  function pointerDrag(e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
  }

  function elementDrag(e) {
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
    terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
  }

  function stopElementDrag() {
    document.onpointerup = null;
    document.onpointermove = null;
  }
}

for (let i = 1; i <= 14; i++) {
  dragElement(document.getElementById(`plant${i}`));
}