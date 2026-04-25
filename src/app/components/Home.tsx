import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, Home as HomeIcon, Cpu, Sparkles, Youtube, Instagram, Facebook, Heart, Star, Zap, Users, GraduationCap, Briefcase, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import candidatePhoto from 'figma:asset/8fde92ccb02d3d6e8666e53a7abef9ee28f14f40.png';

export function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* 배경 패턴 - 깔끔하게 */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#FF7210]/10 to-purple-200/10 rounded-full blur-3xl"
          />
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `radial-gradient(circle, #FF7210 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            {/* 메인 헤드라인 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight px-4">
                <div className="text-gray-900 mb-2">복잡한 <span style={{ fontFamily: "'Orbitron', sans-serif" }} className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">미래기술?</span></div>
                <div className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-lime-500 via-lime-400 to-green-500 bg-clip-text text-transparent">
                    옆집 아들
                  </span>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute bottom-2 left-0 h-4 bg-lime-500/20 -z-0"
                  />
                </div>
                <span className="text-gray-900">이 대신!</span>
              </h1>
            </motion.div>

            {/* 후보자 정보 카드 - 사진과 이름 크게 강조 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="inline-block mb-12"
            >
              <div className="relative bg-white rounded-3xl shadow-2xl shadow-[#FF7210]/10 p-6 sm:p-8 border border-gray-100">
                <div className="absolute -top-3 -right-3 w-24 h-24 bg-gradient-to-br from-[#FF7210]/20 to-purple-200/20 rounded-full blur-xl" />
                
                <div className="relative flex flex-col items-center gap-6">
                  {/* 후보자 사진 - 훨씬 크게 */}
                  <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 sm:border-6 border-[#FF7210] shadow-2xl flex-shrink-0">
                    <img
                      src={candidatePhoto}
                      alt="정민재 후보"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-3 sm:py-4 bg-gradient-to-r from-[#FF7210] to-[#FF8534] rounded-full mb-4 sm:mb-6 shadow-lg shadow-[#FF7210]/30">
                      <Star className="text-white" size={20} fill="white" />
                      <span className="text-white font-bold text-base sm:text-lg md:text-xl">고양시의원 후보</span>
                    </div>
                    <h2 className="text-7xl sm:text-8xl md:text-9xl font-black text-gray-900 mb-4 sm:mb-6 tracking-tight">정민재</h2>
                    <p className="text-sm sm:text-xl md:text-2xl text-gray-600 font-medium">
                      일산2동 · 중산동 · 고봉동
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA 버튼들 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 px-4"
            >
              <Link to="/policies" className="group relative w-full sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF7210] to-[#FF8534] rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-[#FF7210] to-[#FF8534] text-white rounded-full font-black text-lg shadow-lg hover:shadow-xl transition-all">
                  <Zap size={22} fill="white" />
                  공약 보러가기
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
                </div>
              </Link>
              
              <Link to="/about" className="group w-full sm:w-auto">
                <div className="flex items-center justify-center gap-3 px-10 py-5 bg-white border-3 border-[#FF7210] text-[#FF7210] rounded-full font-black text-lg hover:bg-[#FF7210] hover:text-white transition-all shadow-lg hover:shadow-xl">
                  <Users size={22} />
                  후보자 알아보기
                </div>
              </Link>
            </motion.div>

            {/* 소셜 링크 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap justify-center gap-3 px-4"
            >
              {[
                { icon: Instagram, label: '인스타', color: 'from-pink-400 to-pink-500', href: 'https://www.instagram.com/jungmj.ilsan/' },
                { icon: Facebook, label: '페이스북', color: 'from-indigo-400 to-indigo-500', href: 'https://www.facebook.com/profile.php?id=61580710135949' },
                { icon: Youtube, label: '유튜브', color: 'from-purple-400 to-purple-500', href: 'https://www.youtube.com/channel/UCRPvsYs0bujxX1B9-O90htg/posts?pvf=CAI%253D' },
                { icon: Heart, label: '소통하기', color: 'from-[#FF7210] to-[#FF8534]', to: '/contact' }
              ].map((social, i) => (
                social.to ? (
                  <Link key={i} to={social.to} className="group">
                    <div className={`flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-4 bg-gradient-to-r ${social.color} text-white rounded-full text-base sm:text-lg font-bold hover:scale-105 transition-all shadow-lg`}>
                      <social.icon size={18} />
                      <span>{social.label}</span>
                    </div>
                  </Link>
                ) : (
                  <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="group">
                    <div className={`flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-4 bg-gradient-to-r ${social.color} text-white rounded-full text-base sm:text-lg font-bold hover:scale-105 transition-all shadow-lg`}>
                      <social.icon size={18} />
                      <span>{social.label}</span>
                    </div>
                  </a>
                )
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 핵심가치 섹션 - 아코디언 스타일 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-6">
              정민재가 드리는 말씀
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#FF7210] to-transparent rounded-full" />
              <div className="w-3 h-3 bg-[#FF7210] rounded-full" />
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#FF7210] to-transparent rounded-full" />
            </div>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                icon: HomeIcon,
                title: '옆집 아들 출신',
                content: `일산에서 자랐습니다.
우리 동네 문제, 제가 가장 잘 압니다.
다른 동네 출신 말고, 진짜 토박이 
한번 제대로 써먹으세요`,
                color: 'from-lime-400 to-lime-500',
                borderColor: 'border-lime-400',
                bgColor: '#84cc1620',
              },
              {
                icon: Cpu,
                title: '미래 기술자',
                content: `빠르게 변하는 세상, 
