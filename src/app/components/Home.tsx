import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, Home, Cpu, Sparkles, Youtube, Instagram, Facebook, Heart } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, #FF7210 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
              <div className="text-gray-900 mb-4">복잡한 미래 기술,</div>
              <div className="font-black">
                <span className="text-[#FF7210]">옆집 아들</span>
                <span className="text-gray-900">이 대신!</span>
              </div>
            </h1>

            {/* Candidate Name & Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-6"
            >
              <div className="inline-block px-6 py-2 bg-[#FF7210] rounded-full mb-4">
                <span className="text-white font-bold">고양시의원 후보</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">정민재</h2>
              <p className="text-lg text-gray-600">정발산동, 중산 1동, 중산 2동, 일산 2동</p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Link
                to="/policies"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#FF7210] text-white rounded-full font-bold text-lg hover:bg-[#FF7210]/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                공약 보러가기
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-[#FF7210] text-[#FF7210] rounded-full font-bold text-lg hover:bg-[#FF7210]/5 transition-all"
              >
                후보자 알아보기
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap justify-center gap-3 mb-4"
            >
              <a href="#" className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-[#FF7210] hover:text-[#FF7210] transition-all">
                <Youtube size={16} />
                유튜브
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-[#FF7210] hover:text-[#FF7210] transition-all">
                <Instagram size={16} />
                인스타
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-[#FF7210] hover:text-[#FF7210] transition-all">
                <Facebook size={16} />
                페이스북
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-[#FF7210] hover:text-[#FF7210] transition-all">
                <Heart size={16} />
                후원하기
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
              큰 정치의 이야기보다 <span className="text-[#FF7210]">사람을 먼저!!</span>
            </h2>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg md:text-xl font-bold text-gray-900">
                솔직히 여쭈어보겠습니다. 우리 동네 기초의원이 누구인지, 지난 4년 동안 우리 동네를 위해 무엇을 고쳤는지 아시는 분 계십니까?
              </p>

              <p>
                그동안 우리 동네는 왜 항상 뒷전이었을까요? 거대 양당이 공천만 하면 무조건 당선되는 구조 속에서, 지난번 우리 지역은 투표조차 할 필요 없는 '무투표 당선' 지역이었습니다. 이름도 얼굴도 모르는 후보가 당의 이름표만 달고 나와 당선되는 일이 반복되니, 정작 우리 동네 현안은 늘 뒷전일 수밖에 없었습니다.
              </p>

              <div className="bg-[#FF7210]/5 rounded-xl p-6 border-l-4 border-[#FF7210]">
                <p className="font-bold text-gray-900">
                  전국 수천 명의 기초의원 중 저 한 명 당선된다고 해서 대한민국 큰 정치의 흐름이 당장 바뀌지는 않을 것입니다. 하지만 우리 동네 하나만큼은 확실히 변화시킬 수 있습니다!
                </p>
              </div>

              <p>
                저 돈 없습니다. 든든한 정당 배경도 없습니다. 하지만 누구보다 탄현을 잘 아는 기술자 아들입니다. <strong className="text-[#FF7210]">이제는 정당이 아니라, 진짜 우리 동네를 고칠 '사람'을 보고 부려 먹어 주십시오.</strong> 탄현을 위한 소중한 한 표, 실력으로 증명하겠습니다.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">핵심가치</h2>
            <div className="w-20 h-1 bg-[#FF7210] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#FF7210] transition-all hover:shadow-lg h-full">
                <div className="w-14 h-14 bg-[#FF7210] rounded-xl flex items-center justify-center mb-6">
                  <Home className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">옆집 아들 출신</h3>
                <div className="text-gray-700 space-y-3 leading-relaxed">
                  <p>
                    유년 시절부터 지금까지, 제 인생 전부를 일산에서 보냈습니다.
                  </p>
                  <p>
                    우리 동네 어디가 막혔고 어디가 고장 났는지, 굳이 설명 안 하셔도 제가 제일 잘 압니다. 다른 동네 사람 말고, <strong className="text-[#FF7210]">진짜 토박이 기술자</strong> 한번 제대로 부려 먹으십시오.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Value 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#FF7210] transition-all hover:shadow-lg h-full">
                <div className="w-14 h-14 bg-[#FF7210] rounded-xl flex items-center justify-center mb-6">
                  <Cpu className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">미래 기술자</h3>
                <div className="text-gray-700 space-y-3 leading-relaxed">
                  <p>
                    온 세상이 주목하는 AI(인공지능), 우리 동네에도 이 기술 제대로 쓸 줄 아는 사람 하나는 있어야 하지 않겠습니까?
                  </p>
                  <p>
                    일산의 미래 먹거리 만들고, 막힌 곳 뚫고, 불편한 거 고치려면 저 같은 <strong className="text-[#FF7210]">기술자 한 명쯤은 꼭 필요</strong>합니다. 그래야 우리 동네, 똑똑하게 돌아갑니다.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Value 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#FF7210] transition-all hover:shadow-lg h-full">
                <div className="w-14 h-14 bg-[#FF7210] rounded-xl flex items-center justify-center mb-6">
                  <Sparkles className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">소박한 청년</h3>
                <div className="text-gray-700 space-y-3 leading-relaxed">
                  <p>
                    저 돈 없습니다. 으리으리한 선거캠프 차리고 유세차량 끌고 다닐 돈, 단돈 만 원도 없습니다.
                  </p>
                  <p>
                    대신 남들보다 <strong className="text-[#FF7210]">두 발로 더 뛰겠습니다</strong>. 비싼 돈 선거 안 하겠습니다. 그럴 돈 있으면 운동화 한 켤레 더 사서 동네 구석구석 누비겠습니다. 실력으로, 진심으로, 제대로 한번 들이받아 보겠습니다.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 후보자 약력 Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-gray-900">
              후보자 약력
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* 학력 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-black text-gray-900 mb-6 pb-3 border-b-2 border-[#FF7210]">
                  학력
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>▪ 호곡초등학교 졸업</p>
                  <p>▪ 호곡중학교 졸업</p>
                  <p>▪ 일산 대진고등학교 졸업</p>
                  <p className="font-bold text-[#FF7210]">▪ 서울시립대학교 인공지능학과 재학중</p>
                </div>
              </div>

              {/* 경력 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-black text-gray-900 mb-6 pb-3 border-b-2 border-[#FF7210]">
                  경력
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>전) 일산일대 과외 및 학원강사</p>
                  <p>전) 병원 마케팅 회사 근무<br />
                    <span className="text-sm ml-4">주식회사 제이앤드엠제이</span>
                  </p>
                  <p className="font-bold text-[#FF7210]">현) 개혁신당 고양시<br />
                    <span className="ml-4">지역발전위원회 부위원장</span>
                  </p>
                  <p className="font-bold text-[#FF7210]">현) 개혁신당 경기도당<br />
                    <span className="ml-4">AI 특별위원회 위원장</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">
              정민재와 함께하기
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/policies"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#FF7210] text-white rounded-full font-bold text-lg hover:bg-[#FF7210]/90 transition-all shadow-lg hover:scale-105"
              >
                공약 보러가기
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-10 py-5 bg-white border-2 border-[#FF7210] text-[#FF7210] rounded-full font-bold text-lg hover:bg-[#FF7210]/5 transition-all"
              >
                후보자 알아보기
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <a href="#" className="inline-flex items-center gap-2 px-5 py-3 bg-gray-50 rounded-full text-gray-700 hover:bg-[#FF7210] hover:text-white transition-all">
                <Youtube size={18} />
                유튜브
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-5 py-3 bg-gray-50 rounded-full text-gray-700 hover:bg-[#FF7210] hover:text-white transition-all">
                <Instagram size={18} />
                인스타
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-5 py-3 bg-gray-50 rounded-full text-gray-700 hover:bg-[#FF7210] hover:text-white transition-all">
                <Facebook size={18} />
                페이스북
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 bg-gray-50 rounded-full text-gray-700 hover:bg-[#FF7210] hover:text-white transition-all">
                <Heart size={18} />
                후원하기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}