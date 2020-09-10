function getNumber(props) {
    let sendValue = document.querySelector("#form_control");
    switch (props) {
        case 1:
            sendValue.value += "1"
            break;
        case 2:
            sendValue.value += "2"
            break;
        case 3:
            sendValue.value += "3"
            break;
        case 3:
            sendValue.value += "3"
            break;
        case 4:
            sendValue.value += "4"
            break;
        case 5:
            sendValue.value += "5"
            break;
        case 6:
            sendValue.value += "6"
            break;
        case 7:
            sendValue.value += "7"
            break;
        case 8:
            sendValue.value += "8"
            break;
        case 9:
            sendValue.value += "9"
            break;
        case 0:
            sendValue.value += "0"
            break;
    }
}
function getBackspace() {
    var setValue = document.getElementById('form_control');
    var getValue = setValue.value;
    if (getValue.length > 0) {
        getValue = getValue.substring(0, getValue.length - 1);
        setValue.value = getValue;
    }
}
function getClear() {
    document.querySelector("#form_control").value = "";
}
function clickToGeneratePin() {
    const generateRandomNumber = Math.floor(1000 + Math.random() * 9000);
    // generateRandomNumber = generateRandomNumber.substring(-2);
    document.querySelector("#generatePinBox").value = generateRandomNumber;
}
function pinMatchedAndDoNotMach() {
    const generatedPin = document.getElementById("generatePinBox");
    const typedPin = document.getElementById("form_control");
    if (generatedPin.value.length >= 1) {
        if (generatedPin.value === typedPin.value) {
            document.querySelector("#notifyForPinMatched").style.opacity = "1";
            document.querySelector("#notifyForPinNotMatched").style.opacity = "0";
        }else {
            document.querySelector("#notifyForPinNotMatched").style.opacity = "1";
            document.querySelector("#notifyForPinMatched").style.opacity = "0";
        }
    }else{
        alert("Please Generate Pin")
    }
}