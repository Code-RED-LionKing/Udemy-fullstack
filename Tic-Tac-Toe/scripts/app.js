let editedPlayer = 0;

const openPlayerConfigOverlayElement = document.getElementById('config-overlay');
const modal = document.getElementById("config-overlay");
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorOutputElement = document.getElementById('config-error');

const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');
const confirmConfigBtnElement = document.getElementById('confirm-config-btn')


editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);
cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
confirmConfigBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);


//ESC 와 ENTER 입력으로 modal edcape
//Udemy + ChatGPT 응용
//실행가능 NICE!!!!

modal.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        cancelConfigBtnElement.click();
        
    }
  });

