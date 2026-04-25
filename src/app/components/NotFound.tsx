import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="mb-8"
        >
          <h1 className="text-9xl font-black bg-gradient-to-r from-[#FF7210] to-[#FF8534] bg-clip-text text-transparent">
            404
          </h1>
        </motion.div>

        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
          페이지를 찾을 수 없습니다
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF7210] to-[#FF8534] text-white rounded-xl font-bold text-lg shadow-lg shadow-[#FF7210]/30 hover:shadow-xl"
            >
              <Home size={24} />
              홈으로 가기
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-300 text-gray-900 rounded-xl font-bold text-lg hover:border-gray-400 hover:shadow-lg transition-all"
            >
              <ArrowLeft size={24} />
              뒤로 가기
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
