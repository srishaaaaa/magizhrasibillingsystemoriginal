import { ShoppingBag, MapPin, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-light text-text-on-light font-sans flex flex-col justify-between selection:bg-bg-dark selection:text-text-on-dark">
      {/* Header */}
      <header className="border-b border-gold-dark/50 py-6 px-6 sm:px-12 flex justify-center items-center bg-bg-dark sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center shadow-md">
            <ShoppingBag className="w-5 h-5 text-bg-dark" />
          </div>
          <div>
            <span className="text-sm font-black text-gold tracking-wider uppercase block">
              மகிழ்ரசி Kist Collection
            </span>
            <span className="text-[9px] text-text-on-dark font-bold tracking-widest block uppercase -mt-0.5">
              Mens | Girls | Kids | Family
            </span>
          </div>
        </div>
      </header>

      {/* Main Info */}
      <main className="flex-1 max-w-xl mx-auto w-full px-6 flex flex-col justify-center items-center py-16">
        <div className="bg-bg-light border border-gold-dark rounded-2xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.06)] w-full text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gold" />
          
          <span className="inline-block px-3 py-1 bg-gold/10 border border-gold/20 text-gold-dark text-[10px] font-bold rounded-full tracking-wider uppercase mb-6">
            Store Directory & Contacts
          </span>
          
          <h1 className="text-3xl font-black text-text-on-light leading-tight tracking-tight mb-2">
            மகிழ்ரசி Kist Collection
          </h1>
          <p className="text-xs text-gold font-black tracking-widest uppercase mb-8">
            Mens | Girls | Kids | Family
          </p>

          <div className="space-y-6 text-left max-w-sm mx-auto text-sm font-semibold text-text-muted border-t border-gold-dark/50 pt-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-0.5">Address</p>
                <p className="text-text-on-light leading-relaxed">
                  Annai Sathiya Nagar, Pennagaram Main Road, Dharmapuri District, Tamil Nadu
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-0.5">Business Hours</p>
                <p className="text-text-on-light">
                  Open Daily: 10:00 AM - 9:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gold-dark/50 py-6 text-center bg-bg-dark">
        <p className="text-[10px] font-bold text-gold tracking-widest uppercase">
          Magizhrasi • Dharmapuri
        </p>
        <p className="text-[9px] font-semibold text-text-on-dark uppercase tracking-wider mt-1">
          © {new Date().getFullYear()} All Rights Reserved • Powered by Cenexa Systems
        </p>
      </footer>
    </div>
  );
}
