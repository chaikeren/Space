
document.getElementById("button").addEventListener("click",
function(){
    document.querySelector(".signin-container").style.display = "flex";
})
document.getElementById("close").addEventListener("click",
function() {
    document.querySelector(".signin-container").style.display = "none";
})
  
function myFunction() {
    var x = document.getElementById("showcard1");
    var y = document.getElementById("showcard2");
    var z = document.getElementById("showcard3");
    if (z.style.display === "block" && y.style.display === "none" && x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    } 
    else if (y.style.display === "block" && z.style.display === "none" && x.style.display === "none") {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";
    } 
    else if (x.style.display === "block" && y.style.display === "none") {
        x.style.display = "none";
        y.style.display = "block";
      } 
    else {
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
    }
  }

