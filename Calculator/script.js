function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    let display = document.getElementById("display").value;
    
    // Handling "mod" separately
    if (display.includes("mod")) {
        let values = display.split("mod");
        if (values.length === 2) {
            document.getElementById("display").value = parseFloat(values[0]) % parseFloat(values[1]);
            return;
        }
    }

    // Handling Percentage
    if (display.includes("%")) {
        let values = display.split("%");
        if (values.length === 2 && values[1] === "") {
            document.getElementById("display").value = parseFloat(values[0]) / 100;
            return;
        }
    }

    try {
        document.getElementById("display").value = eval(display);
    } catch {
        document.getElementById("display").value = "Error";
    }
}
