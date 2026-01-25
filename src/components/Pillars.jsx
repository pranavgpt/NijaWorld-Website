import { motion } from 'framer-motion';
import { LampContainer } from './ui/lamp';

export function Pillars() {
    const pillars = [
        {
            title: 'Intelligent Automation',
            subtitle: 'AI Agents & Orchestration',
            description: 'Deploy enterprise-grade AI agents that automate complex workflows, reduce manual overhead, and scale intelligently with your operations.',
            features: [
                'Multi-agent orchestration',
                'Natural language processing',
                'Predictive analytics',
                'Seamless system integration'
            ],
            color: 'nijaPurple',
            gradient: 'from-nijaPurple/10 to-nijaPurple/5',
            icon: '🤖'
        },
        {
            title: 'Verifiable Trust',
            subtitle: 'Blockchain Infrastructure',
            description: 'Build on immutable, auditable ledgers that ensure data integrity, provide end-to-end traceability, and meet regulatory compliance standards.',
            features: [
                'Immutable audit trails',
                'Smart contract automation',
                'Decentralised consensus',
                'Enterprise-grade security'
            ],
            color: 'nijaGreen',
            gradient: 'from-nijaGreen/10 to-nijaGreen/5',
            icon: '🔒'
        }
    ];

    return (
        <>
            {/* Lamp Section Header */}
            <LampContainer className="min-h-[60vh]">
                <motion.div
                    initial={{ opacity: 0.5, y: 300 }}
                    whileInView={{ opacity: 1, y: 150 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut"
                    }}
                    className="text-center"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
                        className="inline-block mb-10 px-6 py-3 text-2xl rounded-full bg-nijaGreen/20 text-white font-bold border-2 border-white"
                    >
                        TWO ENTERPRISE PILLARS
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0.5, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.4,
                            duration: 0.8,
                            ease: "easeInOut"
                        }}
                        className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                    >
                        The Foundation of Modern Enterprise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.6,
                            duration: 0.8,
                            ease: "easeInOut"
                        }}
                        className="text-slate-300 max-w-2xl mx-auto text-lg"
                    >
                        Combining cutting-edge AI with blockchain-grade security to deliver unprecedented operational excellence
                    </motion.p>
                </motion.div>
            </LampContainer>

            {/* Pillar Cards Section */}
            <section className="bg-gradient-to-b from-gray-50 to-white dark:from-baseDark dark:to-gray-900">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Pillar Cards */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {pillars.map((pillar, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 140 }}
                                whileInView={{ opacity: 1, y: -100 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.2,
                                    ease: "easeInOut"
                                }}
                                whileHover={{ scale: 1.02 }}
                                className={`bg-gradient-to-br ${pillar.gradient} dark:bg-gradient-to-br dark:${pillar.gradient} border border-${pillar.color}/20 dark:border-${pillar.color}/30 rounded-2xl p-8 hover:shadow-2xl hover:shadow-${pillar.color}/20 transition-all duration-300 cursor-pointer group`}
                            >
                                {/* Icon & Title */}
                                <div className="mb-6">
                                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {pillar.icon}
                                    </div>
                                    <h3 className={`text-2xl font-bold mb-1 text-${pillar.color}`}>
                                        {pillar.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                        {pillar.subtitle}
                                    </p>
                                </div>

                                {/* Description */}
                                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                    {pillar.description}
                                </p>

                                {/* Features */}
                                <div className="space-y-3">
                                    {pillar.features.map((feature, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.6,
                                                delay: 1.0 + index * 0.3 + idx * 0.15,
                                                ease: "easeInOut"
                                            }}
                                            className="flex items-center gap-3"
                                        >
                                            <div className={`w-1.5 h-1.5 rounded-full bg-${pillar.color} group-hover:animate-pulse`} />
                                            <span className="text-gray-600 dark:text-gray-400 text-sm">
                                                {feature}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* CTA */}
                                <motion.button
                                    whileHover={{ x: 5 }}
                                    className={`mt-6 text-${pillar.color} font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all`}
                                >
                                    Learn more
                                    <span>→</span>
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Pillars;
