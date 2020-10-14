nama = ["irna", "rafidah"]
umur = [23]

console.log("nama dan umur") 
gab_umur_nama = nama.concat(umur)
console.log(gab_umur_nama)

gab_umur_nama.splice(2,0,1996)
console.log("nama dan umur dan tahun")
console.log(gab_umur_nama) 

console.log("fungsi perulangan")
function tampil(array){
    for(i = 0; i < array.length; i++){
        console.log(array[i])
    }
}
tampil(gab_umur_nama);


var kurang_10 = document.getElementById("kurang_10")
var kurang_1 = document.getElementById("kurang_1")
var tambah_10 = document.getElementById("tambah_10")
var tambah_1 = document.getElementById("tambah_1")

kurang_10.onclick = function(){
    document.getElementById("input").value = operasi((-10))
}

kurang_1.onclick = function(){
    document.getElementById("input").value = operasi((-1))
}

tambah_10.onclick = function(){
    document.getElementById("input").value = operasi(10)
}

tambah_1.onclick = function(){
    document.getElementById("input").value = operasi(1)
}

function operasi (nilai){
    const angka = parseInt(document.getElementById("input").value)
    var hasil = angka + nilai
    return hasil
}
