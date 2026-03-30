export function Policy1() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* 후보 소개 (20대 + A동네 맞춤) */}
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
              <span className="text-orange-500 font-bold">청년과 함께 성장하는 동네</span>
            </p>
            <p className="text-gray-600 leading-relaxed">
              A동네 청년 여러분, 함께 꿈을 현실로 만들어갑시다. IT 전문가의 경험으로 청년 일자리와 창업 환경을 만들겠습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 공약 1 (20대 청년 맞춤) */}
      <section className="py-12 px-6 bg-orange-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="px-4 py-2 bg-orange-500 text-white rounded-lg font-bold text-sm">
                공약 01
              </div>
              <h2 className="text-3xl font-bold text-gray-900">청년 일자리 창출</h2>
            </div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              지역 청년들이 고향에서 꿈을 펼칠 수 있도록 양질의 일자리와 창업 기회를 만들겠습니다.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl mt-1">✓</span>
                <span className="text-gray-700 text-lg">청년 창업 지원 센터 설립</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl mt-1">✓</span>
                <span className="text-gray-700 text-lg">지역 기업 청년 채용 인센티브</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl mt-1">✓</span>
                <span className="text-gray-700 text-lg">IT 인재 양성 프로그램</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl mt-1">✓</span>
                <span className="text-gray-700 text-lg">청년 주거 지원 확대</span>
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
              <h2 className="text-3xl font-bold text-gray-900">A동네 발전 계획</h2>
            </div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              A동네 주민들의 삶의 질을 높이기 위한 맞춤형 발전 계획을 추진하겠습니다.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl mt-1">✓</span>
                <span className="text-gray-700 text-lg">청년 커뮤니티 공간 조성</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl mt-1">✓</span>
                <span className="text-gray-700 text-lg">스마트 교통 시스템 도입</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl mt-1">✓</span>
                <span className="text-gray-700 text-lg">문화 시설 확충</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl mt-1">✓</span>
                <span className="text-gray-700 text-lg">야간 안심 귀가 서비스</span>
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
