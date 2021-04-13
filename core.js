document.getElementById("nama").addEventListener("keypress", filter);
document.getElementById("nrp").addEventListener("keypress", filter);

function filter(ev) {
    console.log(ev)
    let key = ev.key;
    let number = /^[0-9]/;
    if (ev.target.id === 'nama') {
        if (key.match(number)) {
            ev.preventDefault()
        }
    }
    if (ev.target.id === 'nrp') {
        if (!key.match(number)) {
            ev.preventDefault()
        }
    }
}

agamaMsg = (el) => {
    alert('Anda telah memilih agama ' + el.value);
};

function sure() {
    if(confirm('yakin?')) {
        alert('data tersimpan')
    }
}

console.log(document.getElementById("form").elements);

validate = (el) => {
    for (let i = 0; i < el.length - 9; i++) {
        let inputName = el[i].name;
        if (el[i].value === '') {
            el[i].setCustomValidity('Anda belum mengisi ' + inputName);
            el[i].focus();
            return false;
        } else {
            el[i].setCustomValidity('');
        }
    }

    if (!el.gender[0].checked && !el.gender[1].checked) {
        alert('Untuk gender belum terisi, mohon dicek kembali');
        return false;
    }

    sure();
};