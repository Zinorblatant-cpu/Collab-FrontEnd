import React from 'react';
import './App.css';

function App() {
  return (
    <main>
      <header>
        <span className='logo-text'>
          <span className='logo-part-white'>COLL</span>
          <span className='logo-part-yellow'>AB</span>
        </span>

      <button className='hader-button'>Começar AGORA ➜ </button>
      </header>
      <section className="hero-section">
        <p className="course-text">
         🎓 Curso Completo
        </p>
        <div className="title-container">
          <h3 className="title">
            Desenvolvimento Profissional <br />seu como Professor
          </h3>
        </div>
        <div className='description-container'>
          <p className="description">
              Deixe sua marca na educação: aprenda a ensinar com <br />propósito, inovação e autoridade pedagógica.
          </p>
        </div>
        <div className='hero-button'><button className='button'>Começar AGORA ➜ </button></div>
      </section>
      <section className='page-two'> 
        <div className="page-two-title-container">
          <h3 className="page-two-title">
            Invista no Seu Futuro
          </h3>
        </div>
        <div className='page-two-description-container'>
          <p className="page-two-description">
              Não perca a oportunidade de entrar na primeira turma de GRAÇA.
          </p>
        </div>
        <p className="page-two-course-text">
          MAIS POPULAR
        </p>
        <div className='page-two-card'>
          <h1>Primeiro Curso <br />$0 </h1>
          <p>Acesso imediato ao<br />Mais de 40 horas de curso<br />Atualizações gratuitas para sempre<br />Certificado de conclusão<br />Suporte da comunidade<br />Garantia de 30 dias</p>
        </div>
        
      </section>
    </main>
  );
}

export default App;
