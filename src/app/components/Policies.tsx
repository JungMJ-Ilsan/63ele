import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { 
  Building2, 
  GraduationCap, 
  Heart, 
  Leaf, 
  Bus, 
  Wifi,
  Home,
  Baby,
  Briefcase,
  Shield,
  ChevronRight,
  CheckCircle2,
  X
} from 'lucide-react';

export function Policies() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [showSurveyModal, setShowSurveyModal] = useState(false);
  const [selectedAge, setSelectedAge] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  useEffect(() => {
    // Show survey modal on page load
    setShowSurveyModal(true);
  }, []);

  const handleSurveySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedAge || !selectedRegion) return;

    // Mapping logic based on age and region combination
    let targetPolicy = 3; // default
    
    if (selectedAge === '20' && selectedRegion === 'A') {
      targetPolicy = 1;
    } else if (selectedAge === '40' && selectedRegion === 'A') {
      targetPolicy = 2;
    } else if (selectedAge === '60' && selectedRegion === 'B') {
      targetPolicy = 4;
    } else if ((selectedAge === '30' || selectedAge === '50') || (selectedRegion === 'C' || selectedRegion === 'D')) {
      targetPolicy = 3;
    } else {
      targetPolicy = 5;
    }
    
    // Save entry point to localStorage
    localStorage.setItem('campaignEntryPage', targetPolicy.toString());
    localStorage.setItem('campaignUserAge', selectedAge);
    localStorage.setItem('campaignUserRegion', selectedRegion);
    
    // Navigate to appropriate policy page
    navigate(`/policy${targetPolicy}`);
  };

  const ageOptions = [
    { label: '20대', value: '20' },
    { label: '30대', value: '30' },
    { label: '40대', value: '40' },
    { label: '50대', value: '50' },
    { label: '60대 이상', value: '60' },
  ];

  const regionOptions = [
    { label: 'A동네', value: 'A' },
    { label: 'B동네', value: 'B' },
    { label: 'C동네', value: 'C' },
    { label: 'D동네', value: 'D' },
  ];

  const categories = [
    {
      id: 0,
      name: '전체',
      icon: Building2,
      color: 'from-blue-500 to-cyan-400',
    },
    {
      id: 1,
      name: '교육',
      icon: GraduationCap,
      color: 'from-purple-500 to-pink-400',
    },
    {
      id: 2,
      name: '복지',
      icon: Heart,
      color: 'from-rose-500 to-orange-400',
    },
    {
      id: 3,
      name: '환경',
      icon: Leaf,
      color: 'from-green-500 to-emerald-400',
    },
    {
      id: 4,
      name: '교통',
      icon: Bus,
      color: 'from-indigo-500 to-blue-400',
    },
    {
      id: 5,
      name: 'IT',
      icon: Wifi,
      color: 'from-cyan-500 to-teal-400',
    },
  ];

  const policies = [
    {
      category: 1,
      icon: GraduationCap,
      title: '무상교육 확대',
      subtitle: '모든 아이들에게 평등한 교육 기회를',
      description: '유치원부터 고등학교까지 완전 무상교육을 실현하고, 방과후 프로그램을 확충하여 교육 격차를 해소합니다.',
      details: [
        '유치원부터 고등학교까지 완전 무상교육',
        '방과후 프로그램 100% 무료 지원',
        '저소득층 대학생 장학금 2배 확대',
        '노후 학교 시설 현대화 사업'
      ],
      budget: '1,200억 원',
      period: '2026-2030',
      color: 'from-purple-500 to-pink-400',
    },
    {
      category: 1,
      icon: GraduationCap,
      title: '스마트 도서관 건립',
      subtitle: '첨단 기술이 접목된 미래형 도서관',
      description: '24시간 무인 운영 시스템과 AI 추천 시스템을 갖춘 스마트 도서관을 각 구마다 건립합니다.',
      details: [
        '각 구마다 스마트 도서관 1개소 건립',
        '24시간 무인 운영 시스템 도입',
        'AI 기반 도서 추천 서비스',
        '온라인 전자책 무제한 대여'
      ],
      budget: '500억 원',
      period: '2026-2028',
      color: 'from-purple-500 to-pink-400',
    },
    {
      category: 2,
      icon: Baby,
      title: '출산지원금 확대',
      subtitle: '아이 키우기 좋은 도시',
      description: '첫째 300만원, 둘째 500만원, 셋째 이상 1000만원의 출산지원금을 지급하고 육아휴직 급여를 보전합니다.',
      details: [
        '첫째 300만원, 둘째 500만원, 셋째 1000만원 지급',
        '육아휴직 급여 100% 보전',
        '국공립 어린이집 2배 확충',
        '24시간 긴급 돌봄 서비스'
      ],
      budget: '800억 원',
      period: '2026-2030',
      color: 'from-rose-500 to-orange-400',
    },
    {
      category: 2,
      icon: Heart,
      title: '어르신 복지 강화',
      subtitle: '존경받는 노후를 위한 종합 지원',
      description: '70세 이상 어르신들께 월 30만원의 기본소득을 지급하고, 무료 건강검진 및 의료비를 지원합니다.',
      details: [
        '70세 이상 월 30만원 기본소득',
        '무료 종합건강검진 연 2회',
        '치매 조기검진 및 치료비 100% 지원',
        '경로당 시설 현대화 및 프로그램 확대'
      ],
      budget: '1,500억 원',
      period: '2026-2030',
      color: 'from-rose-500 to-orange-400',
    },
    {
      category: 3,
      icon: Leaf,
      title: '탄소중립 도시',
      subtitle: '2035년 탄소중립 달성 목표',
      description: '태양광 패널 설치 지원과 친환경 차량 보조금 확대로 2035년까지 탄소중립 도시를 실현합니다.',
      details: [
        '가정용 태양광 패널 설치비 70% 지원',
        '전기차 구매 시 최대 800만원 보조금',
        '대중교통 100% 전기·수소차 전환',
        '도심 녹지 면적 2배 확대'
      ],
      budget: '2,000억 원',
      period: '2026-2035',
      color: 'from-green-500 to-emerald-400',
    },
    {
      category: 3,
      icon: Leaf,
      title: '미세먼지 저감',
      subtitle: '깨끗한 공기, 건강한 시민',
      description: '스마트 공기정화 시스템과 친환경 산업단지 조성으로 미세먼지를 50% 감축합니다.',
      details: [
        '주요 거점에 대형 공기정화타워 설치',
        '학교·병원 실내공기질 관리 강화',
        '친환경 산업단지 전환 지원',
        '미세먼지 실시간 모니터링 시스템'
      ],
      budget: '600억 원',
      period: '2026-2028',
      color: 'from-green-500 to-emerald-400',
    },
    {
      category: 4,
      icon: Bus,
      title: '대중교통 혁신',
      subtitle: '빠르고 편리한 이동권 보장',
      description: '버스 배차간격 단축과 심야버스 노선 확대로 시민들의 이동권을 보장합니다.',
      details: [
        '주요 노선 배차간격 5분 이내로 단축',
        '심야버스 노선 3배 확대',
        '환승 대기시간 최소화 시스템',
        '대중교통 요금 30% 인하'
      ],
      budget: '900억 원',
      period: '2026-2028',
      color: 'from-indigo-500 to-blue-400',
    },
    {
      category: 4,
      icon: Bus,
      title: '스마트 교통체계',
      subtitle: 'AI 기반 교통 최적화',
      description: 'AI와 빅데이터를 활용한 스마트 신호 시스템으로 교통 체증을 30% 감소시킵니다.',
      details: [
        'AI 기반 실시간 신호 최적화',
        '스마트 주차 정보 시스템',
        '자율주행 셔틀버스 시범 운영',
        '통합 모빌리티 플랫폼 구축'
      ],
      budget: '700억 원',
      period: '2026-2029',
      color: 'from-indigo-500 to-blue-400',
    },
    {
      category: 5,
      icon: Wifi,
      title: '무료 공공 Wi-Fi',
      subtitle: '디지털 격차 해소',
      description: '시내 전역에 고속 무료 Wi-Fi를 구축하여 누구나 인터넷을 자유롭게 이용할 수 있도록 합니다.',
      details: [
        '시내 전역 기가급 무료 Wi-Fi',
        '취약계층 스마트폰·태블릿 무상 지원',
        '디지털 교육센터 각 구마다 1개소',
        '온라인 행정서비스 100% 전환'
      ],
      budget: '400억 원',
      period: '2026-2027',
      color: 'from-cyan-500 to-teal-400',
    },
    {
      category: 5,
      icon: Wifi,
      title: '스마트시티 플랫폼',
      subtitle: '데이터 기반 도시 운영',
      description: '도시 전체의 데이터를 통합 관리하는 스마트시티 플랫폼으로 행정 효율성을 극대화합니다.',
      details: [
        '통합 도시 데이터 플랫폼 구축',
        'IoT 센서 기반 도시 모니터링',
        'AI 행정서비스 챗봇',
        '블록체인 기반 투명 행정'
      ],
      budget: '1,000억 원',
      period: '2026-2030',
      color: 'from-cyan-500 to-teal-400',
    },
    {
      category: 2,
      icon: Home,
      title: '청년 주거 지원',
      subtitle: '청년들의 독립을 응원합니다',
      description: '청년 전용 임대주택 공급 확대와 월세 보조금 지원으로 주거 부담을 낮춥니다.',
      details: [
        '청년 전용 임대주택 2만 호 공급',
        '월세 최대 30만원 보조',
        '전세자금 무이자 대출',
        '1인 가구 지원센터 운영'
      ],
      budget: '3,000억 원',
      period: '2026-2030',
      color: 'from-rose-500 to-orange-400',
    },
    {
      category: 2,
      icon: Briefcase,
      title: '청년 일자리 창출',
      subtitle: '양질의 일자리 5만개 창출',
      description: '스타트업 지원과 공공일자리 확대로 청년들에게 양질의 일자리를 제공합니다.',
      details: [
        '스타트업 창업 지원금 최대 5000만원',
        '공공기관 청년 채용 30% 의무화',
        '중소기업 취업 시 장려금 지급',
        '직업훈련 프로그램 전액 무료'
      ],
      budget: '1,800억 원',
      period: '2026-2030',
      color: 'from-rose-500 to-orange-400',
    },
  ];

  const filteredPolicies = selectedCategory === 0 
    ? policies 
    : policies.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Survey Modal */}
      {showSurveyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-md bg-gradient-to-br from-slate-900 to-slate-800 border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={() => setShowSurveyModal(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Header */}
            <div className="p-8 pb-6 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">맞춤 공약 찾기</h2>
              <p className="text-white/60 text-sm">
                연령대와 거주지역을 선택하시면<br />
                맞춤형 공약을 안내해드립니다
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSurveySubmit} className="p-8 pt-0 space-y-6">
              {/* Age Selection */}
              <div>
                <label className="block text-white font-medium mb-3 text-sm">
                  연령대를 선택해주세요
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {ageOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setSelectedAge(option.value)}
                      className={`px-4 py-3 rounded-lg font-medium text-sm transition-all ${
                        selectedAge === option.value
                          ? 'bg-orange-500 text-white shadow-lg'
                          : 'bg-white/10 text-white/70 hover:bg-white/20'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Region Selection */}
              <div>
                <label className="block text-white font-medium mb-3 text-sm">
                  거주 지역을 선택해주세요
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {regionOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setSelectedRegion(option.value)}
                      className={`px-4 py-3 rounded-lg font-medium text-sm transition-all ${
                        selectedRegion === option.value
                          ? 'bg-orange-500 text-white shadow-lg'
                          : 'bg-white/10 text-white/70 hover:bg-white/20'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!selectedAge || !selectedRegion}
                className={`w-full py-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
                  selectedAge && selectedRegion
                    ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg'
                    : 'bg-white/10 text-white/40 cursor-not-allowed'
                }`}
              >
                맞춤 공약 확인하기
                <ChevronRight size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-slate-950" />
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)`,
          }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              실현 가능한
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                약속
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              검증된 재원과 구체적인 실행 계획이 있는 12대 핵심 공약
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/5 text-white/60 hover:bg-white/10 border border-white/10'
                }`}
              >
                <category.icon size={20} />
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Policies Grid */}
      <section className="relative py-12 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div layout className="grid md:grid-cols-2 gap-8">
            {filteredPolicies.map((policy, index) => (
              <PolicyCard key={index} policy={policy} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-12 rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 backdrop-blur-xl overflow-hidden text-center"
          >
            <Shield className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              투명한 재원 계획
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              모든 공약은 구체적인 재원 조달 계획과 함께 제시됩니다.<br />
              예산 집행 과정은 실시간으로 공개되어 누구나 확인할 수 있습니다.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 bg-white/5 rounded-xl">
                <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-white/60 text-sm">재원 확보</div>
              </div>
              <div className="p-6 bg-white/5 rounded-xl">
                <div className="text-3xl font-bold text-cyan-400 mb-2">실시간</div>
                <div className="text-white/60 text-sm">예산 공개</div>
              </div>
              <div className="p-6 bg-white/5 rounded-xl">
                <div className="text-3xl font-bold text-blue-400 mb-2">분기별</div>
                <div className="text-white/60 text-sm">이행 보고</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function PolicyCard({ policy, index }: { policy: any; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <motion.div
        whileHover={{ y: -5 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="relative p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl overflow-hidden cursor-pointer"
      >
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${policy.color} opacity-0 group-hover:opacity-10 transition-opacity`} />

        <div className="relative">
          {/* Icon */}
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${policy.color} flex items-center justify-center mb-6 shadow-lg`}>
            <policy.icon className="w-7 h-7 text-white" />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-2">{policy.title}</h3>
          <p className="text-blue-300 text-sm mb-4">{policy.subtitle}</p>

          {/* Description */}
          <p className="text-white/60 leading-relaxed mb-6">
            {policy.description}
          </p>

          {/* Meta info */}
          <div className="flex gap-4 text-sm text-white/50 mb-4">
            <div>
              <span className="text-white/40">예산:</span> {policy.budget}
            </div>
            <div>
              <span className="text-white/40">기간:</span> {policy.period}
            </div>
          </div>

          {/* Expand button */}
          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0 }}
            className="flex items-center gap-2 text-blue-400 font-medium text-sm"
          >
            세부사항 보기
            <ChevronRight size={16} />
          </motion.div>

          {/* Expanded content */}
          <motion.div
            initial={false}
            animate={{ 
              height: isExpanded ? 'auto' : 0,
              opacity: isExpanded ? 1 : 0,
              marginTop: isExpanded ? 24 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="space-y-3 pt-6 border-t border-white/10">
              {policy.details.map((detail: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm leading-relaxed">{detail}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}