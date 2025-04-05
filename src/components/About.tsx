export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-[color:var(--background)]">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="inline-block bg-[color:var(--primary-light)] dark:bg-[color:var(--primary-light)]/20 text-[color:var(--primary)] px-3 py-1 rounded-full text-sm font-medium mb-2">
            강사진 소개
          </span>
          <h2 className="text-3xl font-bold">
            <span className="text-[color:var(--primary)] dark:text-[color:var(--primary-dark)]">최고의 전문가</span>가 함께합니다
          </h2>
          <div className="w-24 h-1 bg-[color:var(--accent)] mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-[color:var(--secondary)] dark:bg-[color:var(--secondary)] p-8 rounded-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-[color:var(--primary)] text-white px-4 py-1">고등수학 전문</div>
            <h3 className="text-2xl font-semibold mb-4 text-[color:var(--primary)] dark:text-[color:var(--primary-dark)]">김준호 선생님</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              30년 이상의 고등학교 수학 교육 경력을 가진 베테랑 강사입니다. 
              수능 및 내신 대비에 특화된 강의로 많은 학생들의 성적 향상을 이끌어 왔습니다.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              특히 미적분과 확률과 통계 분야에서 뛰어난 강의 능력을 인정받고 있으며,
              어려운 개념을 쉽게 이해시키는 독자적인 교수법으로 유명합니다.
            </p>
            
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm w-28">
                  <span className="text-xs text-gray-500 dark:text-gray-400">전문 과목</span>
                  <span className="font-medium text-[color:var(--primary)]">미적분</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm w-28">
                  <span className="text-xs text-gray-500 dark:text-gray-400">교육 경력</span>
                  <span className="font-medium text-[color:var(--primary)]">32년</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm w-28">
                  <span className="text-xs text-gray-500 dark:text-gray-400">출신 학교</span>
                  <span className="font-medium text-[color:var(--primary)]">서울대</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm w-28">
                  <span className="text-xs text-gray-500 dark:text-gray-400">저서</span>
                  <span className="font-medium text-[color:var(--primary)]">15권+</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[color:var(--secondary)] dark:bg-[color:var(--secondary)] p-8 rounded-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[color:var(--accent)] text-white px-4 py-1">중등수학 전문</div>
            <h3 className="text-2xl font-semibold mb-4 text-[color:var(--accent)] dark:text-[color:var(--accent)]">이미영 선생님</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              30년 경력의 중학교 수학 전문 강사로, 탄탄한 기초 개념부터 고등 수학의 
              연계성까지 고려한 체계적인 교육을 제공합니다.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              특히 수학에 어려움을 겪는 학생들의 맞춤형 지도에 탁월한 능력을 보유하고 있으며,
              학생 개개인의 특성을 고려한 맞춤형 학습 방법을 개발하여 적용합니다.
            </p>
            
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm w-28">
                  <span className="text-xs text-gray-500 dark:text-gray-400">전문 과목</span>
                  <span className="font-medium text-[color:var(--accent)]">중등수학</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm w-28">
                  <span className="text-xs text-gray-500 dark:text-gray-400">교육 경력</span>
                  <span className="font-medium text-[color:var(--accent)]">30년</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm w-28">
                  <span className="text-xs text-gray-500 dark:text-gray-400">출신 학교</span>
                  <span className="font-medium text-[color:var(--accent)]">이화여대</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm w-28">
                  <span className="text-xs text-gray-500 dark:text-gray-400">저서</span>
                  <span className="font-medium text-[color:var(--accent)]">12권+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto bg-gradient-to-r from-[color:var(--primary-light)] to-[color:var(--accent)]/10 dark:from-[color:var(--primary-light)]/10 dark:to-[color:var(--accent)]/10 p-8 rounded-xl text-center">
          <h3 className="text-2xl font-semibold mb-6 text-[color:var(--primary)] dark:text-[color:var(--primary-dark)]">교육 철학</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            저희는 단순한 문제 풀이 방법을 가르치는 것이 아닌, 수학적 개념과 원리를 깊이 이해하도록 돕는
            교육을 추구합니다. 30년 이상의 경험을 바탕으로 학생 개개인의 특성과 학습 스타일에 맞는
            맞춤형 교육을 제공하며, 어려운 수학 개념도 쉽고 재미있게 이해할 수 있도록 돕습니다.
          </p>
        </div>
      </div>
    </section>
  );
} 