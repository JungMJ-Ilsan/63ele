import { motion } from 'motion/react';
import { CheckCircle2, User, MessageSquare, Heart, Shield, ExternalLink, Zap, ArrowRight, Users, Instagram, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router';

export function Contact() {
  const supportWays = [
    {
      icon: Heart,
      title: '자원봉사',
      description: '선거운동에 직접 참여하여 변화의 주역이 되어주세요',
      items: ['거리 캠페인', 'SNS 홍보'],
      gradient: 'from-rose-500 to-pink-500',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-200',
      hoverBorder: 'hover:border-rose-400',
    },
    {
      icon: MessageSquare,
      title: '정책제안',
      description: '시민 여러분의 목소리를 정책에 반영하겠습니다',
      items: ['정책 아이디어', '지역 문제점'],
      gradient: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      hoverBorder: 'hover:border-blue-400',
    },
    {
      icon: User,
      title: '후원',
      description: '투명하고 깨끗한 선거운동을 위해 함께해주세요',
      items: ['소액 후원', '공간 제공'],
      gradient: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      hoverBorder: 'hover:border-emerald-400',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-purple-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-orange-100/50 via-rose-100/30 to-purple-100/50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              함께
              <br />
              <span className="bg-gradient-to-r from-[#FF7210] via-rose-500 to-purple-600 bg-clip-text text-transparent">
                만들어가요
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              격려도, 비판도 모두 환영합니다.
              <br />부담 없이 의견 남겨주세요.
            </p>

            {/* 익명 전달 강조 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full shadow-2xl"
            >
              <Shield className="w-6 h-6" />
              <span className="text-xl sm:text-2xl font-black">모든 내용은 <br className="block sm:hidden" />익명으로 전달됩니다</span>
              <Shield className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Support Ways */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-4"
          >
            <span className="bg-gradient-to-r from-[#FF7210] via-purple-600 to-blue-600 bg-clip-text text-transparent">
              다양한 방법으로 <br className="block sm:hidden" />함께하세요
            </span>
          </motion.h2>
          <p className="text-center text-gray-600 text-lg mb-12 sm:mb-16">
            여러분의 참여가 변화를 만듭니다
          </p>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {supportWays.map((way, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${way.bgColor} rounded-3xl p-6 sm:p-8 shadow-xl border-2 ${way.borderColor} ${way.hoverBorder} transition-all hover:scale-105 hover:shadow-2xl`}
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${way.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <way.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-3">{way.title}</h3>
                <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                  {way.description}
                </p>

                <ul className="space-y-3">
                  {way.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-800 text-base sm:text-lg">
                      <CheckCircle2 size={20} className="text-current flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 max-w-4xl mx-auto"
          >
            {/* 의견 남기기 버튼 */}
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe1U2fU-cjXYujWxlhHBpqKxjeRKjXJmJC-cM1NuCoIYC-2eg/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-orange-500/50 transition-all bg-gradient-to-br from-[#FF7210] via-orange-500 to-rose-500"
            >
              <div className="p-8 sm:p-10 h-full flex flex-col items-center justify-center gap-4">
                <MessageSquare className="w-12 h-12 sm:w-16 sm:h-16 text-white drop-shadow-lg" />
                <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white drop-shadow-lg">
                  의견 남기기
                </span>
                <p className="text-base sm:text-lg text-white/95 text-center drop-shadow">
                  격려와 비판, 모두 소중합니다
                </p>
                <ExternalLink className="w-6 h-6 text-white drop-shadow-lg" />
              </div>
            </motion.a>

            {/* 후원하기 버튼 */}
            <motion.a
              href="https://givemoney.kr/politicians/107"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-purple-500/50 transition-all bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600"
            >
              <div className="p-8 sm:p-10 h-full flex flex-col items-center justify-center gap-4">
                <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-white drop-shadow-lg" />
                <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white drop-shadow-lg">
                  후원하기
                </span>
                <p className="text-base sm:text-lg text-white/95 text-center drop-shadow">
                  깨끗한 선거운동을 응원합니다
                </p>
                <ExternalLink className="w-6 h-6 text-white drop-shadow-lg" />
              </div>
            </motion.a>
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
              <Link to="/" className="group w-full sm:w-auto">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 px-12 py-6 bg-white border-3 border-[#FF7210] text-[#FF7210] rounded-full font-black text-xl hover:bg-[#FF7210] hover:text-white transition-all shadow-xl"
                >
                  <Users size={24} />
                  홈으로 돌아가기
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
