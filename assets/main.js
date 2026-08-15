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
    var btn=cf.querySelector('.submit-btn');
    var btnHTML=btn.innerHTML;
    var errEl=document.getElementById('form-error-msg');
    if(errEl)errEl.style.display='none';
    btn.disabled=true;
    btn.textContent='Sending…';
    fetch(cf.action,{
      method:'POST',
      body:new FormData(cf),
      headers:{ 'Accept':'application/json' }
    }).then(function(res){
      if(res.ok){
        cf.style.display='none';
        document.getElementById('success-msg').style.display='block';
      }else{
        throw new Error('Form submission failed');
      }
    }).catch(function(){
      if(errEl)errEl.style.display='block';
    }).finally(function(){
      btn.disabled=false;
      btn.innerHTML=btnHTML;
    });
  });
}
