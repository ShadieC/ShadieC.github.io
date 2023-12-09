const closeFun= ()=>{
      let modelBox = document.getElementById("BK_ModelBox");
  
  modelBox.classList.remove("open");
  modelBox.classList.add("close");
}

const openFun= ()=>{
      let modelBox = document.getElementById("BK_ModelBox");
  
  modelBox.classList.remove("close");
  modelBox.classList.add("open");
}

 //-----------

const openPost= ()=>{
      let modelBox = document.getElementById("Post_ModalBox");
  
  modelBox.classList.remove("close");
  modelBox.classList.add("open");
}

const closePost= ()=>{
      let modelBox = document.getElementById("Post_ModalBox");
  
  modelBox.classList.remove("open");
  modelBox.classList.add("close");
}

 //-----------

const openCreatePost= ()=>{
      let modelBox = document.getElementById("Create_Post");
  
  modelBox.classList.remove("close");
  modelBox.classList.add("open");
}

const closeCreatePost= ()=>{
      let modelBox = document.getElementById("Create_Post");
  
  modelBox.classList.remove("open");
  modelBox.classList.add("close");
}

 //-----------

const openCreateQuestion= ()=>{
      let modelBox = document.getElementById("Create_Question");
  
  modelBox.classList.remove("close");
  modelBox.classList.add("open");
}

const closeCreateQuestion= ()=>{
      let modelBox = document.getElementById("Create_Question");
  
  modelBox.classList.remove("open");
  modelBox.classList.add("close");
}

//-----------
const openAuthenticated= ()=>{
      var authenticated = document.querySelectorAll('.user-authenticated');
      for (var i = 0; i < authenticated.length; i++) {
        if ( authenticated[i].classList.contains('dissapear') ) {
            authenticated[i].classList.remove('dissapear');
            var elements = document.querySelectorAll('.user-not-authenticated');
            for (var i = 0; i < elements.length; i++) {
                elements[i].classList.add('dissapear');
            } 
        } else {
   
        }
      }
      const user_details = document.querySelector(".user-details");
      if (user_details.classList.contains("open")) {
            $(".open").removeClass("open");
      } 
}

const closeAuthenticated= ()=>{
      var authenticated = document.querySelectorAll('.user-authenticated');
      for (var i = 0; i < authenticated.length; i++) {
        if ( authenticated[i].classList.contains('dissapear') ) {
            
        } else {
            authenticated[i].classList.add('dissapear');
            var elements = document.querySelectorAll('.user-not-authenticated');
            for (var i = 0; i < elements.length; i++) {
                elements[i].classList.remove('dissapear');
            }    
        }
      }
}