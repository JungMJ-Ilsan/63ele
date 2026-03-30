export function Policy2() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* 후보 소개 (40대 + A동네 맞춤) */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl flex-shrink-0">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%A6%9D%EB%AA%85%EC%82%AC%EC%A7%84%20%EA%B3%B5-p4iNu7hIwTu6pf1FJ2hw4fq9CHegHr.jpg" 
              alt="정민재 후보" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
              고양시의회의원 예비후보자
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">정민재</h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4">
              탄현의 품에서 미래 전문가로,<br />
              <span className="text-orange-500 font-bold">가정과 함께 성장하는 동네</span>
            </p>
            <p className="text-gray-600 leading-relaxed">
              A동네의 일하는 부모님들을 위해, 양질의 교육 환경과 안전한 육아 인프라를 만들겠습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 공약 1 (40대 맞춤) */}
      <section className="py-12 px-6 bg-orange-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="px-4 py-2 bg-orange-500 text-white rounded-lg font-bold text-sm">
                공약 01
              </div>
              <h2 className="text-3xl font-bold text-gray-900">교육 환경 개선</h2>
            </div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              우리 아이들이 더 좋은 환경에서 배울 수 있도록 교육 인프라를 강화하겠습니다.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl mt-1">✓</span>
                <span className="text-gray-700 text-lg">방과후 프로그램 확대</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl mt-1">✓</span>
                <span className="text-gray-700 text-lg">학교 시설 현대화</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl mt-1">✓</span>
                <span className="text-gray-700 text-lg">스마트 교육 환경 구축</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl mt-1">✓</span>
                <span className="text-gray-700 text-lg">우수 교사 유치 지원</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 공약 2 (A동네 맞춤) */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-2 border-orange-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="px-4 py-2 bg-orange-500 text-white rounded-lg font-bold text-sm">
                공약 02
              </div>
              <h2 className="text-3xl font-bold text-gray-900">A동네 생활 인프라</h2>
            </div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              A동네 가족들의 편리하고 안전한 생활을 위한 인프라를 구축하겠습니다.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl mt-1">✓</span>
                <span className="text-gray-700 text-lg">어린이집 및 유치원 확충</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl mt-1">✓</span>
                <span className="text-gray-700 text-lg">가족 친화 공원 조성</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl mt-1">✓</span>
                <span className="text-gray-700 text-lg">안전한 통학로 정비</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl mt-1">✓</span>
                <span className="text-gray-700 text-lg">주차 시설 확충</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%A6%9D%EB%AA%85%EC%82%AC%EC%A7%84%20%EA%B3%B5-p4iNu7hIwTu6pf1FJ2hw4fq9CHegHr.jpg" 
                alt="정민재 후보" 
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <div className="text-xl font-bold">정민재</div>
                <div className="text-gray-400 text-sm">우리 동네 내일을 코딩합니다</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm text-center">
              선거관리위원회 후보자등록번호: 2026-파주-0001
            </p>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-500 text-sm">
              &copy; 2026 정민재 선거사무소. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
