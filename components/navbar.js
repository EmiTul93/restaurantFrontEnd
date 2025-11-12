class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .navbar {
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
        
        .navbar-logo {
          color: white;
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          text-decoration: none;
        }
        
        .navbar-logo-icon {
          color: #ef4444;
          margin-right: 0.5rem;
          width: 24px;
          height: 24px;
        }
        
        .navbar-desktop {
          display: flex;
          align-items: center;
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
        
        .nav-link.active {
          color: white;
        }
        
        .nav-link.active::after {
          width: 100%;
        }
        
        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .lang-switcher {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.4rem 0.75rem;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.9rem;
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
          text-decoration: none;
          display: inline-block;
        }
        
        .reservation-btn:hover {
          background: #dc2626;
        }
        
        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 0.5rem;
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
        
        @media (max-width: 1024px) {
          .navbar-desktop {
            display: none;
          }
          
          .mobile-menu-button {
            display: block;
          }
          
          .reservation-btn {
            display: none;
          }
        }
      </style>
      
      <nav class="navbar">
        <a href="/index.html" class="navbar-logo">
          <i data-feather="home" class="navbar-logo-icon"></i>
          Dal Ciociaro
        </a>
        
        <div class="navbar-desktop">
          <ul class="nav-links">
            <li><a href="/index.html" class="nav-link" data-page="index">Home</a></li>
            <li><a href="/menu.html" class="nav-link" data-page="menu">Menu</a></li>
            <li><a href="/prenotazioni.html" class="nav-link" data-page="prenotazioni">Prenotazioni</a></li>
            <li><a href="/chi-siamo.html" class="nav-link" data-page="chi-siamo">Chi Siamo</a></li>
            <li><a href="/contatti.html" class="nav-link" data-page="contatti">Contatti</a></li>
          </ul>
        </div>
        
        <div class="navbar-actions">
          <select id="lang-switcher" class="lang-switcher">
            <option value="it">🇮🇹 IT</option>
            <option value="en">🇬🇧 EN</option>
          </select>
          <a href="/prenotazioni.html" class="reservation-btn">Prenota</a>
          <button class="mobile-menu-button" id="mobile-menu-toggle">
            <i data-feather="menu"></i>
          </button>
        </div>
      </nav>
      
      <div id="mobile-menu" class="mobile-menu">
        <ul class="mobile-links">
          <li><a href="/index.html" class="mobile-link" data-page="index">Home</a></li>
          <li><a href="/menu.html" class="mobile-link" data-page="menu">Menu</a></li>
          <li><a href="/prenotazioni.html" class="mobile-link" data-page="prenotazioni">Prenotazioni</a></li>
          <li><a href="/chi-siamo.html" class="mobile-link" data-page="chi-siamo">Chi Siamo</a></li>
          <li><a href="/contatti.html" class="mobile-link" data-page="contatti">Contatti</a></li>
        </ul>
      </div>
    `;
    
    // Initialize after DOM is ready
    setTimeout(() => {
      // Replace feather icons
      if (window.feather) {
        feather.replace();
      }
      
      // Highlight active link based on current page
      this.setActiveLink();
      
      // Setup mobile menu toggle
      this.setupMobileMenu();
    }, 0);
  }
  
  setActiveLink() {
    const path = window.location.pathname;
    const fileName = path.split('/').pop() || 'index.html';
    const pageName = fileName.replace('.html', '');
    
    const links = this.querySelectorAll('.nav-link, .mobile-link');
    
    links.forEach(link => {
      link.classList.remove('active');
      const linkPage = link.getAttribute('data-page');
      
      if (linkPage === pageName || (pageName === '' && linkPage === 'index')) {
        link.classList.add('active');
      }
    });
  }
  
  setupMobileMenu() {
    const toggleButton = this.querySelector('#mobile-menu-toggle');
    const mobileMenu = this.querySelector('#mobile-menu');
    
    if (toggleButton && mobileMenu) {
      toggleButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
      });
      
      // Close menu when clicking on a link
      const mobileLinks = this.querySelectorAll('.mobile-link');
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.remove('open');
        });
      });
    }
  }
}

customElements.define('custom-navbar', CustomNavbar);
