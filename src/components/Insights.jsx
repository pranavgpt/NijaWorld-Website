import { motion } from 'framer-motion';

export function Insights() {
    const posts = [
        {
            title: 'The Future of Enterprise AI: Beyond ChatGPT',
            category: 'AI Strategy',
            date: 'Jan 15, 2026',
            readTime: '8 min read'
        },
        {
            title: 'Blockchain for Compliance: A Practical Guide',
            category: 'Blockchain',
            date: 'Jan 10, 2026',
            readTime: '6 min read'
        },
        {
            title: 'Case Study: Transforming Supply Chain with AI',
            category: 'Case Study',
            date: 'Jan 5, 2026',
            readTime: '10 min read'
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
                        Latest Insights
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Thought leadership on AI, blockchain, and enterprise transformation
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map((post, idx) => (
                        <motion.article
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 cursor-pointer hover:shadow-xl transition-all"
                        >
                            <span className="text-xs text-nijaGreen font-semibold">{post.category}</span>
                            <h3 className="font-bold text-lg mt-3 mb-4 text-gray-900 dark:text-white">
                                {post.title}
                            </h3>
                            <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-3">
                                <span>{post.date}</span>
                                <span>•</span>
                                <span>{post.readTime}</span>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Insights;
