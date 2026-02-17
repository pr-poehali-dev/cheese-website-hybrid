export default function Index() {
  return (
    <div className="min-h-screen bg-[#f4f0e8] relative overflow-hidden">
      <div className="absolute top-20 left-10 opacity-10">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <path d="M60 10 L50 40 Q45 60 60 70 Q75 60 70 40 Z" fill="#4a5240"/>
          <ellipse cx="60" cy="85" rx="25" ry="8" fill="#4a5240"/>
        </svg>
      </div>
      
      <div className="absolute bottom-32 right-20 opacity-10">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#4a5240" strokeWidth="2"/>
          <path d="M 30 50 Q 50 30 70 50 Q 50 70 30 50" fill="#4a5240"/>
        </svg>
      </div>

      <div className="absolute top-1/2 left-5 opacity-5">
        <svg width="80" height="150" viewBox="0 0 80 150" fill="none">
          <path d="M40 10 Q35 30 40 50 Q45 70 40 90 Q35 110 40 130" stroke="#4a5240" strokeWidth="2" fill="none"/>
          <circle cx="20" cy="40" r="3" fill="#4a5240"/>
          <circle cx="60" cy="80" r="3" fill="#4a5240"/>
          <path d="M 25 60 L 15 65 L 25 70" fill="none" stroke="#4a5240" strokeWidth="1"/>
        </svg>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        <div className="max-w-4xl w-full text-center space-y-8">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-widest text-[#4a5240] font-sans">
              Итальянская сыроварня
            </p>
            
            <div className="relative inline-block">
              <div className="absolute -inset-8 opacity-20">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  <ellipse cx="200" cy="150" rx="180" ry="120" fill="none" stroke="#4a5240" strokeWidth="1.5"/>
                  <path d="M 50 150 Q 80 80, 120 100 T 180 90" stroke="#4a5240" strokeWidth="1" fill="none" opacity="0.4"/>
                  <path d="M 350 150 Q 320 220, 280 200 T 220 210" stroke="#4a5240" strokeWidth="1" fill="none" opacity="0.4"/>
                  <circle cx="200" cy="60" r="3" fill="#4a5240" opacity="0.3"/>
                  <circle cx="100" cy="140" r="2" fill="#4a5240" opacity="0.3"/>
                  <circle cx="300" cy="160" r="2" fill="#4a5240" opacity="0.3"/>
                </svg>
              </div>
              
              <div className="relative bg-[#f4f0e8]/90 border-2 border-[#4a5240] rounded-full px-16 py-12">
                <h1 className="font-cormorant italic text-7xl md:text-8xl text-[#2d3428] mb-2">
                  Latteria
                </h1>
                <p className="font-sans text-sm tracking-wider text-[#4a5240]">
                  1963
                </p>
              </div>
            </div>
            
            <div className="pt-4">
              <p className="font-cormorant italic text-3xl md:text-4xl text-[#4a5240]">
                Sapere Italiano
              </p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <div className="h-px w-12 bg-[#6b7d5c]"/>
                <div className="h-px w-16 bg-[#a8875f]"/>
                <div className="h-px w-12 bg-[#c84b4b]"/>
              </div>
              <p className="font-sans text-sm mt-2 tracking-wide text-[#4a5240]">
                Итальянский аромат
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}