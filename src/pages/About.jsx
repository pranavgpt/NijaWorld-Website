import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function About() {
    return (
        <div className='min-h-screen bg-white dark:bg-baseDark dark:text-white'>
            <Navbar />

            <section className="pt-32 pb-28 bg-gradient-to-br from-gray-50 to-white dark:from-baseDark dark:to-gray-900">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block mb-4 px-4 py-1.5 text-sm rounded-full bg-nijaGreen/10 text-nijaGreen font-medium">
                            ABOUT NIJA
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Building the Future of Enterprise Technology
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                            We're on a mission to help organisations modernise their operations through
                            intelligent automation and blockchain-grade infrastructure.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="prose prose-lg dark:prose-invert max-w-none"
                    >
                        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-10">
                            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Our Story</h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Founded by enterprise technology veterans, NIJA emerged from a simple observation:
                                organisations were struggling to deploy AI and blockchain solutions that actually worked in production.
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                We built NIJA to bridge the gap between cutting-edge technology and real-world enterprise requirements—
                                combining the latest in AI automation with the trust and auditability of blockchain infrastructure.
                            </p>

                            <div className="grid md:grid-cols-3 gap-8 mt-12">
                                {[
                                    { number: '500+', label: 'Enterprise Clients' },
                                    { number: '99.99%', label: 'Platform Uptime' },
                                    { number: '$2.4B', label: 'Transactions Secured' }
                                ].map((stat, idx) => (
                                    <div key={idx} className="text-center">
                                        <div className="text-3xl font-bold text-nijaGreen mb-2">{stat.number}</div>
                                        <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
