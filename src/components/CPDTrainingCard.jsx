export default function CPDTrainingCard() {
    return (
        <div className="mt-12">
            <a
                href="https://www.liverpool.ac.uk/population-health/about/health-data-science/courses-and-workshops/"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
            >
                <div className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 text-white overflow-hidden border border-gray-700/50 hover:border-gray-600/70 transform">
                    {/* Decorative gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>

                    {/* Content */}
                    <div className="relative z-10">
                        <div className="flex items-start gap-4 mb-4">
                            {/* Icon */}

                            <div className="flex-1">
                                <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                                    Continue Your Learning
                                </h3>
                            </div>
                        </div>

                        <p className="text-lg mb-6 text-gray-200 leading-relaxed">
                            Like this and want to learn more? Explore our CPD courses and workshops to further develop your health data science skills.
                        </p>

                        <span className="font-bold">View Courses & Workshops</span>
                    </div>
                </div>
            </a>
        </div>
    );
}
