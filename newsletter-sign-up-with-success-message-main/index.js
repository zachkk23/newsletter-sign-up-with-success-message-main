let paraEl = document.getElementById("paraEl")
function buttonEl() {
    var elem = document.getElementById("inputEl");
    var re = /^([a-zA-Z0-9_]+)@([a-zA-Z0-9_]+).([a-z]{2,20})$/

    if(re.test(elem.value)){
        paraEl.innerHTML = "Valid email"
        paraEl.style.color = "green"
        window.location.href = "http://127.0.0.1:5501/index2.html"
    }else {
         paraEl.innerHTML = "Invalid email"
        paraEl.style.color = "red"
       
    }
}