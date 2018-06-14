(function(){

    const issiePlayerTemplate = document.createElement('template');
    issiePlayerTemplate.innerHTML = `
        <link rel="stylesheet" href="${document.currentScript.getAttribute('src').replace('.js', '.css')}">
        <div class="player">
            <aside class="prev"></aside>
            <main>
                <header></header>
                <video playsinline><slot></slot></video>
                <footer>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                </footer>
            </main>
            <aside class="next"></aside>
        </div>
    `;

    const videoAttributes = ['src', 'poster'];

    customElements.define('issie-player', class IssiePlayer extends HTMLElement {
        constructor() {
            super();
            const node = document.importNode(issiePlayerTemplate.content, true);
            this.video = node.querySelector('video');
            this.prev = node.querySelector('.prev');
            this.next = node.querySelector('.next');
            this.attachShadow({mode: 'closed'}).appendChild(node);
        }
        connectedCallback() {
            videoAttributes.forEach(attr => {
                if(this.hasAttribute(attr)) {
                    this.video.setAttribute(attr, this.getAttribute(attr));
                }
            });
            this.prev.addEventListener('click', () => {
                this.dispatchEvent(new Event('issie-player-prev', { bubbles: true, composed: true }));
            });
            this.next.addEventListener('click', () => {
                this.dispatchEvent(new Event('issie-player-next', { bubbles: true, composed: true }));
            });
            this.video.addEventListener('click', () => {
                if(this.video.paused) {
                    this.video.play();
                } else {
                    this.video.pause();
                }
            })
        }
        attributeChangedCallback(name, oldValue, newValue) {
            if(videoAttributes.indexOf(name) >= 0) {
                this.video.setAttribute(name, newValue);
            }
        }
    });

}());