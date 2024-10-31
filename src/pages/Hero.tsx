import Header from '../components/Header';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
export default function Hero() {

  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen overflow-hidden pb-10">
      {/* Imagens de Fundo */}
      <div className="absolute inset-0 flex flex-col lg:flex-row">
        <img 
          src="/images/peach-rect.png" 
          alt="Peach Background" 
          className="w-full lg:w-1/2 h-[50%] lg:h-[94%] object-fill" 
        />
        <img 
          src="/images/purple-rect.png" 
          alt="Purple Background" 
          className="w-full lg:w-1/2 h-[50%] lg:h-full object-fill" 
        />
      </div>

      <main className="relative z-10">
        <Header />
        <section className="flex flex-col lg:flex-row lg:items-start px-6 lg:px-[100px] lg:mt-[60px]">
          <motion.div 
            className="w-full lg:w-1/2 lg:pr-10 text-center lg:text-left pb-[80px] lg:pb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="font-bold text-[20px] md:text-[30px] lg:text-[40px] max-w-full lg:max-w-[550px] text-[#482A5D] font-raleway"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Comemore os Momentos Doces da Vida com o Bolo Perfeito
            </motion.h1>
            <motion.p
              className="mt-4 md:mt-5 font-light text-[14px] md:text-[16px] max-w-full lg:max-w-[400px]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Descubra nossa seleção feita com carinho ou personalize um bolo único, pensado especialmente para sua ocasião. Vamos fazer com que cada fatia seja repleta de alegria e conexão!
            </motion.p>
            <motion.div
              className="flex flex-row mt-6 lg:mt-[40px] gap-3 lg:gap-5 items-center lg:items-start justify-center lg:justify-start"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <button className="font-raleway font-bold text-[14px] md:text-sm bg-[#BC8ADF] rounded-lg text-white px-4 md:px-5 py-2 md:py-3 shadow-[0_0_15px_5px_rgba(255,255,255,0.5)]"
              onClick={() => navigate('/buy')}
              >
                COMPRE AGORA
              </button>
              <button className="font-raleway font-semibold text-[14px] md:text-sm bg-white rounded-lg text-black px-4 md:px-5 py-2 md:py-3 shadow-[0_0_15px_5px_rgba(188,138,223,0.5)]" 
              onClick={() => navigate('/about')}
              >
                Saiba mais
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2 md:mt-0 lg:mb-20  relative flex justify-center lg:justify-end px-4 lg:px-0 pb-[80px] lg:pb-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.div 
              className="relative md:mt-0 max-w-xs lg:max-w-none mx-auto lg:mx-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <img src="/images/arc.svg" alt="Arc" className="absolute top-36 lg:top-10 -right-10 lg:right-0 " />
              <img src="/images/star.svg" alt="Star" className="absolute top-32 lg:top-16 right-4" />
              <img src="/images/hero-img.png" alt="Hero Image" className="mt-48 lg:mt-20 w-[75%] mx-auto"/>
              <img src="/images/line-element.svg" alt="Line Element" className="absolute -bottom-14 lg:-bottom-20 -left-16 lg:left-0 size-52" />
              <img src="/images/circle-element.svg" alt="Circle Element" className="absolute -bottom-20 size-40 lg:-bottom-20 -right-10 " />
            </motion.div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
