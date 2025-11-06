export default function Card({ item }) {
    return (
        <div className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 bg-gradient-to-br from-white to-gray-50 text-left h-full min-h-64 flex flex-col justify-between border border-gray-100">
            {/* Title and Description */}
            <div className="flex-1 mb-4">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 leading-tight uppercase">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>

            {/* Audience Detail */}
            <div className="border-t border-gray-200 pt-4">
                {item.audience && (
                    <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <p className="text-sm text-gray-700 flex-1">{item.audience}</p>
                    </div>
                )}
                {!item.audience && (
                    <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <p className="text-sm text-gray-700 italic flex-1">For all learners</p>
                    </div>
                )}
            </div>
        </div>
    );
}