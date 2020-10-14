function cetakNama(nama) {
    return "halo selamat pagi " + nama
}

function cetakNama2(nama) {
   console.log( "halo selamat pagi " + nama)
}

function volKubus(sisi) {
    return sisi*sisi*sisi
}

function pangkat(nilai_angka, nilai_pangkat) {
    var hasil = 1;
    for(i=0;i<nilai_pangkat;i++) {
        hasil = hasil * nilai_angka
    }

    return hasil;
}

function greeting(nama,waktu) {
    alert("halo selamat "+waktu+" "+nama)
}

var tombol_greeting = document.getElementById("tombol_greeting")
tombol_greeting.onclick = function() {
    greeting("irna", "sore")
}

var nilai_angka = document.getElementById("nilai_angka")
var nilai_pangkat = document.getElementById("nilai_pangkat")
var tombol_hitung_pangkat = document.getElementById("tombol_hitung_pangkat")
var hasil_pangkat = document.getElementById("hasil_pangkat")

tombol_hitung_pangkat.onclick = function() {
    hasil_pangkat.value = pangkat(nilai_angka.value, nilai_pangkat.value)
}

var data_list_pelajaran = ["HTML", "CSS", "JS"]
var nama_pelajaran = document.getElementById("nama_pelajaran")
var tombol_tambah_pelajaran = document.getElementById("tambah_pelajaran")

function tampilkanListPelajaran() {
    var list_pelajaran = document.getElementById("list_pelajaran")
    list_pelajaran.innerHTML = ""

    for(i=0;i<data_list_pelajaran.length;i++) {
        list_pelajaran.innerHTML += "<li>"+ data_list_pelajaran[i]+"<button class='btn btn-danger' type='button' onclick='hapusPelajaran("+i+")'>hapus</button>"+"</li>"
    }
}

function hapusPelajaran(index) {
    data_list_pelajaran.splice(index,1)
    tampilkanListPelajaran()
}

function tambahPelajaran() {
    data_list_pelajaran.push(nama_pelajaran.value)
    nama_pelajaran.value = ""
    tampilkanListPelajaran()
}
tombol_tambah_pelajaran.onclick = function() {
    tambahPelajaran();
}

tampilkanListPelajaran()



//kalo pake return harus buat variabel penampung

console.log(cetakNama("irna"))
console.log(cetakNama("Rafidah"))
cetakNama2("sayang")

console.log("vol kubusnya " + volKubus(3))

console.log("hasil pangkat "+pangkat(2,3))