const Card = ({ item }) => {
    return (
        <div className="rounded-2xl shadow-md hover:shadow-sm p-4 bg-white text-left h-full min-h-64 flex flex-col justify-between">
            <div>
                <h3 className="text-2xl font-bold mb-2 uppercase">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
            </div>
            <div className="border-t border-gray-400 mt-2 pt-2 text-gray-600">
                <p className="text-sm text-light italic">{item.audience ? item.audience : "For all learners"}</p>
            </div>
        </div>
    );
}

export default Card;