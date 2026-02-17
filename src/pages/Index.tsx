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
      
      <div className="relative z-10 flex items-center justify-center min-h-screen p-5">
        <div className="w-full max-w-5xl flex flex-col items-center space-y-8">
          <div className="relative w-full max-w-3xl aspect-[5/3] flex items-center justify-center">
            <svg 
              className="absolute inset-0 w-full h-full" 
              viewBox="0 0 700 420"
            >
              <ellipse 
                cx="350" 
                cy="210" 
                rx="320" 
                ry="190" 
                fill="none" 
                stroke="#8B9474" 
                strokeWidth="2.5"
                opacity="0.7"
              />
              <ellipse 
                cx="350" 
                cy="210" 
                rx="330" 
                ry="196" 
                fill="none" 
                stroke="#D4C5B0" 
                strokeWidth="2.5"
                opacity="0.75"
              />
              <ellipse 
                cx="350" 
                cy="210" 
                rx="340" 
                ry="202" 
                fill="none" 
                stroke="#A89080" 
                strokeWidth="2.5"
                opacity="0.7"
              />
              
              <circle cx="90" cy="210" r="4" fill="white" opacity="0.8"/>
              <circle cx="610" cy="210" r="4" fill="white" opacity="0.8"/>
              
              <defs>
                <path 
                  id="topCurve" 
                  d="M 80 210 A 270 165 0 0 1 620 210" 
                />
              </defs>
              
              <text className="font-aver" fill="white" opacity="0.95" fontSize="15" letterSpacing="3">
                <textPath href="#topCurve" startOffset="50%" textAnchor="middle">
                  итальянская сыроварня
                </textPath>
              </text>
            </svg>

            <div className="relative text-center z-10">
              <h1 className="font-abilya text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] text-white drop-shadow-2xl leading-none">
                Latteria
              </h1>
              
              <p className="font-anisha text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/95 tracking-[0.2em] drop-shadow-lg font-light italic mt-1">
                1963
              </p>
            </div>
          </div>

          <div className="text-center max-w-2xl px-4">
            <p className="font-aver text-base sm:text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-lg">
              Настоящий вкус Италии в каждом кусочке. Созревшие под солнцем Тосканы, наши сыры хранят семейные традиции мастеров-сыроваров.
            </p>
          </div>

          <div className="pt-8 flex flex-col items-center space-y-3">
            <div className="flex items-center gap-4">
              <div className="h-px w-20 sm:w-32 bg-white/60"/>
              <h2 className="font-abilya text-4xl sm:text-5xl md:text-6xl text-white drop-shadow-xl">
                Sapore Italiano
              </h2>
              <div className="h-px w-20 sm:w-32 bg-white/60"/>
            </div>
            
            <p className="font-aver text-sm sm:text-base text-white/85 drop-shadow-lg tracking-wide">
              Итальянский аромат
            </p>
            
            <div className="flex items-center gap-3 pt-1">
              <div className="h-1 w-16 sm:w-20 bg-[#009246]/80 rounded-full"/>
              <div className="h-1 w-20 sm:w-24 bg-white/80 rounded-full"/>
              <div className="h-1 w-16 sm:w-20 bg-[#CE2B37]/80 rounded-full"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}