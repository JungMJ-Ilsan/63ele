import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: '홈' },
    { path: '/about', label: '후보 소개' },
    { path: '/policies', label: '공약' },
    { path: '/vision', label: '비전' },
    { path: '/contact', label: '참여하기' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-[#E5E5E5] shadow-lg'
          : 'bg-white/80 backdrop-blur-sm border-b border-[#E5E5E5]/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-12 h-12 bg-[#FF7210] rounded-xl flex items-center justify-center shadow-lg shadow-[#FF7210]/30"
            >
              <span className="text-white text-xl font-bold">정</span>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-[#111111] font-bold text-lg">정민재</span>
              <span className="text-[#FF7210] text-xs">AI와 함께하는 미래</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative group"
              >
                <span className="text-[#666666] hover:text-[#111111] transition-colors text-sm font-medium">
                  {item.label}
                </span>
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FF7210]"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-[#FF7210] text-white rounded-lg font-medium shadow-lg shadow-[#FF7210]/30 hover:shadow-xl hover:shadow-[#FF7210]/40 transition-all"
            >
              지지하기
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#111111] p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-[#E5E5E5]"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-[#FF7210]'
                      : 'text-[#666666] hover:text-[#111111]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-6 py-2.5 bg-[#FF7210] text-white text-center rounded-lg font-medium shadow-lg shadow-[#FF7210]/30"
              >
                지지하기
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
