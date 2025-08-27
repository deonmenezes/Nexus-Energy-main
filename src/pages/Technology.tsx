import React, { memo } from 'react';
import { motion } from 'framer-motion';

const Technology = memo(() => {
  return (
    <motion.div 
      className="min-h-screen bg-white overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <main className="pt-14">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 sm:py-24 lg:py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 leading-tight">
                Advanced Thermal <span className="text-red-500">Management</span>
              </h1>
              <motion.p
                className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-normal"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Immersion cooling: The next generation of battery safety, performance, and reliability.
              </motion.p>
            </motion.div>
          </div>
        </section>
        {/* Challenge Section */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 sm:w-16 h-1 bg-red-500 mr-3 sm:mr-4"></div>
                <span className="text-red-500 font-medium text-base sm:text-lg">The Challenge</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 sm:mb-8 max-w-4xl leading-tight">
                The Challenge of Heat Management in Battery Systems
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Effective heat management is essential for the safety, reliability, and efficiency of battery systems used in electric vehicles (EVs) and energy storage systems (ESS). Without proper thermal control, batteries are vulnerable to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 flex flex-col items-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-white text-xl">🔥</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-center">Overheating</h4>
                  <p className="text-gray-600 text-sm text-center">Can cause device failure and reduce performance significantly.</p>
                </motion.div>
                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 flex flex-col items-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-white text-xl">⚡</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-center">Accelerated Degradation</h4>
                  <p className="text-gray-600 text-sm text-center">Shortening battery lifespan and reducing overall efficiency.</p>
                </motion.div>
                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 flex flex-col items-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-white text-xl">⚠️</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-center">Thermal Runaway</h4>
                  <p className="text-gray-600 text-sm text-center">Dangerous chain reaction that can lead to fire or explosion.</p>
                </motion.div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Traditional thermal management systems—such as air or liquid cooling with external channels, cold plates, and pumps—are often complex, bulky, and expensive to implement, particularly as battery sizes and power densities increase. Immersion cooling is an innovative approach emerging as a superior alternative to conventional methods, offering several key advantages for battery thermal management.
              </p>
            </motion.div>
          </div>
        </section>
        {/* Advantages Section */}
        <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 sm:w-16 h-1 bg-green-500 mr-3 sm:mr-4"></div>
                <span className="text-green-500 font-medium text-base sm:text-lg">Advantages</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-6 sm:mb-8 max-w-4xl leading-tight">
                Advantages of Immersion Cooling
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <span className="text-2xl text-green-500">✔️</span>
                  <div>
                    <span className="font-medium text-green-900">Prevents Thermal Runaway:</span>
                    <span className="text-gray-700 ml-1">By maintaining lower and more even cell temperatures, immersion cooling significantly reduces the risk of thermal runaway events.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-2xl text-green-500">🛡️</span>
                  <div>
                    <span className="font-medium text-green-900">Enhances Safety:</span>
                    <span className="text-gray-700 ml-1">The dielectric fluid acts as a fire suppressant and insulator, further improving battery safety.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-2xl text-green-500">⏳</span>
                  <div>
                    <span className="font-medium text-green-900">Improves Battery Lifespan:</span>
                    <span className="text-gray-700 ml-1">Consistent thermal conditions slow down cell degradation, extending the operational life of the battery.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-2xl text-green-500">🔧</span>
                  <div>
                    <span className="font-medium text-green-900">Simplifies System Complexity:</span>
                    <span className="text-gray-700 ml-1">Integrated cooling reduces the number of components, lowering the risk of leaks and mechanical failures.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-2xl text-green-500">🧩</span>
                  <div>
                    <span className="font-medium text-green-900">Adaptable Design:</span>
                    <span className="text-gray-700 ml-1">Modular and scalable, immersion cooling can be tailored for various battery sizes and applications.</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Key Design Considerations Section */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 sm:w-16 h-1 bg-purple-500 mr-3 sm:mr-4"></div>
                <span className="text-purple-500 font-medium text-base sm:text-lg">Key Design</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-6 sm:mb-8 max-w-4xl leading-tight">
                Key Design Considerations
              </h2>
              <p className="text-gray-700 text-lg mb-8 max-w-3xl">
                Immersion-cooling battery systems represent a significant shift from traditional liquid-cooling approaches, offering both simplification and unique engineering requirements. Below are the key design considerations and distinctions:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 1. Integrated Cooling Architecture */}
                <div className="bg-gray-50 rounded-2xl shadow p-6 flex flex-col gap-3 border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-purple-600 text-2xl">1.</span>
                    <span className="font-semibold text-gray-900 text-lg">Integrated Cooling Architecture</span>
                  </div>
                  <div className="ml-2">
                    <p className="mb-1"><span className="font-medium text-gray-800">Direct Immersion:</span> The coolant is in direct contact with battery cells, eliminating the need for separate coolant channels, cold plates, or external piping.</p>
                    <p><span className="font-medium text-gray-800">Simplified Layout:</span> The cooling system is built into the battery housing, reducing system complexity and potential failure points.</p>
                  </div>
                </div>
                {/* 2. Battery Housing Requirements */}
                <div className="bg-gray-50 rounded-2xl shadow p-6 flex flex-col gap-3 border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-purple-600 text-2xl">2.</span>
                    <span className="font-semibold text-gray-900 text-lg">Battery Housing Requirements</span>
                  </div>
                  <div className="ml-2">
                    <p className="mb-1"><span className="font-medium text-gray-800">Leak-Tight Construction:</span> The housing must be meticulously sealed to prevent any ingress of moisture or air, as these can degrade the dielectric fluid’s thermal performance and compromise safety.</p>
                    <p><span className="font-medium text-gray-800">Material Compatibility:</span> All housing materials and seals must be compatible with the immersion coolant to avoid chemical degradation or swelling.</p>
                  </div>
                </div>
                {/* 3. Pressure Relief and Safety */}
                <div className="bg-gray-50 rounded-2xl shadow p-6 flex flex-col gap-3 border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-purple-600 text-2xl">3.</span>
                    <span className="font-semibold text-gray-900 text-lg">Pressure Relief and Safety</span>
                  </div>
                  <div className="ml-2">
                    <p className="mb-1"><span className="font-medium text-gray-800">Integrated Pressure Relief:</span> Unlike conventional systems where pressure relief is often a feature of the cooling circuit, immersion-cooled systems require pressure relief mechanisms to be part of the battery housing itself.</p>
                    <p><span className="font-medium text-gray-800">Robust Venting:</span> Pressure relief devices must be designed to handle both thermal expansion and potential gas generation within the sealed environment.</p>
                  </div>
                </div>
                {/* 4. Coolant Management */}
                <div className="bg-gray-50 rounded-2xl shadow p-6 flex flex-col gap-3 border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-purple-600 text-2xl">4.</span>
                    <span className="font-semibold text-gray-900 text-lg">Coolant Management</span>
                  </div>
                  <div className="ml-2">
                    <p className="mb-1"><span className="font-medium text-gray-800">Dielectric Fluid Selection:</span> The coolant must be non-conductive, chemically stable, and have excellent thermal properties to ensure safe and effective heat transfer.</p>
                    <p><span className="font-medium text-gray-800">Coolant Circulation:</span> Flow paths within the housing must be optimized to ensure even coolant distribution and avoid hotspots.</p>
                  </div>
                </div>
                {/* 5. Thermal Performance */}
                <div className="bg-gray-50 rounded-2xl shadow p-6 flex flex-col gap-3 border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-purple-600 text-2xl">5.</span>
                    <span className="font-semibold text-gray-900 text-lg">Thermal Performance</span>
                  </div>
                  <div className="ml-2">
                    <p className="mb-1"><span className="font-medium text-gray-800">Uniform Cooling:</span> Direct immersion allows for more uniform temperature control across all cells, improving performance and lifespan.</p>
                    <p><span className="font-medium text-gray-800">Heat Dissipation:</span> The system must be designed to efficiently transfer heat from the cells to the coolant and then out of the battery pack.</p>
                  </div>
                </div>
                {/* 6. Maintenance and Serviceability */}
                <div className="bg-gray-50 rounded-2xl shadow p-6 flex flex-col gap-3 border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-purple-600 text-2xl">6.</span>
                    <span className="font-semibold text-gray-900 text-lg">Maintenance and Serviceability</span>
                  </div>
                  <div className="ml-2">
                    <p className="mb-1"><span className="font-medium text-gray-800">Coolant Monitoring:</span> Systems should include sensors to monitor coolant level, quality, and potential contamination.</p>
                    <p><span className="font-medium text-gray-800">Ease of Access:</span> The design should allow for safe inspection and replacement of coolant without compromising the housing’s integrity.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Comparison Table Section */}
        <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 sm:w-16 h-1 bg-slate-700 mr-3 sm:mr-4"></div>
                <span className="text-slate-700 font-medium text-base sm:text-lg">Comparison</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-6 sm:mb-8 max-w-4xl leading-tight">
                Comparison: Immersion vs. Conventional Liquid Cooling
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden text-center">
                  <thead>
                    <tr className="bg-gradient-to-r from-slate-800 to-gray-900">
                      <th className="px-6 py-4 text-white font-semibold text-lg text-center">Feature</th>
                      <th className="px-6 py-4 text-white font-semibold text-lg text-center">Immersion Cooling</th>
                      <th className="px-6 py-4 text-white font-semibold text-lg text-center">Conventional Liquid Cooling</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-green-50 transition">
                      <td className="px-6 py-4 font-normal text-gray-900 bg-gray-50">Cooling Integration</td>
                      <td className="px-6 py-4">Built into battery housing</td>
                      <td className="px-6 py-4">External channels/plates/pipes</td>
                    </tr>
                    <tr className="hover:bg-green-50 transition">
                      <td className="px-6 py-4 font-normal text-gray-900 bg-gray-50">Pressure Relief</td>
                      <td className="px-6 py-4">Part of battery housing</td>
                      <td className="px-6 py-4">Part of cooling system</td>
                    </tr>
                    <tr className="hover:bg-green-50 transition">
                      <td className="px-6 py-4 font-normal text-gray-900 bg-gray-50">Leak-Tight Requirement</td>
                      <td className="px-6 py-4">Critical (housing must be sealed)</td>
                      <td className="px-6 py-4">Important (coolant circuit)</td>
                    </tr>
                    <tr className="hover:bg-green-50 transition">
                      <td className="px-6 py-4 font-normal text-gray-900 bg-gray-50">Coolant Contact</td>
                      <td className="px-6 py-4">Direct with cells</td>
                      <td className="px-6 py-4">Indirect (via plates/channels)</td>
                    </tr>
                    <tr className="hover:bg-green-50 transition">
                      <td className="px-6 py-4 font-normal text-gray-900 bg-gray-50">Complexity</td>
                      <td className="px-6 py-4">Lower</td>
                      <td className="px-6 py-4">Higher</td>
                    </tr>
                    <tr className="hover:bg-green-50 transition">
                      <td className="px-6 py-4 font-normal text-gray-900 bg-gray-50">Maintenance</td>
                      <td className="px-6 py-4">Focus on coolant integrity/housing</td>
                      <td className="px-6 py-4">Focus on external plumbing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </motion.div>
  );
});

Technology.displayName = 'Technology';

export default Technology;
