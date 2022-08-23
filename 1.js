function checks()
{
var empty="The following textboxes are empty";
var tcount=document.textboxForm.elements.length;
var count=0;
for (var i=0;i<tcount;i++)
{
if (document.textboxForm.elements[i].value.length==0)
{
empty=empty+document.textboxForm.elements[i].name+"\n";
count++;
}
}
if (count==0)
window.alert("all textboxes are filled");
else if(count==tcount-1)
window.alert("no textboxes are filled");
else
window.alert(empty);
}