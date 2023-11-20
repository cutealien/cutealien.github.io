class AlienSidebar extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        let path = `./components/sidebar/sidebar.html`

        const mathJaxScript = document.getElementById('MathJax-script')
        mathJaxScript.addEventListener('load', e => {
            this.#getHTML(path)
        })
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

        await this.typeset(() => {
            const sidebar = document.querySelector('#sidebar');
            sidebar.innerHTML = text;
            return [sidebar];
            // this.innerHTML = text
            // return[this]
        });

        let currentPath = window.location.pathname.split('/').slice(-1)
        let link = this.querySelector(`a[href='./${currentPath}']`)
        link.classList.add('subject-list__link--active')
    }

    /**
    * Mathjax example code (dynamic content)
    */
    typeset(code) {
        MathJax.startup.promise = MathJax.startup.promise
            .then(() => MathJax.typesetPromise(code()))
            .catch((err) => console.log('Typeset failed: ' + err.message));
        return MathJax.startup.promise;
    }
}

customElements.define("alien-sidebar", AlienSidebar);