import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { TrendingUp, Users, Leaf, Building2, Heart, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Vision() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  // Data for charts
  const economicGrowthData = [
    { year: '2022', growth: 2.1 },
    { year: '2023', growth: 2.5 },
    { year: '2024', growth: 2.8 },
    { year: '2025', growth: 3.2 },
    { year: '2026', growth: 3.8 },
    { year: '2027', growth: 4.5 },
    { year: '2028', growth: 5.2 },
    { year: '2029', growth: 5.8 },
    { year: '2030', growth: 6.5 },
  ];

  const populationData = [
    { category: '인구 증가율', current: 65, target: 85 },
    { category: '청년 유입', current: 55, target: 90 },
    { category: '출산율', current: 45, target: 75 },
    { category: '고령자 복지', current: 70, target: 95 },
  ];

  const satisfactionData = [
    { subject: '교육', current: 72, target: 95 },
    { subject: '복지', current: 68, target: 92 },
    { subject: '환경', current: 65, target: 90 },
    { subject: '교통', current: 60, target: 88 },
    { subject: '안전', current: 75, target: 93 },
    { subject: '일자리', current: 58, target: 87 },
  ];

  const visionPillars = [
    {
      icon: TrendingUp,
      title: '경제 성장',
      subtitle: '지역 GDP 2배 성장',
      description: '스타트업 육성과 기업 유치를 통해 2030년까지 지역 GDP를 2배로 성장시키고, 양질의 일자리 5만개를 창출합니다.',
      color: 'from-blue-500 to-cyan-400',
      stats: [
        { label: 'GDP 성장률', value: '+120%' },
        { label: '일자리 창출', value: '5만개' },
        { label: '기업 유치', value: '200개' },
      ],
    },
    {
      icon: Users,
      title: '인구 증가',
      subtitle: '청년이 모이는 도시',
      description: '청년 친화적 정책과 육아 지원으로 인구 30만 명 유치를 목표로 하며, 특히 2030세대 유입에 집중합니다.',
      color: 'from-purple-500 to-pink-400',
      stats: [
        { label: '인구 증가', value: '+30만' },
        { label: '청년 유입', value: '+15만' },
        { label: '출산율 증가', value: '+50%' },
      ],
    },
    {
      icon: Leaf,
      title: '환경 보호',
      subtitle: '탄소중립 스마트시티',
      description: '2035년 탄소중립 달성을 목표로 신재생에너지 비중을 70%까지 확대하고, 녹지 면적을 2배로 늘립니다.',
      color: 'from-green-500 to-emerald-400',
      stats: [
        { label: '탄소 감축', value: '100%' },
        { label: '재생에너지', value: '70%' },
        { label: '녹지 확대', value: '2배' },
      ],
    },
    {
      icon: Building2,
      title: '도시 개발',
      subtitle: 'AI 기반 스마트시티',
      description: '첨단 기술을 활용한 스마트시티 인프라를 구축하고, 구도심 재생 사업으로 균형 발전을 실현합니다.',
      color: 'from-indigo-500 to-blue-400',
      stats: [
        { label: 'IoT 센서', value: '10만개' },
        { label: '무료 WiFi', value: '100%' },
        { label: '재생 사업', value: '50개구역' },
      ],
    },
    {
      icon: Heart,
      title: '복지 확대',
      subtitle: '모두가 행복한 도시',
      description: '전 연령층을 아우르는 맞춤형 복지 시스템을 구축하고, 복지 사각지대를 완전히 해소합니다.',
      color: 'from-rose-500 to-orange-400',
      stats: [
        { label: '복지 예산', value: '+80%' },
        { label: '사각지대', value: '0%' },
        { label: '만족도', value: '95%' },
      ],
    },
    {
      icon: Zap,
      title: '혁신 성장',
      subtitle: '미래 산업 허브',
      description: 'AI, 바이오, 그린에너지 등 미래 산업을 육성하고, 글로벌 혁신 기업들이 모이는 도시를 만듭니다.',
      color: 'from-orange-500 to-yellow-400',
      stats: [
        { label: '스타트업', value: '1,000개' },
        { label: '투자 유치', value: '1조원' },
        { label: '특허 출원', value: '3배' },
      ],
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1761792425134-7e09471c5b55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmclMjBtb2Rlcm4lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzczOTczMTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Modern city"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-blue-950/80 to-slate-950" />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              2030 비전
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                대한민국 1등 도시
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              데이터 기반의 구체적인 목표와 실행 계획으로<br />
              2030년까지 대한민국에서 가장 살기 좋은 도시를 만들겠습니다
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Pillars */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              6대 핵심 비전
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              2030년까지 달성할 구체적이고 측정 가능한 목표
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visionPillars.map((pillar, index) => (
              <VisionPillarCard key={index} pillar={pillar} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Data Visualization Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              데이터로 보는 미래
            </h2>
            <p className="text-xl text-white/60">
              목표 달성을 위한 구체적인 지표와 로드맵
            </p>
          </motion.div>

          {/* Economic Growth Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">경제 성장률 전망</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={economicGrowthData}>
                  <defs>
                    <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="year" stroke="rgba(255,255,255,0.5)" />
                  <YAxis stroke="rgba(255,255,255,0.5)" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                      borderRadius: '8px',
                      color: '#fff'
                    }} 
                  />
                  <Area type="monotone" dataKey="growth" stroke="#3b82f6" fillOpacity={1} fill="url(#colorGrowth)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Population Data Chart */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6">인구 및 사회 지표</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={populationData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="category" stroke="rgba(255,255,255,0.5)" angle={-20} textAnchor="end" height={80} />
                    <YAxis stroke="rgba(255,255,255,0.5)" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                        border: '1px solid rgba(59, 130, 246, 0.3)',
                        borderRadius: '8px',
                        color: '#fff'
                      }} 
                    />
                    <Legend />
                    <Bar dataKey="current" fill="#6366f1" name="현재" />
                    <Bar dataKey="target" fill="#06b6d4" name="목표" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Satisfaction Radar Chart */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6">주민 만족도 목표</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={satisfactionData}>
                    <PolarGrid stroke="rgba(255,255,255,0.2)" />
                    <PolarAngleAxis dataKey="subject" stroke="rgba(255,255,255,0.5)" />
                    <PolarRadiusAxis stroke="rgba(255,255,255,0.3)" />
                    <Radar name="현재" dataKey="current" stroke="#6366f1" fill="#6366f1" fillOpacity={0.3} />
                    <Radar name="목표" dataKey="target" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.5} />
                    <Legend />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                        border: '1px solid rgba(59, 130, 246, 0.3)',
                        borderRadius: '8px',
                        color: '#fff'
                      }} 
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              2030 로드맵
            </h2>
            <p className="text-xl text-white/60">
              단계별 실행 계획
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { year: '2026-2027', title: '기반 조성', items: ['스마트시티 인프라', '복지 시스템 구축', '교통망 개선'] },
              { year: '2027-2028', title: '본격 실행', items: ['청년 정책 시행', '환경 프로젝트', '산업 단지 조성'] },
              { year: '2028-2029', title: '성과 확산', items: ['기업 유치 확대', '인구 유입 가속', '복지 서비스 확대'] },
              { year: '2029-2030', title: '목표 달성', items: ['GDP 2배 달성', '인구 30만 돌파', '만족도 1위 도시'] },
            ].map((phase, index) => (
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
                  <div className="text-blue-400 font-bold mb-2">{phase.year}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item, i) => (
                      <li key={i} className="text-white/60 text-sm flex items-start gap-2">
                        <span className="text-blue-400">•</span>
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
    </div>
  );
}

function VisionPillarCard({ pillar, index }: { pillar: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="relative p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl group overflow-hidden"
    >
      {/* Animated gradient background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-10 transition-opacity`}
      />

      <div className="relative">
        {/* Icon */}
        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 shadow-lg`}>
          <pillar.icon className="w-8 h-8 text-white" />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-2">{pillar.title}</h3>
        <p className="text-blue-300 text-sm mb-4">{pillar.subtitle}</p>

        {/* Description */}
        <p className="text-white/60 leading-relaxed mb-6 text-sm">
          {pillar.description}
        </p>

        {/* Stats */}
        <div className="space-y-3">
          {pillar.stats.map((stat: any, i: number) => (
            <div key={i} className="flex justify-between items-center">
              <span className="text-white/50 text-sm">{stat.label}</span>
              <span className={`font-bold bg-gradient-to-r ${pillar.color} bg-clip-text text-transparent`}>
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
