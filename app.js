let moivePicker = [
    'Free Fire', 'The outlaw king', 'the king speech', 'big time adolescence', 'little women'
]

function randomMoivePicker() {
    let randomMoivePicker = moivePicker[Math.floor(Math.random()*moivePicker.length)];
    let firstButton = document.getElementById("firstButton");
    firstButton.innerHTML = randomMoivePicker;
     

}



let showPicker = [
    'the last kingdom', 'peaky blinders','breaking bad', 'you', 'ozark', 
]

 

function randomShowPicker() {
    let randomShowPicker = showPicker[Math.floor(Math.random()*showPicker.length)];
    let secondButton = document.getElementById("secondButton");
    secondButton.innerHTML = randomShowPicker

}
 