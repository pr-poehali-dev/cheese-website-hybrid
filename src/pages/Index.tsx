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
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        <div className="max-w-5xl w-full text-center space-y-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-pacifico text-7xl md:text-9xl text-white drop-shadow-2xl">
                Sapere Italiano
              </h1>
              
              <p className="font-sans text-xl md:text-2xl text-white/95 tracking-wide drop-shadow-lg">
                Итальянский аромат
              </p>
              
              <div className="flex items-center justify-center gap-3 pt-2">
                <div className="h-1 w-16 bg-[#009246] rounded-full shadow-lg"/>
                <div className="h-1 w-24 bg-white rounded-full shadow-lg"/>
                <div className="h-1 w-16 bg-[#CE2B37] rounded-full shadow-lg"/>
              </div>
            </div>

            <div className="pt-8 space-y-6">
              <p className="font-cormorant italic text-5xl md:text-6xl text-white drop-shadow-xl">
                Традиционные сыры с 1963 года
              </p>
              
              <p className="font-sans text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
                Настоящий вкус Италии в каждом кусочке. Созревшие под солнцем Тосканы, наши сыры хранят семейные традиции мастеров-сыроваров.
              </p>
            </div>

            <div className="pt-8">
              <button className="bg-[#009246] hover:bg-[#007A38] text-white font-sans text-lg px-12 py-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,146,70,0.5)]">
                Попробовать наши сыры
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm font-sans">
        Latteria — с любовью к традициям
      </div>
    </div>
  );
}
