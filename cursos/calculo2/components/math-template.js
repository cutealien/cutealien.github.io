class AlienMathTemplate extends HTMLElement {
   constructor() {
      super()
   }

   async connectedCallback() {
      let path = this.getAttribute('path')
      
      if (!path) return
      
      this.#getHTML(path)
   }

   /**
    * Get and render external HTML
    * @param  {String} path The path to the external HTML
    */
   async #getHTML(path) {

      // Get the page
      let request = await fetch(path);
      if (!request.ok) return;

      // Get the HTML
      let text = await request.text();

      await typeset(() => {
         this.innerHTML = text
         return [this]
      });
   }
}

customElements.define("alien-math-template", AlienMathTemplate);