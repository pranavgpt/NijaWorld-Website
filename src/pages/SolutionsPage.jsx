import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function SolutionsPage() {
    const solutions = [
        {
            title: 'Supply Chain Transparency',
            tagline: 'End-to-end visibility for modern logistics',
            description: 'Track every step of your supply chain with blockchain-verified provenance and AI-powered predictive analytics.',
            features: [
                'Real-time shipment tracking',
                'Automated compliance documentation',
                'Predictive delay detection',
                'Carbon footprint monitoring'
            ],
            color: 'nijaGreen',
            icon: '🌐'
        },
        {
            title: 'Healthcare Data Management',
            tagline: 'Secure, interoperable patient records',
            description: 'HIPAA-compliant infrastructure that enables seamless data sharing while maintaining patient privacy and data sovereignty.',
            features: [
                'Encrypted patient records',
                'Cross-institution interoperability',
                'Consent management',
                'Audit trail automation'
            ],
            color: 'blue-500',
            icon: '🏥'
        },
        {
            title: 'Financial Services',
            tagline: 'Compliance and fraud prevention',
            description: 'Real-time transaction monitoring with automated compliance reporting and immutable audit trails.',
            features: [
                'AML/KYC automation',
                'Real-time fraud detection',
                'Regulatory reporting',
                'Smart contract escrow'
            ],
            color: 'nijaPurple',
            icon: '💰'
        }
    ];

    return (
        <div className='min-h-screen bg-white dark:bg-baseDark dark:text-white'>
            <Navbar />

            <section className="pt-32 pb-28">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Industry Solutions
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            Purpose-built solutions for the unique challenges of your industry
                        </p>
                    </motion.div>

                    <div className="space-y-24">
                        {solutions.map((solution, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="grid md:grid-cols-2 gap-12 items-center"
                            >
                                <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                                    <div className="text-6xl mb-6">{solution.icon}</div>
                                    <h2 className={`text-3xl font-bold mb-3 text-${solution.color}`}>
                                        {solution.title}
                                    </h2>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                                        {solution.tagline}
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                                        {solution.description}
                                    </p>
                                    <button className={`bg-${solution.color} hover:opacity-80 text-white px-6 py-3 rounded-lg font-medium transition`}>
                                        Learn More →
                                    </button>
                                </div>

                                <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                                    <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8">
                                        <h3 className="font-bold text-lg mb-6 text-gray-900 dark:text-white">
                                            Key Features
                                        </h3>
                                        <ul className="space-y-4">
                                            {solution.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-start gap-3">
                                                    <div className={`w-2 h-2 rounded-full bg-${solution.color} mt-2`} />
                                                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
