var header = document.getElementById('siteHeader');
window.addEventListener('scroll', function(){
  header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive:true });

var navToggle = document.getElementById('navToggle');
navToggle.addEventListener('click', function(){
  header.classList.toggle('nav-open');
});
document.querySelectorAll('.nav-links a').forEach(function(link){
  link.addEventListener('click', function(){ header.classList.remove('nav-open'); });
});

if ('IntersectionObserver' in window){
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting){
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold:.15 });
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
} else {
  document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('visible'); });
}
