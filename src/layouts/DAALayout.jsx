import { useState, useEffect } from "react";
import Card from "../components/Card";
import { Link } from "react-router";

const DAALayout = ({ course, themes }) => {

    const [primary_theme, setPrimaryCourse] = useState(null);
    const [other_themes, setOtherThemes] = useState([]);

    useEffect(() => {
        if (!themes || themes.length === 0) {
            // If no themes, return empty component
            return;
        } else {
            // Find the primary course 
            setPrimaryCourse(themes.find(theme => theme.index === 0));

            // Filter out the other themes - sorted by index
            setOtherThemes(themes.filter(theme => theme.index !== 0).sort((a, b) => a.index - b.index));
        }
    }, [themes]);

    if (!primary_theme || !other_themes || !themes) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <h1 className="text-6xl font-bold">{course.title ? course.title : null}</h1>
                <p className="mt-4 text-md text-gray-600">{course.description ? course.description : null}</p>
                <h2 className="text-4xl font-bold mt-8">Themes</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    <Link to={`/theme/${course.id}_${primary_theme.id}`} className="col-span-1 md:col-span-3">
                        <Card item={primary_theme} />
                    </Link>
                    {other_themes.map((theme, index) => (
                        <Link key={index} to={`/theme/${course.id}_${theme.id}`} >
                            <Card item={theme} />
                        </Link>
                    ))}
                </div>
            </div>
        )
    }
}

export default DAALayout 