import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm dark:bg-gray-900 dark:border-b dark:border-gray-800">
      <div className="container mx-auto px-4">
        {/* 상단 정보 줄 */}
        <div className="py-2 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 dark:text-gray-300">☎ 02-1234-5678</span>
            <span className="text-gray-600 dark:text-gray-300">✉ math_masters@example.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-[color:var(--primary)] transition-colors">교재</Link>
            <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-[color:var(--primary)] transition-colors">학습자료실</Link>
            <Link href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-[color:var(--primary)] transition-colors">학부모공간</Link>
            <Link href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-[color:var(--primary)] transition-colors">이벤트</Link>
          </div>
        </div>
        
        {/* 메인 메뉴 줄 */}
        <div className="py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold flex items-center">
            <span className="text-[color:var(--primary)]">M</span>
            <span className="text-gray-800 dark:text-gray-100">수학</span>
            <span className="text-[color:var(--primary)]">베스트</span>
          </Link>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-[color:var(--primary)] dark:hover:text-[color:var(--accent)] font-medium transition-colors">
                  학원소개
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-700 dark:text-gray-200 hover:text-[color:var(--primary)] dark:hover:text-[color:var(--accent)] font-medium transition-colors">
                  강사소개
                </Link>
              </li>
              <li>
                <Link href="#courses" className="text-gray-700 dark:text-gray-200 hover:text-[color:var(--primary)] dark:hover:text-[color:var(--accent)] font-medium transition-colors">
                  강의과정
                </Link>
              </li>
              <li>
                <Link href="#achievements" className="text-gray-700 dark:text-gray-200 hover:text-[color:var(--primary)] dark:hover:text-[color:var(--accent)] font-medium transition-colors">
                  교육성과
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-700 dark:text-gray-200 hover:text-[color:var(--primary)] dark:hover:text-[color:var(--accent)] font-medium transition-colors">
                  학생후기
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-[color:var(--primary)] dark:hover:text-[color:var(--accent)] font-medium transition-colors">
                  상담문의
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
} 