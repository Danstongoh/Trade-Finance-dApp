var UserProfile = (function() {
    var address = "";
  
    var getName = function() {
      return address;    // Or pull this from cookie/localStorage
    };
  
    var setName = function(name) {
      if (name == "1"){
        address = "0x27b2f32be5591435c5df926af2bb70a10e43ef61";     
      }
   
      // Also set this in cookie/localStorage
    };
  
    return {
      getName: getName,
      setName: setName
    }
  
  })();
  
  export default UserProfile;