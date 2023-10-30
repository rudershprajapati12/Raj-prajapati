var  h1_tag = document.getElementById("inputBox");

console.log(h1_tag.value);

  function a1(n)
  {
 h1_tag.value = h1_tag.value + n;
  }

function equal()
{
  h1_tag.value = eval(h1_tag.value);
}
function d1()
{
  h1_tag.value="";
}
function dele()
{
   
  h1_tag.value= h1_tag.value.slice(0,-1);
}