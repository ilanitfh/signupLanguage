(function(){

    const issieShellTemplate = document.createElement('template');
    issieShellTemplate.innerHTML = `
        <link rel="stylesheet" href="${document.currentScript.getAttribute('src').replace('.js', '.css')}">
        <header>
            <div    style="vertical-align: center;">
                <div class="start-bar">
                    <slot name="start-bar"></slot>
                </div>
                <div class="title">
                    <slot name="title"></slot>
                    <div class="decor-shade"></div>
                    <div class="decor">
                        <slot name="decor"></slot>
                    </div>
                </div>
                <div class="end-bar">
                    <slot name="end-bar"></slot>
                </div>
            </div>
        </header>
        <ul class="projectors">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <main>
            <aside class="prev">
                <slot name="prev"></slot>
            </aside>
            <slot name="body"></slot>
            <aside class="next">
                <slot name="next"></slot>
            </aside>
        </main>
    `;

    customElements.define('issie-shell', class IssieShell extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: 'closed'}).appendChild(
                document.importNode(issieShellTemplate.content, true)
            );
        }
    });

}());