import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, Briefcase, Award, Heart, Users, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const timeline = [
    {
      year: '2005',
      title: '시민운동가 시작',
      description: '지역 환경보호 단체에서 활동을 시작하며 시민들의 목소리를 대변',
      icon: Heart,
    },
    {
      year: '2010',
      title: '사회복지법인 설립',
      description: '취약계층을 위한 복지법인 설립, 연간 5000여 명 지원',
      icon: Users,
    },
    {
      year: '2015',
      title: '지역발전위원회 위원장',
      description: '지역 경제 활성화와 일자리 창출을 위한 정책 수립 및 실행',
      icon: TrendingUp,
    },
    {
      year: '2020',
      title: '시민봉사대상 수상',
      description: '15년간의 헌신적인 봉사활동을 인정받아 시민봉사대상 수상',
      icon: Award,
    },
    {
      year: '2024',
      title: '스마트시티 전문가',
      description: '첨단 기술을 활용한 도시 혁신 프로젝트 총괄 디렉터',
      icon: Briefcase,
    },
    {
      year: '2026',
      title: '지방선거 출마',
      description: '더 나은 지역사회를 위한 새로운 도전',
      icon: GraduationCap,
    },
  ];

  const achievements = [
    { number: '20+', label: '경력 년수', icon: Briefcase },
    { number: '15', label: '수상 경력', icon: Award },
    { number: '5000+', label: '지원 가구', icon: Users },
    { number: '50+', label: '완료 프로젝트', icon: TrendingUp },
  ];

  return (
    <div ref={containerRef} className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1559722530-0562aef6306a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBwb2xpdGljaWFuJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczOTc5NzU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Candidate portrait"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-blue-950/80 to-slate-950" />
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            김민수
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-blue-300 mb-4"
          >
            시민과 함께하는 리더
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            20년간 지역사회와 함께하며 쌓아온 신뢰와 경험으로<br />
            더 나은 미래를 만들어가겠습니다
          </motion.p>
        </motion.div>
      </section>

      {/* Achievements Grid */}
      <section className="relative py-20 -mt-20 z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                
                <div className="relative">
                  <achievement.icon className="w-8 h-8 text-blue-400 mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-white/60 text-sm">{achievement.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                함께 걸어온
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  20년의 여정
                </span>
              </h2>
              <div className="space-y-6 text-white/70 leading-relaxed">
                <p>
                  서울대학교 행정학과를 졸업하고, 하버드 케네디스쿨에서 공공정책학 석사학위를 받았습니다. 
                  학업을 마친 후 곧바로 지역사회로 돌아와 시민운동가로서의 길을 걷기 시작했습니다.
                </p>
                <p>
                  지난 20년간 환경보호, 사회복지, 지역경제 활성화 등 다양한 분야에서 
                  시민들과 함께 땀 흘리며 실질적인 변화를 만들어왔습니다. 
                  이론이 아닌 현장에서, 말이 아닌 행동으로 증명해왔습니다.
                </p>
                <p>
                  특히 취약계층을 위한 복지법인 운영을 통해 연간 5000여 가구에 
                  실질적인 도움을 제공하고 있으며, 스마트시티 프로젝트를 통해 
                  미래지향적인 도시 발전의 기틀을 마련했습니다.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtd29yayUyMGNvbGxhYm9yYXRpb24lMjBvZmZpY2V8ZW58MXx8fHwxNzc0MDYyMzg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Working with community"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              {/* Decorative gradient orbs */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full opacity-20 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full opacity-20 blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              주요 경력
            </h2>
            <p className="text-xl text-white/60">
              시민과 함께 만들어온 변화의 발자취
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-500" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Credentials */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Education */}
            <div className="p-10 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl">
              <GraduationCap className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-6">학력</h3>
              <div className="space-y-4 text-white/70">
                <div>
                  <div className="font-semibold text-white">하버드 케네디스쿨</div>
                  <div className="text-sm">공공정책학 석사 (MPA)</div>
                  <div className="text-xs text-white/50">2003 - 2005</div>
                </div>
                <div>
                  <div className="font-semibold text-white">서울대학교</div>
                  <div className="text-sm">행정학과 학사</div>
                  <div className="text-xs text-white/50">1999 - 2003</div>
                </div>
              </div>
            </div>

            {/* Awards */}
            <div className="p-10 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl">
              <Award className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-6">주요 수상</h3>
              <div className="space-y-4 text-white/70">
                <div>
                  <div className="font-semibold text-white">대한민국 시민봉사대상</div>
                  <div className="text-xs text-white/50">2020</div>
                </div>
                <div>
                  <div className="font-semibold text-white">지역발전공로상</div>
                  <div className="text-xs text-white/50">2018</div>
                </div>
                <div>
                  <div className="font-semibold text-white">환경보호유공자 포상</div>
                  <div className="text-xs text-white/50">2015</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function TimelineItem({ item, index }: { item: any; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-center ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-col md:gap-16`}
    >
      {/* Content */}
      <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-left ml-20 md:ml-0`}>
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          className="inline-block p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
          
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <item.icon className="w-6 h-6 text-blue-400" />
              <span className="text-blue-400 font-bold text-lg">{item.year}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-white/60 leading-relaxed">{item.description}</p>
          </div>
        </motion.div>
      </div>

      {/* Center dot */}
      <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full shadow-lg shadow-blue-500/50" />

      {/* Spacer for layout */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}
