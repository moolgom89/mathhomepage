import Image from 'next/image';

export default function Hero() {
  return (
    <section className="py-16 md:py-20 bg-[color:var(--accent)] dark:bg-[color:var(--accent-dark)]/80">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2 space-y-5">
          <div className="inline-block bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium text-[color:var(--primary)]">
            중고등 수학 교육 30년 경력
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            <span className="text-[color:var(--primary)]">수학</span>에 강한 <br />
            <span className="relative">
              <span className="text-[color:var(--primary)]">부부 수학강사</span>
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-[color:var(--primary-light)] dark:bg-[color:var(--primary-light)]/50 -z-10"></span>
            </span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
            고등학교 수학 전문 김준호 선생님과 중학교 수학 전문 이미영 선생님이 함께하는 
            맞춤형 수학 교육을 제공합니다. 오랜 경험과 노하우로 학생들의 성적 향상을 약속합니다.
          </p>
          <div className="flex gap-4 pt-2">
            <a 
              href="#courses" 
              className="px-6 py-3 bg-[color:var(--primary)] hover:bg-[color:var(--primary-dark)] text-white rounded-lg transition-colors"
            >
              강의 과정 살펴보기
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-white border border-[color:var(--primary)] text-[color:var(--primary)] hover:bg-[color:var(--primary-light)] dark:hover:bg-[color:var(--primary-light)]/20 rounded-lg transition-colors"
            >
              무료 상담 신청
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center relative">
          <div className="bg-white dark:bg-gray-800 w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-xl relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <span className="text-5xl md:text-6xl font-bold text-[color:var(--primary)]">1위</span>
                <span className="text-xl md:text-2xl font-bold mt-2 text-gray-800 dark:text-gray-200">수학 전문 강사</span>
                <span className="text-sm text-gray-600 dark:text-gray-400 mt-1">* 2023년 학부모 만족도 조사 기준</span>
              </div>
            </div>
          </div>
          <div className="absolute -top-5 -right-5 bg-[color:var(--primary)] text-white p-3 rounded-full shadow-lg text-sm font-bold">
            30년
            <span className="block text-xs">교육 노하우</span>
          </div>
          <div className="absolute -bottom-2 -left-2 bg-[color:var(--accent-dark)] text-white p-3 rounded-full shadow-lg text-sm font-bold">
            맞춤
            <span className="block text-xs">교육 시스템</span>
          </div>
        </div>
      </div>
    </section>
  );
} 