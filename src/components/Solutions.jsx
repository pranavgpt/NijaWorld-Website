import { motion } from 'framer-motion';

export function Solutions() {
    const solutions = [
        {
            title: 'Supply Chain Transparency',
            description: 'End-to-end visibility with blockchain-verified tracking and AI-powered predictive logistics',
            icon: '🌐',
            color: 'blue'
        },
        {
            title: 'Healthcare Records',
            description: 'Secure patient data management with HIPAA-compliant infrastructure and seamless interoperability',
            icon: '🏥',
            color: 'green'
        },
        {
            title: 'Financial Services',
            description: 'Real-time fraud detection, automated compliance, and immutable transaction records',
            icon: '💰',
            color: 'purple'
        },
        {
            title: 'Energy & Utilities',
            description: 'Smart grid optimization, carbon credit tracking, and decentralised energy trading',
            icon: '⚡',
            color: 'yellow'
        }
    ];

    return (
        <section className="py-28 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block mb-3 px-4 py-1.5 text-sm rounded-full bg-nijaPurple/10 text-nijaPurple font-medium">
                        INDUSTRY SOLUTIONS
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Transforming Industries
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Production-ready solutions tailored for enterprise requirements
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {solutions.map((solution, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-xl transition-all cursor-pointer"
                        >
                            <div className="text-4xl mb-4">{solution.icon}</div>
                            <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                                {solution.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                {solution.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Solutions;
