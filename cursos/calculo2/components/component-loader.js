// const mathJaxScript = document.querySelector('#MathJax-script')
const scriptsToLoad = [
    './components/mobile-sidebar/mobile-sidebar.js',
    './components/sidebar/sidebar.js',
    './components/math-template.js'
]
const head = document.head;
waitForElement('#MathJax-script', 3000).then(() => {
    const taskPromises = []
    scriptsToLoad.forEach(url => {
        const script = document.createElement('script')
        script.setAttribute('src', url)
        script.defer = true
        taskPromises.push(new Promise(resolve => {
            script.addEventListener('load', resolve())
        }))
        head.insertBefore(script, head.firstElementChild)
    })
    Promise.all(taskPromises)
}).catch(e => console.error('No se pudo cargar el script', e))


function waitForElement(querySelector, timeout) {
    return new Promise((resolve, reject) => {
        var timer = false;
        if (document.querySelectorAll(querySelector).length && MathJax.startup) return resolve();
        const observer = new MutationObserver(() => {
            if (document.querySelectorAll(querySelector).length && MathJax.startup) {
                observer.disconnect();
                if (timer !== false) clearTimeout(timer);
                return resolve();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
        if (timeout) timer = setTimeout(() => {
            observer.disconnect();
            reject();
        }, timeout);
    });
}

/**
   * Mathjax example code (dynamic content)
   */
function typeset(code) {
    MathJax.startup.promise = MathJax.startup.promise
        .then(() => MathJax.typesetPromise(code()))
        .catch((err) => console.log('Typeset failed: ' + err.message));
    return MathJax.startup.promise;
}


function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}