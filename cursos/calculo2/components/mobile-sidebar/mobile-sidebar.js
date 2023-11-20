menuInitialize = () => {
   const menuMobilebtns = document.querySelectorAll('[data-menu-btn=menu-mobile]')
   const menuMobile = document.querySelector('[data-menu=menu-mobile]')
   const menuMobilebg = document.querySelector('[data-menu-bg=menu-mobile]')
   const menuMobilecontent = document.querySelector('[data-menu-content=menu-mobile]')

   menuMobilebtns.forEach(btn => {
      btn.addEventListener('click', toggleMenu)
   })

   menuMobilebg.addEventListener('click', toggleMenu)

   menuMobile.addEventListener('transitionend', (e) => {
      // console.log(e)
      if (menuMobile.classList.contains('menu-mobile--active')) {
         menuMobile.classList.add('menu-mobile--visible')
      }
      else {
         menuMobile.classList.remove('menu-mobile--visible')
      }
   })

   function toggleMenu() {
      menuMobile.classList.toggle('menu-mobile--active')
      menuMobilebg.classList.toggle('menu-mobile__bg--active')
      menuMobilecontent.classList.toggle('menu-mobile__content--active')
   }

   window.addEventListener("resize", (e) => {
      let media = window.matchMedia('(min-width: 1000px) and (max-width: 1280px) and (orientation: landscape)')
      if (media.matches) {
         menuMobile.classList.remove('menu-mobile--visible')
         menuMobile.classList.remove('menu-mobile--active')
         menuMobilebg.classList.remove('menu-mobile__bg--active')
         menuMobilecontent.classList.remove('menu-mobile__content--active')
      }
   });
}

class AlienMobileSidebar extends HTMLElement {
   constructor() {
      super()
   }

   connectedCallback() {
      let path = `./components/mobile-sidebar/mobile-sidebar.html`

      const mathJaxScript = document.getElementById('MathJax-script')
      mathJaxScript.addEventListener('load', e => {
         this.#getHTML(path)
      })
   }

   async #getHTML(path) {

      // Get the page
      let request = await fetch(path);
      if (!request.ok) return;

      // Get the HTML
      let text = await request.text();

      await this.typeset(() => {
         const mobileMenu = document.querySelector('#mobile-menu');
         mobileMenu.innerHTML = text;
         return [mobileMenu];
     });

      let currentPath = window.location.pathname.split('/').slice(-1)
      let link = this.querySelector(`a[href='./${currentPath}']`)
      link.classList.add('subject-list__link--active')

      menuInitialize()
   }

   typeset(code) {
      MathJax.startup.promise = MathJax.startup.promise
          .then(() => MathJax.typesetPromise(code()))
          .catch((err) => console.log('Typeset failed: ' + err.message));
      return MathJax.startup.promise;
  }
}

customElements.define("alien-mobile-sidebar", AlienMobileSidebar);