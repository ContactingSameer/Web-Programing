function changeImage()
{
var img1=document.getElementById("image1").style;
var img2=document.getElementById("image2").style;
if(img1.visibility=="visible")
{
img1.visibility="hidden";
img2.visibility="visible";
}
else
{
img1.visibility="visible";
img2.visibility="hidden";
}
}
