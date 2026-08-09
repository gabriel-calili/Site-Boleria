import React from 'react';
import { FiHeart, FiInstagram, FiPhone, FiMapPin, FiMessageCircle } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contato" className="footer">
      {/* Top decorative band */}
      <div className="footer__band">
        <span className="footer__band-text">❤ Feito com carinho ❤</span>
      </div>

      <div className="footer__main container">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-script">Monica</span>
            <span className="footer__logo-name">Bolos</span>
            <span className="footer__logo-sub">Bolos Caseiros</span>
          </div>
          <p className="footer__slogan">
            "Esse bolo parece feito pela minha avó."
          </p>
          <div className="footer__social">
            <a
              href="https://www.instagram.com/monicabolos1001/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-btn"
              aria-label="Instagram"
            >
              <FiInstagram />
            </a>
            <a
              href="https://wa.me/553196275970"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-btn footer__social-btn--wa"
              aria-label="WhatsApp"
            >
              <FiMessageCircle />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="footer__nav">
          <h4 className="footer__nav-title">Navegação</h4>
          <ul className="footer__nav-list">
            <li><a href="#hero">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#cardapio">Cardápio</a></li>
            <li><a href="#encomendas">Encomendas</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__contact">
          <h4 className="footer__nav-title">Contato</h4>
          <ul className="footer__contact-list">
            <li>
              <FiPhone />
              <a href="tel:+553196275970">(31) 9627-5970</a>
            </li>
            <li>
              <FiMessageCircle />
              <a href="https://wa.me/553196275970" target="_blank" rel="noopener noreferrer">
                (31) 9627-5970 (WhatsApp)
              </a>
            </li>
            <li>
              <FiInstagram />
              <a href="https://www.instagram.com/monicabolos1001/" target="_blank" rel="noopener noreferrer">
                @monicabolos1001
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p className="footer__copy">
          © {year} Monica Bolos — Bolos Caseiros. Todos os direitos reservados.
        </p>
        <p className="footer__credit">
          Feito com <FiHeart className="footer__heart" /> e muito açúcar
        </p>
      </div>
    </footer>
  );
}
