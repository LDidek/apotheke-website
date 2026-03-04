// FAQ Toggle Function
function showAnswer(idAnswer){
    for(let i=1; i<6; i++){
        if((document.getElementById("q"+i+'ans').classList.contains("hidden") == false) && (("q"+i) != idAnswer)){
            document.getElementById("q"+i+'ans').classList.add("hidden");
            if(document.getElementById("q"+i+'svg').classList.contains("-rotate-90")){
                document.getElementById("q"+i+'svg').classList.remove("-rotate-90");
                document.getElementById("q"+i+'svg').classList.add("rotate-90");
            }
        }
    }
    document.getElementById(idAnswer+'ans').classList.toggle("hidden");
    if(document.getElementById(idAnswer+'svg').classList.contains("rotate-90")){
        document.getElementById(idAnswer+'svg').classList.remove("rotate-90");
        document.getElementById(idAnswer+'svg').classList.add("-rotate-90");
    } else {
        document.getElementById(idAnswer+'svg').classList.remove("-rotate-90");
        document.getElementById(idAnswer+'svg').classList.add("rotate-90");
    }
}
