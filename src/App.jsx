import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Car, 
  BatteryCharging, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  MessageCircle, 
  Plus, 
  Minus, 
  Menu,
  X,
  ChevronDown,
  CalendarDays,
  Wrench, 
  Smartphone,
  Eye, 
  Zap,
  PlugZap, 
  Globe,
  Wifi,
  History,
  AlertTriangle,
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  XCircle,
  Check,
  CreditCard,
  Banknote,
  PackageCheck, 
  Truck,
  HandCoins,
  ArrowDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- CONFIGURACIÓN Y CONSTANTES ---
const COLORS = {
  blue: "#02255b",
  darkBlue: "#011a42",
  lime: "#9fe43f",
  white: "#ffffff",
};

// Mensaje General Actualizado para Autos (NUEVO NÚMERO)
const WHATSAPP_LINK = "https://wa.me/5493515575131?text=Hola%20Centinel,%20quiero%20proteger%20mi%20auto%20particular%20con%20el%20sistema%20autoinstalable.%20%C2%BFMe%20podr%C3%ADas%20asesorar?";

// --- COMPONENTES ---

// 1. NAVBAR
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Funciones", href: "#beneficios" },
    { name: "Autoinstalable", href: "#instalacion" },
    { name: "Hardware", href: "#hardware" },
    { name: "Precio", href: "#pago-seguro" }, 
    { name: "Sede", href: "#confianza" },
    { name: "Preguntas", href: "#faq" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#02255b]/95 backdrop-blur-md shadow-lg py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center w-full">
        
        {/* LOGO */}
        <a href="#" onClick={(e) => handleNavClick(e, '#inicio')} className="flex items-center gap-2 group cursor-pointer z-50 flex-shrink-0">
          <span className="text-xl md:text-2xl font-black tracking-tighter text-white whitespace-nowrap">
            CENTINEL <span className="text-[#9fe43f] group-hover:text-white transition-colors">AUTOS</span>
          </span>
        </a>

        {/* MENÚ DESKTOP */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-6 lg:gap-10 px-4">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs lg:text-sm font-bold text-gray-200 hover:text-[#9fe43f] transition-colors uppercase tracking-wide cursor-pointer whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* BOTÓN CONTACTO */}
        <div className="hidden md:block flex-shrink-0">
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2.5 rounded-full font-bold text-xs lg:text-sm transition-all whitespace-nowrap ${
              scrolled 
                ? "bg-[#9fe43f] text-[#02255b] hover:bg-white" 
                : "border-2 border-white text-white hover:bg-white hover:text-[#02255b]"
            }`}
          >
            HABLÁ CON UN ASESOR
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#011a42] border-b border-white/10 overflow-hidden absolute top-full left-0 w-full shadow-2xl"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-white font-bold text-lg hover:text-[#9fe43f] border-b border-white/5 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9fe43f] font-bold text-lg pt-2 flex items-center gap-2"
              >
                HABLAR POR WHATSAPP <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// 2. HERO SECTION
const Hero = () => {
  const handleScrollToFeatures = (e) => {
    e.preventDefault();
    const element = document.getElementById('beneficios');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32 px-6 bg-[#02255b] overflow-hidden min-h-[95vh] flex flex-col justify-center">
      
      {/* Background Image - Auto Familiar/Moderno */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083&auto=format&fit=crop" 
          alt="Auto viajando seguro"
          className="w-full h-full object-cover opacity-30"
          onError={(e) => e.target.style.display = 'none'} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#02255b]/90 via-[#02255b]/70 to-[#02255b]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#02255b]/40 to-[#02255b]" />
      </div>

      {/* Animated Blobs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#9fe43f] rounded-full mix-blend-overlay filter blur-[100px] opacity-20 animate-blob" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#9fe43f] rounded-full mix-blend-overlay filter blur-[100px] opacity-20 animate-blob animation-delay-2000" />
      
      {/* Floating particles (RESTAURADO) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#9fe43f]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto text-center z-10 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-[#9fe43f]/10 border border-[#9fe43f]/40 text-[#9fe43f] text-xs md:text-sm font-bold tracking-widest mb-8 uppercase backdrop-blur-md shadow-[0_0_20px_rgba(159,228,63,0.1)] hover:shadow-[0_0_30px_rgba(159,228,63,0.2)] transition-all"
          >
            <Wifi className="w-4 h-4" />
            Tecnología 4G LTE • Envíos a todo el país
          </motion.span>
          
          <h1 className="mb-10 font-black text-white tracking-tight">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="block text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-4"
            >
              Rastreo y Control <br className="hidden md:block" />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9fe43f] via-[#b0ff4f] to-white animate-gradient-x">
                  Satelital para tu Vehículo.
                </span>
                {/* RESTAURADO: Línea animada inferior */}
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#9fe43f] to-transparent"
                  animate={{ scaleX: [0, 1, 0], opacity: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </span>
            </motion.span>

            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="block text-2xl md:text-3xl lg:text-4xl font-bold text-gray-300 mt-4 tracking-normal"
            >
              Sin cables. Sin esperas. Sin técnicos.
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-gray-100 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            GPS Autoinstalable (Plug & Play) que conectás vos mismo en segundos. 
            <br className="hidden md:block"/>
            Rastreo en tiempo real, historial de viajes y seguridad para tu familia. <br/>
            <span className="text-[#9fe43f] font-bold">Simple, rápido y seguro.</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#beneficios"
              onClick={handleScrollToFeatures}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white text-[#02255b] font-black py-5 px-10 rounded-full text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all cursor-pointer group"
            >
              Ver cómo funciona
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown className="w-6 h-6 group-hover:text-[#9fe43f] transition-colors" />
              </motion.div>
            </motion.a>
            
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white font-black py-5 px-10 rounded-full text-lg hover:bg-white hover:text-[#02255b] transition-all cursor-pointer group"
            >
              Quiero asesoramiento
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// --- BRAND MARQUEE (AUTOS) ---
const BrandMarquee = () => {
  const brands = [
    "TOYOTA", "VOLKSWAGEN", "FORD", "CHEVROLET", "FIAT", "RENAULT", "PEUGEOT", "HONDA", "NISSAN", "JEEP", "CITROËN", "AUDI"
  ];

  return (
    <div className="w-full bg-[#011a42] border-y border-white/5 py-10 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#011a42] via-transparent to-[#011a42] z-10 pointer-events-none"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" 
           style={{ 
             backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', 
             backgroundSize: '50px 50px' 
           }}
      />

      <div className="flex gap-16 animate-marquee whitespace-nowrap">
        {[...brands, ...brands, ...brands].map((brand, index) => (
          <motion.span 
            key={index}
            whileHover={{ scale: 1.2, color: "#9fe43f" }}
            className="text-2xl md:text-3xl font-black text-white/10 transition-all cursor-default select-none relative group"
          >
            {brand}
          </motion.span>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-6"
      >
        <p className="text-[#9fe43f] text-xs font-bold tracking-widest uppercase opacity-70 flex items-center justify-center gap-2">
          <Globe className="w-4 h-4"/>
          Compatible con el 99% de autos y camionetas (Puerto OBD2)
        </p>
      </motion.div>
    </div>
  );
};

// 3. FEATURES - BENTO GRID
const ProblemSolution = () => {
  return (
    <section id="beneficios" className="py-24 px-6 bg-[#011a42] relative scroll-mt-20 overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-[#9fe43f]/5 rounded-full blur-[120px]"
          animate={{ y: [0, 50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4 max-w-full px-2"
          >
            <span className="inline-block text-[#9fe43f] font-bold tracking-wide md:tracking-widest text-xs md:text-sm uppercase bg-[#9fe43f]/10 px-3 md:px-4 py-2 rounded-2xl md:rounded-full border border-[#9fe43f]/30 whitespace-normal break-words leading-relaxed">
              ⚡ Control Familiar y Seguridad
            </span>
          </motion.div>
          
          {/* TÍTULO AJUSTADO PARA MÓVILES */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-white leading-tight">
            FUNCIONALIDADES DE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9fe43f] to-emerald-400">
              NUESTRA APP
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            La solución ideal para autos particulares. Sin complicaciones técnicas, con toda la potencia de un GPS profesional.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
            
            {/* Card 1: Ubicación & Historial (Large) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-2 row-span-2 bg-[#02255b] rounded-[2.5rem] p-8 md:p-10 border border-white/10 relative overflow-hidden group hover:border-[#9fe43f]/50 transition-all shadow-lg"
            >
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#9fe43f]/10 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none"></div>
                
                <div className="relative z-10 h-full flex flex-col justify-between min-h-[300px]">
                    <div>
                        <div className="flex gap-4 mb-6">
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#9fe43f]">
                                <MapPin className="w-7 h-7" />
                            </div>
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#9fe43f]">
                                <History className="w-7 h-7" />
                            </div>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">¿Dónde está y dónde estuvo?</h3>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                            Rastreo en tiempo real 24/7. Además, accedé al <strong>historial de recorridos</strong>. 
                            Ideal para control familiar o chequear el uso del vehículo si lo prestás.
                        </p>
                    </div>
                    
                    {/* Visual Live Map (RESTAURADO: RADAR MODE) */}
                    <div className="mt-8 w-full h-48 md:h-56 bg-[#00102b] rounded-2xl border border-white/10 relative overflow-hidden shadow-inner flex items-center justify-center">
                         {/* Map Grid Background */}
                         <div className="absolute inset-0 opacity-30" 
                              style={{ 
                                  backgroundImage: 'linear-gradient(#304a7a 1px, transparent 1px), linear-gradient(90deg, #304a7a 1px, transparent 1px)', 
                                  backgroundSize: '40px 40px',
                                  backgroundPosition: 'center center'
                              }}
                         ></div>
                         
                         {/* Radar Circles */}
                         <div className="absolute w-32 h-32 border border-[#9fe43f]/20 rounded-full"></div>
                         <div className="absolute w-64 h-64 border border-[#9fe43f]/10 rounded-full"></div>
                         
                         {/* Scanning Radar Animation */}
                         <motion.div 
                            className="absolute top-1/2 left-1/2 w-[150%] h-[150%] origin-top-left bg-gradient-to-r from-transparent via-[#9fe43f]/5 to-transparent"
                            style={{ top: '50%', left: '50%', x: '-50%', y: '-50%' }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                         />

                         {/* Static Dot (Auto) in Center with ELEGANT WAVES */}
                         <div className="relative z-20 flex items-center justify-center w-20 h-20">
                             {/* Onda Expansiva Suave 1 */}
                             <motion.div
                                className="absolute inset-0 bg-[#9fe43f] rounded-full"
                                initial={{ scale: 0.2, opacity: 0 }}
                                animate={{ scale: 1.5, opacity: [0, 0.3, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                             />
                             {/* Onda Expansiva Suave 2 (Desfasada) */}
                             <motion.div
                                className="absolute inset-0 bg-[#9fe43f] rounded-full"
                                initial={{ scale: 0.2, opacity: 0 }}
                                animate={{ scale: 1.5, opacity: [0, 0.3, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                             />
                             
                             {/* Core Dot (Latido elegante) */}
                             <motion.div 
                                className="w-3.5 h-3.5 bg-[#9fe43f] rounded-full border border-white/80 shadow-[0_0_15px_rgba(159,228,63,0.4)] z-10 relative"
                                animate={{ scale: [1, 1.1, 1], opacity: [0.9, 1, 0.9] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                             />
                         </div>
                         
                         <div className="absolute bottom-4 left-4 flex gap-2 z-20">
                            <span className="bg-[#02255b]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white font-mono border border-white/10 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> GPS + LBS
                            </span>
                         </div>
                    </div>
                </div>
            </motion.div>

             {/* Card 2: Alertas */}
            <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
                 className="md:col-span-1 bg-[#02255b] rounded-[2.5rem] p-8 border border-white/10 relative overflow-hidden group hover:border-[#9fe43f]/50 transition-all shadow-lg flex flex-col"
            >
                 <motion.div 
                    className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-[#9fe43f]"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ repeat: Infinity, repeatDelay: 4, duration: 0.5 }}
                 >
                    <AlertTriangle className="w-6 h-6" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">Alertas Inteligentes:</h3>
                <ul className="text-gray-400 text-sm space-y-2 mt-2">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#9fe43f] rounded-full"></div> Movimiento no autorizado</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#9fe43f] rounded-full"></div> Exceso de velocidad</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#9fe43f] rounded-full"></div> Entrada/Salida de Zonas personalizables</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#9fe43f] rounded-full"></div> Uso fuera de horarios establecidos</li>
                </ul>
            </motion.div>

             {/* Card 3: Autoinstalable */}
            <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="md:col-span-1 bg-[#02255b] rounded-[2.5rem] p-8 border border-white/10 relative overflow-hidden group hover:border-[#9fe43f]/50 transition-all shadow-lg"
            >
                 <div className="flex items-center justify-between mb-6">
                     <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-[#9fe43f]">
                        <PlugZap className="w-6 h-6" />
                    </div>
                 </div>
                <h3 className="text-xl font-bold text-white mb-2">Instalación Cero Estrés</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Olvidate de cables, mecánicos y turnos. 
                    <strong> Lo conectás vos mismo en unos minutos</strong> y ya esta listo para proteger tu vehículo. Sin herramientas.
                </p>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

// 5. CÓMO FUNCIONA (PASOS)
const HowItWorks = () => {
  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8 text-[#02255b]" />,
      title: "1. Pedilo",
      desc: "Contactanos por WhatsApp. Gestionamos el envío a tu domicilio o sucursal."
    },
    {
      icon: <PlugZap className="w-8 h-8 text-[#02255b]" />,
      title: "2. Conectalo",
      desc: "Recibís el equipo. Lo enchufás en el puerto OBD2 de tu auto (bajo el volante)."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-[#02255b]" />,
      title: "3. Descarga la App",
      desc: "Descargás la App Centinel y empezás a ver tu auto en tiempo real."
    }
  ];

  return (
    <section id="como-funciona" className="py-24 px-6 bg-[#011a42] border-t border-white/5 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Simple. Rápido. <br />
            <span className="text-[#9fe43f]">Sin dar vueltas.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-[#02255b] border-t border-white/10 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(159,228,63,0.2)] mb-6 border-4 border-[#02255b] group transition-transform hover:scale-110">
                <div className="bg-[#9fe43f] w-full h-full rounded-full absolute opacity-0 group-hover:opacity-20 transition-opacity"></div>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- NUEVA SECCIÓN: AUTOINSTALABLE DETAIL ---
const InstallDetail = () => {
  return (
    <section id="instalacion" className="py-24 px-6 bg-[#02255b] relative overflow-hidden">
      {/* Background radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#9fe43f]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#9fe43f] font-bold tracking-wider text-sm bg-[#9fe43f]/10 px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4" /> SISTEMA PLUG & PLAY
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            ¿Por qué elegir <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9fe43f] to-emerald-400">
              un GPS Autoinstalable?
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 
            {[
              {
                icon: <ShieldCheck className="w-8 h-8 text-[#9fe43f]" />,
                title: "No afecta la Garantía",
                desc: "Al no modificar la instalación eléctrica original, tu garantía de fábrica sigue intacta."
              },
              {
                icon: <Wrench className="w-8 h-8 text-[#9fe43f]" />,
                title: "Sin costo de Taller",
                desc: "Te ahorrás la mano de obra de instalación. Lo recibís, lo conectás y listo."
              },
              {
                icon: <Car className="w-8 h-8 text-[#9fe43f]" />,
                title: "Portátil",
                desc: "¿Cambiás el auto? Lo desconectás y lo ponés en el nuevo. El equipo es tuyo y te acompaña."
              }
            ].map((item, i) => (
              <div key={i} className="bg-[#011a42] p-8 rounded-3xl border border-white/5 hover:border-[#9fe43f]/30 transition-all hover:-translate-y-1 shadow-lg group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#9fe43f]/10 transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-white font-bold text-xl mb-3">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

// --- HARDWARE SPECS (CENTRA OBD2) ---
const HardwareSpecs = () => {
  return (
    <section id="hardware" className="py-20 px-6 bg-[#00102b] relative overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Visual de Hardware */}
        <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-[#02255b] to-[#011a42] rounded-3xl border border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(2,37,91,0.5)] group">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
                <Wifi className="w-32 h-32 text-white/20 group-hover:text-[#9fe43f]/20 transition-colors duration-500" />
                
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="absolute -top-4 -right-4 bg-[#9fe43f] text-[#02255b] text-xs font-black px-4 py-2 rounded-lg shadow-lg uppercase"
                >
                    4G LTE CERTIFICADO
                </motion.div>
                
                <div className="absolute bottom-8 left-8 text-white text-xs font-mono">
                    MODELO: CENTRA<br/>
                    ESTADO: ACTIVO
                </div>
            </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-8">
            <div>
                <span className="text-[#9fe43f] font-bold tracking-widest text-sm uppercase mb-2 block">
                    INGENIERÍA CENTINEL
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                    HARDWARE IMPORTADO
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                    Priorizamos la calidad de hardware, no el precio. Usamos equipos <strong>seleccionados de marcas con gran trayectoria (+28 años en el mercado)</strong>. 
                    Utilizamos GPSs 4G LTE que garantizan mejor cobertura y velocidad de respuesta que los viejos equipos 2G.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

// --- NUEVO APARTADO: PAGO CONTRA REEMBOLSO (Alto impacto) ---
const PayOnDelivery = () => {
    const handleScrollToPricing = () => {
        const element = document.getElementById('planes');
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    };

    return (
        <section id="pago-seguro" className="bg-white py-16 px-6 relative overflow-hidden scroll-mt-20">
            {/* Pattern background */}
            <div className="absolute inset-0 opacity-10" 
                 style={{ 
                   backgroundImage: 'radial-gradient(#02255b 1px, transparent 1px)', 
                   backgroundSize: '20px 20px' 
                 }}
            />
            
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
                <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 bg-[#02255b]/10 text-[#02255b] font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wide mb-4">
                        <ShieldCheck className="w-4 h-4" /> Compra 100% Segura
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-[#02255b] mb-4 leading-tight">
                        No arriesgues tu dinero. <br/>
                        <span className="inline-block bg-[#02255b] text-[#9fe43f] px-3 py-1 mt-2 transform -skew-x-6">
                            Pagás al recibir.
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-lg mb-8">
                        Te enviamos el equipo por <strong>Vía Cargo</strong> y lo abonás únicamente cuando llega a tu domicilio.
                    </p>
                    
                    {/* BOTÓN DE ALTA VISIBILIDAD PARA BAJAR AL PRECIO */}
                    <motion.button
                        onClick={handleScrollToPricing}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 bg-[#02255b] text-white font-black py-4 px-8 rounded-xl shadow-xl hover:bg-[#033482] transition-colors group"
                    >
                        VER PRECIO Y CUOTAS
                        <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                    </motion.button>
                </div>

                {/* Visual Icons Block */}
                <div className="flex-1 w-full flex justify-center md:justify-end">
                    <div className="relative flex flex-col items-center w-full max-w-md">
                        {/* Decorative blobs */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#9fe43f]/20 rounded-full blur-2xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#02255b]/10 rounded-full blur-2xl"></div>

                        <div className="bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-3xl p-8 flex flex-col items-center relative z-10 w-full">
                            
                            {/* Icons Row */}
                            <div className="flex gap-4 md:gap-8 items-center mb-8 w-full justify-center">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-14 h-14 md:w-16 md:h-16 bg-[#02255b] rounded-full flex items-center justify-center text-white shadow-lg">
                                        <Truck className="w-6 h-6 md:w-8 md:h-8" />
                                    </div>
                                    <span className="text-[#02255b] font-bold text-xs md:text-sm">Envío</span>
                                </div>
                                
                                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-gray-300" />

                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-14 h-14 md:w-16 md:h-16 bg-[#02255b] rounded-full flex items-center justify-center text-white shadow-lg">
                                        <PackageCheck className="w-6 h-6 md:w-8 md:h-8" />
                                    </div>
                                    <span className="text-[#02255b] font-bold text-xs md:text-sm">Recibís</span>
                                </div>

                                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-gray-300" />

                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-14 h-14 md:w-16 md:h-16 bg-[#9fe43f] rounded-full flex items-center justify-center text-[#02255b] shadow-lg animate-pulse">
                                        <HandCoins className="w-6 h-6 md:w-8 md:h-8" />
                                    </div>
                                    <span className="text-[#02255b] font-bold text-xs md:text-sm">Pagás</span>
                                </div>
                            </div>

                            {/* Warning Text - AHORA MUCHO MÁS VISIBLE */}
                             <div className="w-full bg-red-50 rounded-2xl p-6 text-center border-2 border-red-100 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
                                <p className="text-gray-800 text-sm md:text-base font-bold leading-snug">
                                    <span className="text-red-600 font-black text-lg md:text-xl mb-3 uppercase flex items-center justify-center gap-2">
                                        <AlertTriangle className="w-6 h-6 md:w-7 md:h-7" /> IMPORTANTE
                                    </span> 
                                    EL DISPOSITIVO GPS Y LA PLATAFORMA SE ACTIVAN DESDE LA CENTRAL <span className="text-red-700 underline decoration-2 underline-offset-2 decoration-red-300">UNA VEZ RECIBIDO EL PAGO</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// 4. PRICING SECTION - INTERACTIVO CON CUOTAS
const PricingSection = () => {
  const [selectedInstallment, setSelectedInstallment] = useState('1');

  const installmentOptions = {
    '1': {
        label: "1 Pago",
        price: "$293.000",
        period: "Pago Único",
        discount: true,
        message: "Hola Centinel, quiero abonar el GPS en 1 pago único de $293.000. ¿Cómo procedemos?"
    },
    '3': {
        label: "3 Cuotas",
        price: "$107.400",
        period: "x 3 Cuotas Fijas",
        discount: false,
        message: "Hola Centinel, quiero abonar el GPS en 3 cuotas fijas de $107.400. ¿Cómo procedemos?"
    },
    '6': {
        label: "6 Cuotas",
        price: "$58.600",
        period: "x 6 Cuotas Fijas",
        discount: false,
        message: "Hola Centinel, quiero abonar el GPS en 6 cuotas fijas de $58.600. ¿Cómo procedemos?"
    },
    '12': {
        label: "12 Cuotas",
        price: "$34.700",
        period: "x 12 Cuotas Fijas",
        discount: false,
        message: "Hola Centinel, quiero abonar el GPS en 12 cuotas fijas de $34.700. ¿Cómo procedemos?"
    }
  };

  const activeOption = installmentOptions[selectedInstallment];

  return (
    <section id="planes" className="py-24 px-6 bg-[#02255b] relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="mb-10">
          <span className="text-[#9fe43f] font-bold tracking-widest text-sm uppercase mb-2 block">
            PAGO ÚNICO + MANTENIMIENTO MÍNIMO
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            Pagás el equipo una sola vez. <br />
            Después, solo los datos del chip.
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
             Comprás tu GPS y lo usás desde el primer día con <strong>6 meses de datos incluidos</strong> para que no tengas que pensar en nada.
          </p>
        </div>

        {/* SINGLE POWERFUL CARD */}
        <div className="relative w-full max-w-lg mx-auto bg-[#032d6e] rounded-[2.5rem] p-8 md:p-12 border-2 border-[#9fe43f] shadow-[0_0_50px_rgba(159,228,63,0.15)] overflow-hidden mb-12">
            
            <div className="absolute top-0 right-0 bg-[#9fe43f] text-[#02255b] font-black py-2 px-6 rounded-bl-2xl uppercase tracking-wider text-sm">
                MEJOR OPCIÓN
            </div>

            <h3 className="text-2xl font-bold text-white mb-6 text-left uppercase">PACK COMPRA — GPS CENTRA</h3>
            
            {/* Installment Selector */}
            <div className="flex flex-wrap gap-2 mb-8 bg-[#011a42] p-1.5 rounded-xl border border-white/10">
                {Object.keys(installmentOptions).map((key) => (
                    <button
                        key={key}
                        onClick={() => setSelectedInstallment(key)}
                        className={`flex-1 py-2 px-3 rounded-lg text-xs md:text-sm font-bold transition-all ${
                            selectedInstallment === key 
                            ? 'bg-white text-[#02255b] shadow-md' 
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                    >
                        {installmentOptions[key].label}
                    </button>
                ))}
            </div>

            <div className="flex flex-col md:flex-row items-baseline gap-2 mb-2 text-left mt-4 transition-all">
                <AnimatePresence mode='wait'>
                    <motion.span 
                        key={activeOption.price}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-5xl md:text-6xl font-black text-white tracking-tighter"
                    >
                        {activeOption.price}
                    </motion.span>
                </AnimatePresence>
              <span className="text-[#9fe43f] font-bold text-lg uppercase">· {activeOption.period}</span>
            </div>

            {/* DISCOUNT BADGE FOR SINGLE PAYMENT */}
            {activeOption.discount && (
                <div className="mb-8 text-left">
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="inline-flex items-center gap-2 bg-[#9fe43f]/20 text-[#9fe43f] px-3 py-1.5 rounded-lg border border-[#9fe43f]/30"
                    >
                        <Banknote className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-wide">10% OFF EXTRA pagando con Transferencia/Efectivo</span>
                    </motion.div>
                </div>
            )}
            
            {!activeOption.discount && <div className="mb-8 h-8"></div>} {/* Spacer to prevent layout jump */}

            <div className="w-full h-px bg-white/10 mb-8"></div>

            <ul className="space-y-4 mb-8 text-left">
                {[
                    "El GPS es tuyo (Propiedad del cliente)",
                    "6 meses de datos del chip M2M incluidos",
                    "App, alertas y monitoreo activo",
                    "Sin contratos ni permanencias"
                ].map((feature, i) => (
                    <li key={i} className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#9fe43f] flex-shrink-0 mt-0.5" />
                        <span className="text-white font-medium">{feature}</span>
                    </li>
                ))}
            </ul>

            {/* AFTER 6 MONTHS BLOCK */}
            <div className="bg-[#011a42] rounded-xl p-5 mb-8 text-left border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#9fe43f]/10 rounded-full blur-xl -mr-5 -mt-5"></div>
                <h4 className="text-[#9fe43f] font-bold mb-2 flex items-center gap-2">
                    🔹 Después de los 6 meses
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                   Solo pagás <strong>$4.000 por mes</strong>, que corresponde únicamente al costo de datos para mantener conectado el GPS.
                </p>
            </div>

            <motion.a
                href={`https://wa.me/5493515575131?text=${encodeURIComponent(activeOption.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full bg-[#9fe43f] text-[#02255b] font-black text-xl py-4 rounded-xl hover:bg-white transition-colors shadow-lg"
            >
                QUIERO PROTEGER MI VEHÍCULO
            </motion.a>

            {/* --- NEW TRUST BADGE: PAY ON DELIVERY --- */}
            <div className="mt-4 bg-[#011a42] rounded-xl border border-[#9fe43f]/30 p-3 flex items-center gap-3 shadow-inner">
                <div className="bg-[#9fe43f]/20 p-2 rounded-full text-[#9fe43f]">
                    <PackageCheck className="w-6 h-6" />
                </div>
                <div className="text-left">
                    <p className="text-[#9fe43f] font-bold text-xs uppercase tracking-wider">Compra Protegida</p>
                    <p className="text-white text-xs leading-tight">Realizamos envíos por Vía Cargo con <strong>Pago en Destino</strong>. Abonás al recibir.</p>
                </div>
            </div>

            <p className="mt-4 text-xs text-gray-400">
                Envíos a todo el país. Garantía de funcionamiento.
            </p>
        </div>

        {/* --- CLOSING STATEMENTS (NO SUBSCRIPTION) --- */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            <div className="bg-[#011a42]/50 p-4 rounded-2xl border border-white/5 flex flex-col items-center justify-center">
                <XCircle className="w-8 h-8 text-red-400 mb-2 opacity-80" />
                <p className="text-gray-300 text-sm font-bold">No es una suscripción inflada</p>
            </div>
            <div className="bg-[#011a42]/50 p-4 rounded-2xl border border-white/5 flex flex-col items-center justify-center">
                <Car className="w-8 h-8 text-[#9fe43f] mb-2 opacity-80" />
                <p className="text-gray-300 text-sm font-bold">No es un alquiler, es tuyo</p>
            </div>
            <div className="bg-[#011a42]/50 p-4 rounded-2xl border border-white/5 flex flex-col items-center justify-center">
                <Wifi className="w-8 h-8 text-blue-400 mb-2 opacity-80" />
                <p className="text-gray-300 text-sm font-bold">Solo costo de conexión</p>
            </div>
        </div>
        
        <p className="text-gray-400 mt-6 italic">
            "Es simplemente el costo de mantener el sistema conectado."
        </p>

      </div>
    </section>
  );
};

// 6. TRUST SECTION - REEMPLAZO DE TALLER (Pero manteniendo la confianza)
const TrustSection = () => {
  return (
    <section id="confianza" className="py-24 px-6 bg-[#02255b] scroll-mt-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-r from-[#02255b] via-[#02255b]/95 to-[#02255b]/90" />
        </div>
        
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-[#9fe43f] font-bold tracking-wider text-sm bg-[#9fe43f]/10 px-4 py-2 rounded-full">
              <ShieldCheck className="w-4 h-4" />
              <span>EMPRESA REAL, SOPORTE REAL</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Contamos con nuestra Sede Principal en Córdoba Capital
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Sabemos que muchos servicios de GPS venden y luego no responden. 
              Nosotros tenemos base operativa en <strong>Córdoba Capital</strong>, soporte técnico activo y una reputación que cuidar.
              <br/><br/>
              Si tenés un problema, hay una persona real para ayudarte.
            </p>

            {/* Nota sobre Hardwired para Córdoba */}
            <div className="bg-white/5 p-4 rounded-xl border-l-4 border-[#9fe43f]">
                <p className="text-sm text-gray-300">
                    <strong className="text-white block mb-1">¿Sos de Córdoba Capital y querés Corte de Corriente?</strong>
                    También ofrecemos instalación profesional del equipo <em>Hercules Lite</em> (cableado) en nuestro taller. Consultanos por esta opción al contactarnos.
                </p>
            </div>
          </div>

           {/* Google Map Real Embed */}
           <div className="flex-1 w-full">
              <div className="rounded-3xl overflow-hidden border border-white/20 shadow-2xl h-[300px] relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.7970165332204!2d-64.21078002414342!3d-31.41971817426011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2779909d435%3A0x11deb8cfae9af61!2sR%C3%ADo%20Negro%20847%2C%20X5000%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1768248655369!5m2!1ses-419!2sar" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

// 7. FAQ (ADAPTADO A AUTOS)
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    {
      question: "¿Es compatible con mi auto?",
      answer: "Sí. El sistema OBD2 es el estándar mundial desde 1996. Funciona en el 99% de autos, camionetas y SUVs (Toyota, VW, Ford, Chevrolet, etc.).",
    },
    {
      question: "¿Yo mismo lo puedo instalar?",
      answer: "Absolutamente. Es 'Plug & Play' (conectar y usar). El puerto OBD2 suele estar abajo del volante. Solo lo enchufás como si fuera un pendrive y listo. No necesitás herramientas ni conocimientos.",
    },
    {
      question: "¿Pierdo la garantía de mi auto?",
      answer: "No. A diferencia de los sistemas tradicionales que cortan cables, el Centra OBD2 no modifica la instalación eléctrica original del vehículo, por lo que no afecta la garantía de fábrica.",
    },
    {
      question: "¿Qué pasa si me roban el auto?",
      answer: "Podrás ver la ubicación en tiempo real desde tu celular para informar a la policía. El equipo tiene batería de respaldo, por lo que sigue transmitiendo aunque el auto esté apagado o le desconecten la batería principal.",
    },
    {
      question: "¿Por qué es mejor este sistema que uno 'barato'?",
      answer: "Muchos GPS económicos usan redes 2G (que están desapareciendo) o plataformas chinas inestables. Nosotros usamos hardware 4G LTE y brindamos soporte local. Lo barato sale caro cuando realmente necesitás ubicar tu auto.",
    },
    // Eliminada la pregunta sobre qué incluye el pago porque ya está detallado arriba
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-[#011a42] scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">Preguntas Frecuentes</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/10 rounded-2xl overflow-hidden bg-[#02255b]">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left focus:outline-none hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-white text-lg pr-4">{faq.question}</span>
                {activeIndex === index ? (
                  <Minus className="w-6 h-6 text-[#9fe43f] flex-shrink-0" />
                ) : (
                  <Plus className="w-6 h-6 text-[#9fe43f] flex-shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 8. FOOTER
const Footer = () => {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    };

    return (
        <footer className="bg-[#00102b] border-t border-white/10 pt-16 pb-10 px-6 text-sm">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                {/* Columna 1 */}
                <div className="space-y-4">
                    <span className="text-2xl font-black tracking-tighter text-white block mb-2">
                        CENTINEL <span className="text-[#9fe43f]">AUTOS</span>
                    </span>
                    <p className="text-gray-400 leading-relaxed max-w-xs">
                        Seguridad y control vehicular simple y efectiva. Tecnología autoinstalable para proteger a tu familia y tu patrimonio.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <a 
                            href="https://www.facebook.com/people/Centinel-GPS/61567807584454/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white/5 p-2 rounded-full hover:bg-white/10 text-white transition-colors"
                        >
                            <Facebook className="w-5 h-5"/>
                        </a>
                        <a 
                            href="https://www.instagram.com/centinelgps/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white/5 p-2 rounded-full hover:bg-white/10 text-white transition-colors"
                        >
                            <Instagram className="w-5 h-5"/>
                        </a>
                        <a 
                            href="https://www.linkedin.com/company/centinel-gps/?originalSubdomain=ar" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white/5 p-2 rounded-full hover:bg-white/10 text-white transition-colors"
                        >
                            <Linkedin className="w-5 h-5"/>
                        </a>
                    </div>
                </div>

                {/* Columna 2 */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-base">Navegación</h4>
                    <ul className="space-y-3 text-gray-400">
                        {['Beneficios', 'Instalacion', 'Hardware', 'Planes', 'FAQ'].map(item => (
                            <li key={item}>
                                <button 
                                    onClick={() => handleScroll(item.toLowerCase())}
                                    className="hover:text-[#9fe43f] transition-colors capitalize"
                                >
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Columna 3 */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-base">Contacto</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li className="flex gap-3 items-start">
                            <MapPin className="w-5 h-5 text-[#9fe43f] flex-shrink-0 mt-0.5" />
                            <span>Rio negro 847, Córdoba Capital, Argentina.</span>
                        </li>
                        <li className="flex gap-3 items-center">
                            <Phone className="w-5 h-5 text-[#9fe43f] flex-shrink-0" />
                            <span>+54 9 351 5575131</span>
                        </li>
                        <li className="flex gap-3 items-center">
                            <Mail className="w-5 h-5 text-[#9fe43f] flex-shrink-0" />
                            <span>Soportecentinelgps@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
                <p>© {new Date().getFullYear()} Centinel GPS. Todos los derechos reservados.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
                    <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
                </div>
            </div>
        </footer>
    );
};

// 9. WHATSAPP BUTTON
const FloatingWhatsApp = () => (
  <motion.a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1, type: "spring" }}
    whileHover={{ scale: 1.1 }}
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] flex items-center justify-center border-4 border-[#02255b]"
    aria-label="Contactar por WhatsApp"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className="w-8 h-8"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  </motion.a>
);

// --- MAIN APP COMPONENT ---
export default function App() {
  return (
    <div className="min-h-screen bg-[#02255b] font-sans text-white selection:bg-[#9fe43f] selection:text-[#02255b]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap');
        body { font-family: 'Inter', sans-serif; }
        html { scroll-behavior: smooth; }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
      
      <Navbar />
      <Hero />
      <BrandMarquee />
      <ProblemSolution />
      <HowItWorks />
      <InstallDetail />
      <HardwareSpecs />
      <PayOnDelivery /> {/* Sección con ID #pago-seguro y botón de acción */}
      <PricingSection />
      <TrustSection />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
