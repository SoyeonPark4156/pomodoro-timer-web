const input = document.getElementById('timerInput');
const saveBtn = document.querySelector('.btn-save');

const saved = localStorage.getItem('timerMinutes');
if (saved) {
  input.value = saved;
}

function validateInput() {
  const val = input.value;
  if (val === '' || val === null) {
    saveBtn.disabled = true;
    return;
  }
  const num = Number(val);
  saveBtn.disabled = num < 1 || num > 60;
}

input.oninput = validateInput;

saveBtn.onclick = function () {
  const minutes = Number(input.value);
  localStorage.setItem('timerMinutes', minutes);
  location.href = 'index.html';
};

validateInput();
