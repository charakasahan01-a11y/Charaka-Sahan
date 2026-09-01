/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ChefHat, Leaf, Flame, Phone, MapPin, Clock, Star } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDF8F1] text-[#2D241E] font-sans selection:bg-[#E8DCCA] selection:text-[#2D241E] overflow-x-hidden relative">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#FDF8F1]/90 backdrop-blur-md border-b border-[#2D241E]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <div className="bg-[#2D241E] p-2.5 rounded-full text-[#FDF8F1]">
                <ChefHat size={20} />
              </div>
              <span className="font-serif font-black text-3xl tracking-tight text-[#2D241E]">
                ගමේ <span className="text-orange-600">රස</span>
              </span>
            </div>
            <div className="hidden md:flex space-x-10 font-medium">
              <a href="#about" className="hover:text-orange-600 transition-colors uppercase tracking-widest text-[10px] font-black">අපි ගැන</a>
              <a href="#menu" className="hover:text-orange-600 transition-colors uppercase tracking-widest text-[10px] font-black">මෙනුව</a>
              <a href="#contact" className="hover:text-orange-600 transition-colors uppercase tracking-widest text-[10px] font-black">විස්තර</a>
            </div>
            <a href="#contact" className="hidden md:flex bg-[#2D241E] text-[#FDF8F1] px-6 py-3 rounded-full text-xs uppercase tracking-widest font-black hover:bg-orange-600 transition-all active:scale-95">
              ඇනවුම් කරන්න
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="absolute top-20 right-20 w-64 h-64 border border-[#2D241E]/10 rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-orange-600/5 rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#2D241E]/10 text-[#2D241E] font-bold mb-8 text-[10px] uppercase tracking-[0.2em]">
              <Flame size={14} className="text-orange-600" />
              දර ළිපේ ඉඳුනු නියම ගමේ රහ
            </div>
            <h1 className="text-6xl lg:text-[5.5rem] font-serif font-black text-[#2D241E] leading-[0.85] mb-8">
              හරියට අම්මා ඉව්වා වගේ...<br/>
              <span className="text-orange-600">මැටි හට්ටියේ</span><br/>රස්නෙන්.
            </h1>
            <p className="text-xl text-[#2D241E]/80 mb-10 leading-relaxed max-w-lg font-medium">
              කෘතිම රසකාරක කිසිවක් නොමැතිව, පිරිසිදු පොල් තෙල් සහ දේශීය කුළුබඩු යොදාගෙන ආදරයෙන් හදන අපේ කෑම වේලක් රස බලන්න එන්න.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#menu" className="inline-flex justify-center items-center px-8 py-4 text-sm uppercase tracking-widest font-black rounded-[4px_24px_4px_24px] text-[#FDF8F1] bg-[#2D241E] hover:bg-orange-600 transition-all hover:-translate-y-0.5">
                කෑම මෙනුව
              </a>
              <a href="tel:0712345678" className="inline-flex justify-center items-center px-8 py-4 text-sm uppercase tracking-widest font-black rounded-full text-[#2D241E] bg-transparent border border-[#2D241E]/20 hover:border-[#2D241E] transition-all">
                <Phone size={16} className="mr-2" />
                කතා කරන්න
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="relative aspect-[4/5] bg-[#E8DCCA] rounded-[80px_4px_80px_4px] overflow-hidden group">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShY_L7UV9dA9VHTe1EB0MHAlUb7KTthL4xc6--OtmOj6JzPkd_f2CAccg&s=10" 
                alt="Sri Lankan Spices" 
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 flex items-center justify-center p-12 pointer-events-none mix-blend-overlay">
                <div className="text-[#2D241E] text-[12rem] font-black font-serif opacity-30">බත්</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#2D241E] text-[#FDF8F1] p-10 rounded-[4px_60px_4px_4px] flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center text-[#FDF8F1] mb-8">
                <Flame size={24} />
              </div>
              <h3 className="text-3xl font-serif mb-4">දර ළිපේ ඉවුම්</h3>
              <p className="opacity-80 leading-relaxed font-medium text-sm">
                ගෑස් ළිපෙන් එන රහට වඩා, දර ළිපේ මැටි හට්ටියෙන් එන නියම ගමේ සුවඳ සහ රසය අපි ඔබට දෙනවා.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#E8DCCA] text-[#2D241E] p-10 rounded-[60px_4px_60px_4px] flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 bg-[#2D241E] rounded-full flex items-center justify-center text-[#FDF8F1] mb-8">
                <Leaf size={24} />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4">කෙසෙල් කොළේ රසය</h3>
              <p className="opacity-80 leading-relaxed font-medium text-sm">
                කෑම එකේ රස්නෙට කෙසෙල් කොළේ තැම්බිලා එන සුවඳ.. ඒක වචනයෙන් කියන්න බැරි තරම් රසයි.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#2D241E] text-[#FDF8F1] p-10 rounded-[4px_4px_60px_60px] flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center text-[#FDF8F1] mb-8">
                <Star size={24} />
              </div>
              <h3 className="text-3xl font-serif mb-4">100% ක් පිරිසිදුයි</h3>
              <p className="opacity-80 leading-relaxed font-medium text-sm">
                අජිනමොටෝ හෝ කෘතිම වර්ණක කිසිවක් නැත. අපේම වත්තේ හැදෙන කරපිංචා, රම්පෙ වලින් හැඩවුණු කෑම.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-40 -left-20 w-64 h-64 border border-[#2D241E]/10 rounded-full pointer-events-none"></div>
        
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8 relative z-10">
          <div className="max-w-2xl">
            <div className="text-[10px] uppercase font-black tracking-[0.2em] opacity-50 mb-4">අද විශේෂය</div>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-[#2D241E] mb-6 leading-[0.9]">අද අපේ<br/>මෙනුව</h2>
            <p className="text-lg text-[#2D241E]/80 font-medium leading-relaxed">
              හැමදාම අලුතෙන් උයන, නැවුම් එළවළු සහ මස් මාළු වලින් පිරුණු අපේ බත් පාර්සල්. පාරම්පරික රහස් වට්ටෝරුවකට අනුව දර ලිපේ පිසූ සැබෑ දේශීය සහල් සහ වෑංජන. (දිවා ආහාරය සඳහා පමණි)
            </p>
          </div>
          <div className="text-right pb-2">
             <div className="text-[10px] uppercase font-black tracking-[0.2em] opacity-50 mb-2">විවෘත වේලාවන්</div>
             <div className="text-2xl font-serif italic text-[#2D241E]">පෙ.ව. 11:30 — ප.ව. 03:00</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {/* Menu Item 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white/50 backdrop-blur-sm rounded-[4px_60px_4px_4px] overflow-hidden border border-[#2D241E]/10 hover:shadow-2xl hover:shadow-[#2D241E]/5 transition-all group flex flex-col"
          >
            <div className="h-64 overflow-hidden p-3 pb-0">
              <img 
                src="https://i0.wp.com/theperfectcurry.com/wp-content/uploads/2024/06/20240117_200537.jpg?resize=1024%2C1024&quality=89&ssl=1" 
                alt="Chicken Curry" 
                className="w-full h-full object-cover rounded-[4px_50px_4px_4px] group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-serif font-black text-[#2D241E]">කුකුල් මස් බත්</h3>
                  <span className="text-sm font-bold text-orange-800 bg-orange-600/10 px-3 py-1.5 rounded-full">Rs. 450</span>
                </div>
                <p className="text-[#2D241E]/70 leading-relaxed mb-8 font-medium text-sm">
                  කළු පොල් දාලා උකු වෙන්න හදපු කුකුල් මස් කරිය, පරිප්පු, පොල් සම්බෝල, සහ දවසේ එළවළු දෙකක් සමග.
                </p>
              </div>
              <button className="w-full py-4 rounded-full border border-[#2D241E]/20 text-[10px] uppercase tracking-[0.2em] font-black text-[#2D241E] hover:border-[#2D241E] hover:bg-[#2D241E] hover:text-[#FDF8F1] transition-all">
                ඇනවුම් කරන්න
              </button>
            </div>
          </motion.div>

          {/* Menu Item 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white/50 backdrop-blur-sm rounded-[60px_4px_60px_4px] overflow-hidden border border-[#2D241E]/10 hover:shadow-2xl hover:shadow-[#2D241E]/5 transition-all group flex flex-col"
          >
            <div className="h-64 overflow-hidden relative p-3 pb-0">
              <div className="absolute top-6 right-6 bg-orange-600 text-white text-[10px] tracking-widest uppercase font-black px-4 py-2 rounded-full z-10">
                විශේෂය
              </div>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT71lG-a_8UTCqBiqE4x4YkT0eBO5Ll7ByTQHfEN5kvvRnW5wbF1SpOxM97&s=10" 
                alt="Fish Ambul Thiyal" 
                className="w-full h-full object-cover rounded-[50px_4px_50px_4px] group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-serif font-black text-[#2D241E]">මාළු ඇඹුල් තියල්</h3>
                  <span className="text-sm font-bold text-orange-800 bg-orange-600/10 px-3 py-1.5 rounded-full">Rs. 400</span>
                </div>
                <p className="text-[#2D241E]/70 leading-relaxed mb-8 font-medium text-sm">
                  ගොරකා දාලා හදපු දකුණේ නියම ඇඹුල් තියල් රස, කිරි හොදි, මැල්ලුම් සහ අල තෙල් දැවුමක් එක්ක.
                </p>
              </div>
              <button className="w-full py-4 rounded-full border border-[#2D241E]/20 text-[10px] uppercase tracking-[0.2em] font-black text-[#2D241E] hover:border-[#2D241E] hover:bg-[#2D241E] hover:text-[#FDF8F1] transition-all">
                ඇනවුම් කරන්න
              </button>
            </div>
          </motion.div>

          {/* Menu Item 3 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="bg-white/50 backdrop-blur-sm rounded-[4px_4px_60px_4px] overflow-hidden border border-[#2D241E]/10 hover:shadow-2xl hover:shadow-[#2D241E]/5 transition-all group flex flex-col"
          >
            <div className="h-64 overflow-hidden p-3 pb-0">
              <img 
                src="https://static2.kapruka.com/product-image/width=700,quality=93,f=auto/shops/specialGifts/additionalImages/large/1641287842938_ricecurryveg_m.jpg" 
                alt="Vegetarian Rice" 
                className="w-full h-full object-cover rounded-[4px_4px_50px_4px] group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-serif font-black text-[#2D241E]">එළවළු බත්</h3>
                  <span className="text-sm font-bold text-orange-800 bg-orange-600/10 px-3 py-1.5 rounded-full">Rs. 300</span>
                </div>
                <p className="text-[#2D241E]/70 leading-relaxed mb-8 font-medium text-sm">
                  නැවුම් එළවළු 4ක්, පරිප්පු හොදි, පපඩම් සහ බැදපු මිරිස් කරලක් සමග සපයන පිරිසිදු නිර්මාංශ කෑම වේලක්.
                </p>
              </div>
              <button className="w-full py-4 rounded-full border border-[#2D241E]/20 text-[10px] uppercase tracking-[0.2em] font-black text-[#2D241E] hover:border-[#2D241E] hover:bg-[#2D241E] hover:text-[#FDF8F1] transition-all">
                ඇනවුම් කරන්න
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info / Call to action */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-orange-600 rounded-[80px_4px_80px_4px] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.07] pointer-events-none">
            <div className="text-[#2D241E] text-[15rem] md:text-[25rem] font-serif font-black">බත්</div>
          </div>
          <h2 className="text-4xl md:text-[4rem] font-serif font-black text-[#FDF8F1] mb-8 relative z-10 leading-[0.9]">
            බඩගිනිද?<br/>දැන්ම කතා කරන්න!
          </h2>
          <p className="text-lg text-[#FDF8F1]/90 mb-12 max-w-2xl mx-auto relative z-10 font-medium">
            උණු උණුවෙන් කෙසෙල් කොළේ ඔතපු අපේ බත් පාර්සල් එකක් ඔෆිස් එකටම ගෙන්න ගන්න. අවට ප්‍රදේශ සඳහා නොමිලේ ප්‍රවාහනය.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10">
            <div className="flex items-center gap-5 bg-[#FDF8F1] px-10 py-6 rounded-[4px_24px_4px_24px] shadow-2xl shadow-orange-900/20">
              <div className="w-14 h-14 bg-[#2D241E] rounded-full flex items-center justify-center text-[#FDF8F1]">
                <Phone size={24} />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase font-black text-orange-800 tracking-[0.2em] mb-1">ඇනවුම් සඳහා</p>
                <p className="text-3xl font-serif font-black text-[#2D241E]">077 123 4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#2D241E] text-[#FDF8F1] py-24 relative overflow-hidden">
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-600/10 rounded-full pointer-events-none"></div>
        <div className="absolute top-20 right-40 w-32 h-32 border border-[#FDF8F1]/5 rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-orange-600 p-2.5 rounded-full text-[#FDF8F1]">
                <ChefHat size={24} />
              </div>
              <span className="font-serif font-black text-3xl tracking-tight text-[#FDF8F1]">
                ගමේ <span className="text-orange-500">රස</span>
              </span>
            </div>
            <p className="leading-relaxed font-medium opacity-70">
              නියම ගමේ රහට, පිරිසිදුව හදන අපේ කෑම වේලක් කාලා බලන්න. ඔයාලටත් ගෙදර මතක් වෙයි.
            </p>
          </div>
          
          <div>
            <div className="text-[10px] uppercase font-black tracking-[0.2em] text-orange-500 mb-8">අපේ විස්තර</div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#FDF8F1]/40 shrink-0 mt-1" size={24} />
                <p className="font-medium text-[#FDF8F1] opacity-90">නො 123, ගාලු පාර,<br/>කොළඹ 03.</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-[#FDF8F1]/40 shrink-0" size={24} />
                <p className="font-medium text-[#FDF8F1] opacity-90 underline decoration-orange-500/50 underline-offset-4 hover:decoration-orange-500 transition-colors cursor-pointer">
                  077 123 4567 / 011 234 5678
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase font-black tracking-[0.2em] text-orange-500 mb-8">විවෘත වේලාවන්</div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Clock className="text-[#FDF8F1]/40 shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-[#FDF8F1] font-black mb-2 uppercase tracking-[0.1em] text-[10px]">දිවා ආහාරය සඳහා පමණි</p>
                  <p className="font-medium opacity-90 mb-1">සඳුදා - සෙනසුරාදා</p>
                  <p className="font-serif italic text-xl text-[#FDF8F1] opacity-90">උදේ 11:30 - හවස 3:00</p>
                </div>
              </div>
              <div className="ml-10 mt-6">
                <span className="text-[#2D241E] bg-orange-500 font-black text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded-full">
                  ඉරිදා වසා ඇත
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-8 border-t border-[#FDF8F1]/10 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
          <p className="text-xs font-black uppercase tracking-[0.1em] opacity-40">© {new Date().getFullYear()} ගමේ රස බත් කඩේ.</p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-[#FDF8F1]/20 flex items-center justify-center hover:bg-[#FDF8F1] hover:text-[#2D241E] text-xs font-bold transition-all">
              IG
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-[#FDF8F1]/20 flex items-center justify-center hover:bg-[#FDF8F1] hover:text-[#2D241E] text-xs font-bold transition-all">
              FB
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
