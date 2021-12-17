const swiper = new Swiper('.swiper-container', {
/*   // Optional parameters
  direction: 'vertical',
  loop: true, */

  // пагинация точки снизу 
  pagination: {
    el: '.swiper-pagination',
    //можно кликать на точки
    clickable: true,
    //динамические булеты
    dynamicBullets: true,
    //номера буллетов
    /* renderBullet: function (index, className) {
      return '<span className="' + className + '">' + (index + 1) + '</span>';
    }, */
    
  },

  // стрелки навигации
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});