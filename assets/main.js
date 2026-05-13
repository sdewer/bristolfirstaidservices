// Nav scroll shadow
window.addEventListener('scroll',()=>{
  document.getElementById('main-nav').classList.toggle('scrolled',window.scrollY>10);
},{ passive:true });

// Highlight active nav link based on current page
(function(){
  var path=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a').forEach(function(a){
    var href=a.getAttribute('href');
    if(href&&href!=='#'&&path===href)a.classList.add('active-link');
  });
})();

// Contact form submit
var cf=document.getElementById('contact-form');
if(cf){
  cf.addEventListener('submit',function(e){
    e.preventDefault();
    cf.style.display='none';
    document.getElementById('success-msg').style.display='block';
  });
}
