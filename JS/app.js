//The URIs of the REST endpoint
IUPS = "https://prod-21.northeurope.logic.azure.com:443/workflows/edc2a3da13e442d191b0ecd3928b6cd1/versions/08585638448633974877/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Fversions%2F08585638448633974877%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=4HqwrZMWAB5i_145dZrRFOEJ8JVoQa7kWSYhCYIazj0";
RAI = "https://prod-21.northeurope.logic.azure.com:443/workflows/edc2a3da13e442d191b0ecd3928b6cd1/versions/08585638341013660249/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Fversions%2F08585638341013660249%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=D0Tf6fxxXA-oAlqLD5DO_ThtYk0gXTtYDpgsJH3bxYk";
baseDAI = "https://prod-21.northeurope.logic.azure.com/workflows/edc2a3da13e442d191b0ecd3928b6cd1/versions/08585637595693042086/triggers/manual/paths/invoke/rest/v1/images/";
endDAI = "?api-version=2016-10-01&sp=%2Fversions%2F08585637595693042086%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=pBVFBUIOoAyXFd3V-JR69Ue_9MC7TmGaKIik_3wbHag";
baseEAI="https://prod-21.northeurope.logic.azure.com/workflows/edc2a3da13e442d191b0ecd3928b6cd1/triggers/manual/paths/invoke/rest/v1/images/";
endEAI="?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=c1QL0nvPY6N_dPhuHbFBEBphmPpUkUBcSIt9q58O4Zo";
signupURL = "https://prod-21.northeurope.logic.azure.com:443/workflows/edc2a3da13e442d191b0ecd3928b6cd1/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=c1QL0nvPY6N_dPhuHbFBEBphmPpUkUBcSIt9q58O4Zo"



BLOB_ACCOUNT = "https://blobstorageah.blob.core.windows.net";

//Handlers for button clicks
$(document).ready(function() {

 
  $("#retImages").click(function(){

      //Run the get asset list function
      getImages();

  }); 

   //Handler for the new asset submission button
  $("#subNewForm").click(function(){

    //Execute the submit new asset function
    submitNewAsset();
    
  }); 

  $("#delete").click(function(){

    //Execute the submit new asset function
    deleteImage(id);
    
  }); 

  $("#signupForm").click(function(){

    //Execute the register user function
    signup();
    
  }); 


});

function signup(){
  //Create a form data object
   submitData = new FormData();
   //Get form variables and append them to the form data object
   submitData.append('FirstName', $('#FirstName').val());
   submitData.append('Surname', $('#surname').val());
   submitData.append('Username', $('#userName').val());
   submitData.append('Password', $("#password").val());
  
   //Post the form data to the endpoint, note the need to set the content type header
    $.ajax({
      url: signupURL,
      data: submitData,
      cache: false,
      enctype: 'application/x-www-form-urlencoded',
      contentType: false,
      processData: false,
      type: 'POST',
      success: function(data){
      
      }
    });
  }

//A function to submit a new asset to the REST endpoint
function submitNewAsset(){
  //Create a form data object
   submitData = new FormData();
   //Get form variables and append them to the form data object
   submitData.append('FileName', $('#FileName').val());
   submitData.append('userID', $('#userID').val());
   submitData.append('userName', $('#userName').val());
   submitData.append('File', $("#UpFile")[0].files[0]);
  
   //Post the form data to the endpoint, note the need to set the content type header
   $.ajax({
   url: IUPS,
   data: submitData,
   cache: false,
   enctype: 'multipart/form-data',
   contentType: false,
   processData: false,
   type: 'POST',
   success: function(data){
  
   }
   });
  }



//A function to get a list of all the assets and write them to the Div with the AssetList Div
function getImages(){
  //Replace the current HTML in that div with a loading message
  $('#ImageList').html('<div class="spinner-border" role="status"><span class="sr-only">&nbsp;</span>');
   $.getJSON(RAI, function( data ) {
   //Create an array to hold all the retrieved assets
   var items = [];
  let x = 1;
   //Iterate through the returned records and build HTML, incorporating the key values of the record in the data
   $.each( data, function( key, val ) {
     
   items.push( "<hr />");
   items.push("<img src='"+BLOB_ACCOUNT + val["filePath"] +"' width='400'/> <br />")
   items.push( "File : " + val["fileName"] + "<br />");
   items.push( "Uploaded by: " + val["userName"] + " (user id: "+val["userID"]+")<br />");
   items.push( "<hr />");
   items.push('<button type="button" id="delete" onclick="deleteImage(\''+val["id"]+'\')">Delete</button>');
   items.push('<div class="mb-3"><label for="FileName" class="form-label">File Name</label><input type="text" class="form-control" id="editFileName" </div>')
   items.push('<div class="mb-3"><label for="UserID" class="form-label">UserID</label><input type="text" class="form-control" id="edituserID" </div>')
   items.push('<div class="mb-3"><label for="Username" class="form-label">Username</label><input type="text" class="form-control" id="edituserName" </div>')
   items.push('<div class="mb-3"> <label for="UpFile" class="form-label">File to edit</label><input type="file" class="form-control" id="editFile"></div>')
   items.push('<button type="button" id="edit" onclick="editImage(\''+val["id"]+'\')">Edit</button>');
   alert(x)
   x = x+1;
   });
   //Clear the assetlist div
   $('#ImageList').empty();
   //Append the contents of the items array to the ImageList Div
   $( "<ul/>", {
   "class": "my-new-list",
   html: items.join( "" )
   }).appendTo( "#ImageList" );
   });
  }

  function deleteImage(id){
    String(id)
    $.ajax({
    type: "DELETE",
    //Note the need to concatenate the
    url: baseDAI + id + endDAI}).done(function( msg ) {
    });
    }

    function editImage(id){
      //Create a form data object
       submitData = new FormData();
       //Get form variables and append them to the form data object
       submitData.append('FileName',  $('#editFileName').val());
       submitData.append('userID',  $('#edituserID').val());
       submitData.append('userName',  $('#edituserName').val());
       submitData.append('File', $("#editFile")[0].files[0]);

      
       //Post the form data to the endpoint, note the need to set the content type header
       $.ajax({
       url: baseEAI + id + endEAI,
       data: submitData,
       cache: false,
       enctype: 'multipart/form-data',
       contentType: false,
       processData: false,
       type: 'PUT',
       success: function(data){
      
       }
       });
      }