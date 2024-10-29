import Header from '../components/Header';
import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
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
            <h1 className="font-bold text-[28px] md:text-[34px] lg:text-[47px] max-w-full lg:max-w-[550px] text-[#482A5D] font-raleway">
              Obrigado pelo Interesse!
            </h1>
            <p className="mt-4 md:mt-5 font-light text-[14px] md:text-[16px] max-w-full lg:max-w-[400px]">
              Estamos à disposição para esclarecer suas dúvidas e atender suas necessidades. Fique à vontade para entrar em contato conosco!
            </p>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2 lg:mt-0 relative mt-40 lg:ml-20 flex flex-col items-center lg:items-start lg:justify-end px-4 lg:px-0 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-4 w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="font-bold text-[#482A5D] block mb-1">Nome</label>
                <input 
                  type="text" 
                  placeholder="Digite seu nome" 
                  className="w-full h-[45px] border border-[#482A5D] rounded-lg px-3 text-[14px]"
                />
              </div>
              <div>
                <label className="font-bold text-[#482A5D] block mb-1">Email</label>
                <input 
                  type="email" 
                  placeholder="Digite seu email" 
                  className="w-full h-[45px] border border-[#482A5D] rounded-lg px-3 text-[14px]"
                />
              </div>
              <div>
                <label className="font-bold text-[#482A5D] block mb-1">Mensagem</label>
                <textarea 
                  placeholder="Escreva sua mensagem" 
                  className="w-full h-[80px] border border-[#482A5D] rounded-lg px-3 py-1 text-[14px] resize-none"
                ></textarea>
              </div>
              <button className="font-raleway font-semibold text-[14px] md:text-sm bg-white rounded-lg text-[#482A5D] px-4 md:px-5 py-2 md:py-3 shadow-[0_0_15px_5px_rgba(188,138,223,0.8)]"
                type="submit"
              >
                Enviar Mensagem
              </button>
            </form>

            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/lina_gourmet?igsh=aTR0NXBlNG40Z2dp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-[45px] h-[45px] bg-[#BC8ADF] rounded-full flex items-center justify-center text-white font-semibold transition hover:bg-[#A36FC1]"
              >
                <FaInstagram size={20} />
                </a>
              <a 
                href="https://wa.me/38999537197" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-[45px] h-[45px] bg-green-500 rounded-full flex items-center justify-center text-white font-semibold transition hover:bg-green-600"
              >
                <FaWhatsapp size={20} />
                </a>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
