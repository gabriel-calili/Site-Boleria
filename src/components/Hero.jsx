import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineStar, MdOutlineAccessTime, MdFavoriteBorder } from 'react-icons/md';
import './Hero.css';

const badges = [
  {
    icon: <MdOutlineStar />,
    title: 'INGREDIENTES PREMIUM',
    desc: 'Qualidade e frescor, sempre.',
  },
  {
    icon: <MdOutlineAccessTime />,
    title: 'FEITO SOB ENCOMENDA',
    desc: 'Preparado para você.',
  },
  {
    icon: <MdFavoriteBorder />,
    title: 'FEITO COM AMOR',
    desc: 'Para os seus momentos especiais.',
  },
];

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* ── LEFT COLUMN — text ── */}
      <div className="hero__left">
        <div className="hero__left-inner">

          {/* Small label */}
          <motion.p
            className="hero__label"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            FEITO FRESCO, FEITO COM AMOR
          </motion.p>

          {/* Main headline */}
          <motion.h1
            className="hero__headline"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            <span className="hero__headline-line">Cada Fatia</span>
            <span className="hero__headline-line">Conta uma</span>
            <span className="hero__headline-script">Doce</span>
            <span className="hero__headline-line hero__headline-line--inline">História.</span>
          </motion.h1>

          {/* Body */}
          <motion.p
            className="hero__body"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Bolos caseiros feitos com os melhores ingredientes,
            perfeitos para cada celebração e cada momento especial.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
          >
            <a href="#encomendas" className="hero__btn hero__btn--dark" id="hero-order-btn">
              ENCOMENDAR
            </a>
            <a href="#cardapio" className="hero__btn hero__btn--outline" id="hero-menu-btn">
              NOSSO CARDÁPIO
            </a>
          </motion.div>

          {/* Badges */}
          <motion.div
            className="hero__badges"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.82, duration: 0.6 }}
          >
            {badges.map((b, i) => (
              <div key={i} className="hero__badge">
                <span className="hero__badge-icon">{b.icon}</span>
                <div className="hero__badge-text">
                  <span className="hero__badge-title">{b.title}</span>
                  <span className="hero__badge-desc">{b.desc}</span>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* ── RIGHT COLUMN — product image ── */}
      <motion.div
        className="hero__right"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <img
          src="/hero_cake.jpg"
          alt="Bolo artesanal de chocolate da Confeitaria Monica"
          className="hero__img"
        />
      </motion.div>
    </section>
  );
}
