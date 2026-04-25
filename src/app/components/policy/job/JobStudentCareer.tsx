import { PolicyPageTemplate } from '../../PolicyPageTemplate';
import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, Sparkles } from 'lucide-react';
import heroImage from '../../../../imports/JobOfficeWorker.jpg';

export function JobStudentCareer() {
  return (
    <PolicyPageTemplate stage="job">
      <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-teal-50 -mt-20 pt-20">
        {/* Hero Section with Image-First Design */}
        <section className="relative overflow-hidden min-h-[80vh] flex items-end pb-16">
          {/* Background Image - Full visibility */}
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="취업 준비생"
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
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full font-bold shadow-lg mb-8">
                <Briefcase size={24} />
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                  지역 기반<br />
                  취업 준비 지원 체계 구축
                </span>
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
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-8">
                우리는 준비 시간이 <span className="text-cyan-600">두 배</span>입니다.
              </h2>
              <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed font-bold">
                저도 직접 겪었습니다.
              </p>
            </motion.div>

            {/* Pain Points with Image Background */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-16">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1560429087-564a28170ff0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW91bCUyMHN1YndheSUyMGNvbW11dGUlMjBydXNoJTIwaG91cnxlbnwxfHx8fDE3NzYwODM1ODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="지하철 출퇴근"
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/90 via-teal-50/85 to-cyan-100/90" />
              </div>

              <div className="relative z-10 p-8 sm:p-12">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="space-y-6 text-gray-900"
                >
                  <div className="flex items-start gap-4">
                    <Clock className="text-cyan-600 flex-shrink-0 mt-1" size={32} />
                    <div>
                      <p className="text-xl sm:text-2xl font-bold leading-relaxed">
                        인턴, 공모전, 설명회 하나를 위해<br />
                        <span className="text-cyan-600 text-2xl sm:text-3xl">서울까지 왕복 2~3시간</span>을 써야 했습니다.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-cyan-200">
                    <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
                      아침마다 붐비는 지하철에서<br />
                      무거운 가방을 메고 서 있는 시간,<br />
                      <strong className="text-cyan-700 text-xl sm:text-2xl">그 부담이 결코 가볍지 않았습니다.</strong>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Solution Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
                그래서 <span className="text-teal-600">바꾸겠습니다.</span>
              </h2>
            </motion.div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1746114774895-133d5b677db8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxrb3JlYW4lMjBzdHVkZW50JTIwc3R1ZHlpbmclMjBsYXB0b3B8ZW58MXx8fHwxNzc2MDgzNTg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="공부하는 학생"
                  className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-100/90 via-cyan-50/85 to-teal-100/90" />
              </div>

              <div className="relative z-10 p-8 sm:p-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="text-teal-600" size={36} />
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">
                      우리 동네에서 할 수 있도록<br />환경을 만들겠습니다.
                    </h3>
                  </div>

                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border-2 border-teal-300">
                    <p className="text-xl sm:text-2xl text-gray-800 leading-relaxed font-bold">
                      지역 내 코워킹 스페이스 확충<br />
                      온라인 취업 지원 프로그램 개설<br />
                      기업 설명회 지역 유치
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 via-teal-50 to-cyan-100" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-300/30 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-cyan-600 to-teal-600 rounded-3xl p-8 sm:p-12 shadow-2xl"
            >
              <Sparkles className="mx-auto mb-6 text-cyan-100" size={48} />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                이제 집 앞에서<br />
                스펙 쌓으세요
              </h2>
            </motion.div>
          </div>
        </section>
      </div>
    </PolicyPageTemplate>
  );
}
