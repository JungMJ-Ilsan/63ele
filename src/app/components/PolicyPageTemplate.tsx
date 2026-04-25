import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, List, ChevronRight } from 'lucide-react';
import { getUserProfile, getNextRoute, getPrevRoute } from '../utils/policyMapping';

interface PolicyPageTemplateProps {
  stage: 'job' | 'age' | 'region';
  children?: React.ReactNode;
}

export function PolicyPageTemplate({ stage, children }: PolicyPageTemplateProps) {
  const navigate = useNavigate();

  useEffect(() => {
    // 페이지 진입 시 사용자 프로필 검증
    const profile = getUserProfile();
    if (!profile) {
      // 프로필이 없으면 입력 페이지로 리다이렉트
      navigate('/policies', { replace: true });
    }
  }, [navigate]);

  const handlePrev = () => {
    const profile = getUserProfile();
    if (!profile) {
      navigate('/policies');
      return;
    }

    const prevRoute = getPrevRoute(stage, profile);
    if (prevRoute) {
      navigate(prevRoute);
    }
  };

  const handleNext = () => {
    const profile = getUserProfile();
    if (!profile) {
      navigate('/policies');
      return;
    }

    const nextRoute = getNextRoute(stage, profile);
    if (nextRoute) {
      navigate(nextRoute);
    }
  };

  const handleList = () => {
    navigate('/policies');
  };

  const profile = getUserProfile();
  const hasNext = profile ? getNextRoute(stage, profile) !== null : false;
  const hasPrev = stage !== 'job'; // 직업 페이지에서는 이전 버튼 비활성화

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* 본문 영역 */}
      <div className="pt-24 px-4">
        <div className="max-w-4xl mx-auto">
          {children || (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">
                공약 내용이 곧 업데이트될 예정입니다.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 네비게이션 버튼 섹션 - Footer 위에 배치 */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-4">
            {/* 이전 공약 보기 */}
            <button
              onClick={handlePrev}
              disabled={!hasPrev}
              className={`flex items-center justify-center gap-2 px-6 py-5 rounded-xl font-bold text-lg transition-all shadow-md ${
                hasPrev
                  ? 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-lg active:scale-95'
                  : 'bg-gray-100 text-gray-300 cursor-not-allowed'
              }`}
            >
              <ChevronLeft size={24} />
              <span className="hidden sm:inline">이전 공약</span>
              <span className="sm:hidden">이전</span>
            </button>

            {/* 목록 */}
            <button
              onClick={handleList}
              className="flex items-center justify-center gap-2 px-6 py-5 rounded-xl font-bold text-lg bg-gradient-to-r from-[#FF7210] to-[#FF8534] text-white hover:shadow-xl active:scale-95 transition-all shadow-lg"
            >
              <List size={24} />
              <span>목록</span>
            </button>

            {/* 다음 공약 보기 */}
            <button
              onClick={handleNext}
              disabled={!hasNext}
              className={`flex items-center justify-center gap-2 px-6 py-5 rounded-xl font-bold text-lg transition-all shadow-md ${
                hasNext
                  ? 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-lg active:scale-95'
                  : 'bg-gray-100 text-gray-300 cursor-not-allowed'
              }`}
            >
              <span className="hidden sm:inline">다음 공약</span>
              <span className="sm:hidden">다음</span>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
