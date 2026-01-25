import { motion } from 'framer-motion';

export function CaseStudies() {
    const studies = [
        {
            company: 'Global Logistics Corp',
            industry: 'Supply Chain',
            result: '47% reduction in delivery errors',
            description: 'Deployed blockchain-verified tracking across 12,000+ daily shipments',
            color: 'nijaGreen'
        },
        {
            company: 'Premier Healthcare Network',
            industry: 'Healthcare',
            result: '99.99% data accuracy',
            description: 'Secured patient records for 2M+ patients with zero breaches',
            color: 'nijaPurple'
        },
        {
            company: 'International Bank',
            industry: 'Financial Services',
            result: '$12M saved annually',
            description: 'Automated compliance reporting and real-time fraud detection',
            color: 'blue-500'
        }
    ];

    return (
        <section className="py-28 bg-gray-50 dark:bg-baseDark">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Proven Results
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Real-world impact from enterprise deployments
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {studies.map((study, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:shadow-2xl transition-all"
                        >
                            <span className="text-sm text-gray-500 dark:text-gray-400">{study.industry}</span>
                            <h3 className="font-bold text-xl mt-2 mb-4 text-gray-900 dark:text-white">
                                {study.company}
                            </h3>
                            <div className={`text-3xl font-bold mb-4 text-${study.color}`}>
                                {study.result}
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                {study.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CaseStudies;
