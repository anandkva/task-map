const display = (val) => {
    let screen = document.getElementById("result")
    screen.value += val
};
const solve = () => {
    let screen = document.getElementById("result")
    try {
        let x = screen.value
        if (x == "") {
            screen.value = "0"
        } else {
            let y = eval(x)
            screen.value = y
        }
    }
    catch (err) {
        screen.value = err
    }
};
const clr = () => {
    document.getElementById("result").value = ""
};
const del = () => {
    document.getElementById("result").value = screen.value.slice(0, -1)
};
const validate = (evt) => {
    var theEvent = evt || window.event;
    // Handle paste
    if (theEvent.type === 'keyV') {
       key = event.clipboardData.getData('text/plain');
       console.log("worked")
       
    } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9 \+ \- /* ]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        alert("Only Numbers")
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}
