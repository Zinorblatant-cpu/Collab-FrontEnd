
function App() {

  return (
  <body id='hero' className='min-h-screen bg-slate-50 dark:bg-zinc-900/100 dark:text-white'>
    <main className='max-w-6xl mx-auto mt-10'>
      
      <section className="fixed left-0 top-0 h-screen w-20 bg-black flex flex-col justify-between items-center py-10 outline outline-yellow-500">

        
        <div>
          <div className="bg-yellow-500 w-12 h-12 flex items-center justify-center rounded-xl text-black">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-house w-6 h-6">
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
              <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            </svg>
          </div>

          <div className="bg-zinc-800 w-12 h-12 flex items-center justify-center rounded-xl mt-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-book w-6 h-6">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path>
            </svg>
          </div>
        </div>

        
        <div>
          <div className="bg-zinc-800 w-12 h-12 flex items-center justify-center rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-settings w-6 h-6">
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </div>

          <div className="bg-zinc-800 w-12 h-12 flex items-center justify-center rounded-xl mt-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-user w-6 h-6">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
        </div>

      </section>

      <section className="flex justify-between items-center">
        <div>
          <h1 className="sm:text-1xl md:text-2xl lg:text-4xl xl:text-6xl font-bold text-white whitespace-nowrap">
            Bem-vindo ao <span className='text-amber-500'>COLLAB</span>
          </h1>

          <p className='mt-4 text-sm md:text-base lg:text-xl text-gray-300 max-w-2xl mx-auto'>
            Continue sua jornada de aprendizado
          </p>
        </div>

      </section>

      <section className="mt-40 flex gap-6 justify-center ">
        {/* Card 1 */}
        <div className="bg-zinc-800/70  backdrop-blur-xs w-[320px] h-[160px] flex flex-col justify-center  rounded-xl focus:outline-2 outline-white">

          <div className="ms-6">
            <div className="flex gap-20 items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#FFB800]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 7v14"></path>
                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
              </svg>
            </div>

            <h3 className="text-xl font-semibold mt-2">4</h3>
            <p className="text-sm text-zinc-300">Cursos Disponíveis</p>
          </div>
          
        </div>

        {/* Card 2 */}
        <div className="bg-zinc-800/70 w-[320px] h-[160px] flex flex-col justify-center rounded-xl">

          <div className="ms-6">
            <div className="">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>

            <h3 className="text-2xl font-semibold mt-2">4</h3>
            <p className="text-sm text-zinc-300">Cursos Disponíveis</p>
          </div>

        </div>

        {/* Card 3 */}
        <div className="bg-zinc-800/70 w-[320px] h-[160px] flex flex-col justify-center  rounded-xl">

          <div className="ms-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
              <circle cx="12" cy="8" r="6"></circle>
            </svg>
          
            <h3 className="text-xl font-semibold mt-2">4</h3>
            <p className="text-sm text-zinc-300">Cursos Disponíveis</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-yellow-500 w-[320px] h-[160px] flex flex-col justify-center  rounded-xl">
          <div className="ms-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#151515]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="6 3 20 12 6 21 6 3"></polygon>
            </svg>
          
            <h3 className="text-xl font-semibold mt-2">4</h3>
            <p className="text-sm text-black">Cursos Disponíveis</p>
          </div>
        </div>
      </section>

      <section className="mt-40 flex gap-6  ">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white ">
            Seus Cursos
        </h1>

        <div className="bg-gray-600;">

        </div>
      </section>
    </main>
  </body>

);
}

export default App;
