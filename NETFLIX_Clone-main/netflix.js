document.getElementById("ans1").style.display = "none";
document.getElementById("ans2").style.display = "none";
document.getElementById("ans3").style.display = "none";
document.getElementById("ans4").style.display = "none";
document.getElementById("ans5").style.display = "none";
document.getElementById("ans6").style.display = "none";

function change(id)
{
    if(document.getElementById(("ans" + id)).style.display == "none")
    {
        document.getElementById(("ans" + id)).style.display = "block";
        document.getElementById(("plus" + id)).innerHTML = "X";
    }
    else
    {
        document.getElementById(("ans" + id)).style.display = "none";
        document.getElementById(("plus" + id)).innerHTML = "+";
    }
}
