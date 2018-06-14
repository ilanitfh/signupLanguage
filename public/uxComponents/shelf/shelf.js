(function(){

    const issieShelfTemplate = document.createElement('template');
    issieShelfTemplate.innerHTML = `
        <link rel="stylesheet" href="${document.currentScript.getAttribute('src').replace('.js', '.css')}">
        <div class="shelf"></div>
        <div class="container">
            <slot></slot>
        </div>
    `;

    customElements.define('issie-shelf', class IssieShelf extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: 'closed'}).appendChild(
                document.importNode(issieShelfTemplate.content, true)
            );
        }
    });

}());