export default function Index() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/files/68616863-479f-40f8-88fd-67a3d70386a4.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-5">
        <div className="w-full text-center space-y-8">
          <div className="inline-block relative">
            <svg 
              className="absolute inset-0 w-full h-full" 
              viewBox="0 0 600 400"
              style={{ transform: 'scale(1.4)' }}
            >
              <ellipse 
                cx="300" 
                cy="200" 
                rx="280" 
                ry="180" 
                fill="none" 
                stroke="#009246" 
                strokeWidth="3"
                opacity="0.7"
              />
              <ellipse 
                cx="300" 
                cy="200" 
                rx="290" 
                ry="186" 
                fill="none" 
                stroke="#ffffff" 
                strokeWidth="3"
                opacity="0.8"
              />
              <ellipse 
                cx="300" 
                cy="200" 
                rx="300" 
                ry="192" 
                fill="none" 
                stroke="#CE2B37" 
                strokeWidth="3"
                opacity="0.7"
              />
            </svg>

            <div className="relative space-y-2 px-8 py-12">
              <p className="font-aver text-sm sm:text-base md:text-lg text-white/90 tracking-wide drop-shadow-lg">
                итальянская сыроварня
              </p>
              
              <h1 className="font-abilya text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] text-white drop-shadow-2xl tracking-wide">
                Latteria
              </h1>
              
              <p className="font-anisha text-2xl sm:text-3xl md:text-4xl text-white/95 tracking-[0.2em] drop-shadow-lg font-light italic">
                1963
              </p>
            </div>
          </div>

          <div className="pt-12">
            <p className="font-aver text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg px-4">
              Настоящий вкус Италии в каждом кусочке. Созревшие под солнцем Тосканы, наши сыры хранят семейные традиции мастеров-сыроваров.
            </p>
          </div>

          <div className="pt-8">
            <button className="bg-[#8B9474] hover:bg-[#757F61] text-white font-aver text-base sm:text-lg px-10 sm:px-12 py-3 sm:py-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,148,116,0.5)]">
              Попробовать наши сыры
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}