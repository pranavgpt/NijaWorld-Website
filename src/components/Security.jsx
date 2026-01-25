import { motion } from 'framer-motion';

export function Security() {
    const features = [
        {
            title: 'End-to-End Encryption',
            description: 'Military-grade encryption for all data in transit and at rest',
            icon: '🔐'
        },
        {
            title: 'SOC 2 Type II Certified',
            description: 'Independently audited security controls and compliance',
            icon: '✅'
        },
        {
            title: 'Zero-Trust Architecture',
            description: 'Continuous verification with role-based access control',
            icon: '🛡️'
        },
        {
            title: 'Disaster Recovery',
            description: '99.99% uptime SLA with automated failover systems',
            icon: '⚙️'
        }
    ];

    return (
        <section className="py-28 bg-gradient-to-br from-baseDark via-gray-900 to-baseDark text-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block mb-3 px-4 py-1.5 text-sm rounded-full bg-nijaGreen/10 text-nijaGreen font-medium border border-nijaGreen/20">
                        ENTERPRISE SECURITY
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Security is Non-Negotiable
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Built with the highest security standards for mission-critical operations
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-400 text-sm">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Security;