우리 동네도 준비돼야 합니다.
혹시, 따라가기 힘드시지 않나요?
괜찮습니다. 기술자인 제가 대신하겠습니다.
`,
                color: 'from-blue-900 to-blue-800',
                borderColor: 'border-blue-900',
                bgColor: '#1e3a8a20',
              },
              {
                icon: Sparkles,
                title: '우리 동네 청년',
                content: `동네 청년인 저, 돈 많지 않습니다.
요란한 선거캠프, 시끄러운 유세트럭 없습니다.
대신 청년답게 두 발로 뛰겠습니다.
꾸밈없이, 조용히 다가가겠습니다.`,
                color: 'from-teal-400 to-teal-500',
                borderColor: 'border-teal-400',
                bgColor: '#2dd4bf20',
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div 
                  className={`bg-white rounded-2xl shadow-lg border-2 overflow-hidden transition-all ${
                    openIndex === index ? value.borderColor : 'border-gray-100'
                  }`}
                >
                  {/* 헤더 - 클릭 가능 */}
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 sm:p-8 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <motion.div
                        animate={{ rotate: openIndex === index ? 360 : 0 }}
                        transition={{ duration: 0.6 }}
                        className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}
                      >
                        <value.icon className="text-white" size={28} />
                      </motion.div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 text-left">
                        {value.title}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="text-gray-400" size={28} />
                    </motion.div>
                  </button>

                  {/* 내용 - 애니메이션 */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                      <div 
                        className="rounded-xl p-6 sm:p-7 border-l-4" 
                        style={{ 
                          backgroundColor: value.bgColor,
                          borderColor: index === 0 ? '#84cc16' : index === 1 ? '#1e3a8a' : '#2dd4bf'
                        }}
                      >
                        <p style={{ fontFamily: "'Nanum Pen Script', cursive" }} className="text-gray-800 leading-relaxed text-lg sm:text-xl md:text-2xl whitespace-pre-wrap">
                          {value.content}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 약력 섹션 - 간결하게 */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-gray-900 mb-16">
              후보자 약력
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* 학력 */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-gray-100">
                <div className="flex items-center gap-4 mb-6 pb-4 border-b-2 border-gray-100">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#FF7210] to-[#FF8534] rounded-2xl flex items-center justify-center">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900">학력</h3>
                </div>
                
                <div className="space-y-3 text-sm sm:text-base">
                  <p className="text-gray-700">▪ 호곡초등학교 졸업</p>
                  <p className="text-gray-700">▪ 호곡중학교 졸업</p>
                  <p className="text-gray-700">▪ 일산 대진고등학교 졸업</p>
                  <p className="font-bold text-[#FF7210]">▪ 서울시립대학교 인공지능학과</p>
                </div>
              </div>

              {/* 경력 */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-gray-100">
                <div className="flex items-center gap-4 mb-6 pb-4 border-b-2 border-gray-100">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl flex items-center justify-center">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900">경력</h3>
                </div>
                
                <div className="space-y-3 text-sm sm:text-base">
                  <p className="text-gray-700">▪ 전) 일산 일대 과외 및 학원강사</p>
                  <p className="text-gray-700">▪ 전) 경영 컨설팅 회사 근무</p>
                    <div className="ml-8"> - 주식회사 제이앤드엠제이</div>
                  <div>
                     <p className="font-bold text-purple-600">
                      ▪ 현) 개혁신당 경기도당 고양시</p>
                    <div className="ml-8">
                      <p className="font-bold text-purple-600">
                        - 지역발전특별위원회 부위원장</p>
                      <p className="font-bold text-purple-600">
                        - AI 특별위원회 위원장</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-12 px-4">
              제대로 알아보기
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 px-4">
              <Link to="/policies" className="group relative w-full sm:w-auto">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF7210] to-[#FF8534] rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
                  <div className="relative flex items-center justify-center gap-3 px-12 py-6 bg-gradient-to-r from-[#FF7210] to-[#FF8534] text-white rounded-full font-black text-xl shadow-2xl">
                    <Zap size={24} fill="white" />
                    공약 보러가기
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
                  </div>
                </motion.div>
              </Link>
              
              <Link to="/about" className="group w-full sm:w-auto">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 px-12 py-6 bg-white border-3 border-[#FF7210] text-[#FF7210] rounded-full font-black text-xl hover:bg-[#FF7210] hover:text-white transition-all shadow-xl"
                >
                  <Users size={24} />
                  후보자 알아보기
                </motion.div>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-4 px-4">
              {[
                
                { icon: Instagram, label: '인스타', gradient: 'from-pink-400 to-pink-500', href: 'https://www.instagram.com/jungmj.ilsan/' },
                { icon: Facebook, label: '페이스북', gradient: 'from-indigo-400 to-indigo-500', href: 'https://www.facebook.com/profile.php?id=61580710135949' },
                { icon: Youtube, label: '유튜브', gradient: 'from-purple-400 to-purple-500', href: 'https://www.youtube.com/channel/UCRPvsYs0bujxX1B9-O90htg/posts?pvf=CAI%253D' },    
                { icon: Heart, label: '소통하기', gradient: 'from-[#FF7210] to-[#FF8534]', to: '/contact' }
              ].map((social, i) => (
                social.to ? (
                  <Link key={i} to={social.to}>
                    <motion.div
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-3 px-6 py-4 bg-gradient-to-r ${social.gradient} text-white rounded-full font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all`}
                    >
                      <social.icon size={20} />
                      {social.label}
                    </motion.div>
                  </Link>
                ) : (
                  <a key={i} href={social.href} target="_blank" rel="noopener noreferrer">
                    <motion.div
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-3 px-6 py-4 bg-gradient-to-r ${social.gradient} text-white rounded-full font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all`}
                    >
                      <social.icon size={20} />
                      {social.label}
                    </motion.div>
                  </a>
                )
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}