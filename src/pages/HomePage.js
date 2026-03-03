import { Link } from 'react-router-dom';

function App() {
  return (
    <div id="hero" className="min-h-screen bg-slate-50 dark:bg-zinc-900 dark:text-white">
      <main className="max-w-6xl mx-auto mt-10">
        <header className="flex justify-between items-center sticky top-0 z-10 backdrop-blur-sm py-4">
          
          <h1 className="text-2xl font-bold">
            <a href="#hero">Prandianinhos.com</a>
          </h1>

          {/* Github Button */}
          <button
            className="
              group relative flex items-center justify-center
              w-[45px] h-[45px]
              bg-[rgb(31,31,31)]
              rounded-full
              overflow-hidden
              transition-all duration-400
              hover:w-[110px]
              hover:rounded-[30px]
            "
          >
            {/* SVG */}
            <svg
              className="h-[1.4em] transition-opacity duration-300 group-hover:opacity-0"
              viewBox="0 0 496 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="white"
                d="M244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2
                12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4
                0 0-70 15-84.7-29.8
                0 0-11.4-29.1-27.8-36.6
                0 0-22.9-15.7 1.6-15.4
                0 0 24.9 2 38.6 25.8
                21.9 38.6 58.6 27.5 72.9 20.9
                2.3-16 8.8-27.1 16-33.7
                -55.9-6.2-112.3-14.3-112.3-110.5
                0-27.5 7.6-41.3 23.6-58.9
                -2.6-6.5-11.1-33.3 2.6-67.9
                20.9-6.5 69 27 69 27
                20-5.6 41.5-8.5 62.8-8.5
                s42.8 2.9 62.8 8.5
                c0 0 48.1-33.6 69-27
                13.7 34.7 5.2 61.4 2.6 67.9
                16 17.7 25.8 31.5 25.8 58.9
                0 96.5-58.9 104.2-114.8 110.5
                9.2 7.9 17 22.9 17 46.4
                0 33.7-.3 75.4-.3 83.6
                0 6.5 4.6 14.4 17.3 12.1
                C428.2 457.8 496 362.9 496 252
                496 113.3 383.5 8 244.8 8z"
              />
            </svg>

            {/* Text */}
            <span
              className="
                absolute
                text-white
                font-semibold
                opacity-0
                transition-opacity duration-400
                group-hover:opacity-100
              "
            >
              Github
            </span>
          </button>

        </header>
      </main>
    </div>
  );
}

export default App;