import { motion } from 'motion/react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  return (
    <footer className="relative bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#FF7210] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl font-bold">정</span>
              </div>
              <div>
                <h3 className="text-gray-900 font-bold text-lg">정민재</h3>
                <p className="text-[#FF7210] text-xs">AI와 함께하는 미래</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              복잡한 미래 기술, 옆집 아들이 대신!<br />
              일산 토박이 기술자가 우리 동네를 변화시키겠습니다.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF7210] text-white rounded-lg text-sm font-medium hover:bg-[#FF7210]/90 transition-all"
            >
              <Heart size={16} />
              후원하기
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-bold mb-4">바로가기</h4>
            <div className="space-y-3">
              <Link to="/" className="block text-gray-600 hover:text-[#FF7210] text-sm transition-colors">
                홈
              </Link>
              <Link to="/about" className="block text-gray-600 hover:text-[#FF7210] text-sm transition-colors">
                후보 소개
              </Link>
              <Link to="/policies" className="block text-gray-600 hover:text-[#FF7210] text-sm transition-colors">
                공약
              </Link>
              <Link to="/vision" className="block text-gray-600 hover:text-[#FF7210] text-sm transition-colors">
                비전
              </Link>
              <Link to="/contact" className="block text-gray-600 hover:text-[#FF7210] text-sm transition-colors">
                참여하기
              </Link>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-gray-900 font-bold mb-4">연락처 & 소셜</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <MapPin size={18} className="text-[#FF7210] flex-shrink-0" />
                <span>정발산동, 중산 1동, 중산 2동, 일산 2동</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <Phone size={18} className="text-[#FF7210] flex-shrink-0" />
                <span>문의: 선거사무소</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <Mail size={18} className="text-[#FF7210] flex-shrink-0" />
                <span>campaign@jungminjae.kr</span>
              </div>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white border border-gray-200 hover:border-[#FF7210] hover:bg-[#FF7210] rounded-lg flex items-center justify-center text-gray-600 hover:text-white transition-all shadow-sm"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 정민재 선거사무소. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-500 text-sm">
            <a href="#" className="hover:text-[#FF7210] transition-colors">
              개인정보처리방침
            </a>
            <a href="#" className="hover:text-[#FF7210] transition-colors">
              이용약관
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}