 // Get elements
 const contactBtn = document.getElementById("contactBtn");
 const contactModal = document.getElementById("contactModal");
 const closeBtn = document.getElementById("closeBtn");

 // Open modal
 contactBtn.addEventListener("click", () => {
     contactModal.style.display = "flex";
 });

 // Close modal
 closeBtn.addEventListener("click", () => {
     contactModal.style.display = "none";
 });

 // Close modal when clicking outside of it
 window.addEventListener("click", (event) => {
     if (event.target === contactModal) {
         contactModal.style.display = "none";
     }
 });
 
     document.getElementById("scrollDown").addEventListener("click", function() {
         document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
     });
     var mainDiv = document.getElementById('main-button');
mainDiv.addEventListener('click', function(){
this.children.item(0).classList.toggle('fa-times');
this.classList.toggle('open');
});

// using jQuery
// var mainDiv =  $('#main-button');
// mainDiv.on('click', function(){
//   $(this).find('i').toggleClass('fa-times');
//   $(this).toggleClass('open');
// });
document.getElementById('resumeBtn').addEventListener('click', function() {
    document.getElementById('resumeModal').style.display = 'block';
});

document.getElementById('closeResumeBtn').addEventListener('click', function() {
    document.getElementById('resumeModal').style.display = 'none';
});