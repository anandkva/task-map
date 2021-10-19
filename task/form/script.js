const getfunc = () => {
    var fullname = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var pin = document.getElementById("pin").value;
    var gender = document.getElementById("gender").value;
    var food = document.getElementById("food").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;
    alert(`
            Name: ${fullname} 
            Address: ${address} 
            pin: ${pin}
            Gender: ${gender} 
            Food: ${food} 
            State: ${state}
            country: ${country}`)
}