class FooterBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div id="footer" class="footer-bar">
                <p>Eco Tour&#169; 2024, Dicoding</p>
            </div>
        `;
    }
}

customElements.define('footer-bar', FooterBar);
