
import './App.css';

function App() {
  return (
  <body className='min-h-screen bg-slate-50 dark:bg-zinc-900 dark:text-white'>
    <header className='text-white sticky top-0 z-10 bg-zinc-900'>
      <section className='max-w-6xl mx-auto py-6 px-6 flex justify-between items-center'>
        <h1 className='text-3xl font-bold'>
          <a href='#hero'>COLL<span className='text-amber-500'>AB</span></a>
        </h1>
        <button className='bg-amber-500 px-8 py-2 rounded-lg text-black font-bold whitespace-nowrap'>
          Começar Agora
        </button>
      </section>
    </header>
    <hr className='border-t border-gray-700 mt-1' />
    <main className='max-w-4xl mx-auto flex justify-center mt-6'>
      <div className='bg-yellow-500/50 rounded-full px-3 py-1 flex items-center gap-3 mt-6'>
        <p className='text-yellow-500 text-sm font-medium whitespace-nowrap'>
          Curso Completo
        </p>
      </div>
    </main>

  </body>  
);
}

export default App;
