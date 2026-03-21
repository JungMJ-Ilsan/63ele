import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-950 to-black border-t border-blue-500/20">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50">
                <span className="text-white text-xl font-bold">김</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">김민수</h3>
                <p className="text-blue-300 text-xs">함께 만드는 미래</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              시민과 함께 만들어가는 변화, 투명하고 공정한 지역사회를 위해 최선을 다하겠습니다.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">연락처</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={18} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span>서울특별시 강남구 테헤란로 123</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Phone size={18} className="text-blue-400 flex-shrink-0" />
                <span>02-1234-5678</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Mail size={18} className="text-blue-400 flex-shrink-0" />
                <span>campaign@kimminsu.kr</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">소셜 미디어</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/5 hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-400 border border-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-white transition-all shadow-lg hover:shadow-blue-500/50"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-white/40 text-xs">
                선거관리위원회 후보자등록번호: 2026-서울-0001
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2026 김민수 선거사무소. All rights reserved.
          </p>
          <div className="flex gap-6 text-white/40 text-sm">
            <a href="#" className="hover:text-blue-400 transition-colors">
              개인정보처리방침
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              이용약관
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
