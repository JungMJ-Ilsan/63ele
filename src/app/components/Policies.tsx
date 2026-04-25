import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, Link } from 'react-router';
import { Users, Brain, Laptop, Heart, Leaf, ArrowRight, X, Briefcase, MapPin, Cpu, GraduationCap, Store, List } from 'lucide-react';
import { useState, useEffect } from 'react';
import {
  type UserProfile,
  saveUserProfile,
  getUserProfile,
  getInitialRoute
} from '../utils/policyMapping';

type SurveyState = {
  job: UserProfile['job'] | null;
  age: UserProfile['age'] | null;
  region: UserProfile['region'] | null;
};

const STORAGE_KEY = 'campaignUserProfile';

export function Policies() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);

  const [survey, setSurvey] = useState<SurveyState>({
    job: null,
    age: null,
    region: null,
  });

  const jobOptions: Array<{ label: string; value: UserProfile['job'] }> = [
    { label: '학부모', value: 'parent' },
    { label: '자영업자', value: 'self-employed' },
    { label: '대학생 / 취업·이직준비', value: 'student-career' },
    { label: '직장인', value: 'office-worker' },
    { label: '그외', value: 'etc' },
  ];

  const ageOptions: Array<{ label: string; value: UserProfile['age'] }> = [
    { label: '10대 이하', value: 'under-20' },
    { label: '20~30대', value: '20-30' },
    { label: '40~50대', value: '40-50' },
    { label: '50~60대', value: '50-60' },
    { label: '70대 이상', value: '70-plus' },
  ];

  const regionOptions: Array<{ label: string; value: UserProfile['region'] }> = [
    { label: '중산동', value: 'a' },
    { label: '정발산동', value: 'b' },
    { label: '일산동', value: 'c' },
    { label: '그 외 지역', value: 'etc' },
  ];

  useEffect(() => {
    const profile = getUserProfile();
    if (profile) {
      setSurvey({
        job: profile.job,
        age: profile.age,
        region: profile.region,
      });
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!survey.job || !survey.age || !survey.region) return;

    const profile: UserProfile = {
      job: survey.job,
      age: survey.age,
      region: survey.region,
    };

    // localStorage에 프로필 저장
    saveUserProfile(profile);

    // 직업 페이지로 이동
    const targetRoute = getInitialRoute(profile);
    navigate(targetRoute);
  };

  const resetSurvey = () => {
    const emptyState: SurveyState = {
      job: null,
      age: null,
      region: null,
    };

    setSurvey(emptyState);
    localStorage.removeItem(STORAGE_KEY);
  };

  const isFormComplete =
    survey.job !== null && survey.age !== null && survey.region !== null;

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowModal(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
              >
                <X size={20} className="text-gray-600" />
              </button>

              <div className="bg-gradient-to-br from-[#FF7210] to-[#FF8534] px-8 pt-10 pb-6 text-white rounded-t-3xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3">
                  맞춤 공약 찾기
                </h2>
                <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                  직업, 연령대, 지역을 선택하시면
                  <br />
                  맞춤 공약 페이지로 안내해드립니다
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div>
                  <label className="block text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    직업을 선택해주세요
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {jobOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() =>
                          setSurvey((prev) => ({
                            ...prev,
                            job: option.value,
                          }))
                        }
                        className={`px-4 py-3 rounded-xl font-bold text-sm sm:text-base transition-all ${
                          survey.job === option.value
                            ? 'bg-gradient-to-r from-[#FF7210] to-[#FF8534] text-white shadow-lg scale-105'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    연령대를 선택해주세요
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {ageOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() =>
                          setSurvey((prev) => ({
                            ...prev,
                            age: option.value,
                          }))
                        }
                        className={`px-4 py-3 rounded-xl font-bold text-sm sm:text-base transition-all ${
                          survey.age === option.value
                            ? 'bg-gradient-to-r from-[#FF7210] to-[#FF8534] text-white shadow-lg scale-105'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    거주 지역을 선택해주세요
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {regionOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() =>
                          setSurvey((prev) => ({
                            ...prev,
                            region: option.value,
                          }))
                        }
                        className={`px-4 py-3 rounded-xl font-bold text-sm sm:text-base transition-all ${
                          survey.region === option.value
                            ? 'bg-gradient-to-r from-[#FF7210] to-[#FF8534] text-white shadow-lg scale-105'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    disabled={!isFormComplete}
                    className={`w-full max-w-md flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-black text-base sm:text-lg shadow-lg transition-all ${
                      isFormComplete
                        ? 'bg-gradient-to-r from-[#FF7210] to-[#FF8534] text-white hover:shadow-xl hover:scale-105'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    맞춤 공약 확인하기
                    <ArrowRight size={20} />
                  </button>
                </div>

                <div className="flex justify-center pt-6 border-t-2 border-gray-200 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="w-full max-w-md flex items-center justify-center gap-2 px-6 py-4 bg-gray-900 text-white rounded-xl font-black text-lg shadow-lg hover:bg-gray-800 hover:shadow-xl hover:scale-105 transition-all"
                  >
                    <List size={24} />
                    전체 공약 목록 보기
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#FF7210]/5 to-white overflow-hidden min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, #FF7210 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6">
              실현 가능한 <span className="text-[#FF7210]">약속</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              정민재 후보의 5대 핵심 공약
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-6"
          >
            {[
              { icon: MapPin, color: 'from-rose-500 to-red-500', label: '지역 현안' },
              { icon: Cpu, color: 'from-purple-500 to-indigo-600', label: 'AI' },
              { icon: Users, color: 'from-blue-500 to-sky-600', label: '청년' },
              { icon: GraduationCap, color: 'from-emerald-500 to-teal-600', label: '학생 교육' },
              { icon: Store, color: 'from-orange-500 to-amber-600', label: '소상공인 지원' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex flex-col items-center gap-3"
              >
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg`}
                >
                  <item.icon className="text-white" size={32} />
                </div>
                <span className="text-sm sm:text-base font-bold text-gray-700">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* 맞춤 공약 보기 버튼 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-24"
          >
            <button
              onClick={() => setShowModal(true)}
              className="w-full max-w-2xl mx-auto flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-[#FF7210] to-[#FF8534] text-white rounded-2xl font-black text-xl sm:text-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all"
            >
              맞춤 공약 보기
              <ArrowRight size={28} />
            </button>
          </motion.div>

          {/* 전체 공약 목록 섹션 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-12 space-y-12"
          >
            {/* 공약 목록 */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <div className="grid sm:grid-cols-2 gap-3">
                <Link
                  to="/policy/job/parent"
                  className="block bg-white border-2 border-gray-300 text-gray-900 rounded-xl px-6 py-4 font-bold text-lg hover:shadow-lg hover:scale-105 hover:border-gray-400 transition-all"
                >
                  학생 대상 수준별 AI 교육 프로그램 개설
                </Link>
                <Link
                  to="/policy/job/self-employed"
                  className="block bg-white border-2 border-gray-300 text-gray-900 rounded-xl px-6 py-4 font-bold text-lg hover:shadow-lg hover:scale-105 hover:border-gray-400 transition-all"
                >
                  AI 마케팅 자동화 지원
                </Link>
                <Link
                  to="/policy/job/student-career"
                  className="block bg-white border-2 border-gray-300 text-gray-900 rounded-xl px-6 py-4 font-bold text-lg hover:shadow-lg hover:scale-105 hover:border-gray-400 transition-all"
                >
                  지역기반 취업 준비 프로그램
                </Link>
                <Link
                  to="/policy/job/office-worker"
                  className="block bg-white border-2 border-gray-300 text-gray-900 rounded-xl px-6 py-4 font-bold text-lg hover:shadow-lg hover:scale-105 hover:border-gray-400 transition-all"
                >
                  버스 노선 증진
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 mt-3">
                <Link
                  to="/policy/age/20-30"
                  className="block bg-white border-2 border-gray-300 text-gray-900 rounded-xl px-6 py-4 font-bold text-lg hover:shadow-lg hover:scale-105 hover:border-gray-400 transition-all"
                >
                  공약 준비 중입니다
                </Link>
                <Link
                  to="/policy/age/40-50"
                  className="block bg-white border-2 border-gray-300 text-gray-900 rounded-xl px-6 py-4 font-bold text-lg hover:shadow-lg hover:scale-105 hover:border-gray-400 transition-all"
                >
                  공약 준비 중입니다
                </Link>
                <Link
                  to="/policy/age/50-60"
                  className="block bg-white border-2 border-gray-300 text-gray-900 rounded-xl px-6 py-4 font-bold text-lg hover:shadow-lg hover:scale-105 hover:border-gray-400 transition-all"
                >
                  공약 준비 중입니다
                </Link>
                <Link
                  to="/policy/age/70-plus"
                  className="block bg-white border-2 border-gray-300 text-gray-900 rounded-xl px-6 py-4 font-bold text-lg hover:shadow-lg hover:scale-105 hover:border-gray-400 transition-all"
                >
                  공약 준비 중입니다
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 mt-3">
                <Link
                  to="/policy/region/a"
                  className="block bg-white border-2 border-gray-300 text-gray-900 rounded-xl px-6 py-4 font-bold text-lg hover:shadow-lg hover:scale-105 hover:border-gray-400 transition-all"
                >
                  공약 준비 중입니다
                </Link>
                <Link
                  to="/policy/region/b"
                  className="block bg-white border-2 border-gray-300 text-gray-900 rounded-xl px-6 py-4 font-bold text-lg hover:shadow-lg hover:scale-105 hover:border-gray-400 transition-all"
                >
                  공약 준비 중입니다
                </Link>
                <Link
                  to="/policy/region/c"
                  className="block bg-white border-2 border-gray-300 text-gray-900 rounded-xl px-6 py-4 font-bold text-lg hover:shadow-lg hover:scale-105 hover:border-gray-400 transition-all"
                >
                  공약 준비 중입니다
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}