
import './App.css';

function App() {
  return (
  <body className='min-h-screen bg-slate-50 dark:bg-zinc-900/100 dark:text-white'>
    <header className='text-white sticky top-0 z-10 backdrop-blur-sm'>
      <section className='max-w-6xl mx-auto py-6 px-6 flex justify-between items-center'>
        <h1 className='text-3xl font-bold'>
          <a href='#hero'>COLL<span className='text-amber-500'>AB</span></a>
        </h1>
        <button className='bg-yellow-500/100 px-8 py-2 rounded-lg text-black whitespace-nowrap'>
          Começar Agora
        </button>
      </section>
      <hr className='border-t border-gray-700 mt-1' />
    </header>
    <main className='max-w-4xl mx-auto mt-40'>

      <section className='flex flex-col items-center gap-6 text-center py-20'>

        <div className="bg-yellow-500/10 rounded-full px-3 py-1 md:px-4 md:py-1.5 flex items-center gap-2 md:gap-3 outline outline-yellow-500 outline-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3 w-3 md:h-4 md:w-4 stroke-yellow-500"
          >
            <circle cx="12" cy="8" r="6" />
            <path d="M8.5 14.5L6 22l6-3 6 3-2.5-7.5" />
          </svg>
          <p className="text-yellow-500 text-xs md:text-sm whitespace-nowrap">
            Curso Completo
          </p>
        </div>

        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-8xl font-bold text-white whitespace-nowrap">
            Didática Transformadora
          </h1>
          <p className='mt-4 text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto'>
            Estratégias práticas para elevar seu ensino e engajar seus alunos
          </p>
        </div>

        <button className="mt-4 text-sm md:text-base lg:text-lg bg-yellow-500 px-8 py-2 rounded-lg text-black whitespace-nowrap shadow-[0_15px_25px_-5px_rgba(234,179,8,0.4)]">
          Começar Agora
        </button>
      </section>

      <section className='flex flex-col items-center justify-center gap-6 text-center py-10'>
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-8xl font-bold text-white whitespace-nowrap">
            O Que Você Vai Receber
          </h1>
          <p className='mt-4 text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto'>
            Tudo que você precisa para dominar o assunto e se destacar no mercado
          </p>
        </div>

        
           {/* 1. Livro - Azul */}
        <div className="bg-zinc-800/35 w-96 h-80 rounded-3xl">
          <div className="bg-zinc-900 w-16 h-16 flex items-center justify-center rounded-2xl mt-9 ml-9">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10 text-blue-400"
            >
              <path d="M12 7v14" />
              <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
            </svg>
          </div>
          <div className="mt-4 flex flex-col justify-center flex-grow">
            <h1 className="text-3xl md:text-3xl font-bold text-white mt-9">
              30 Aulas
            </h1>
            <p className="mt-5 text-xl/2 text-gray-300 ">
              Conteúdo completo e estruturado
            </p>
          </div>
        </div>

        {/* 2. Relógio - Verde */}
        <div className="bg-zinc-800/35 w-96 h-80 rounded-3xl">
          <div className="bg-zinc-900 w-16 h-16 flex items-center justify-center rounded-2xl mt-9 ml-9">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10 text-green-400"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>

          <div className="mt-4 flex flex-col justify-center flex-grow">
            <h1 className="text-3xl md:text-3xl font-bold text-white mt-9">
              24 Horas
            </h1>
            <p className="mt-5 text-xl/2 text-gray-300 ">
              De conteúdo em vídeo
            </p>
          </div>
        </div>

        {/* 3. Medalha - Roxo */}
        <div className="bg-zinc-800/35 w-96 h-80 rounded-3xl">
          <div className="bg-zinc-900 w-16 h-16 flex items-center justify-center rounded-2xl mt-9 ml-9">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10 text-purple-400"
            >
              <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
              <circle cx="12" cy="8" r="6" />
            </svg>
          </div>

          <div className="mt-4 flex flex-col justify-center flex-grow">
            <h1 className="text-3xl md:text-3xl font-bold text-white mt-9">
              Certificado
            </h1>
            <p className="mt-5 text-xl/2 text-gray-300 ">
              Ao finalizar o curso
            </p>
          </div>
        </div>

        {/* 4. Infinito - Amarelo */}
        <div className="bg-zinc-800/35 w-96 h-80 rounded-3xl">
          <div className="bg-zinc-900 w-16 h-16 flex items-center justify-center rounded-2xl mt-9 ml-9">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10 text-[#FFB800]"
            >
              <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />
            </svg>
          </div>

          <div className="mt-4 flex flex-col justify-center flex-grow">
            <h1 className="text-3xl md:text-3xl font-bold text-white mt-9">
              Acesso Vitalício
            </h1>
            <p className="mt-5 text-xl/2 text-gray-300 ">
              Estude no seu ritmo
            </p>
          </div>
        </div>

        {/* 5. Vídeo - Rosa */}
        <div className="bg-zinc-800/35 w-96 h-80 rounded-3xl">
          <div className="bg-zinc-900 w-16 h-16 flex items-center justify-center rounded-2xl mt-9 ml-9">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10 text-pink-400"
            >
              <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
              <rect x="2" y="6" width="14" height="12" rx="2" />
            </svg>
          </div>

          <div className="mt-4 flex flex-col justify-center flex-grow">
            <h1 className="text-3xl md:text-3xl font-bold text-white mt-9">
              Vídeos HD
            </h1>
            <p className="mt-5 text-xl/2 text-gray-300 ">
              Alta qualidade de imagem
            </p>
          </div>
        </div>

        {/* 6. Arquivo - Laranja */}
        <div className="bg-zinc-800/35 w-96 h-80 rounded-3xl">
          <div className="bg-zinc-900 w-16 h-16 flex items-center justify-center rounded-2xl mt-9 ml-9">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10 text-orange-400"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              <path d="M10 9H8" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
            </svg>
          </div>

          <div className="mt-4 flex flex-col justify-center flex-grow">
            <h1 className="text-3xl md:text-3xl font-bold text-white mt-9">
              Material Extra
            </h1>
            <p className="mt-5 text-xl/2 text-gray-300 ">
              Recursos complementares
            </p>
          </div>
        </div>

        {/* 7. Usuários - Ciano */}
        <div className="bg-zinc-800/35 w-96 h-80 rounded-3xl">
          <div className="bg-zinc-900 w-16 h-16 flex items-center justify-center rounded-2xl mt-9 ml-9">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10 text-cyan-400"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>

          <div className="mt-4 flex flex-col justify-center flex-grow">
            <h1 className="text-3xl md:text-3xl font-bold text-white mt-9">
              Comunidade
            </h1>
            <p className="mt-5 text-xl/2 text-gray-300 ">
              Suporte entre alunos
            </p>
          </div>
        </div>

        {/* 8. Check - Esmeralda */}
        <div className="bg-zinc-800/35 w-96 h-80 rounded-3xl">
          <div className="bg-zinc-900 w-16 h-16 flex items-center justify-center rounded-2xl mt-9 ml-9">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10 text-emerald-400"
            >
              <path d="M21.801 10A10 10 0 1 1 17 3.335" />
              <path d="m9 11 3 3L22 4" />
            </svg>
          </div>

          <div className="mt-4 flex flex-col justify-center flex-grow">
            <h1 className="text-3xl md:text-3xl font-bold text-white mt-9">
              Projetos Práticos
            </h1>
            <p className="mt-5 text-xl/2 text-gray-300 ">
              Aprenda fazendo
            </p>
          </div>
        </div>
      </section>

    </main>

  </body>  
);
}

export default App;
