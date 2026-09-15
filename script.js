'use strict';
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const menuButton=document.querySelector('.menu-toggle');
const menu=document.querySelector('#mobile-nav');
function closeMenu(){menu.hidden=true;menuButton.setAttribute('aria-expanded','false')}
menuButton.addEventListener('click',()=>{const open=menu.hidden;menu.hidden=!open;menuButton.setAttribute('aria-expanded',String(open));});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeMenu();}});
document.addEventListener('click',event=>{if(!menu.hidden&&!menu.contains(event.target)&&!menuButton.contains(event.target))closeMenu();});
window.matchMedia('(min-width:761px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
const header=document.querySelector('.header');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>15),{passive:true});
if(!reducedMotion&&'IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.remove('awaiting');observer.unobserve(e.target);}}),{threshold:.07});document.querySelectorAll('.reveal').forEach(e=>{if(e.getBoundingClientRect().top>window.innerHeight){e.classList.add('awaiting');observer.observe(e);}});}
const heroImages=[['assets/hero.webp','Individueller Gastronomie-Innenausbau von parallelwerk'],['assets/kueche.webp','Küche nach Maß mit Holzfronten und weißer Kochinsel'],['assets/treppe.webp','Geschwungene Holztreppe im Detail']];
const hero=document.querySelector('.hero-image');let heroChange=0;
document.querySelectorAll('.slide-button').forEach(button=>button.addEventListener('click',()=>{const index=Number(button.dataset.slide);clearTimeout(heroChange);document.querySelectorAll('.slide-button').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});hero.classList.add('is-changing');heroChange=setTimeout(()=>{hero.src=heroImages[index][0];hero.alt=heroImages[index][1];hero.classList.remove('is-changing');},reducedMotion?0:300);}));
const galleries={kueche:{title:'Küchen nach Maß',pictures:[['assets/kueche.webp','Holz und Weiß: eine Küche mit klaren Linien.'],['assets/kueche-hell.webp','Eine großzügige Küche in hellen Tönen.'],['assets/detail.webp','Auch innen zählt die sorgfältige Verarbeitung.']]},treppe:{title:'Treppen mit Charakter',pictures:[['assets/treppe.webp','Holz, das Räume miteinander verbindet.'],['assets/treppe-gerade.webp','Präzise Linienführung bis ins Detail.']]},moebel:{title:'Möbel & Einzelstücke',pictures:[['assets/moebel.webp','Ein Waschtischunterschrank mit ausdrucksstarker Holzmaserung.'],['assets/empfang.webp','Eine skulpturale Empfangstheke aus geschichteten Elementen.']]},raum:{title:'Innenausbau & Ladenbau',pictures:[['assets/ladenbau.webp','Farbe und Material geben diesem Raum seine Identität.'],['assets/hero.webp','Individueller Innenausbau für die Gastronomie.']]}};
const dialog=document.querySelector('.gallery'),galleryImage=document.querySelector('#gallery-image');let activeGallery=null,pictureIndex=0,lastTrigger=null;
function renderPicture(){const item=activeGallery.pictures[pictureIndex];galleryImage.src=item[0];galleryImage.alt=item[1];document.querySelector('#gallery-description').textContent=item[1];document.querySelector('#gallery-count').textContent=String(pictureIndex+1).padStart(2,'0')+' / '+String(activeGallery.pictures.length).padStart(2,'0');}
function stepPicture(step){pictureIndex=(pictureIndex+step+activeGallery.pictures.length)%activeGallery.pictures.length;renderPicture();}
document.querySelectorAll('[data-gallery]').forEach(button=>button.addEventListener('click',()=>{lastTrigger=button;activeGallery=galleries[button.dataset.gallery];pictureIndex=0;document.querySelector('#gallery-title').textContent=activeGallery.title;renderPicture();dialog.showModal();document.body.style.overflow='hidden';}));
document.querySelector('.gallery-close').addEventListener('click',()=>dialog.close());
document.querySelector('.gallery-prev').addEventListener('click',()=>stepPicture(-1));
document.querySelector('.gallery-next').addEventListener('click',()=>stepPicture(1));
dialog.addEventListener('close',()=>{document.body.style.overflow='';lastTrigger?.focus();});
dialog.addEventListener('keydown',event=>{if(event.key==='ArrowRight'){event.preventDefault();stepPicture(1);}if(event.key==='ArrowLeft'){event.preventDefault();stepPicture(-1);}});
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
let touchStart=null;galleryImage.addEventListener('touchstart',e=>{touchStart=e.changedTouches[0].clientX;},{passive:true});galleryImage.addEventListener('touchend',e=>{if(touchStart===null)return;const delta=e.changedTouches[0].clientX-touchStart;if(Math.abs(delta)>55)stepPicture(delta<0?1:-1);touchStart=null;},{passive:true});
