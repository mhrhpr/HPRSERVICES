document.addEventListener("DOMContentLoaded",()=>{
const b=document.getElementById("menuBtn"),n=document.getElementById("mainNav");
if(b&&n){b.addEventListener("click",()=>{const open=n.classList.toggle("open");b.setAttribute("aria-expanded",open?"true":"false")});n.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>n.classList.remove("open")))}
document.querySelectorAll('a[href*="TODO_PHONE"],a[href*="TODO_WHATSAPP"],a[href*="TODO_TELEGRAM"]').forEach(a=>a.addEventListener("click",e=>{e.preventDefault();alert("اطلاعات تماس واقعی هنوز وارد نشده است. TODO را با اطلاعات واقعی جایگزین کنید.")}));
});