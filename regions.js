const navBtn = document.querySelector(".bar");
const navList = document.querySelector(".nav-list");

navBtn.addEventListener("click", function() {
    let toggle = navList.classList.contains("collapse");
    
    if(toggle) {
        navList.classList.remove("collapse");
    }
    else {
        navList.classList.add("collapse");
    }


})