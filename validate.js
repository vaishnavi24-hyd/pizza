function validate()
{
var n=document.getElementById("name").value;
var e=document.getElementById("email").value;
var p=document.getElementById("pizza").value;
var s=document.getElementById("size").value;
var q=document.getElementById("quantity").value;

if(n == "" || e == "" || p == "" || s == "" || q == "")
{
document.getElementById("msg").innerHTML = "Fill all the fields";
}
else if(!e.includes("@") && !e.includes("."))
{
document.getElementById("msg").innerHTML = "Enter valid email";
}
else if(q<=0)
{
document.getElementById("msg").innerHTML = "Enter quantity";
}
else
{
document.getElementById("msg").innerHTML = "Order placed successfully";
}
return false;
}