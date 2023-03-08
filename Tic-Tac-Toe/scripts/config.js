function openPlayerConfig(event) {
    const selectedPlayerId = +event.target.dataset.playerid; //+ '1' -> 1 (Numver)
    editedPlayer = selectedPlayerId;
    openPlayerConfigOverlayElement.style.display='block';
    backdropElement.style.display='block';
}

function closePlayerConfig() {

    openPlayerConfigOverlayElement.style.display='none';
    backdropElement.style.display='none';
    formElement.firstElementChild.classList.remove('error');
    errorOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = ''; //prectise DOM Structure // Confirm 클릭하지않고 backdrop 할때 입력된 playername 지워줌

}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get('playername').trim();
    // '    Max brendon    ' = >'Max brendon' what ".trim() do" trim will get rid of spaces

    if (!enteredPlayername) {
        event.target.firstElementChild.classList.add('error');
        errorOutputElement.textContent = 'Please enter a valid name!';
        
        return;
 
    }

    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayername;

   

    players[editedPlayer -1].name = enteredPlayername;
     /*if(editedPlayer === 1) {
        players[0].name = enteredPlayername;
    } else {
        players[1].name = enteredPlayername;
    } same working code*/ 

    closePlayerConfig(); //.modal closing
}
