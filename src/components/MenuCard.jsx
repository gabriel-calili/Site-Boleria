import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiHeart } from 'react-icons/fi';
import './MenuCard.css';

export default function MenuCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.article
      ref={ref}
      className="menu-card"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
    >
      {/* Image */}
      <div className="menu-card__img-wrap">
        <img src={item.image} alt={item.name} className="menu-card__img" />
        <div className="menu-card__img-overlay" />
        {item.tag && (
          <span className="menu-card__tag">{item.tag}</span>
        )}
        {/* Circular favorite button */}
        <button className="menu-card__fav" aria-label="Favoritar">
          <FiHeart />
        </button>
      </div>

      {/* Body */}
      <div className="menu-card__body">
        <div className="menu-card__top-deco">
          <div className="menu-card__deco-line" />
          <span className="menu-card__deco-heart">❤</span>
          <div className="menu-card__deco-line" />
        </div>

        <h4 className="menu-card__name">{item.name}</h4>
        <p className="menu-card__desc">{item.description}</p>

        <div className="menu-card__footer">
          <span className="menu-card__price">{item.price}</span>
          <a href="#encomendas" className="menu-card__btn">
            Encomendar
          </a>
        </div>
      </div>
    </motion.article>
  );
}
