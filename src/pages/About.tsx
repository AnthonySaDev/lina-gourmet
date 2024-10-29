import Header from '../components/Header';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden pb-10">
      {/* Imagens de Fundo */}
      <div className="absolute inset-0 flex flex-col lg:flex-row">
        <img 
          src="/images/purple-rect-invert.png" 
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
            <h1 className="font-bold text-[28px] md:text-[34px] lg:text-[47px] max-w-full lg:max-w-[550px] text-[#482A5D] font-raleway">
              Nossa Essência
            </h1>
            <p className="mt-4 md:mt-5 font-light text-[14px] md:text-[16px] max-w-full lg:max-w-[400px] text-zinc-300">
              Situada no coração de Montes Claros - MG, somos apaixonados por transformar momentos em sabores inesquecíveis. Cada bolo é feito com dedicação e ingredientes selecionados, trazendo o gosto caseiro e o carinho em cada fatia. Seja para aniversários, casamentos ou celebrações especiais, oferecemos uma variedade de sabores e decorações personalizadas que encantam e surpreendem. Nosso objetivo é que cada cliente leve para casa não apenas um doce, mas uma experiência de afeto e tradição em forma de bolo.
            </p>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2 md:mt-0 relative flex justify-center lg:justify-end px-4 lg:px-0 pb-[80px] lg:pb-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative md:mt-0 max-w-xs lg:max-w-none mx-auto lg:mx-0">
              <img src="/images/arc.svg" alt="Arc" className="absolute top-36 lg:top-10 -right-10 lg:right-0 " />
              <img src="/images/star.svg" alt="Star" className="absolute top-32 lg:top-16 right-4" />
              <img src="/images/bolo.png" alt="Hero Image" className="mt-48 lg:mt-20 w-[75%] mx-auto"/>
              <img src="/images/line-element.svg" alt="Line Element" className="absolute -bottom-14 lg:-bottom-20 -left-16 lg:left-0 size-52" />
              <img src="/images/circle-element.svg" alt="Circle Element" className="absolute -bottom-20 size-40 lg:-bottom-20 -right-10 " />
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
