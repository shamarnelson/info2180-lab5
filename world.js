window.onload=function(){
    var httpRequest=new XMLHttpRequest();
    var button=document.getElementsByClassName("btn");

    button[0].addEventListener("click", function(n)){

        n.preventDefault();
        var url="http://localhost:8888/world.php";
        
    }
}