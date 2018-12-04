document.querySelector('#hamburger').addEventListener('click', function () {
  var nav = document.querySelector('#nav');
  nav.classList.toggle('nav_full');
});

(function(selector){
  var list = document.querySelector(selector);

  list.addEventListener('click', function(e){
    if(e.target.classList.contains('team__member-name')){
      
      var item = e.target.closest('li');
      var items = list.children;
      var wrap = e.target.nextElementSibling;
      var heightContent = wrap.firstElementChild.clientHeight;

      if(!item.classList.contains('team__item_active')){ 
      for (let index = 0; index< items.length; index++){
        const element = items[index];

        element.classList.remove('team__item_active');
        element.lastElementChild.style.height = 0;
      }

      item.classList.add('team__item_active');
      wrap.style.height = `${heightContent}px`;
      }else{
        item.classList.remove('team__item_active');
        wrap.style.height = 0;
      }
    }
  })

  
})('#acco__team');

(function(selector){
  var list = document.querySelector(selector);

  list.addEventListener('click', function(e){
    if(e.target.classList.contains('menus__trigger')){
      e.preventDefault();
      var item = e.target.closest('li');
      var items = list.children;
      var wrap = e.target.nextElementSibling;

      if(!item.classList.contains('menus__item_active')){ 
      for (let index = 0; index< items.length; index++){
        const element = items[index];

        element.classList.remove('menus__item_active');
      }

      item.classList.add('menus__item_active');
      }else{
        item.classList.remove('menus__item_active');
      }
    }

    if(e.target.classList.contains('menus__cross')){
      var item = e.target.closest('li');
      item.classList.remove('menus__item_active');
    }

  })

 
})('#acco__menus');


(function (selector) {
  var slider = document.querySelector(selector);
  var list = slider.querySelector('.slider__list');
  var itemsCount = list.children.length;
  var widthWrap;
  var posX = 0;
  function calcWidth(){
    var widthW = slider.querySelector('.slider__wrap').clientWidth;
    var width = widthW * itemsCount;

    widthWrap = widthW;

    list.style.width = `${width}px`;
  }

  window.addEventListener('resize', function(){
    calcWidth();
  })

  calcWidth();

  slider.addEventListener('click', function(e){
    if(e.target.classList.contains('slider__control-img')){
      var vector = e.target.dataset.vector;
      var active = slider.querySelector('.slider__item_active');

      console.log(active);
      
      if(vector == 'next'){
        if(active.nextElementSibling){
          posX += widthWrap;
          console.log(-posX);
          list.style.transform = `translateX(${-posX}px)`;
          active.classList.remove('slider__item_active');
          active.nextElementSibling.classList.add('slider__item_active');
        }
      }else{
        if(active.previousElementSibling){
          posX -= widthWrap;
          console.log(-posX);
          list.style.transform = `translateX(${-posX}px)`;
          active.classList.remove('slider__item_active');
          active.previousElementSibling.classList.add('slider__item_active');
        }
      }
    }
  })
})('#slider')