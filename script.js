function f1() {
    let valuess = document.querySelector("#values").value.trim();
    let out = document.querySelector("#output");
    if (!/^[01]+$/.test(valuess)) {
        out.innerText = "Invalid input! Enter only binary numbers.";
        return;
    }
    let onesComplement = valuess.split('').map(bit => bit === '0' ? '1' : '0').join('');
    console.log(onesComplement);
    out.innerText = "1s"+": "+onesComplement;
}

function f2() {
    let valuess = document.querySelector("#values").value.trim();
    let out = document.querySelector("#output");
    if (!/^[01]+$/.test(valuess)) {
        out.innerText = "Invalid input! Enter only binary numbers.";
        return;
    }
    let arr = valuess.split('');
    let foundOne = false; 
    for (let i = arr.length - 1; i >= 0; i--) {
        if (foundOne) {
            if (arr[i] === '0') {
                arr[i] = '1';
            } else {
                arr[i] = '0';
            }
        } 
        else if (arr[i] === '1') {
            foundOne = true;
        }
    }
    console.log(arr.join(''));
    out.innerText ="2s"+": "+ arr.join(''); 
}

