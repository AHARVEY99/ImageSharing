//The URIs of the REST endpoint


IUPS = "https://prod-236.westeurope.logic.azure.com:443/workflows/37da32c376f3455a849042465c6ca58a/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=rV2RJ4KKftoM13ES54EfkRAQdqeVNBIt2WTE-Txj4q8";
baseInsertImage = "https://prod-236.westeurope.logic.azure.com/workflows/37da32c376f3455a849042465c6ca58a/triggers/manual/paths/invoke/rest/v1/images/"
endInsertImage = "?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=rV2RJ4KKftoM13ES54EfkRAQdqeVNBIt2WTE-Txj4q8"
baseRAI = "https://prod-90.westeurope.logic.azure.com/workflows/c78aab9b6fa6453ea57a6bf97be4ecae/triggers/manual/paths/invoke/rest/v1/images/";
endRAI ="?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=lTsAoqfWGVhSqi0y5oquOpdO88PpEoqzFeiGXWocKAc"
baseDAI = "https://prod-222.westeurope.logic.azure.com/workflows/25e8cff2ac09496c9da231a5fb69212d/triggers/manual/paths/invoke/rest/v1/images/";
endDAI = "?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Y8i9O63SOHtPxKnYlne1hu3lrVDFg-W38fY77acaDV4";
baseEAI="https://prod-50.westeurope.logic.azure.com/workflows/ca43ddb178774ebcac0cbb8d4106d717/triggers/manual/paths/invoke/rest/v1/images/";
endEAI="?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=B3OOdL7rHds__Y1O_16CZDtKcU3_O2VKXe7Y2CcIV7I";
signupURL = "https://prod-21.northeurope.logic.azure.com:443/workflows/edc2a3da13e442d191b0ecd3928b6cd1/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=c1QL0nvPY6N_dPhuHbFBEBphmPpUkUBcSIt9q58O4Zo"
baseloginURL = "https://prod-19.westeurope.logic.azure.com/workflows/a0f981c4be61478da3a0d0f20fb1d1e3/triggers/manual/paths/invoke/rest/v1/images/";
endloginURL = "?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Da0ossdoqNbceuffBZgdW0G5KG4giYoEPJjfF9_c_gE"
basegetUserURL = "https://prod-150.westeurope.logic.azure.com/workflows/d44e80cbb06049a4961e70bbee859a41/triggers/manual/paths/invoke/rest/v1/images/"
endgetUserURL = "?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=QE4GWO2ZwNe_WKTzNV_7SDsOrFtnqRFntszEuzdQXBw"
basefollowUserURL = "https://prod-17.northcentralus.logic.azure.com/workflows/fd66a1e1e0984c0a8a2ee88995644b3b/triggers/manual/paths/invoke/rest/v1/images/"
endfollowUserURL = "?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=9hvSz6oKBrhxLVgwzTYjdLzpqYSOX409ouUKvQ9S1dg"
AnalyseIMAGEURL = "https://prod-136.westeurope.logic.azure.com:443/workflows/d1906de0a56e4183bb16b9fdde208a5d/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=77dlwMA6QBwmBPNRPWzr9XeSIOjqywnxGdi57-ZKyDk"
baseMyImages = "https://prod-28.westeurope.logic.azure.com/workflows/f70166a6f1db4fc6bd04c1f9c508621d/triggers/manual/paths/invoke/rest/v1/images/"
endMyImages = "?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=mvMqXJzHBIjSc05mrcL_RkEdBce2ZMqPYGGcZaKBQFI"
CommentsURL = "https://prod-144.westeurope.logic.azure.com:443/workflows/c27e8ad9fa414ea8aa91cada86f3cf6e/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=lrogiPZC0bxtKrHUgc9RbfhurWCI4j6qSVzzCjdZ2eU"
baseAddcomment="https://prod-102.westeurope.logic.azure.com/workflows/da6f364d2e1341b6a0a38346076a7180/triggers/manual/paths/invoke/rest/v1/images/"
endAddComment="?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=OR3x_mQykbnXQ-1xaMBws9NUyUxR1mwMPgohmq-ae54"
BLOB_ACCOUNT = "https://blobstorageah.blob.core.windows.net";
//Handlers for button clicks
$(document).ready(function() {


   //Handler for the new asset submission button
  $("#subNewForm").click(function(){

    //Execute the submit new asset function
    submitNewAsset();
    
  });



  $("#delete").click(function(){

    //Execute the submit new asset function
    deleteImage(id);
    
  }); 

  $("#loginform").click(function(){

    //Execute the register user function
    login();
    
  }); 

  $("#signupForm").click(function(){

    //Execute the register user function
    signup();
    
  }); 

  getUsers();
  getImages();
  getMyImages();
  getComments();


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


  function login(){
  
   username =  ('Username',$('#userName').val());
  password =  ('Password',$("#password").val());
     //Post the form data to the endpoint, note the need to set the content type header
      $.ajax({
        url: baseloginURL + username + '/' + password + endloginURL,
        type: 'GET',
        success: function(data){
          sessionStorage.setItem("UserID",JSON.stringify(data["Table1"][0]["UserID"]))
          sessionStorage.setItem("Username",JSON.stringify(data["Table1"][0]["Username"]))
          alert("Login Successful!")
          $('#userName').val('')
          $("#password").val('');
           
        }
      });
    }

    function followUser(followid){
      userid = sessionStorage.getItem("UserID")

      $.ajax({
        url: basefollowUserURL + userid +"/"+ followid + endfollowUserURL,
        type: 'POST',
        success: function(data){
          alert("You have followed this user, view the image feed to see their posts.")
       
        }


    })}

//A function to submit a new asset to the REST endpoint
function submitNewAsset(){
  userid = sessionStorage.getItem("UserID")
  //Create a form data object
   submitData = new FormData();
   //Get form variables and append them to the form data object
   submitData.append('FileName', $('#FileName').val());
   submitData.append('userName', sessionStorage.getItem("Username"));
   submitData.append('File', $("#UpFile")[0].files[0]);
  
   //Post the form data to the endpoint, note the need to set the content type header
   $.ajax({
   url: baseInsertImage + userid + endInsertImage,
   data: submitData,
   cache: false,
   enctype: 'multipart/form-data',
   contentType: false,
   processData: false,
   type: 'POST',
   success: function(data){
     alert('Image Succesfully Uploaded')
     $('#FileName').val('')
      $("#UpFile").val('');
    

  
   }
   });
  }

  function getUsers(){
    //Replace the current HTML in that div with a loading message
    $('#UserList').html('<div class="spinner-border" role="status"><span class="sr-only">&nbsp;</span>');
    userid = sessionStorage.getItem("UserID")
     $.getJSON((basegetUserURL + userid+ endgetUserURL), function( data ) {
     //Create an array to hold all the retrieved assets
     var users = [];
     //Iterate through the returned records and build HTML, incorporating the key values of the record in the data
     $.each( data, function( key, val ) {
     users.push( "<hr />");
     users.push( "<hr />");
     users.push(val["UserID"])
     users.push(val["Username"])
     users.push('<button type="button" class="btn btn-primary" id="follow" onclick="followUser(\''+val["UserID"]+'\')">Follow</button>');
     });
     //Clear the assetlist div
     $('#UserList').empty();
     //Append the contents of the items array to the ImageList Div
     $( "<ul/>", {
     "class": "my-new-list",
     html: users.join( "" )
     }).appendTo( "#UserList" );
     });
    }


//A function to get a list of all the assets and write them to the Div with the AssetList Div
function getImages(){
  userid = sessionStorage.getItem("UserID")
  //Replace the current HTML in that div with a loading message
  $('#ImageList').html('<div class="spinner-border" role="status"><span class="sr-only">&nbsp;</span>');
   $.getJSON(baseRAI + userid + endRAI, function( data ) {
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
   items.push('<button type="button" class="btn btn-primary" id="Analyse" onclick="analyseimage(\''+val["filePath"]+'\')">Image Description</button><br>');
   items.push('<h5>Please Upload a comment.</h5>')
   items.push('<div class="mb-3"><label for="Comment" class="form-label">Comment</label><input type="text" class="form-control" id="Comment" </div>')
   items.push('<button type="button" class="btn btn-primary" id="comment" onclick="addComment(\''+val["id"]+'\')">Comment</button>');
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

  function getComments(){
  //Replace the current HTML in that div with a loading message
  $('#CommentList').html('<div class="spinner-border" role="status"><span class="sr-only">&nbsp;</span>');
   $.getJSON((CommentsURL), function( data ) {
   //Create an array to hold all the retrieved assets
   var Comment = [];
   //Iterate through the returned records and build HTML, incorporating the key values of the record in the data
   $.each( data, function( key, val ) {
   Comment.push( "<hr />");
   Comment.push( "<hr />");
   Comment.push("Comment by: UserID "+ val["UserID"]+ "<br>")
   Comment.push("Comment: "+val["Comment"]+ "<br>")
   Comment.push("ImageID: "+val["ImageID"])
   });
   //Clear the assetlist div
   $('#CommentList').empty();
   //Append the contents of the items array to the ImageList Div
   $( "<ul/>", {
   "class": "my-new-list",
   html: Comment.join( "" )
   }).appendTo( "#CommentList" );
   });
  }
  
  function addComment(ImageID){
    userid = sessionStorage.getItem("UserID")
    //Create a form data object
     submitData = new FormData();
     //Get form variables and append them to the form data object
     submitData.append('Comment', $('#Comment').val());
     submitData.append('ImageID', ImageID);
    
     //Post the form data to the endpoint, note the need to set the content type header
     $.ajax({
     url: baseAddcomment + userid + endAddComment,
     data: submitData,
     cache: false,
     enctype: 'multipart/form-data',
     contentType: false,
     processData: false,
     type: 'POST',
     success: function(data){
       alert('Comment Succesfully Added')
       $('#Comment').val('')
      
  
    
     }
     });
  }
  function getMyImages(){
    userid = sessionStorage.getItem("UserID")
    //Replace the current HTML in that div with a loading message
    $('#MyImageList').html('<div class="spinner-border" role="status"><span class="sr-only">&nbsp;</span>');
     $.getJSON(baseMyImages + userid + endMyImages, function( data ) {
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
     items.push('<button type="button" class="btn btn-primary" id="delete" onclick="deleteImage(\''+val["id"]+'\')">Delete</button>');
     items.push('<div class="mb-3"><label for="FileName" class="form-label">File Name</label><input type="text" class="form-control" id="editFileName" </div>')
     items.push('<div class="mb-3"> <label for="UpFile" class="form-label">File to edit</label><input type="file" class="form-control" id="editFile"></div>')
     items.push('<button type="button" class="btn btn-primary" id="edit" onclick="editImage(\''+val["id"]+'\')">Edit</button>');
     });
     //Clear the assetlist div
     $('#MyImageList').empty();
     //Append the contents of the items array to the ImageList Div
     $( "<ul/>", {
     "class": "my-new-list",
     html: items.join( "" )
     }).appendTo( "#MyImageList" );
     });
    }

function analyseimage(URL){
 
    //Create a form data object
     submitData = new FormData();
     //Get form variables and append them to the form data object
     submitData.append('ImageURL',BLOB_ACCOUNT + URL);

     details = []

    
     //Post the form data to the endpoint, note the need to set the content type header
     $.ajax({
     url: AnalyseIMAGEURL,
     data: submitData,
     cache: false,
     enctype: 'multipart/form-data',
     contentType: false,
     processData: false,
     type: 'POST',
     success: function(data){

      $.each( data, function( key, val ) {
        alert( "Image details: " + val["text"]);
        });

    
     }
     });
}



  function deleteImage(id){
    String(id)
    $.ajax({
    type: "DELETE",
    //Note the need to concatenate the
    url: baseDAI + id + endDAI}).done(function( msg ) {
      alert("Image successfully deleted")
      window.location.reload();
    });
    }

    function editImage(id){
      //Create a form data object
       submitData = new FormData();
       //Get form variables and append them to the form data object
       submitData.append('FileName',  $('#editFileName').val());
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
         alert("Image successfully edited")
         window.location.reload();
      
       }
       });
    }