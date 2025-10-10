import React from 'react';
import './App.css';

function App() {
  return (
    <main>
      <header>
        <span className="logo-text">
          <span className="logo-part-white">COLL</span>
          <span className="logo-part-yellow">AB</span>
        </span>
        <button className="hader-button">Começar Agora ➜</button>
      </header>

      <section className="hero-section">
        <p className="course-text">🎓 Curso Completo</p>
        <div className="title-container">
          <h3 className="title">
            Desenvolvimento Profissional <br />
            seu como Professor
          </h3>
        </div>
        <div className="description-container">
          <p className="description">
            Deixe sua marca na educação: aprenda a ensinar com <br />
            propósito, inovação e autoridade pedagógica.
          </p>
        </div>
        <div className="hero-button">
          <button className="button">Começar Agora ➜</button>
        </div>
      </section>

      <section className="page-two">
        <div className="page-two-title-container">
          <h3 className="page-two-title">Invista no Seu Futuro</h3>
        </div>
        <div className="page-two-description-container">
          <p className="page-two-description">
            Não perca a oportunidade de entrar na primeira turma de GRAÇA.
          </p>
        </div>
        <div className="page-two-card">
          <p className="page-two-card-text">MAIS POPULAR</p>
          <div className="card">
            <h3 className="card-title">Primeiro Curso</h3>
            <h1 className="card-sale">$0</h1>
            <p className="card-sale-description">Voce vai perder essa oportunidade?</p>
            <ul className="benefits-list">
              <li>
                <span className="check-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {/* Círculo amarelo */}
                    <circle cx="12" cy="12" r="10" fill="#FFB800" />
                    
                    {/* Check preto (ou escuro) dentro do círculo */}
                    <path
                      d="M8 12L10.5 14.5L16 9"
                      stroke="#202020" /* cor escura para contrastar com o amarelo */
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </span>
                Acesso imediato ao conteúdo completo
              </li>
              <li>
                <span className="check-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {/* Círculo amarelo */}
                    <circle cx="12" cy="12" r="10" fill="#FFB800" />
                    
                    {/* Check preto (ou escuro) dentro do círculo */}
                    <path
                      d="M8 12L10.5 14.5L16 9"
                      stroke="#202020" /* cor escura para contrastar com o amarelo */
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </span>
                Atualizações gratuitas para sempre
              </li>
              <li>
                <span className="check-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {/* Círculo amarelo */}
                    <circle cx="12" cy="12" r="10" fill="#FFB800" />
                    
                    {/* Check preto (ou escuro) dentro do círculo */}
                    <path
                      d="M8 12L10.5 14.5L16 9"
                      stroke="#202020" /* cor escura para contrastar com o amarelo */
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </span>
                Certificado de conclusão
              </li>
              <li>
                <span className="check-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {/* Círculo amarelo */}
                    <circle cx="12" cy="12" r="10" fill="#FFB800" />
                    
                    {/* Check preto (ou escuro) dentro do círculo */}
                    <path
                      d="M8 12L10.5 14.5L16 9"
                      stroke="#202020" /* cor escura para contrastar com o amarelo */
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </span>
                Suporte da comunidade
              </li>
              <li>
                <span className="check-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {/* Círculo amarelo */}
                    <circle cx="12" cy="12" r="10" fill="#FFB800" />
                    
                    {/* Check preto (ou escuro) dentro do círculo */}
                    <path
                      d="M8 12L10.5 14.5L16 9"
                      stroke="#202020" /* cor escura para contrastar com o amarelo */
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </span>
                Garantia de 30 dias
              </li>
            </ul>
            <button className='card-button'>Inscreva-se Agora</button> 
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;