let ProjectBTN = document.querySelector("#prjArray")
let LessonBTN = document.querySelector("#lessArray")
 

//infoScreen Lesson List 2)
let array = [
    { Lnum : "" , Lname : "" , Ldes : "" , Lsrc : ""},
    { Lnum : "" , Lname : "" , Ldes : "" , Lsrc : ""},
    { Lnum : "" , Lname : "" , Ldes : "" , Lsrc : ""},
    
   ]
//projectScreen PROJECT LIST 1)
 let arr = [
      { img : "project01.jpg.jpeg",  Pnum : "Project 01", Pname : "Sports webpage ", Preview : "https://thecyber03.github.io/sports-webpage/"},
      { img : "project02.jpg.jpeg",  Pnum : "Project 02", Pname : "Shoes Store", Preview : "", SourceCode : ""},
      { img : "project03.jpg.jpeg",  Pnum : "Project 03", Pname : "Password Generatore", Preview : "https://thecyber03.github.io/password/", SourceCode : ""},
      { img : "project04.jpg.jpeg",  Pnum : "Project 04", Pname : "Whatsapp Clone", Preview : "https://thecyber03.github.io/wscolone/", SourceCode : ""},
      { img : "project05.jpg.jpeg",  Pnum : "Project 05", Pname : "Programmimng webpage", Preview : "", SourceCode : ""},
      { img : "project06.jpg.jpeg",  Pnum : "Project 06", Pname : "Portfolio", Preview : "https://thecyber03.github.io/Own-Website/", SourceCode : ""},
      { img : "project07.jpg.png",  Pnum : "Project 07", Pname : "Credit Card", Preview : "https://thecyber03.github.io/credit-card/",},
      { img : "project08.jpg.jpeg",  Pnum : "Project 08", Pname : "Products webpage", Preview : "", SourceCode : ""},
      { img : "project09.jpg.jpeg",  Pnum : "Project 09", Pname : "Login page", Preview : "https://thecyber03.github.io/Loginpage", },
      
 
 ]
 arr.reverse();
 
 // Lesson List infoScreen FUNCTION 2)
var plutter = ""
  array.forEach(function(elem,idx){
	   plutter += `<li>
	            <div id="des">
              <h2>${elem.Lnum}</h2>
              <h2 id="Pname">${elem.Lname}</h2>
              <h2>${elem.Ldes}</h2>
              <a href="${elem.Lsrc}"><i class="ri-folder-6-fill"></i> Resources</a> 
             </div>
            </li>`
})
 
// Project List projectScreen FUNCTION 1)
var clutter = ""
arr.forEach(function(elem,idx){
	   clutter += `<li>
	            <img src="${elem.paid}" alt="" id="paid">
	            <img src="${elem.img}">
              <div id="des">
              <h2 id="Pnum">${elem.Pnum}</h2>
              <h2 id="Pname">${elem.Pname}</h2>
           
              <a href="${elem.Preview}"><i class="ri-window-fill"></i> Preview website</a> 
              <span>and</span>
              <a href="${elem.SourceCode}"><i class="ri-folder-6-fill"></i> Source Code</a> 
              <h2 id="iibbs"> by <mark>Aziz Ansari</mark> - instagram @the_cyber_03</h2>
              </div>
            </li>`
})

document.querySelector(".project ul").innerHTML = clutter

ProjectBTN.addEventListener("click", function(){
  document.querySelector(".project ul").innerHTML = clutter
  ProjectBTN.style.backgroundColor = "#FFBF2D"
  LessonBTN.style.backgroundColor = "var(--grey)"
})

LessonBTN.addEventListener("click", function(){
  document.querySelector(".project ul").innerHTML = plutter
  LessonBTN.style.backgroundColor = "#FFBF2D"
  ProjectBTN.style.backgroundColor = "var(--grey)"
})




