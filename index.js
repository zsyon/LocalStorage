arttır = document.getElementById("arttır")
azalt = document.getElementById("azalt")

function sayıArttır(){
  console.log("aaaa")
  sayi = document.getElementById("sayı").innerHTML
  console.log(sayi)
  sayi = Number(sayi) + 1
  document.getElementById("sayı").innerHTML = sayi
  console.log(sayi)

  let arttır = localStorage.getItem('sayi', sayi);
  localStorage.getItem('sayi')



}