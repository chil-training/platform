import { useParams } from "react-router";

const Guide = () => {

    let params = useParams();

    // Split slug into course_code, theme_id, and lesson_id 
    const [course_code, theme_id] = themeId.split("_");
    "use client"

    import { useContext, useState, useEffect, use } from "react";
    import { AuthContext } from "../../../layout"
    import { getDoc, doc } from "firebase/firestore";
    import { db } from "../../../firebase_config";
    import Markdown from "react-markdown";


    const GuidePage = ({ params }) => {

        const { user, setUser, userMeta, setUserMeta } = useContext(AuthContext);
        const [guideData, setGuideData] = useState(null);

        // Split slug into course_code, theme_id, and lesson_id
        const [course_code, theme_id, guide_id] = use(params).slug.split("_");

        const fetchThemeData = async (course_code, theme_id, guide_id) => {
            const docRef = await doc(db, "courses", course_code, "themes", theme_id, "guides", guide_id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setGuideData({ id: docSnap.id, ...docSnap.data() });
            }
        }

        useEffect(() => {
            if (userMeta && userMeta.course_code) {
                fetchThemeData(course_code, theme_id, guide_id);
            }
        }, [userMeta]);


        return (
            <>
                {user && guideData ?
                    <div className="mx-auto text-left prose">
                        <Markdown>{guideData.markdown_content}</Markdown>
                    </div>
                    : <p>Please log in to view this content.</p>}
            </>
        );
    }

    export default GuidePage;
    return (
        <div>

        </div>
    );
}

export default Guide;