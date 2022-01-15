var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","IMG_6580.jpg", "IMG_20201114_190305.jpg" , "IMG_20200215_212856.jpg", "IMG_202000415_114643.jpg" ];
var names = ["Fmaily Book","Ishita Kharya", "Eshan Kharya", "Rachna Kharya", "Umesh Kharya"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [IMG_6580.jpg , IMG_20201114_190305.jpg , IMG_20200215_212856.jpg , IMG_20200415_114643.jpg]
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [Ishita Kharya and Eshan Kharya , Eshan Kharya and Umesh Kharya , Eshan Kharya and Ishita Kharya , Rachna Kharya and Umesh Kharya] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
