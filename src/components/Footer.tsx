import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[color:var(--secondary)] dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-[color:var(--primary)] dark:text-[color:var(--primary-dark)]">수학의 명장</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              30년 이상의 경력을 가진 부부 수학강사가 제공하는 최고의 수학 교육
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://blog.naver.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[color:var(--primary)] dark:hover:text-[color:var(--primary-dark)] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.7 15V9h1.5v2.4h2.4V9h1.5v6H12.6v-2.4H10.2V15H8.7zm-4.2-1.5h3V9H4.5v4.5zm15-3v3H18v-3h-1.5V9h4.5v1.5H19.5z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[color:var(--primary)] dark:hover:text-[color:var(--primary-dark)] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[color:var(--primary)] dark:hover:text-[color:var(--primary-dark)] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">바로가기</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[color:var(--primary)] dark:text-gray-300 dark:hover:text-[color:var(--primary-dark)] transition-colors">
                  홈
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-600 hover:text-[color:var(--primary)] dark:text-gray-300 dark:hover:text-[color:var(--primary-dark)] transition-colors">
                  강사소개
                </Link>
              </li>
              <li>
                <Link href="#courses" className="text-gray-600 hover:text-[color:var(--primary)] dark:text-gray-300 dark:hover:text-[color:var(--primary-dark)] transition-colors">
                  강의과정
                </Link>
              </li>
              <li>
                <Link href="#achievements" className="text-gray-600 hover:text-[color:var(--primary)] dark:text-gray-300 dark:hover:text-[color:var(--primary-dark)] transition-colors">
                  성과
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-600 hover:text-[color:var(--primary)] dark:text-gray-300 dark:hover:text-[color:var(--primary-dark)] transition-colors">
                  학생후기
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 hover:text-[color:var(--primary)] dark:text-gray-300 dark:hover:text-[color:var(--primary-dark)] transition-colors">
                  상담문의
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">연락처</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[color:var(--primary)] dark:text-[color:var(--primary-dark)]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">math_masters@example.com</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[color:var(--primary)] dark:text-[color:var(--primary-dark)]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">02-1234-5678</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[color:var(--primary)] dark:text-[color:var(--primary-dark)]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">서울시 강남구 테헤란로 123</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[color:var(--primary)] dark:text-[color:var(--primary-dark)]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">평일 10:00 - 20:00 | 토 10:00 - 16:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-6 text-center text-gray-500 dark:text-gray-400">
          <p>&copy; {currentYear} 수학의 명장 | 김준호 & 이미영 수학 교실. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 