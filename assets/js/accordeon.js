document.addEventListener('DOMContentLoaded', event => {
   const accordeon = document.querySelectorAll('.accordeon__top');
   accordeon.forEach(acco => {
      acco.addEventListener('click', accordeonEvents);
   });
   function accordeonEvents() {
      const accordeonBox = this.parentNode;
      const accordeonBottom = jQuery(this).parents('.accordeon').find('.accordeon__bottom');
      if (accordeonBox.classList.contains('is_open')) {
         accordeonBox.classList.remove('is_open');
         accordeonBottom.slideUp();
      } else {
         accordeonBox.classList.add('is_open');
         accordeonBottom.slideDown();
      }
   }
});
