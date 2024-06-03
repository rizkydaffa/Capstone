class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div>
        <a class="logo" href="" alt="ecotour-logo">
          <p class="logo-name">Eco Tour</p>
        </a>
      </div>
      <button type="button" class="hamburger" id="hamburger" aria-label="navigation-menu" tabindex="0">☰</button>
      <nav>
          <ul id="navigation" class="nav-list">
              <li><a href="">Home</a></li>
              <li><a href="#/Explore" class="Explore-nav">Favorite</a></li>
              <li><a href="#/AboutUs">About Us</a></li>
          </ul>
      </nav>
        `;
    }
}

customElements.define('app-bar', AppBar);