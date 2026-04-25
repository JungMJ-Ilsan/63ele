import { PolicyPageTemplate } from '../../PolicyPageTemplate';
import { motion } from 'motion/react';
import { Store, TrendingUp, Megaphone, Palette, Search } from 'lucide-react';
import heroImage from '../../../../imports/JobSelfEmployed.jpg';

export function JobSelfEmployed() {
  return (
    <PolicyPageTemplate stage="job">
      <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-amber-50 -mt-20 pt-20">
        {/* Hero Section with Image-First Design */}
        <section className="relative overflow-hidden min-h-[80vh] flex items-end pb-16">
          {/* Background Image - Full visibility */}
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="소상공인"
              className="w-full h-full object-cover"
            />
            {/* Gradient only on bottom 50% */}
            <div className="absolute inset-0 bg-gradient-to-t from-white from-0% via-white/60 via-40% to-transparent to-50%" />
          </div>

          {/* Content - Positioned at bottom */}
          <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-bold shadow-lg mb-8">
                <Store size={24} />
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                소상공인 대상<br />
                <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  AI 마케팅 자동화 지원
                </span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="relative py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6 mb-16"
            >
              {[
                { icon: '🎓', title: '서울시립대 인공지능학과', desc: '기술 전문성' },
                { icon: '💼', title: '경영 컨설팅 업체', desc: '마케팅 자동화 직무' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity blur-xl" />
                  <div className="relative bg-white border-2 border-orange-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <h3 className="text-lg font-black text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Services Grid with Light Background */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-16">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-amber-50 to-orange-100" />
              <div className="absolute top-0 right-0 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl" />

              <div className="relative z-10 p-8 sm:p-12">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-8 text-center">
                    현장에서 검증된 역량
                  </h2>

                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      { icon: Search, title: '검색 상위 노출', color: 'from-yellow-400 to-orange-400' },
                      { icon: Palette, title: 'SNS·홍보물 디자인', color: 'from-pink-400 to-orange-400' },
                      { icon: TrendingUp, title: '웹사이트 제작', color: 'from-blue-400 to-orange-400' }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white/80 backdrop-blur-sm border-2 border-orange-200 rounded-2xl p-6 hover:bg-white transition-all shadow-lg"
                      >
                        <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                          <item.icon className="text-white" size={24} />
                        </div>
                        <h3 className="text-xl font-black text-gray-900">{item.title}</h3>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Portfolio Section with Image Blend */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1651449815993-706eaa7a936a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwb3duZXIlMjBzaG9wfGVufDF8fHx8MTc3NjA4MzE5MHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="사업장"
                  className="w-full h-full object-cover opacity-15"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-100 via-orange-50/95 to-amber-100" />
              </div>

              <div className="relative z-10 p-8 sm:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl sm:text-3xl font-black text-gray-900">실제 작업물</h2>
                  <div className="space-y-4 text-lg sm:text-xl text-gray-700 leading-relaxed">
                    <p className="flex items-start gap-3">
                      <span className="text-3xl">✅</span>
                      <span><strong className="text-orange-600">이 사이트도 직접 만들었습니다.</strong></span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-3xl">✅</span>
                      <span><strong className="text-orange-600">선거 홍보물과 명함도 직접 디자인했습니다.</strong></span>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section with Megaphone */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-amber-50 to-orange-100" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-400/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-400/30 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl p-8 sm:p-12 shadow-2xl"
            >
              <Megaphone className="mx-auto mb-6 text-yellow-200" size={48} />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                이 기술,<br />
                지역 상인분들을 위해 쓰겠습니다.
              </h2>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mt-8">
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight">
                  사장님은 장사에만 집중하실 수 있도록<br />
                  복잡한 기술은 제가 맡겠습니다.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PolicyPageTemplate>
  );
}
