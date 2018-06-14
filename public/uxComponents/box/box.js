(function(){

    const issieBoxTemplate = document.createElement('template');
    issieBoxTemplate.innerHTML = `
        <link rel="stylesheet" href="${document.currentScript.getAttribute('src').replace('.js', '.css')}">
        <div class="box">
            <header>
                <span></span>
                <div></div>
            </header>
            <main>
                <div>
                    <slot name="body"></slot>
                </div>
            </main>
            <footer>
                <slot name="title"></slot>
            </footer>
            <aside class="decor-bottom">
                <slot name="decor-bottom"></slot>
            </aside>
            <aside class="decor-top">
                <slot name="decor-top"></slot>
            </aside>
        </div>
    `;

    customElements.define('issie-box', class IssieBox extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: 'closed'}).appendChild(
                document.importNode(issieBoxTemplate.content, true)
            );
        }
    });

}());