import { PolicyPageTemplate } from '../../PolicyPageTemplate';
import { motion } from 'motion/react';
import { Clock, AlertCircle } from 'lucide-react';

export function Age70Plus() {
  return (
    <PolicyPageTemplate stage="age">
      <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-pink-50 -mt-20 pt-20 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-bold shadow-lg mb-8">
              <Clock size={24} />
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-8 sm:p-12 md:p-16">
              <div className="absolute top-0 right-0 w-64 h-64 bg-rose-200/30 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl" />

              <div className="relative z-10 space-y-8">
                <div className="flex justify-center mb-6">
                  <AlertCircle className="text-rose-600" size={64} />
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-8">
                  공약 준비 중입니다
                </h1>

               <div className="space-y-6 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                  <p>
                    현재 선거구 획정이 지연되면서<br />
                    공약 공개 일정 또한 불가피하게 <br className="block sm:hidden" />늦어지고 있습니다.
                  </p>
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-6 sm:p-8 shadow-lg">
                    <p className="text-base sm:text-xl md:text-2xl font-black text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                      획정이 완료되는 즉시,<br />
                      빠르게 공개하겠습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PolicyPageTemplate>
  );
}
