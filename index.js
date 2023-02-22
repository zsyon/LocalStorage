let arttır = document.addEventListener(`click`, function(){
  caunter = document.getElementById("sayı").innerHTML
  console.log(caunter)
  sayi = Number(caunter) + 1
  document.getElementById("sayı").innerHTML = caunter
  caunter = localStorage.getItem('caunter');
  let arttir = localStorage.setItem('caunter', caunter)
  localStorage.getItem('caunter') ? localStorage.getItem('caunter') : 0
})