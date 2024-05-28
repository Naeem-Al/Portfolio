const nav=document.querySelector('.bar')
fetch('/src/navbar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
})