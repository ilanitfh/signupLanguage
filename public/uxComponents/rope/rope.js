(function(){

    const issieRopeTemplate = document.createElement('template');
    issieRopeTemplate.innerHTML = `
        <link rel="stylesheet" href="${document.currentScript.getAttribute('src').replace('.js', '.css')}">
        <div class="rope"></div>
        <div class="container">
            <slot></slot>
        </div>
    `;

    customElements.define('issie-rope', class IssieRope extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: 'closed'}).appendChild(
                document.importNode(issieRopeTemplate.content, true)
            );
        }
    });

}());