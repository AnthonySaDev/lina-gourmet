import React, { useState, ChangeEvent } from 'react';
import Header from '../components/Header';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ptBR } from 'date-fns/locale';
import { addDays } from 'date-fns';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

registerLocale('pt-BR', ptBR);

type FormData = {
  name: string;
  deliveryDate: Date | null;
  cakeSize: string;
  filling: string;
  message: string;
  description: string;
};

export default function Buy() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    deliveryDate: null,
    cakeSize: '',
    filling: '',
    message: '',
    description: ''
  });

  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const previews = files.map((file) => URL.createObjectURL(file));
      setSelectedImages((prevImages) => [...prevImages, ...previews]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: FormData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleDateChange = (date: Date | null) => {
    setFormData((prevData: FormData) => ({
      ...prevData,
      deliveryDate: date
    }));
  };

  const showErrorToast = (message: string) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored"
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name) showErrorToast("Nome é obrigatório.");
    if (!formData.deliveryDate) showErrorToast("Data da entrega é obrigatória.");
    if (!formData.cakeSize) showErrorToast("Tamanho do bolo é obrigatório.");
    if (!formData.filling) showErrorToast("Recheio é obrigatório.");
    if (!formData.description) showErrorToast("Descrição do bolo é obrigatória.");

    if (!formData.name || !formData.deliveryDate || !formData.cakeSize || !formData.filling || !formData.description) {
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setFormData({
        name: '',
        deliveryDate: null,
        cakeSize: '',
        filling: '',
        message: '',
        description: ''
      })
      toast.success("Pedido enviado com sucesso!");
    } catch (error) {
      showErrorToast("Erro ao enviar pedido.");
      console.log('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden pb-10">
      <ToastContainer />
      <div className="absolute inset-0 flex flex-col lg:flex-row">
        <img 
          src="/images/peach-rect.png" 
          alt="Peach Background" 
          className="w-full lg:w-1/2 h-[50%] lg:h-[94%] object-fill" 
        />
        <img 
          src="/images/peach-rect-invert.png" 
          alt="Purple Background" 
          className="w-full lg:w-1/2 h-[50%] lg:h-full object-fill" 
        />
      </div>

      <main className="relative z-10">
        <Header />
        <section className="flex flex-col lg:flex-row lg:items-start px-6 lg:px-[80px] lg:mt-[40px]">
          <motion.div 
            className="w-full lg:w-1/2 lg:pr-6 text-center lg:text-left pb-[80px] lg:pb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-bold text-[24px] md:text-[28px] lg:text-[34px] max-w-full lg:max-w-[550px] text-[#482A5D] font-raleway">
              Faça seu pedido
            </h1>
            <p className="mt-2 font-light text-[14px] md:text-[15px] max-w-full lg:max-w-[400px]">
              Preencha os detalhes abaixo para personalizar o bolo perfeito para sua ocasião.
            </p>
      
            <form onSubmit={handleSubmit} className="mt-2 lg:mt-[10px] space-y-4 pb-16">
              <div>
                <label className="font-raleway block text-[#482A5D] font-bold mb-1">Nome</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Digite seu nome" 
                  className="min-w-[320px] h-[45px] border border-[#482A5D] rounded-lg px-3 text-[14px]"
                />
              </div>

              <div>
                <label className="font-raleway block text-[#482A5D] font-bold mb-1">Data da Entrega</label>
                <DatePicker
                  selected={formData.deliveryDate}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  locale="pt-BR"
                  minDate={addDays(new Date(), 2)}
                  className="min-w-[320px] h-[45px] border border-[#482A5D] rounded-lg px-3 text-[14px]"
                  placeholderText="Selecione a data"
                />
              </div>

              <div>
                <label className="font-raleway block text-[#482A5D] font-bold mb-1">Tamanho do Bolo</label>
                <select 
                  name="cakeSize"
                  value={formData.cakeSize}
                  onChange={handleInputChange}
                  className="min-w-[320px] h-[45px] border border-[#482A5D] rounded-lg px-3 text-[14px]"
                >
                  <option value="">Escolha o tamanho (kg)</option>
                  <option value="1kg">1 kg</option>
                  <option value="2kg">2 kg</option>
                  <option value="3kg">3 kg</option>
                  <option value="4kg">4 kg</option>
                  <option value="5kg">5 kg</option>
                </select>
              </div>

              <div>
                <label className="font-raleway block text-[#482A5D] font-bold mb-1">Recheio</label>
                <input 
                  type="text" 
                  name="filling"
                  value={formData.filling}
                  onChange={handleInputChange}
                  placeholder="Escolha o recheio" 
                  className="min-w-[320px] h-[45px] border border-[#482A5D] rounded-lg px-3 text-[14px]"
                />
              </div>
            </form>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2 md:mt-0 relative flex flex-col items-center lg:items-start lg:justify-end px-4 lg:px-0 pb-[60px] lg:ml-32 lg:pb-0 space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="min-w-[320px]">
              <label className="font-raleway block text-[#482A5D] font-bold mb-1">Mensagem no Bolo (Opcional)</label>
              <input 
                type="text" 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Escreva uma mensagem para o bolo" 
                className="w-full h-[45px] border border-[#482A5D] rounded-lg px-3 text-[14px]"
              />
            </div>

            <div className="min-w-[320px]">
              <label className="font-raleway block text-[#482A5D] font-bold mb-1">Descrição do Bolo</label>
              <textarea 
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Descreva o bolo ou detalhes específicos" 
                className="w-full h-[80px] border border-[#482A5D] rounded-lg px-3 py-1 text-[14px] resize-none"
              ></textarea>
            </div>

            <div className="min-w-[320px]">
              <label className="font-raleway block text-[#482A5D] font-bold mb-1">Referência (Adicione Imagens)</label>
              <label className="w-full h-[45px] flex items-center justify-center cursor-pointer my-5 font-raleway font-semibold text-[14px] md:text-sm bg-white rounded-lg text-black px-4 md:px-5 py-2 md:py-3 shadow-[0_0_15px_5px_rgba(188,138,223,0.5)]">
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageUpload} 
                  className="hidden"
                />
                Enviar Imagem
              </label>
            </div>

            <div className="min-w-[320px]">
              <h2 className="font-semibold text-[#482A5D] mb-2">Imagens de Referência</h2>
              <div className="grid grid-cols-2 gap-2">
                {selectedImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="w-full h-[80px] border border-[#482A5D] rounded-lg overflow-hidden relative cursor-pointer"
                    onClick={() => handleRemoveImage(index)}
                    title="Clique para remover"
                  >
                    <img src={image} alt={`Referência ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              {selectedImages.length === 0 && (
                <p className="text-[#482A5D] text-center mt-2">
                  Nenhuma imagem carregada. Adicione imagens de referência se desejar.
                </p>
              )}
            </div>

            <motion.button 
              onClick={handleSubmit}
              className="min-w-[320px] h-[45px] bg-[#482A5D] text-white font-semibold rounded-lg transition hover:bg-[#6A3B7A]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Pedido'}
            </motion.button>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
