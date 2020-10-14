var buah1 = "apel"
var buah2 = "nanas"
var buah3 = "pisang"

console.log(buah1)
console.log(buah2)
console.log(buah3)

var kumpulan_buah = ["apel", "nanas", "pisang"]
console.log(kumpulan_buah)
console.log(kumpulan_buah[1])

document.getElementById("arrayBuah").innerHTML = kumpulan_buah

console.log(kumpulan_buah.toString());
console.log(kumpulan_buah.join("-"));

console.log("menambah element array")
kumpulan_buah.push("jeruk");
var x = kumpulan_buah.push("melon")
console.log(kumpulan_buah)
console.log(x) //x hanya utk menghitung panjang array bkn buat var baru

console.log("menghapus element array")
kumpulan_buah.pop()
console.log(kumpulan_buah)
var y = kumpulan_buah.pop() //return nilai yg dikeluarkan adalah element terakhir yg dibuang
console.log(y)

console.log("cetak panjang array dgn length: " + kumpulan_buah.length)

console.log("unshift pada array js ato nambahin data didepan")
kumpulan_buah.unshift("semangka") //tambahin didepan
kumpulan_buah.unshift("rambutan") //tambahin didepan
console.log(kumpulan_buah)

console.log("shift pada array js ato hapus data didepan") 
kumpulan_buah.shift();
console.log(kumpulan_buah)

kumpulan_buah.splice(2,1,"naga","mengkudu")
console.log(kumpulan_buah)

harga_buah = [3000,2500,5000,6000,400]
gab_harga_buah = kumpulan_buah.concat(harga_buah)
console.log(gab_harga_buah)

pot_buah = gab_harga_buah.slice(3,7)
console.log(pot_buah)

console.log(gab_harga_buah.sort())
console.log(harga_buah.sort())
//kelemahan sort hny dari karakter a-z,0-9

console.log(harga_buah.sort(function(a,b){
    return b-a
}))

multidimensi_array = [["smgk",2500],["jrk",500]]
console.log(multidimensi_array[0][1])

