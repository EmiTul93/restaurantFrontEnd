class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: rgba(26, 26, 26, 0.95);
          color: white;
          padding: 4rem 2rem;
          border-top: 1px solid rgba(239, 68, 68, 0.2);
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .footer-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
        }
        
        .footer-logo-icon {
          color: #ef4444;
          margin-right: 0.5rem;
        }
        
        .footer-description {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
        }
        
        .social-link {
          color: white;
          background: rgba(255, 255, 255, 0.1);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        .social-link:hover {
          background: #ef4444;
          transform: translateY(-3px);
        }
        
        .footer-heading {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          position: relative;
          padding-bottom: 0.5rem;
        }
        
        .footer-heading::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 2px;
          background: #ef4444;
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-link {
          margin-bottom: 0.75rem;
        }
        
        .footer-link a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-link a:hover {
          color: white;
        }
        
        .contact-info {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .contact-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1rem;
          color: rgba(255, 255, 255, 0.7);
        }
        
        .contact-icon {
          color: #ef4444;
          margin-right: 1rem;
          margin-top: 0.25rem;
        }
        
        .copyright {
          text-align: center;
          padding-top: 3rem;
          margin-top: 3rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.875rem;
        }
        
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      </style>
      
      <footer>
        <div class="footer-container">
          <div class="footer-about">
            <div class="footer-logo">
              <i data-feather="home" class="footer-logo-icon"></i>
              Dal Ciociaro
            </div>
            <p class="footer-description">
              Autentica cucina italiana nel cuore della tradizione ciociara. 
              Offriamo piatti tradizionali preparati con ingredienti locali e freschi.
            </p>
            <div class="social-links">
              <a href="#" class="social-link">
                <i data-feather="facebook"></i>
              </a>
              <a href="#" class="social-link">
                <i data-feather="instagram"></i>
              </a>
              <a href="#" class="social-link">
                <i data-feather="twitter"></i>
              </a>
              <a href="#" class="social-link">
                <i data-feather="map-pin"></i>
              </a>
            </div>
          </div>
          
          <div class="footer-links-col">
            <h3 class="footer-heading">Link veloci</h3>
            <ul class="footer-links">
              <li class="footer-link">
                <a href="/">Home</a>
              </li>
              <li class="footer-link">
                <a href="/menu.html">Menu</a>
              </li>
              <li class="footer-link">
                <a href="/prenotazioni.html">Prenotazioni</a>
              </li>
              <li class="footer-link">
                <a href="/chi-siamo.html">Chi Siamo</a>
              </li>
              <li class="footer-link">
                <a href="/contatti.html">Contatti</a>
              </li>
            </ul>
          </div>
          
          <div class="footer-contact">
            <h3 class="footer-heading">Contatti</h3>
            <ul class="contact-info">
              <li class="contact-item">
                <i data-feather="map-pin" class="contact-icon"></i>
                <span>Via Roma 123, 03010 Frosinone, Italia</span>
              </li>
              <li class="contact-item">
                <i data-feather="phone" class="contact-icon"></i>
                <span>+39 0775 123456</span>
              </li>
              <li class="contact-item">
                <i data-feather="mail" class="contact-icon"></i>
                <span>info@dalciociaro.com</span>
              </li>
              <li class="contact-item">
                <i data-feather="clock" class="contact-icon"></i>
                <span>Lun-Dom: 12:00 - 15:00 / 19:00 - 23:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="copyright">
          &copy; ${new Date().getFullYear()} Dal Ciociaro. Tutti i diritti riservati.
        </div>
      </footer>
    `;
    
    // Initialize feather icons
    if (window.feather) {
      this.shadowRoot.querySelectorAll('[data-feather]').forEach(el => {
        feather.replace(el);
      });
    }
  }
}

customElements.define('custom-footer', CustomFooter);