import { motion } from 'framer-motion';

export function Delivery() {
    return (
        <section className="py-28 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block mb-3 px-4 py-1.5 text-sm rounded-full bg-nijaPurple/10 text-nijaPurple font-medium">
                            RAPID DEPLOYMENT
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            From Proof-of-Concept to Production in Weeks
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            Our battle-tested frameworks and pre-built integrations enable rapid deployment
                            without compromising on security or scalability.
                        </p>
                        <ul className="space-y-4">
                            {[
                                'Pre-configured enterprise templates',
                                'Cloud-agnostic architecture',
                                'Automated DevOps pipelines',
                                'Comprehensive documentation'
                            ].map((item, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-2 h-2 rounded-full bg-nijaGreen" />
                                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8"
                    >
                        <h3 className="font-bold text-xl mb-6 text-gray-900 dark:text-white">
                            Deployment Timeline
                        </h3>
                        <div className="space-y-6">
                            {[
                                { week: 'Week 1-2', task: 'Discovery & Architecture' },
                                { week: 'Week 3-4', task: 'Integration & Configuration' },
                                { week: 'Week 5-6', task: 'Testing & Training' },
                                { week: 'Week 7', task: 'Production Launch' }
                            ].map((phase, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-nijaGreen/20 flex items-center justify-center text-nijaGreen font-bold text-sm flex-shrink-0">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-white">{phase.week}</p>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">{phase.task}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Delivery;
