import { PolicyPageTemplate } from '../../PolicyPageTemplate';
import { motion } from 'motion/react';
import { GraduationCap, Trophy, Sparkles } from 'lucide-react';
import heroImage from '../../../../imports/JobParent.jpg';

export function JobParent() {
  return (
    <PolicyPageTemplate stage="job">
      <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-blue-50 -mt-20 pt-20">
        {/* Hero Section with Image-First Design */}
        <section className="relative overflow-hidden min-h-[80vh] flex items-end pb-16">
          {/* Background Image - Full visibility */}
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="교육"
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
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-bold shadow-lg mb-8">
                <GraduationCap size={24} />
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                학생 대상 수준별<br />
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  AI 교육 프로그램 개설
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
              className="grid md:grid-cols-3 gap-6 mb-16"
            >
              {[
                { icon: '🎓', title: '시립대 인공지능학과', desc: 'AI 전문 교육' },
                { icon: '💼', title: 'AI 실무 경험 보유', desc: '현장 검증 역량' },
                { icon: '📚', title: '다년간 과외·학원 강의', desc: '교육 노하우' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity blur-xl" />
                  <div className="relative bg-white border-2 border-purple-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <h3 className="text-lg font-black text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Main Promise with Image Fade */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Background with creative gradient fade */}
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1758270704417-26c1244cfaf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx0ZWFjaGVyJTIwc3R1ZGVudCUyMGVkdWNhdGlvbiUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzYwODMxODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="강의실"
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100/90 via-blue-50/85 to-purple-100/90" />
              </div>

              <div className="relative z-10 p-8 sm:p-12 md:p-16">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Trophy className="text-purple-600" size={32} />
                    <h2 className="text-3xl sm:text-4xl font-black text-gray-900">결과 중심 교육</h2>
                  </div>

                  <p className="text-xl sm:text-2xl leading-relaxed font-bold text-gray-900">
                    학생이 직접 만든 결과물을<br />
                    대입 포트폴리오까지 이어가겠습니다.
                  </p>

                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border-2 border-purple-300">
                    <p className="text-lg sm:text-xl leading-relaxed text-gray-800">
                      이 사이트는 직접 설계·구현했습니다.<br />
                      <strong className="text-purple-700 text-2xl">이 수준의 결과를 만들어내게 하겠습니다.</strong>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative py-16 overflow-hidden">
          {/* Diagonal gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-purple-100" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 sm:p-12 shadow-2xl"
            >
              <Sparkles className="mx-auto mb-6 text-yellow-300" size={48} />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                학생부종합전형 시대에,<br />
                확실한 무기 하나<br />
                만들어 드리겠습니다.
              </h2>
            </motion.div>
          </div>
        </section>
      </div>
    </PolicyPageTemplate>
  );
}
