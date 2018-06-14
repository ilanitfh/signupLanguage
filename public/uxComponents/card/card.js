(function(){

    const issieCardTemplate = document.createElement('template');
    issieCardTemplate.innerHTML = `
        <link rel="stylesheet" href="${document.currentScript.getAttribute('src').replace('.js', '.css')}">
        <div class="card">
            <header class="pin"></header>
            <main>
                <slot name="body"></slot>
            </main>
            <footer>
                <slot name="title"></slot>
            </footer>
        </div>
    `;

    customElements.define('issie-card', class IssieCard extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: 'closed'}).appendChild(
                document.importNode(issieCardTemplate.content, true)
            );
        }
    });

}());