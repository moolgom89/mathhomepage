// 강의 과정 데이터
const courses = [
  {
    id: 1,
    title: '수능 대비 고등 수학 종합반',
    description: '수능 출제 경향을 분석하여 핵심 개념과 문제 유형을 집중적으로 학습합니다. 미적분, 확률과 통계, 기하 등 모든 영역을 효율적으로 학습할 수 있는 종합 과정입니다.',
    image: '/placeholder-project.jpg',
    level: '고등학교 2-3학년',
    instructor: '김준호 선생님',
    tags: ['수능특강', '문제풀이', '심화학습'],
    features: ['주 2회 수업', '월별 모의고사', '1:1 질의응답'],
  },
  {
    id: 2,
    title: '내신 대비 고등 수학 집중반',
    description: '학교별 기출문제와 교과서 분석을 통해 내신 시험에 최적화된 맞춤형 강의를 제공합니다. 중간고사, 기말고사 대비에 특화된 과정입니다.',
    image: '/placeholder-project.jpg',
    level: '고등학교 1-3학년',
    instructor: '김준호 선생님',
    tags: ['내신대비', '기출문제', '학교별맞춤'],
    features: ['주 2회 수업', '단원별 테스트', '오답노트 관리'],
  },
  {
    id: 3,
    title: '중학 수학 개념 완성반',
    description: '중학 수학의 핵심 개념을 체계적으로 정리하고, 다양한 문제 풀이를 통해 응용력을 기릅니다. 고등학교 수학으로의 연계성을 고려한 탄탄한 기초를 다집니다.',
    image: '/placeholder-project.jpg',
    level: '중학교 1-3학년',
    instructor: '이미영 선생님',
    tags: ['개념학습', '기초다지기', '문제해결력'],
    features: ['주 2회 수업', '개념 테스트', '학습 상담'],
  },
  {
    id: 4,
    title: '수학 부진 학생 맞춤 지도반',
    description: '수학에 어려움을 겪는 학생들을 위한 특별 과정입니다. 기초 개념부터 차근차근 맞춤형 지도를 통해 수학 자신감을 회복하고 기초 학력을 향상시킵니다.',
    image: '/placeholder-project.jpg',
    level: '중학교 - 고등학교',
    instructor: '이미영 선생님',
    tags: ['기초학습', '1:1 맞춤', '자신감 회복'],
    features: ['소수정예', '진단평가', '단계별 학습'],
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-[color:var(--accent)]/10 dark:bg-[color:var(--secondary)]">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="inline-block bg-[color:var(--primary-light)] dark:bg-[color:var(--primary-light)]/20 text-[color:var(--primary)] px-3 py-1 rounded-full text-sm font-medium mb-2">
            강의 과정
          </span>
          <h2 className="text-3xl font-bold">
            <span className="text-[color:var(--primary)] dark:text-[color:var(--primary-dark)]">맞춤형 교육</span>으로 실력 향상
          </h2>
          <div className="w-24 h-1 bg-[color:var(--accent)] mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md"
            >
              <div className="bg-[color:var(--primary)] text-white py-3 px-4 flex justify-between items-center">
                <h3 className="text-lg font-bold">{course.title}</h3>
                <span className="bg-white text-[color:var(--primary)] px-2 py-1 rounded text-xs font-semibold">
                  {course.level}
                </span>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[color:var(--primary-light)] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[color:var(--primary)]">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">강사</span>
                    <p className="text-[color:var(--primary)] dark:text-[color:var(--primary-dark)] font-semibold">{course.instructor}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300">{course.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {course.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-[color:var(--primary-light)] dark:bg-[color:var(--primary-light)]/20 text-[color:var(--primary)] dark:text-[color:var(--primary-dark)] rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-4">
                  <h4 className="font-medium mb-3 text-gray-700 dark:text-gray-300">강의 특징</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                        <svg className="w-4 h-4 mr-2 text-[color:var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <a 
                    href="#contact" 
                    className="px-4 py-2 bg-[color:var(--primary)] hover:bg-[color:var(--primary-dark)] text-white rounded transition-colors text-sm font-medium flex-1 text-center"
                  >
                    수강 문의
                  </a>
                  <a 
                    href="#" 
                    className="px-4 py-2 border border-[color:var(--primary)] text-[color:var(--primary)] hover:bg-[color:var(--primary-light)] dark:hover:bg-[color:var(--primary-light)]/10 rounded transition-colors text-sm font-medium flex-1 text-center"
                  >
                    강의 계획표
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-[color:var(--primary)] hover:bg-[color:var(--primary-dark)] text-white rounded-lg transition-colors font-medium"
          >
            무료 상담 신청하기
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 