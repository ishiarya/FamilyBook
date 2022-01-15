var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","IMG_202111104", "IMG_20211010.jpg" , "IMG_202111101.jpg", "IMG_20171019_211256.jpg"];
           
var names = ["Fmaily Book","Ishita Kharya", "Eshan Kharya", "Rachna Kharya", "Umesh Kharya"];
          
var i = 0;
function update()
{
     i++;
     var numbers_of_family_member_in_array = 5
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName; 