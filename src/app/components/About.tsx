import { motion } from "motion/react";
import {
  ArrowRight,
  MapPin,
  Heart,
  Code,
  GraduationCap,
  Briefcase,
  TrendingUp,
  ChevronDown,
  Zap,
  Users,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import candidatePhoto from "figma:asset/8fde92ccb02d3d6e8666e53a7abef9ee28f14f40.png";
import firstSectionPhoto from "figma:asset/de015628ea43e7e32d9aa29373ef4fefa94cfbdb.png";
import localPhoto from "figma:asset/c9c98a93319a0d33dee0914d90c4848714e65980.png";
import aiPhoto from "figma:asset/c8fbe943cb8839692585024e4c4d1a29f4add9b7.png";
import youthSectionPhoto from "figma:asset/57f2f7f3e3bf4c12e64f94ad4e2d89faf896dbc3.png";

export function About() {
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [isCareerOpen, setIsCareerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white pt-20 overflow-hidden">
      {/* 1. 큰 정치의 이야기보다 사람을 먼저 */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* 배경 장식 요소 */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#FF7210]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-200/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 px-4 leading-tight">
                큰 <span className="text-blue-600">정</span>
                <span className="text-red-600">치</span>의
                <br className="block sm:hidden" /> 이야기보다
              </h2>
              <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#FF7210] to-[#FF8534] bg-clip-text text-transparent px-4">
                사람을 먼저!!
              </h2>
            </div>

            <div className="grid lg:grid-cols-1 gap-8 items-center">
              {/* 텍스트 내용 */}
              <div className="order-1">
                <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl border-t-4 border-[#FF7210]">
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p className="text-xl sm:text-2xl font-black text-gray-900">
                      정치는 말로 하지만,{" "}
                      <br className="block sm:hidden" />
                      성장은 기술로 합니다.
                    </p>

                    <p className="text-sm sm:text-lg">
                      세상은 AI와 데이터 시대로 바뀌었지만,{" "}
                      <br className="block sm:hidden" />
                      정치는 아직도 예전 방식만 내세웁니다.
                      <br />
                      코딩 한 줄 못하는 사람이 외치는{" "}
                      <br className="block sm:hidden" /> 기술
                      혁신, 신뢰할 수 있으십니까.
                      <br />
                      <strong className="text-[#FF7210] text-lg sm:text-xl md:text-2xl">
                        이제 수많은 의원 중 한 자리는{" "}
                        <br className="block sm:hidden" />
                        진짜 기술자에게 맡겨야 합니다.
                      </strong>
                    </p>

                    <p className="text-sm sm:text-lg">
                      저는 이 동네 출신 기술자로,{" "}
                      <br className="block sm:hidden" />
                      복잡한 알고리즘으로{" "}
                      <br className="block sm:hidden" />
                      현실의 문제를 풀어왔습니다.
                      <br />
                      그리고 이제 다음을 약속드립니다.
                    </p>

                    <div className="bg-gradient-to-br from-[#FF7210]/10 to-[#FF7210]/5 rounded-3xl p-6 sm:p-8 border-2 border-[#FF7210]/30 shadow-lg">
                      <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
                        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-md border-l-4 border-[#FF7210] flex items-center gap-3">
                          <p className="text-3xl sm:text-4xl flex-shrink-0">
                            👶
                          </p>
                          <div>
                            <p className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                              아이들에게는
                            </p>
                            <p className="text-base sm:text-lg font-black text-[#FF7210]">
                              제대로 된 AI 교육
                            </p>
                          </div>
                        </div>
                        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-md border-l-4 border-[#FF7210] flex items-center gap-3">
                          <p className="text-3xl sm:text-4xl flex-shrink-0">
                            🏪
                          </p>
                          <div>
                            <p className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                              소상공인에게는
                            </p>
                            <p className="text-base sm:text-lg font-black text-[#FF7210]">
                              마케팅 자동화
                            </p>
                          </div>
                        </div>
                        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-md border-l-4 border-[#FF7210] flex items-center gap-3">
                          <p className="text-3xl sm:text-4xl flex-shrink-0">
                            🌆
                          </p>
                          <div>
                            <p className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                              청년들에게는
                            </p>
                            <p className="text-base sm:text-lg font-black text-[#FF7210]">
                              다시 돌아오고 싶은 디지털 환경
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm sm:text-lg">
                      기초의원 한 자리로{" "}
                      <br className="block sm:hidden" />큰
                      정치의 균형이 변하진 않습니다.
                      <br />
                      하지만 우리 동네는 바꿀 수 있습니다.
                      <br />
                      거창한 담론은 국회에 맡기고,
                      <br />
                      <strong className="text-[#FF7210] text-lg sm:text-xl md:text-2xl">
                        지금은 동네를 바꾸는 선택을 해주십시오.
                      </strong>
                    </p>

                    <p className="text-sm sm:text-lg">
                      저는 이 동네의 문제를 뜯어고치는{" "}
                      <br className="block sm:hidden" />
                      현장 기술자가 되겠습니다.
                      <br />
                      <strong className="text-[#FF7210] text-lg sm:text-xl md:text-2xl">
                        정당이 아니라, 사람
                      </strong>
                      을 봐주십시오.
                    </p>

                    <div className="bg-gradient-to-br from-[#FF7210]/5 to-[#FF7210]/10 rounded-2xl py-6 px-4 sm:py-8 sm:px-6 border-l-4 border-[#FF7210] -mx-4 sm:mx-0">
                      <p className="font-black text-lg sm:text-2xl text-gray-900">
                        뒤처지게 하지 않겠습니다.
                        <br />
                        확실히{" "}
                        <span className="text-[#FF7210]">
                          '업데이트'{" "}
                        </span>
                        하겠습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. 후보자 약력 - 세련된 디자인 */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-gray-900 mb-12 sm:mb-16 px-4">
              후보자 약력
            </h2>

            {/* 학력 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <GraduationCap
                    className="text-white"
                    size={28}
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
                  학력
                </h3>
              </div>

              <div className="relative pl-8 sm:pl-12">
                {/* 세로선 */}
                <div className="absolute left-2 sm:left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-200 via-purple-300/50 to-purple-400" />

                <div className="space-y-6">
                  {[
                    {
                      year: "2007",
                      text: "호곡초등학교 병설유치원 졸업",
                      current: false,
                    },
                    {
                      year: "2013",
                      text: "호곡초등학교 졸업",
                      current: false,
                    },
                    {
                      year: "2016",
                      text: "호곡중학교 졸업",
                      current: false,
                    },
                    {
                      year: "2019",
                      text: "일산 대진고등학교 졸업",
                      current: false,
                    },
                    {
                      year: "2020",
                      text: "서울시립대학교 인공지능학과",
                      current: true,
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="relative flex items-start gap-4"
                    >
                      <div
                        className={`absolute -left-8 sm:-left-12 w-5 h-5 rounded-full border-2 ${
                          item.current
                            ? "bg-purple-400 border-purple-400 shadow-lg shadow-purple-400/50"
                            : "bg-white border-gray-300"
                        }`}
                      >
                        {item.current && (
                          <motion.div
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                            className="absolute inset-0 rounded-full bg-purple-400 opacity-50"
                          />
                        )}
                      </div>

                      <div
                        className={`flex-1 ${item.current ? "bg-gradient-to-r from-purple-50 to-white p-4 rounded-xl border-2 border-purple-200" : "p-2"}`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          <span
                            className={`text-sm font-bold ${item.current ? "text-purple-600" : "text-gray-400"} flex items-center gap-2`}
                          >
                            {item.year}
                            <ArrowRight
                              size={16}
                              className={
                                item.current
                                  ? "text-purple-400"
                                  : "text-gray-300"
                              }
                            />
                          </span>
                          <p
                            className={`text-sm sm:text-base ${item.current ? "font-bold text-gray-900" : "text-gray-700"}`}
                          >
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* 경력 */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#FF7210] to-[#FF8534] rounded-2xl flex items-center justify-center shadow-lg">
                  <Briefcase className="text-white" size={28} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
                  경력
                </h3>
              </div>

              <div className="relative pl-8 sm:pl-12">
                {/* 세로선 */}
                <div className="absolute left-2 sm:left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-200 via-[#FF7210]/30 to-[#FF7210]" />

                <div className="space-y-6">
                  {[
                    {
                      year: "2020 ~",
                      text: "전) 일산일대 과외 및 학원강사",
                      current: false,
                    },
                    {
                      year: "2023 ~",
                      text: "전) 경영 마케팅 회사 근무",
                      sub: "- 주식회사 제이앤드앰제이",
                      current: false,
                    },
                    {
                      year: "현재",
                      text: "현) 개혁신당 경기도당 고양시",
                      subs: [
                        "- 지역발전특별위원회 부위원장",
                        "- AI 특별위원회 위원장"
                      ],
                      current: true,
                      highlightSubs: true,
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="relative flex items-start gap-4"
                    >
                      <div
                        className={`absolute -left-8 sm:-left-12 w-5 h-5 rounded-full border-2 ${
                          item.current
                            ? "bg-[#FF7210] border-[#FF7210] shadow-lg shadow-[#FF7210]/50"
                            : "bg-white border-gray-300"
                        }`}
                      >
                        {item.current && (
                          <motion.div
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                            className="absolute inset-0 rounded-full bg-[#FF7210] opacity-50"
                          />
                        )}
                      </div>

                      <div
                        className={`flex-1 ${item.current ? "bg-gradient-to-r from-[#FF7210]/10 to-white p-4 rounded-xl border-2 border-[#FF7210]/30" : "p-2"}`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          <span
                            className={`text-sm font-bold ${item.current ? "text-[#FF7210]" : "text-gray-400"} flex items-center gap-2 flex-shrink-0`}
                          >
                            {item.year}
                            <ArrowRight
                              size={16}
                              className={
                                item.current
                                  ? "text-[#FF7210]"
                                  : "text-gray-300"
                              }
                            />
                          </span>
                          <div>
                            <p
                              className={`text-sm sm:text-base ${item.current && !item.highlightSubs ? "font-bold text-gray-900" : "text-gray-700"}`}
                            >
                              {item.text}
                            </p>
                            {item.sub && (
                              <p className="text-sm text-gray-600 mt-1">
                                {item.sub}
                              </p>
                            )}
                            {item.subs && (
                              <div className="mt-2 space-y-1">
                                {item.subs.map((subItem: string, idx: number) => (
                                  <p key={idx} className={`text-sm ${item.highlightSubs ? "font-bold text-gray-900" : "text-gray-600"}`}>{subItem}</p>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. 일산 토박이 */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-lime-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758620546575-2c0feb9c68c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBuZWlnaGJvcmhvb2QlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzc0OTUyNDExfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="일산 동네"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-lime-400 to-lime-500 text-white rounded-full font-bold shadow-lg mb-6">
                <MapPin size={24} fill="white" />
                <span className="text-base sm:text-lg">
                  일산 토박이
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight px-4">
                동네에서 뛰놀던 꼬마
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img
                  src={localPhoto}
                  alt="일산에서의 어린시절"
                  className="rounded-3xl shadow-2xl border-4 border-lime-400/30 w-full h-auto"
                />
              </div>

              <div className="order-3 md:order-2">
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-base sm:text-lg md:text-xl font-black text-gray-900">
                    <span className="text-lime-600 text-2xl sm:text-3xl">
                      유치원부터 초중고 모두
                    </span>{" "}
                    <br />
                    일산에서 졸업했습니다.
                    <br />
                    <br />
                    그 흔한 자취 한 번 없이
                    <br />
                    대학을 가도, 직장을 다녀도
                    <br />
                    하루의 시작과 끝은 <br />
                    <strong className="text-lime-600 text-2xl sm:text-3xl">
                      늘 이곳, 일산
                    </strong>{" "}
                    이었습니다.
                  </p>

                  <div className="py-4 my-6 border-t-2 border-b-2 border-gray-200">
                    <p className="text-base sm:text-lg md:text-xl font-black text-gray-900">
                      <strong className="text-lime-600 text-2xl sm:text-3xl">
                        고양시 지역발전 특별위원회
                        <br />
                        부위원장
                      </strong>
                      을 역임하면서
                      <br />
                      이 동네 문제를 직접 보고, 듣고, <br />
                      현장에서 분석해왔습니다.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-lime-400 to-lime-500 rounded-2xl p-6 sm:p-8 shadow-lg">
                    <p className="font-black text-xl sm:text-2xl md:text-3xl text-white text-center" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3), -1px -1px 2px rgba(0,0,0,0.2)' }}>
                      내 동네는 내가 바꿉니다.
                      <br />
                      여기는 제가 제일 잘 압니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. AI 전문가 - 코드 배경 */}
      <section className="relative py-16 sm:py-20 bg-blue-950 overflow-hidden">
        {/* 코드 배경 - 투명도 높임 */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjBzY3JlZW58ZW58MXx8fHwxNzc0OTQwODIwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="코드"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-blue-950/80" />
        </div>

        {/* 애니메이션 그리드 */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(90deg, #1e40af 1px, transparent 1px), linear-gradient(0deg, #1e40af 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-full font-bold shadow-lg mb-6">
                <Code size={24} />
                <span className="text-base sm:text-lg">
                  AI 전문가
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight px-4">
                직접 하는 AI 전공자
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img
                  src={aiPhoto}
                  alt="컴퓨터 앞에서 작업 중"
                  className="rounded-3xl shadow-2xl border-4 border-blue-400/30 w-full h-auto"
                />
              </div>

              <div className="order-3 md:order-2">
                <div className="space-y-5 text-white/90 text-base sm:text-lg md:text-xl text-white font-semibol">
                  <p>
                    요즘 다들 AI를 말합니다.
                    <br />
                    하지만{" "}
                    <strong className="text-blue-400">
                      제대로 공부
                    </strong>
                    하고 <br />
                    <strong className="text-blue-400">
                      {" "}
                      직접 설계 및 개발
                    </strong>
                    해본 사람은 많지 않습니다.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-3">
                    {[
                      {
                        icon: GraduationCap,
                        title: "공부",
                        text: "서울시립대 인공지능학과",
                      },
                      {
                        icon: TrendingUp,
                        title: "실무",
                        text: "경영 컨설팅 회사 개발직무",
                      },
                      {
                        icon: Code,
                        title: "적용",
                        text: "AI 특별위원회 위원장",
                      },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="bg-white/10 backdrop-blur rounded-xl p-3 border border-white/20 hover:bg-white/20 transition-all flex items-center gap-3"
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-700 to-blue-800 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon
                            className="text-white"
                            size={18}
                          />
                        </div>
                        <div>
                          <h3 className="font-black text-xl sm:text-base text-white mb-0.5">
                            {item.title}
                          </h3>
                          <p className="text-white/80 text-lg sm:text-sm">
                            {item.text}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-base sm:text-lg md:text-xl text-white font-semibol">
                    복잡한 말을 늘어놓는 게 아니라,
                    <br />
                    여러분의 일상을 조금 더 편하게 만드는 것.
                    <br />
                    <strong className="text-blue-400">
                      그게, 제가 생각하는 AI입니다.
                    </strong>
                  </p>
                  <div className="relative bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl p-6 sm:p-8 shadow-lg">
                    <p className="font-black text-xl sm:text-2xl md:text-3xl text-white text-center leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3), -1px -1px 2px rgba(0,0,0,0.2)' }}>
                      복잡한 기술, 제가 대신합니다.
                      <br />
                      여러분은 저를 마음껏 쓰세요.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. 소박한 청년 */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-teal-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1693058483162-2e14e647fed7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBvbGl0aWNpYW4lMjBkZXRlcm1pbmF0aW9ufGVufDF8fHx8MTc3NDk1MjQxMnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="청년"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-400 to-teal-500 text-white rounded-full font-bold shadow-lg mb-6">
                <Heart size={24} fill="white" />
                <span className="text-base sm:text-lg">
                  서민 청년
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight px-4">
                돈말고 발로뛰는 청년
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img
                  src={youthSectionPhoto}
                  alt="청년 정치인"
                  className="rounded-3xl shadow-2xl border-4 border-teal-400/30 w-full h-auto"
                />
              </div>

              <div className="order-3 md:order-2">
                <div className="space-y-5 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                  <p className="font-bold text-gray-900">
                    그거 아시나요?
                    <br />
                    선거철만 되면 울리는 확성기 소리,
                    <br />
                    <span className="text-teal-600 text-xl sm:text-2xl">
                      그거 후보 돈 아닙니다. <br />
                      여러분 세금입니다.
                    </span>
                  </p>

                  <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-6 shadow-xl border-2 border-teal-200">
                    <p className="font-black text-xl sm:text-2xl text-teal-600 mb-4">
                      저는 그 돈,{" "}
                      <br className="block sm:hidden" />
                      함부로 안 쓰겠습니다.
                    </p>
                    <div className="space-y-2 text-gray-700 text-base sm:text-lg">
                      <p className="flex items-center gap-2">
                        <span className="w-5 h-5 bg-teal-400 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                          ✕
                        </span>
                        대형 유세트럭 없습니다
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="w-5 h-5 bg-teal-400 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                          ✕
                        </span>
                        대량 문자도 없습니다
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="w-5 h-5 bg-teal-400 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                          ✕
                        </span>
                        시끄럽게 하지도 않겠습니다
                      </p>
                    </div>
                  </div>

                  <p>
                    돈으로 존재를 알리는 대신,
                    <br />
                    청년답게 혼자서 발로 뛰며{" "}
                    <br className="block sm:hidden" />
                    얼굴을 알리겠습니다.
                    <br />
                    걸어서, 자전거로, 조용히 찾아가{" "}
                    <br className="block sm:hidden" />
                    직접 인사드리겠습니다.
                  </p>

                  <div className="relative bg-gradient-to-r from-teal-400 to-teal-500 rounded-2xl p-6 sm:p-8 shadow-lg">
                    <p className="font-black text-xl sm:text-2xl md:text-3xl text-white text-center" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3), -1px -1px 2px rgba(0,0,0,0.2)' }}>
                      돈이 아닌 행동으로
                      <br />
                      조용히, 제대로 하겠습니다
                    </p>
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

              <Link to="/contact" className="group w-full sm:w-auto">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 px-12 py-6 bg-white border-3 border-[#FF7210] text-[#FF7210] rounded-full font-black text-xl hover:bg-[#FF7210] hover:text-white transition-all shadow-xl"
                >
                  <Users size={24} />
                  소통하러 가기
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}