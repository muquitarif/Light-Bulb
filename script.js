function light(state)
{
  var image;
  if(state == 1)
    image = "./ON.png";
  
  else
    image = "./OFF.png";

   document.getElementById('light').src = image;
}



