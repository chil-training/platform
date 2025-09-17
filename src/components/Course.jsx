import { Link } from "react-router";
import DAALayout from "../layouts/DAALayout";
import Card from "./Card";

const Course = ({ course, themes }) => {

    if (course.title === "Data Action Accelerator 2025/2026") {
        return <DAALayout course={course} themes={themes} />;
    } else {
        return (
            <div>
                <h1 className="text-4xl font-bold">{course.title ? course.title : null}</h1>
                <p className="mt-4 text-md">{course.description ? course.description : null}</p>
                <h2 className="text-2xl">Themes</h2>
                {
                    themes && themes.length > 0 ? (
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold mb-4">Themes</h2>
                            {themes.map((theme, index) => (
                                <Link key={index} to={`/theme/${course.id}_${theme.id}`} >
                                    <Card item={theme} />
                                </Link>
                            ))}
                        </div>
                    ) : null
                }
            </div >
        );
    }
}

export default Course