const display = (val) => {
    document.getElementById("result").value += val
}
const solve = () => {
    try {
        let x = document.getElementById("result").value
        if (x == "") {
            document.getElementById("result").value = "0"
        }else {
            let y = eval(x)
            document.getElementById("result").value = y
        }
    }
    catch (err) {
        document.getElementById("result").value = err
    }
}
const clr = () => {
    document.getElementById("result").value = ""
}
const del = () => {
    document.getElementById("result").value = document.getElementById("result").value.slice(0, -1)
}
