//The URIs of the REST endpoint
IUPS = "https://prod-236.westeurope.logic.azure.com:443/workflows/37da32c376f3455a849042465c6ca58a/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=rV2RJ4KKftoM13ES54EfkRAQdqeVNBIt2WTE-Txj4q8";
RAI = "https://prod-55.westeurope.logic.azure.com:443/workflows/1058f64d538849bfab4c08054b2be9ad/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=vgmxDg77LY1STzTxJtOpTkgTQOB4f3UCJJ7OY_oEeLA";
baseDAI = "https://prod-222.westeurope.logic.azure.com/workflows/25e8cff2ac09496c9da231a5fb69212d/triggers/manual/paths/invoke/rest/v1/images/";
endDAI = "?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Y8i9O63SOHtPxKnYlne1hu3lrVDFg-W38fY77acaDV4";
baseEAI="https://prod-50.westeurope.logic.azure.com/workflows/ca43ddb178774ebcac0cbb8d4106d717/triggers/manual/paths/invoke/rest/v1/images/";
endEAI="?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=B3OOdL7rHds__Y1O_16CZDtKcU3_O2VKXe7Y2CcIV7I";
signupURL = "https://prod-64.westeurope.logic.azure.com:443/workflows/92b286fdb976495b95275dc2cfca043c/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=vd9-Wvi2eTmCFKz0u29bw4vOdZRr__7rhVXX4YyTakI"



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
