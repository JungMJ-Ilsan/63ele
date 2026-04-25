import { motion } from 'motion/react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61580710135949', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/jungmj.ilsan/', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/channel/UCRPvsYs0bujxX1B9-O90htg/posts?pvf=CAI%253D', label: 'Youtube' },
  ];

  return (
    <footer className="relative bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8">
          {/* Contact & Social */}
          <div>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-gray-200">
                <Phone size={14} className="text-[#FF7210] flex-shrink-0" />
                <span className="text-gray-900 text-lg font-bold">010-4036-5724</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-gray-200">
                <Mail size={14} className="text-[#FF7210] flex-shrink-0" />
                <span className="text-gray-900 text-lg font-bold break-all">jungmj.ilsan@gmail.com</span>
              </div>
            </div>
            <div className="flex gap-3 max-w-xs">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 h-10 bg-white border border-gray-200 hover:border-[#FF7210] hover:bg-[#FF7210] rounded-lg flex items-center justify-center text-gray-600 hover:text-white transition-all shadow-sm"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">
            © 2026 정민재 선거사무소. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}