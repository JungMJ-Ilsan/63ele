import { PolicyPageTemplate } from '../../PolicyPageTemplate';
import { motion } from 'motion/react';
import { Bus, Train, Clock, CheckCircle2 } from 'lucide-react';
import heroImage from '../../../../imports/JobOfficeWorker.jpg';

export function JobOfficeWorker() {
  return (
    <PolicyPageTemplate stage="job">
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50 -mt-20 pt-20">
        {/* Hero Section with Image-First Design */}
        <section className="relative overflow-hidden min-h-[80vh] flex items-end pb-16">
          {/* Background Image - Full visibility */}
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="출퇴근"
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
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-600 to-blue-600 text-white rounded-full font-bold shadow-lg mb-8">
                <Bus size={24} />
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                출퇴근, <span className="bg-gradient-to-r from-slate-700 to-blue-700 bg-clip-text text-transparent">힘드시죠.</span><br />
                <span className="text-3xl sm:text-4xl md:text-5xl text-gray-700">저도 여기서 직접 겪어봤습니다.</span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="relative py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1560429087-564a28170ff0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW91bCUyMHN1YndheSUyMGNvbW11dGUlMjBydXNoJTIwaG91cnxlbnwxfHx8fDE3NzYwODM1ODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="붐비는 지하철"
                    className="w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-100/90 via-gray-50/85 to-blue-100/90" />
                </div>

                <div className="relative z-10 p-8 sm:p-12">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <Clock className="text-slate-700 flex-shrink-0 mt-1" size={36} />
                      <p className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 leading-relaxed">
                        등하교도, 출퇴근도<br />
                        매일 반복되니까 더 버겁습니다.
                      </p>
                    </div>

                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border-2 border-slate-300">
                      <p className="text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed font-bold">
                        GTX 생긴다고 해서 기대 많이 했는데,<br />
                        <span className="text-slate-700 text-xl sm:text-2xl md:text-3xl">막상 체감은 크지 않았습니다.</span>
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Solution Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
                그래서 <span className="text-blue-600">바꾸겠습니다.</span>
              </h2>
            </motion.div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1710281511772-b4ab3b4f4d00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzZW91bCUyMHN1YndheSUyMGNvbW11dGUlMjBydXNoJTIwaG91cnxlbnwxfHx8fDE3NzYwODM1ODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="GTX"
                  className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/90 via-slate-50/85 to-blue-100/90" />
              </div>

              <div className="relative z-10 p-8 sm:p-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Train className="text-blue-600" size={36} />
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">
                      GTX 킨텍스역까지 가는<br />
                      버스 노선, <span className="text-blue-600">현실적으로 늘리겠습니다.</span>
                    </h3>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      '배차 간격 단축',
                      '심야 노선 추가',
                      '환승 대기시간 최소화',
                      '주요 주거지역 경유'
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border-2 border-blue-200 flex items-center gap-3"
                      >
                        <CheckCircle2 className="text-blue-600 flex-shrink-0" size={24} />
                        <p className="text-lg font-bold text-gray-900">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-slate-300/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-slate-700 to-blue-700 rounded-3xl p-8 sm:p-12 shadow-2xl"
            >
              <Bus className="mx-auto mb-6 text-blue-100" size={48} />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                말이 아니라,<br />
                실제로 편해지게<br />
                만들겠습니다.
              </h2>
            </motion.div>
          </div>
        </section>
      </div>
    </PolicyPageTemplate>
  );
}
