import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMessageCircle, FiHeart, FiPackage, FiCheckCircle } from 'react-icons/fi';
import './OrderSection.css';

const WHATSAPP_NUMBER = '5500000000000'; // Placeholder — será atualizado

export default function OrderSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState({
    name: '',
    product: '',
    date: '',
    qty: '1',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Olá, Confeitaria Monica! 🎂\n\nGostaria de fazer uma encomenda:\n\n👤 *Nome:* ${form.name}\n🎂 *Produto:* ${form.product}\n📅 *Data desejada:* ${form.date}\n🔢 *Quantidade:* ${form.qty}\n📝 *Observações:* ${form.notes || 'Nenhuma'}\n\nAguardo retorno. Obrigado(a)! ❤`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="encomendas" className="order section-padding">
      {/* Decorative band */}
      <div className="order__top-band">
        <FiHeart /> &nbsp; Faça sua encomenda &nbsp; <FiHeart />
      </div>

      <div className="container">
        <div className="section-title-wrapper" ref={ref}>
          <motion.span
            className="section-script-label"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            Aproveite todo esse sabor
          </motion.span>
          <div className="divider-dotted">
            <span className="divider-heart"><FiHeart /></span>
          </div>
          <motion.p
            className="order__subtitle"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            Preencha o formulário abaixo e entraremos em contato pelo WhatsApp para confirmar todos os detalhes da sua encomenda.
          </motion.p>
        </div>

        <div className="order__layout">
          {/* Form */}
          <motion.div
            className="order__form-wrap"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <form className="order__form" onSubmit={handleSubmit} id="order-form">
              <div className="order__field">
                <label htmlFor="order-name" className="order__label">Seu nome *</label>
                <input
                  id="order-name"
                  name="name"
                  type="text"
                  className="order__input"
                  placeholder="Ex: Maria das Graças"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="order__field">
                <label htmlFor="order-product" className="order__label">Produto desejado *</label>
                <select
                  id="order-product"
                  name="product"
                  className="order__input order__select"
                  value={form.product}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Escolha um produto...</option>
                  <optgroup label="Simples">
                    <option>Simples — Laranja</option>
                    <option>Simples — Limão</option>
                    <option>Simples — Chocolate</option>
                    <option>Simples — Maracujá</option>
                  </optgroup>
                  <optgroup label="Pool Cakes (Bolo Piscina)">
                    <option>Pool Cake — Chocolate</option>
                    <option>Pool Cake — Churros</option>
                    <option>Pool Cake — Sensação</option>
                    <option>Pool Cake — Cenoura</option>
                    <option>Pool Cake — Pão de mel</option>
                    <option>Pool Cake — Ninho</option>
                    <option>Pool Cake — Maracujá</option>
                    <option>Pool Cake — Limão</option>
                  </optgroup>
                  <optgroup label="Fitness">
                    <option>Fitness — Aveia com banana, maçã e passas</option>
                  </optgroup>
                  <optgroup label="Vulcão">
                    <option>Vulcão — Chocolate</option>
                    <option>Vulcão — Churros</option>
                    <option>Vulcão — Cenoura</option>
                    <option>Vulcão — Ninho</option>
                    <option>Vulcão — Maracujá</option>
                    <option>Vulcão — Limão</option>
                    <option>Vulcão — Bolotone</option>
                    <option>Vulcão — Bolo Surpresa (recheado de creme de coco)</option>
                  </optgroup>
                  <optgroup label="Broas">
                    <option>Broa — Milho com coco</option>
                    <option>Broa — Milho com requeijão</option>
                    <option>Broa — Fubá com goiabada</option>
                    <option>Broa — Fubá com erva doce</option>
                    <option>Broa — Arroz</option>
                  </optgroup>
                  <option value="Outro — descrevo nas observações">Outro (descrever nas observações)</option>
                </select>
              </div>

              <div className="order__row">
                <div className="order__field">
                  <label htmlFor="order-date" className="order__label">Data desejada *</label>
                  <input
                    id="order-date"
                    name="date"
                    type="date"
                    className="order__input"
                    value={form.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div className="order__field">
                  <label htmlFor="order-qty" className="order__label">Quantidade</label>
                  <input
                    id="order-qty"
                    name="qty"
                    type="number"
                    className="order__input"
                    min="1"
                    max="100"
                    value={form.qty}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="order__field">
                <label htmlFor="order-notes" className="order__label">Observações</label>
                <textarea
                  id="order-notes"
                  name="notes"
                  className="order__input order__textarea"
                  placeholder="Ex: sem açúcar, sabor especial, dedicatória, alergia a amendoim..."
                  value={form.notes}
                  onChange={handleChange}
                  rows={3}
                />
              </div>

              <button
                type="submit"
                className={`order__submit ${submitted ? 'order__submit--done' : ''}`}
                id="submit-order-btn"
              >
                {submitted ? (
                  <><FiCheckCircle /> Encomenda Enviada! ❤</>
                ) : (
                  <><FiMessageCircle /> Enviar pelo WhatsApp</>
                )}
              </button>
            </form>
          </motion.div>

          {/* Info panel */}
          <motion.div
            className="order__info"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="order__info-card">
              <FiPackage className="order__info-icon" />
              <h3 className="order__info-title">Como funciona?</h3>
              <ol className="order__info-steps">
                <li><span>1</span> Preencha o formulário ao lado</li>
                <li><span>2</span> Você será direcionado ao nosso WhatsApp</li>
                <li><span>3</span> Confirmamos os detalhes e valores</li>
                <li><span>4</span> Seu bolo é preparado com muito carinho</li>
                <li><span>5</span> Retire ou combine a entrega ❤</li>
              </ol>
            </div>

            <div className="order__info-badge">
              <FiHeart />
              <p>Todos os pedidos são preparados <strong>artesanalmente</strong> com ingredientes frescos e selecionados.</p>
            </div>

            <div className="order__info-note">
              ⏰ <strong>Prazo mínimo:</strong> 48 horas de antecedência.
              Para datas comemorativas, recomendamos encomendar com pelo menos <strong>1 semana</strong> de antecedência.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
