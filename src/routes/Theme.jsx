import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../App";
import { db } from "../firebase_config";
import { getDoc, getDocs, doc, collection } from "firebase/firestore";
import { Link } from "react-router";
import Card from "../components/Card";


const Theme = () => {

    let params = useParams()
    let themeId = params.themeId

    // Split slug into course_code, theme_id, and lesson_id 
    const [course_code, theme_id] = themeId.split("_");

    const { user, setUser, userMeta, setUserMeta } = useContext(AuthContext);
    const [guideData, setGuideData] = useState(null);
    const [themeData, setThemeData] = useState(null);


    const fetchThemeData = async (course_code, theme_id) => {
        // Step 1: Get course document
        const docRef = await doc(db, "courses", course_code, "themes", theme_id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setThemeData({ id: docSnap.id, ...docSnap.data() });

            // Step 2: Get guides
            const guideRef = collection(docRef, "guides");
            const guideSnap = await getDocs(guideRef);

            if (!guideSnap.empty) {
                const guides = guideSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

                // Sort guides by index
                guides.sort((a, b) => a.index - b.index);
                setGuideData(guides);
            }

        }
    }

    useEffect(() => {
        if (userMeta && userMeta.course_code) {
            fetchThemeData(course_code, theme_id);
        }
    }, [userMeta]);

    var description

    if (themeData && themeData.long_description) {
        description = themeData.long_description;
    }
    else if (themeData && themeData.description) {
        description = themeData.description;
    } else {
        description = null;
    }

    if (!user) {
        return (
            <div className="py-32 container mx-auto">
                <p>Please <Link to="/auth/login" className="underline text-blue-700">log in</Link> to view this content.</p>
            </div>
        )
    } else if (!themeData) {
        // TODO: Loading spinner
        return (<></>)
    } else {
        return (
            <div className="text-left py-32 container mx-auto">
                <h1 className="text-6xl font-bold">{themeData.title ? themeData.title : null}</h1>
                <p className="mt-4 text-md text-gray-600">{description}</p>
                <h2 className="text-4xl font-bold my-8">Guides</h2>
                {
                    guideData && guideData.length > 0 ? (
                        <div>
                            <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-3 gap-4">
                                {guideData.map((guide, index) => (
                                    <Link to={`/guide/${course_code}_${theme_id}_${guide.id}`} key={index}>
                                        <Card item={guide} />
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    ) : <p>Loading...</p>
                }
            </div>
        );
    }
}

export default Theme;