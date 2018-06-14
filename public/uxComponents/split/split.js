(function(){

    const issieSplitTemplate = document.createElement('template');
    issieSplitTemplate.innerHTML = `
        <link rel="stylesheet" href="${document.currentScript.getAttribute('src').replace('.js', '.css')}">
        <div class="split">
            <aside>
                <slot name="master"></slot>
            </aside>
            <main>
                <slot name="details"></slot>
            </main>
        </div>
    `;

    customElements.define('issie-split', class IssieSplit extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: 'closed'}).appendChild(
                document.importNode(issieSplitTemplate.content, true)
            );
        }
    });

}());