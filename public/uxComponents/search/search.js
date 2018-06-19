
(function(){

    const issieSearchTemplate = document.createElement('template');
    issieSearchTemplate.innerHTML = `
        <link rel="stylesheet" href="${document.currentScript.getAttribute('src').replace('.js', '.css')}" />
        <div class="search">
            <input type="search" />
        </div>
    `;

    customElements.define('issie-search', class IssieSearch extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: 'closed'}).appendChild(
                document.importNode(issieSearchTemplate.content, true)
            );
        }
    });

}());
