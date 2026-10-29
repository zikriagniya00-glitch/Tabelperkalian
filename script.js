function buatTabel() {
    let angka = Number(document.getElementById("angka").value);
    let teks = "";

     const hasil = document.getElementById("hasil");
    let input = document.getElementById("angka").value;
    
    if (input === "") {
        hasil.innerHTML = "Masukkan angka terlebih dahulu!";
        return;
    }
    let batas = Number(document.getElementById("batas").value);

    for (let i = 1; i <= batas; i++){
        teks += angka + " x " + i + " = " + (angka * i) + "<br>";
    }

    document.getElementById("hasil").innerHTML = teks;
}
function faktorial(n) {
    let hasil = 1;

    for (let i = 2; i <= n; i++) {
        hasil *= i;
        
    }
    return hasil;
    
}
console.log(faktorial(5));



