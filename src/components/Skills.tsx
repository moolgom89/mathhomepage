// 성과 데이터
const achievements = [
  {
    category: '김준호 선생님',
    items: [
      { name: '수능 만점자 배출', count: '28명 이상', period: '최근 10년간' },
      { name: '서울대 의대/약대 합격생', count: '45명 이상', period: '최근 10년간' },
      { name: '학생 평균 성적 향상', count: '30% 이상', period: '수강 후 3개월 내' },
      { name: '전국 모의고사 1등급 배출', count: '매년 10명 이상', period: '최근 5년간' },
      { name: '연간 지도 학생 수', count: '200명 이상', period: '매년' },
    ],
  },
  {
    category: '이미영 선생님',
    items: [
      { name: '중학교 내신 1등급 달성 학생', count: '60% 이상', period: '전체 수강생 기준' },
      { name: '수학 부진아 학습 향상률', count: '평균 50% 이상', period: '6개월 수강 후' },
      { name: '수학 경시대회 수상자', count: '25명 이상', period: '최근 5년간' },
      { name: '고등학교 진학 후 상위권 유지 학생', count: '80% 이상', period: '중학교 졸업생 기준' },
      { name: '연간 지도 학생 수', count: '180명 이상', period: '매년' },
    ],
  },
  {
    category: '공통 성과',
    items: [
      { name: '학부모 만족도', count: '98% 이상', period: '매년 설문조사 기준' },
      { name: '재수강률', count: '85% 이상', period: '전체 수강생 기준' },
      { name: '학생 추천에 의한 신규 등록', count: '40% 이상', period: '전체 신규 등록 대비' },
      { name: '우수 강사상 수상', count: '총 12회', period: '교육청/학원연합회 주관' },
      { name: '교재 및 참고서 출판', count: '총 15권 이상', period: '커리어 전체' },
    ],
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-white dark:bg-[color:var(--background)]">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="inline-block bg-[color:var(--primary-light)] dark:bg-[color:var(--primary-light)]/20 text-[color:var(--primary)] px-3 py-1 rounded-full text-sm font-medium mb-2">
            교육 성과
          </span>
          <h2 className="text-3xl font-bold">
            <span className="text-[color:var(--primary)] dark:text-[color:var(--primary-dark)]">검증된 결과</span>로 증명합니다
          </h2>
          <div className="w-24 h-1 bg-[color:var(--accent)] mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achieveGroup, groupIndex) => {
            const headerColor = 
              groupIndex === 0 ? 'bg-[color:var(--primary)]' : 
              groupIndex === 1 ? 'bg-[color:var(--accent)]' : 
              'bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)]';
            
            return (
              <div 
                key={groupIndex} 
                className="bg-white dark:bg-[color:var(--secondary)] rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700"
              >
                <div className={`${headerColor} text-white p-4 text-center`}>
                  <h3 className="text-xl font-bold">{achieveGroup.category}</h3>
                </div>
                
                <div className="p-5">
                  {achieveGroup.items.map((achieve, achieveIndex) => (
                    <div key={achieveIndex} className="mb-6 last:mb-0">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">{achieve.name}</span>
                        <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded">{achieve.period}</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mr-2">
                          <div 
                            className={`h-2.5 rounded-full ${
                              groupIndex === 0 ? 'bg-[color:var(--primary)]' : 
                              groupIndex === 1 ? 'bg-[color:var(--accent)]' : 
                              'bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)]'
                            }`} 
                            style={{ width: `${Math.min(parseInt(achieve.count) || 75, 100)}%` }}
                          ></div>
                        </div>
                        <span className={`text-lg font-bold ${
                          groupIndex === 0 ? 'text-[color:var(--primary)]' : 
                          groupIndex === 1 ? 'text-[color:var(--accent)]' : 
                          'text-gray-800 dark:text-gray-200'
                        }`}>{achieve.count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 bg-[color:var(--accent)]/10 dark:bg-[color:var(--primary-light)]/10 p-8 rounded-xl text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-[color:var(--primary)] dark:text-[color:var(--primary-dark)]">왜 저희를 선택해야 할까요?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
              <div className="inline-flex w-14 h-14 rounded-full bg-[color:var(--primary-light)] items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[color:var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">30년 경험</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">풍부한 경험으로 검증된 교육 방법론 제공</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
              <div className="inline-flex w-14 h-14 rounded-full bg-[color:var(--accent)]/20 items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[color:var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">맞춤형 지도</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">개개인의 레벨과 목표에 맞는 커리큘럼</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
              <div className="inline-flex w-14 h-14 rounded-full bg-[color:var(--primary-light)] items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[color:var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">높은 합격률</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">검증된 입시 지도로 높은 대학 합격률</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 