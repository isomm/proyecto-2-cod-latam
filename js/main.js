const menuItems = document.querySelectorAll('.menu-item')

const menuBtn = document.querySelector('#menu-btn')

menuBtn.addEventListener('click',function(){
    document.body.classList.toggle('mobile-menu-active')
})

menuItems.forEach(function(item){
 item.addEventListener('click',function(e){
const currentItem = document.querySelector('active')

 })
})

/*boton cambiar texto tipo de fuente*/
const cambioBtn = document.querySelector('#cambiarFuente');

cambioBtn.addEventListener('click',function(){
  document.body.classList.toggle('cambio-fuente');  
});
