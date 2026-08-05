import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';
import './Menu.css';

/* ── Dados do cardápio ── */
const categories = [
  {
    id: 'pool-cakes',
    title: 'POOL CAKES',
    subtitle: 'Bolo Piscina',
    scriptLabel: 'Irresistíveis',
    accent: 'var(--marrom-cafe)',
    description: 'Nossos Pool Cakes possuem uma cavidade central generosa, recheada até a borda com coberturas cremosas e caldas irresistíveis que escorrem a cada fatia.',
    flavors: [
      'Chocolate',
      'Churros',
      'Sensação',
      'Cenoura',
      'Pão de mel',
      'Ninho',
      'Maracujá',
      'Limão',
    ],
  },
  {
    id: 'fitness',
    title: 'FITNESS',
    scriptLabel: 'Saudável e gostoso',
    accent: 'var(--rosa-antigo)',
    description: 'Receita nutritiva e equilibrada, preparada com aveia, frutas frescas e especiarias para quem busca afeto e sabor sem abrir mão do bem-estar.',
    flavors: [
      'Aveia com banana, maçã e passas',
    ],
  },
  {
    id: 'vulcao',
    title: 'VULCÃO',
    scriptLabel: 'O queridinho de todos',
    accent: 'var(--marrom-cafe)',
    description: 'Uma verdadeira explosão de sabor! Nossos bolos Vulcão são assados com recheio cremoso em abundância que escorre espetacularmente ao cortar a primeira fatia.',
    flavors: [
      'Chocolate',
      'Churros',
      'Cenoura',
      'Ninho',
      'Maracujá',
      'Limão',
      'Bolotone',
      'Bolo surpresa — recheado de creme de coco',
    ],
  },
  {
    id: 'broas',
    title: 'BROAS',
    scriptLabel: 'Para o café da tarde',
    accent: 'var(--rosa-antigo)',
    description: 'Tradição e aconchego em cada pedaço. Broas caseiras assadas com textura crocante por fora e macia por dentro, perfeitas para o café da tarde em família.',
    flavors: [
      'Milho com coco',
      'Milho com requeijão',
      'Fubá com goiabada',
      'Fubá com erva doce',
      'Arroz',
    ],
  },
  {
    id: 'simples',
    title: 'SIMPLES',
    scriptLabel: 'Também temos',
    accent: 'var(--rosa-antigo)',
    description: 'Bolos caseiros tradicionais, fofinhos e aromáticos. Preparados de forma artesanal, resgatando a essência e o carinho das receitas de família.',
    flavors: [
      'Laranja',
      'Limão',
      'Chocolate',
      'Maracujá',
    ],
  },
];

function FlavorCarousel({ flavors, categoryTitle, accentColor }) {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="flavor-carousel">
      <div className="flavor-carousel__header">
        <h4 className="flavor-carousel__title" style={{ color: accentColor }}>
          Sabores de {categoryTitle}
        </h4>
      </div>

      <div className="flavor-carousel__track" ref={scrollRef}>
        {flavors.map((flavor, idx) => (
          <motion.div
            key={idx}
            className="flavor-carousel__card"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flavor-carousel__img-wrap">
              <div
                className="flavor-carousel__img-placeholder"
                aria-label={`Espaço reservado para foto do bolo sabor ${flavor}`}
              />
            </div>
            <div className="flavor-carousel__card-body">
              <h5 className="flavor-carousel__card-title">{flavor}</h5>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CategoryBlock({ cat, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const isEven = index % 2 === 0;

  return (
    <div className="menu__category-section" id={cat.id}>
      <motion.div
        ref={ref}
        className={`menu__block ${isEven ? 'menu__block--normal' : 'menu__block--reverse'}`}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.65 }}
      >
        {/* ── Text side ── */}
        <div className="menu__block-text">
          <span className="menu__block-script" style={{ color: cat.accent }}>
            {cat.scriptLabel}
          </span>
          <h3 className="menu__block-title" style={{ color: cat.accent }}>
            {cat.title}
            {cat.subtitle && (
              <span className="menu__block-subtitle"> ({cat.subtitle})</span>
            )}
          </h3>
          <div className="menu__block-divider">
            <div className="menu__block-divider-line" style={{ background: cat.accent }} />
            <FiHeart style={{ color: cat.accent }} />
            <div className="menu__block-divider-line" style={{ background: cat.accent }} />
          </div>

          {/* Replaced list of flavors with category description */}
          <p className="menu__block-desc">{cat.description}</p>
        </div>

        {/* ── Image placeholder ── */}
        <div className="menu__block-img-wrap">
          <div
            className="menu__block-img-placeholder"
            aria-label={`Espaço reservado para foto — ${cat.title}`}
          />
        </div>
      </motion.div>

      {/* ── Carousel for each flavor in this category ── */}
      <FlavorCarousel
        flavors={cat.flavors}
        categoryTitle={cat.title}
        accentColor={cat.accent}
      />
    </div>
  );
}

export default function Menu() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="cardapio" className="menu section-padding">
      <div className="container">

        {/* ── Main header ── */}
        <div className="section-title-wrapper" ref={ref}>
          <motion.span
            className="section-script-label"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            Confira nosso
          </motion.span>
          <motion.h2
            className="menu__main-title"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Cardápio de <span className="menu__main-title-script">Bolos</span>
          </motion.h2>
          <div className="divider-dotted">
            <span className="divider-heart"><FiHeart /></span>
          </div>
          <motion.p
            className="menu__subtitle"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            Todos os nossos produtos são feitos sob encomenda com ingredientes frescos e muito amor.
          </motion.p>
        </div>

        {/* ── Categories ── */}
        <div className="menu__categories">
          {categories.map((cat, i) => (
            <CategoryBlock key={cat.id} cat={cat} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
