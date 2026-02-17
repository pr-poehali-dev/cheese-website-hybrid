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
          <div className="space-y-4">
            <h1 className="font-cormorant italic text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white drop-shadow-2xl font-light tracking-wide">
              Latteria
            </h1>
            
            <p className="font-sans text-2xl sm:text-3xl md:text-4xl text-white/95 tracking-[0.3em] drop-shadow-lg font-light">
              1963
            </p>
          </div>

          <div className="pt-4 space-y-4">
            <p className="font-pacifico text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-xl">
              Sapore Italiano
            </p>
            
            <div className="flex items-center justify-center gap-2 pt-2">
              <div className="h-0.5 w-12 sm:w-16 bg-[#009246] shadow-lg"/>
              <div className="h-0.5 w-16 sm:w-20 bg-white shadow-lg"/>
              <div className="h-0.5 w-12 sm:w-16 bg-[#CE2B37] shadow-lg"/>
            </div>
          </div>

          <div className="pt-12">
            <p className="font-sans text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-light px-4">
              Настоящий вкус Италии в каждом кусочке. Созревшие под солнцем Тосканы, наши сыры хранят семейные традиции мастеров-сыроваров.
            </p>
          </div>

          <div className="pt-8">
            <button className="bg-[#009246] hover:bg-[#007A38] text-white font-sans text-base sm:text-lg px-10 sm:px-12 py-3 sm:py-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,146,70,0.5)]">
              Попробовать наши сыры
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}