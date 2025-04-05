// 학생 후기 데이터
const testimonials = [
  {
    id: 1,
    name: '김OO',
    school: '서울대학교 의과대학 합격',
    content: '김준호 선생님의 수업을 통해 수학에 대한 깊은 이해를 얻을 수 있었습니다. 단순 암기가 아닌 원리 중심의 학습 방식이 수능에서 큰 도움이 되었습니다. 덕분에 꿈에 그리던 의대에 합격할 수 있었습니다.',
    rating: 5,
    year: '2023',
    teacher: '김준호 선생님',
  },
  {
    id: 2,
    name: '박OO',
    school: '연세대학교 전기전자공학과 합격',
    content: '수학이 항상 어려웠는데, 김준호 선생님의 명쾌한 설명과 체계적인 문제 풀이 방식 덕분에 성적이 크게 향상되었습니다. 특히 미적분 부분에서의 실력 향상이 눈에 띄었고, 결국 원하는 대학에 합격했습니다.',
    rating: 5,
    year: '2023',
    teacher: '김준호 선생님',
  },
  {
    id: 3,
    name: '이OO',
    school: '중학교 3학년',
    content: '이미영 선생님은 정말 친절하시고 이해하기 쉽게 설명해주셔서 수학 공부가 재미있어졌어요. 수학을 포기하고 싶었던 저에게 자신감을 주셨고, 덕분에 내신 1등급을 받았습니다.',
    rating: 5,
    year: '2023',
    teacher: '이미영 선생님',
  },
  {
    id: 4,
    name: '최OO',
    school: '고려대학교 수학교육과 합격',
    content: '중학교 때부터 고등학교까지 이미영 선생님과 김준호 선생님의 수업을 모두 들었습니다. 두 분의 체계적인 교육 덕분에 수학에 대한 깊은 이해와 사랑이 생겼고, 수학교육과에 진학하게 되었습니다.',
    rating: 5,
    year: '2022',
    teacher: '김준호 & 이미영 선생님',
  },
  {
    id: 5,
    name: '정OO',
    school: '중학교 1학년',
    content: '수학을 정말 싫어했는데 이미영 선생님 수업을 듣고 나서 많이 좋아졌어요. 어려운 문제도 차근차근 설명해주시고, 틀린 문제도 꼼꼼하게 봐주셔서 실력이 많이 늘었어요!',
    rating: 5,
    year: '2023',
    teacher: '이미영 선생님',
  },
  {
    id: 6,
    name: '송OO',
    school: '고등학교 3학년',
    content: '김준호 선생님의 수업은 항상 명확하고 핵심을 잘 짚어주십니다. 수능 준비에 큰 도움이 되었고, 특히 확률과 통계 부분에서 실력이 크게 향상되었습니다. 덕분에 수능 1등급을 받을 수 있었습니다.',
    rating: 5,
    year: '2023',
    teacher: '김준호 선생님',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[color:var(--primary-light)] dark:bg-[color:var(--secondary)]">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="inline-block bg-white dark:bg-[color:var(--primary-light)]/20 text-[color:var(--primary)] px-3 py-1 rounded-full text-sm font-medium mb-2">
            수강생 후기
          </span>
          <h2 className="text-3xl font-bold">
            <span className="text-[color:var(--primary)] dark:text-[color:var(--primary-dark)]">실제 수강생</span>의 생생한 이야기
          </h2>
          <div className="w-24 h-1 bg-[color:var(--accent)] mx-auto mt-4"></div>
        </div>
        
        <div className="relative mb-16">
          <div className="absolute top-0 bottom-0 left-0 w-10 bg-gradient-to-r from-[color:var(--primary-light)] to-transparent dark:from-[color:var(--secondary)] z-10"></div>
          <div className="absolute top-0 bottom-0 right-0 w-10 bg-gradient-to-l from-[color:var(--primary-light)] to-transparent dark:from-[color:var(--secondary)] z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-5 justify-between">
                  <div className="flex items-center">
                    <div className="bg-[color:var(--primary-light)] dark:bg-[color:var(--primary-light)]/20 text-[color:var(--primary)] dark:text-[color:var(--primary-dark)] w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-gray-200">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.school}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 bg-[color:var(--accent-dark)] text-white text-xs px-2 py-1 rounded-full">
                    {testimonial.year}
                  </div>
                </div>
                
                <div className="mb-3 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[color:var(--accent)]">★</span>
                  ))}
                </div>
                
                <div className="relative">
                  <svg className="absolute top-0 left-0 w-8 h-8 text-gray-200 dark:text-gray-700 -ml-4 -mt-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-600 dark:text-gray-300 relative p-2">
                    {testimonial.content}
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 text-right">
                  <span className="text-sm font-medium text-[color:var(--primary)] dark:text-[color:var(--primary-dark)]">{testimonial.teacher}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative">
          <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-8 max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[color:var(--primary)]"></div>
            <h3 className="text-2xl font-bold mb-6 text-center text-[color:var(--primary)] dark:text-[color:var(--primary-dark)]">더 많은 성공 스토리를 만들어보세요</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
              매년 더 많은 학생들이 저희와 함께 꿈을 이루고 있습니다. 지금 무료 상담을 신청하고 성공의 첫걸음을 내딛으세요.
            </p>
            <div className="text-center">
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
            <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-[color:var(--primary-light)]/50 dark:bg-[color:var(--primary-light)]/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 