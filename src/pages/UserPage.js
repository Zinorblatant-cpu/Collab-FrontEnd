import { Link } from 'react-router-dom';


function App() {
  const scrollToFinal = () => {
    const finalSection = document.getElementById('final');
    if (finalSection) {
      finalSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
  <body id='hero' className='min-h-screen bg-slate-50 dark:bg-zinc-900/100 dark:text-white'>
    <main className='max-w-4xl mx-auto mt-40'>

      
    </main>

  </body>  
);
}

export default App;
