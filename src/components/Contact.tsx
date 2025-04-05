export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-[color:var(--background)]">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="inline-block bg-[color:var(--primary-light)] dark:bg-[color:var(--primary-light)]/20 text-[color:var(--primary)] px-3 py-1 rounded-full text-sm font-medium mb-2">
            상담 문의
          </span>
          <h2 className="text-3xl font-bold">
            <span className="text-[color:var(--primary)] dark:text-[color:var(--primary-dark)]">무료 상담</span>으로 시작하세요
          </h2>
          <div className="w-24 h-1 bg-[color:var(--accent)] mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-[color:var(--primary-light)]/30 dark:bg-[color:var(--secondary)] p-8 rounded-xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">학습 상담 안내</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                학생의 현재 학습 상황과 목표에 맞는 최적의 학습 방법을 제안해 드립니다.
                무료 상담을 통해 학생에게 가장 적합한 강의 과정을 안내해 드립니다.
              </p>

              <div className="space-y-6 pt-4">
                <div className="flex items-start space-x-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[color:var(--primary)] flex items-center justify-center text-white flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">전화 문의</h4>
                    <p className="text-gray-600 dark:text-gray-300">02-1234-5678 (평일 10:00 - 20:00)</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">* 전화 통화량이 많을 경우 아래 온라인 상담 신청을 이용해주세요</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[color:var(--accent)] flex items-center justify-center text-white flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">이메일 문의</h4>
                    <p className="text-gray-600 dark:text-gray-300">math_masters@example.com</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">* 24시간 이내에 답변 드립니다</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[color:var(--primary)] flex items-center justify-center text-white flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">교습 장소</h4>
                    <p className="text-gray-600 dark:text-gray-300">서울시 강남구 테헤란로 123 수학의 명장 학원</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">* 지하철 2호선 강남역 3번 출구에서 도보 5분</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[color:var(--primary-light)]/50 rounded-tl-full -mb-10 -mr-10"></div>
          </div>

          <div className="bg-white dark:bg-[color:var(--secondary)] p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <span className="w-8 h-8 bg-[color:var(--primary)] text-white rounded-full flex items-center justify-center font-bold text-lg mr-3">
                1
              </span>
              <h3 className="text-2xl font-semibold text-[color:var(--primary)] dark:text-[color:var(--primary-dark)]">무료 상담 신청</h3>
            </div>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">학생 이름</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="홍길동" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="grade" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">학년</label>
                  <select 
                    id="grade" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">학년 선택</option>
                    <option value="중1">중학교 1학년</option>
                    <option value="중2">중학교 2학년</option>
                    <option value="중3">중학교 3학년</option>
                    <option value="고1">고등학교 1학년</option>
                    <option value="고2">고등학교 2학년</option>
                    <option value="고3">고등학교 3학년</option>
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">연락처</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="010-1234-5678" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">이메일</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="example@email.com" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="course" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">관심 과정</label>
                <select 
                  id="course" 
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] dark:bg-gray-700 dark:text-white"
                >
                  <option value="">과정 선택</option>
                  <option value="수능대비">수능 대비 고등 수학 종합반</option>
                  <option value="내신대비">내신 대비 고등 수학 집중반</option>
                  <option value="중학수학">중학 수학 개념 완성반</option>
                  <option value="부진학생">수학 부진 학생 맞춤 지도반</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">상담 내용</label>
                <textarea 
                  id="message" 
                  rows={4}
                  placeholder="학습 상황 및 문의사항을 자세히 적어주세요." 
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] dark:bg-gray-700 dark:text-white"
                ></textarea>
              </div>
              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full px-6 py-3 bg-[color:var(--primary)] hover:bg-[color:var(--primary-dark)] text-white rounded-lg transition-colors font-medium flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  상담 신청하기
                </button>
              </div>
              <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-2">
                * 제출된 정보는 상담 목적으로만 사용되며, 제3자에게 제공되지 않습니다.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 