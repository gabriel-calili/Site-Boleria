import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';
import './About.css';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="sobre" className="about" ref={ref}>
      <div className="about__container">
        {/* ── Left: larger 9:16 video box ── */}
        <motion.div
          className="about__img-side"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="about__video-box">
            <video
              className="about__video"
              src="/about_video.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </motion.div>

        {/* ── Right: text content with larger typography ── */}
        <motion.div
          className="about__text-side"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.8 }}
        >
          <h2 className="about__title">Por que nos escolher?</h2>

          <div className="about__divider">
            <div className="about__divider-line" />
            <FiHeart className="about__divider-heart" />
            <div className="about__divider-line" />
          </div>

          <p className="about__body">
            Na Confeitaria Monica, cada bolo é muito mais do que um alimento —
            é uma memória afetiva, um abraço em forma de sabor. Nossas receitas
            caseiras são preparadas com ingredientes cuidadosamente selecionados,
            seguindo tradições que atravessam gerações.
          </p>

          <div className="about__actions">
            <a href="#cardapio" className="about__btn about__btn--outline">
              Ver Cardápio
            </a>
            <a href="#contato" className="about__btn about__btn--filled">
              <FiHeart /> Fale Conosco
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
