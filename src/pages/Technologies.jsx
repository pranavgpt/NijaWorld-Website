import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Technologies() {
    const aiTechnologies = [
        {
            name: 'AI for Digitisation',
            description: 'Convert legacy documents, processes, and data into structured, searchable, and machine-readable systems.'
        },
        {
            name: 'AI for Automation',
            description: 'Reduce manual work using intelligent agents, workflows, and policy-driven automation.'
        },
        {
            name: 'AI for Infrastructure',
            description: 'Improve system reliability, observability, performance, and scalability across enterprise environments.'
        },
        {
            name: 'AI for Cybersecurity',
            description: 'Detect threats, prevent incidents, and accelerate response using intelligent monitoring and analysis.'
        }
    ];

    const blockchainTechnologies = [
        {
            name: 'Tokenisation Frameworks',
            description: 'Represent real-world assets and value digitally with governance and compliance controls.'
        },
        {
            name: 'Provenance & Audit Trails',
            description: 'Provide immutable traceability for transactions, data flows, and operational processes.'
        },
        {
            name: 'Smart Contracts & Settlement',
            description: 'Enable automated, verifiable business logic and secure settlement between parties.'
        },
        {
            name: 'Identity Primitives',
            description: 'Secure access, credentials, and identity verification across systems and organisations.'
        }
    ];

    return (
        <div className='min-h-screen bg-white dark:bg-baseDark dark:text-white'>
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-[#0B0F14] via-[#141B28] to-[#0B0F14] text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-5xl font-bold mb-6">
                            Technologies built for enterprise-scale trust
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            NIJA combines practical AI with blockchain-grade infrastructure to deliver secure,
                            production-ready systems. Our technology stack is designed for enterprises that require
                            reliability, transparency, and scale.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* AI Technologies Section */}
            <section className="py-24 bg-white dark:bg-baseDark">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                            Artificial Intelligence
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                            Our focus is on applied, production-grade AI rather than experimental models.
                            We build AI systems that solve real business problems with measurable outcomes.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {aiTechnologies.map((tech, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -4 }}
                                className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:border-nijaGreen dark:hover:border-nijaGreen transition-all duration-300"
                            >
                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-nijaGreen transition-colors">
                                    {tech.name}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {tech.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blockchain Technologies Section */}
            <section className="py-24 bg-gray-50 dark:bg-[#0d1117]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                            Blockchain
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                            We use blockchain as a trust and governance layer, not for speculative purposes.
                            Our implementations focus on transparency, traceability, and verifiable business logic.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {blockchainTechnologies.map((tech, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -4 }}
                                className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:border-nijaPurple dark:hover:border-nijaPurple transition-all duration-300"
                            >
                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-nijaPurple transition-colors">
                                    {tech.name}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {tech.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-[#0B0F14] via-[#141B28] to-[#0B0F14] text-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-8">
                            Explore how NIJA technologies power real-world solutions
                        </h2>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link to="/solutions">
                                <button className="bg-nijaGreen hover:bg-green-500 text-white px-8 py-4 rounded-lg font-medium transition shadow-lg shadow-nijaGreen/30 hover:shadow-nijaGreen/50">
                                    View Solutions
                                </button>
                            </Link>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium transition hover:bg-white/10">
                                Request a Demo
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
