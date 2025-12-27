"use client";

import { motion } from "framer-motion";
import { RxLockClosed } from "react-icons/rx";

export const Encryption = () => {
  return (
    <section id="security" className="py-section relative bg-gradient-to-b from-transparent via-purple-900/5 to-transparent">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500 rounded-2xl">
              <RxLockClosed className="w-12 h-12 text-purple-400" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-heading-2 md:text-heading-1 mb-4 text-white">
            Performance <span className="text-transparent bg-clip-text bg-gradient-accent">&</span> Security
          </h2>

          {/* Description */}
          <p className="text-body-lg text-gray-100 leading-relaxed max-w-2xl mx-auto">
            All projects are built with security best practices and optimized for performance. 
            From secure authentication to encrypted data transmission, every application follows industry-standard protocols.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-purple-500 transition-all">
              <h3 className="text-heading-5 text-purple-400 mb-2">Secure Code</h3>
              <p className="text-body-sm text-gray-100">Following OWASP guidelines and secure coding practices</p>
            </div>
            <div className="p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-cyan-500/50 transition-all">
              <h3 className="text-heading-5 text-cyan-400 mb-2">Fast Loading</h3>
              <p className="text-body-sm text-gray-100">Optimized assets and lazy loading for better performance</p>
            </div>
            <div className="p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-purple-500 transition-all">
              <h3 className="text-heading-5 text-purple-400 mb-2">Data Privacy</h3>
              <p className="text-body-sm text-gray-100">End-to-end encryption and secure data handling</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
