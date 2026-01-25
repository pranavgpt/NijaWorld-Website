export function CaseStudies() {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-white dark:bg-baseDark">
            <div className="max-w-7xl mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                    Case Studies
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                    Explore real-world implementations of NIJA's AI and blockchain solutions across various industries.
                </p>

                <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Placeholder for case study cards */}
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                            Coming Soon
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Client success stories and implementation results will be featured here.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CaseStudies;
