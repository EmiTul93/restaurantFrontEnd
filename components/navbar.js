class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: rgba(26, 26, 26, 0.9);
          backdrop-filter: blur(10px);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          border-bottom: 1px solid rgba(239, 68, 68, 0.2);
        }
        
        .logo {
          color: white;
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
        }
        
        .logo-icon {
          color: #ef4444;
          margin-right: 0.5rem;
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .nav-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-weight: 500;
          position: relative;
          transition: color 0.3s ease;
        }
        
        .nav-link:hover {
          color: white;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #ef4444;
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .active {
          color: white;
        }
        
        .active::after {
          width: 100%;
        }
        
        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        
        .mobile-menu {
          display: none;
          position: fixed;
          top: 70px;
          left: 0;
          right: 0;
          background: rgba(26, 26, 26, 0.98);
          padding: 1rem;
          z-index: 999;
          border-bottom: 1px solid rgba(239, 68, 68, 0.2);
        }
        
        .mobile-menu.open {
          display: block;
        }
        
        .mobile-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .mobile-link {
          display: block;
          padding: 0.75rem 0;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: color 0.3s ease;
        }
        
        .mobile-link:hover {
          color: white;
        }
        
        .mobile-link.active {
          color: #ef4444;
        }
        
        .lang-switcher {
          background: rgba(255, 244, 244, 0.74);
          color:blach;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          margin-left: 1rem;
          cursor: pointer;
        }
        
        .lang-switcher:focus {
          outline: none;
          border-color: #ef4444;
        }
        
        .reservation-btn {
          background: #ef4444;
          color: white;
          border: none;
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          font-weight: 600;
          transition: background 0.3s ease;
          margin-left: 2rem;
        }
        
        .reservation-btn:hover {
          background: #dc2626;
        }
        
        @media (max-width: 1024px) {
          .nav-desktop {
            display: none;
          }
          
          .mobile-menu-button {
            display: block;
          }
        }
      </style>
      
      <nav>
        <a href="/" class="logo">
          <i data-feather="home" class="logo-icon"></i>
          Dal Ciociaro
        </a>
        
        <div class="nav-desktop">
          <ul class="nav-links">
            <li><a href="/" class="nav-link active">Home</a></li>
            <li><a href="/menu.html" class="nav-link">Menu</a></li>
            <li><a href="/prenotazioni.html" class="nav-link">Prenotazioni</a></li>
            <li><a href="/chi-siamo.html" class="nav-link">Chi Siamo</a></li>
            <li><a href="/contatti.html" class="nav-link">Contatti</a></li>
          </ul>
        </div>
        
        <div class="flex items-center">
          <select id="lang-switcher" class="lang-switcher">
            <option value="it">IT</option>
            <option value="en">EN</option>
          </select>
          <a href="/prenotazioni.html" class="reservation-btn hidden md:block">Prenota</a>
          <button class="mobile-menu-button" onclick="toggleMobileMenu()">
            <i data-feather="menu"></i>
          </button>
        </div>
      </nav>
      
      <div id="mobile-menu" class="mobile-menu hidden">
        <ul class="mobile-links">
          <li><a href="/" class="mobile-link active">Home</a></li>
          <li><a href="/menu.html" class="mobile-link">Menu</a></li>
          <li><a href="/prenotazioni.html" class="mobile-link">Prenotazioni</a></li>
          <li><a href="/chi-siamo.html" class="mobile-link">Chi Siamo</a></li>
          <li><a href="/contatti.html" class="mobile-link">Contatti</a></li>
        </ul>
      </div>
    `;
    
    // Initialize feather icons
    if (window.feather) {
      this.shadowRoot.querySelectorAll('[data-feather]').forEach(el => {
        feather.replace(el);
      });
    }
    
    // Highlight active link based on current page
    const path = window.location.pathname;
    const links = this.shadowRoot.querySelectorAll('.nav-link, .mobile-link');
    
    links.forEach(link => {
      const linkPath = new URL(link.href).pathname;
      link.classList.remove('active');
      
      if ((path === '/' && linkPath === '/') || 
          (path !== '/' && path.includes(linkPath) && linkPath !== '/')) {
        link.classList.add('active');
      }
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);