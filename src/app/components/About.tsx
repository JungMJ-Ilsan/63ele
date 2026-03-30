import { motion } from 'motion/react';
import { GraduationCap, Briefcase, MapPin, Heart } from 'lucide-react';
import candidatePhoto from 'figma:asset/ad7ceeb721975ef4f719a4e5241a67c7358e5e4c.png';

export function About() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              후보자 알아보기
            </h1>
            <div className="w-20 h-1 bg-[#FF7210] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <img
                  src={candidatePhoto}
                  alt="정민재 후보"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Right: Personal Story */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF7210] text-white rounded-full font-bold">
                <MapPin size={18} />
                일산 토박이
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                삼형제 애국자 집안에서<br />자랐습니다
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  일산 골목을 뛰어다니던 아이들, 그 중 첫째가 바로 저입니다.
                  그 흔한 자취 한 번 없이, 대학도, 직장도 하루의 시작과 끝은 늘 일산이었습니다.
                </p>

                <div className="bg-[#FF7210]/5 p-6 rounded-xl border-l-4 border-[#FF7210]">
                  <p className="font-bold text-gray-900 mb-2">저는 책상이 아니라, 길 위에서 답을 찾았습니다.</p>
                  <p>현장은 데이터보다 먼저 말해준다고 믿습니다.</p>
                </div>

                <p>
                  고양시 지역발전 특별위원회 부위원장으로 뛰며
                  이 동네 문제를 직접 보고, 듣고, 발로 분석해왔습니다.
                </p>

                <p className="font-bold text-[#FF7210] text-xl">
                  멀리서 해석하는 사람이 아니라,<br />
                  가까이서 해결하려는 사람입니다.
                </p>

                <p className="text-gray-900 font-bold text-lg">
                  일산은 제 삶의 배경이 아니라,<br />
                  제가 바꿔야 할 현실입니다.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 후보자 약력 Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 text-center">
              후보자 약력
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* 학력 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:border-[#FF7210] transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#FF7210] rounded-xl flex items-center justify-center">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900">학력</h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p>▪ 2007 호곡초등학교 병설유치원 졸업</p>
                  <p>▪ 2013 호곡초등학교 졸업</p>
                  <p>▪ 2016 호곡중학교 졸업</p>
                  <p>▪ 2019 일산 대진고등학교 졸업</p>
                  <p className="font-bold text-[#FF7210]">▪ 2020 서울시립대학교 인공지능학과 재학중</p>
                </div>
              </motion.div>

              {/* 경력 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:border-[#FF7210] transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#FF7210] rounded-xl flex items-center justify-center">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900">경력</h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p>▪ 2020 일산일대 과외 및 학원강사</p>
                  <p>▪ 2023 경영 마케팅 회사 근무<br />
                    <span className="text-sm ml-4">주식회사 제이앤드앰제이</span>
                  </p>
                  <p className="font-bold text-[#FF7210]">▪ 현재 개혁신당 고양시 일산서구<br />
                    <span className="ml-4">지역발전위원회 부위원장</span>
                  </p>
                  <p className="font-bold text-[#FF7210]">▪ 현재 개혁신당 경기도<br />
                    <span className="ml-4">AI 특별위원회 위원장</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI 전문성 Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#FF7210] to-[#FF8534] rounded-2xl p-12 md:p-16 text-white shadow-lg"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-8">
              AI를 정말 아는 사람
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-white/95">
              <p>
                요즘 가장 많이 듣는 말, AI입니다.
                그런데 솔직히, 말로만 "AI, AI" 외친다고 달라지진 않습니다.
              </p>
              <p>
                저는 서울시립대학교 인공지능학과에서 AI를 깊이 있게 공부했습니다.
                기술을 <strong>'아는 척'이 아니라, 제대로 이해하려고</strong> 파고들었습니다.
              </p>
              <p>
                그리고 경영 컨설팅 회사에서 일하며
                그 기술을 실제 문제에 적용하는 법을 배웠습니다.
              </p>
              <p>
                이후에는 AI 특별위원회 위원장으로서
                이걸 우리 동네 행정과 복지에 어떻게 쓸지, 계속 고민해왔습니다.
              </p>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm mt-6">
                <p className="font-black text-xl">
                  저는 AI를 "아는 사람"이 아닙니다.<br />
                  "어디에, 어떻게 써야 하는지 아는 사람"입니다.
                </p>
              </div>
              <p className="text-lg">
                복잡한 말을 늘어놓는 게 아니라,
                여러분의 일상을 조금 더 편하게 만드는 것.
                그게, 제가 생각하는 AI입니다.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 선거 철학 Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-12 md:p-16 shadow-sm border border-gray-200"
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 text-center">
              여러분 세금, 소음이 아니라 삶에 쓰겠습니다
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="text-xl font-bold text-gray-900">
                그거 아시나요?<br />
                선거철만 되면 울리는 확성기 소리, 그거 후보 돈 아닙니다. 여러분 세금입니다.
              </p>
              <div className="bg-[#FF7210]/5 p-8 rounded-xl border-l-4 border-[#FF7210]">
                <p className="font-bold text-[#FF7210] text-xl mb-4">저는 그 돈, 그렇게 안 쓰겠습니다.</p>
                <ul className="space-y-2">
                  <li>✗ 유세차량도 없습니다.</li>
                  <li>✗ 대량 문자도 없습니다.</li>
                  <li>✗ 사람들 우르르 몰고 다니며 시끄럽게 하지도 않겠습니다.</li>
                </ul>
              </div>
              <p>
                돈으로 존재를 알리는 대신,
                청년답게 혼자서 발로 뛰며 얼굴을 알리겠습니다.
                걸어서, 자전거로, 조용히 찾아가 직접 인사드리겠습니다.
              </p>
              <p className="text-2xl font-black text-[#FF7210] text-center mt-8">
                여러분 세금, 소음이 아니라 삶에 쓰겠습니다.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}