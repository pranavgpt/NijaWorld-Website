import { motion } from 'framer-motion';

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
        <section className="py-28 bg-gradient-to-b from-gray-50 to-white dark:from-baseDark dark:to-gray-900">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block mb-3 px-4 py-1.5 text-sm rounded-full bg-nijaGreen/10 text-nijaGreen font-medium border border-nijaGreen/20">
                        TWO ENTERPRISE PILLARS
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        The Foundation of Modern Enterprise
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        Combining cutting-edge AI with blockchain-grade security to deliver unprecedented operational excellence
                    </p>
                </motion.div>

                {/* Pillar Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ y: -8, scale: 1.02 }}
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
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
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
    );
}

export default Pillars;
