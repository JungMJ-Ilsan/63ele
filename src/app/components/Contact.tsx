import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, User, MessageSquare, Heart } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    volunteerType: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        volunteerType: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: '사무소 주소',
      content: '서울특별시 강남구 테헤란로 123',
      color: 'from-blue-500 to-cyan-400',
    },
    {
      icon: Phone,
      title: '전화번호',
      content: '02-1234-5678',
      color: 'from-purple-500 to-pink-400',
    },
    {
      icon: Mail,
      title: '이메일',
      content: 'campaign@kimminsu.kr',
      color: 'from-rose-500 to-orange-400',
    },
  ];

  const volunteerOptions = [
    { value: 'campaign', label: '선거운동 지원' },
    { value: 'online', label: '온라인 홍보' },
    { value: 'donation', label: '후원' },
    { value: 'event', label: '행사 도우미' },
    { value: 'policy', label: '정책 제안' },
    { value: 'other', label: '기타' },
  ];

  const supportWays = [
    {
      icon: Heart,
      title: '자원봉사',
      description: '선거운동에 직접 참여하여 변화의 주역이 되어주세요',
      items: ['거리 캠페인', '전화 캠페인', '행사 운영', 'SNS 홍보'],
    },
    {
      icon: MessageSquare,
      title: '정책제안',
      description: '시민 여러분의 목소리를 정책에 반영하겠습니다',
      items: ['정책 아이디어', '지역 문제점', '개선 방안', '성공 사례'],
    },
    {
      icon: User,
      title: '후원',
      description: '투명하고 깨끗한 선거운동을 위해 함께해주세요',
      items: ['소액 후원', '물품 지원', '재능 기부', '공간 제공'],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-slate-950" />
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                             radial-gradient(circle at 70% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)`,
          }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              함께
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                만들어가요
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              여러분의 참여가 변화를 만듭니다<br />
              다양한 방법으로 함께해주세요
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Ways */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {supportWays.map((way, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                
                <div className="relative">
                  <way.icon className="w-12 h-12 text-blue-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-3">{way.title}</h3>
                  <p className="text-white/60 mb-6 leading-relaxed text-sm">
                    {way.description}
                  </p>
                  <ul className="space-y-2">
                    {way.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-white/50 text-sm">
                        <CheckCircle2 size={16} className="text-green-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                연락처
              </h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                언제든지 편하게 연락주세요. 여러분의 소중한 의견을 기다립니다.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm group"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white/50 text-sm mb-1">{info.title}</div>
                      <div className="text-white font-medium">{info.content}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Office Hours */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-8 p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20"
              >
                <h3 className="text-white font-semibold mb-3">사무소 운영 시간</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-white/70">
                    <span>평일</span>
                    <span>09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>주말</span>
                    <span>10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>공휴일</span>
                    <span>휴무</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl"
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-3xl font-bold text-white mb-6">참여하기</h2>

                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      이름 *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all"
                      placeholder="홍길동"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      이메일 *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      연락처
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all"
                      placeholder="010-1234-5678"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      참여 유형 *
                    </label>
                    <select
                      name="volunteerType"
                      value={formData.volunteerType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all"
                    >
                      <option value="" className="bg-slate-900">선택해주세요</option>
                      {volunteerOptions.map((option) => (
                        <option key={option.value} value={option.value} className="bg-slate-900">
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      메시지 *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all resize-none"
                      placeholder="하고 싶은 말씀을 자유롭게 적어주세요"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg font-semibold shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    제출하기
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  >
                    <CheckCircle2 size={80} className="text-green-400 mb-6" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    감사합니다!
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    소중한 참여 의사를 보내주셔서 감사합니다.<br />
                    빠른 시일 내에 연락드리겠습니다.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-96 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl overflow-hidden flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin size={48} className="text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">사무소 위치</h3>
              <p className="text-white/60">서울특별시 강남구 테헤란로 123</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-12 rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 backdrop-blur-xl overflow-hidden"
          >
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                여러분의 한 걸음이<br />큰 변화를 만듭니다
              </h2>
              <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                지금 바로 참여하여 더 나은 지역사회를 함께 만들어가세요
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="px-6 py-3 bg-white/10 rounded-lg text-white">
                  <div className="text-2xl font-bold">2,547</div>
                  <div className="text-sm text-white/60">참여자</div>
                </div>
                <div className="px-6 py-3 bg-white/10 rounded-lg text-white">
                  <div className="text-2xl font-bold">1,234</div>
                  <div className="text-sm text-white/60">자원봉사자</div>
                </div>
                <div className="px-6 py-3 bg-white/10 rounded-lg text-white">
                  <div className="text-2xl font-bold">5,891</div>
                  <div className="text-sm text-white/60">지지자</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
