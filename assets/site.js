(() => {
  const toggle=document.getElementById('menu-button'), links=document.getElementById('nav-links');
  if(toggle&&links){toggle.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));}); links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));}
  const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
  const clock=document.getElementById('clock');if(clock){const tick=()=>{clock.textContent=new Date().toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit'});};tick();setInterval(tick,60000);}
  const cards=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');observer.unobserve(e.target);}})},{threshold:.08});cards.forEach(card=>observer.observe(card));}else cards.forEach(c=>c.classList.add('is-visible'));
})();
