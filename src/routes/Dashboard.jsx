import HomeHero from "../components/HomeHero";
import Navbar from "../components/Navbar";
import TrainingApp from "../components/TrainingApp";
import { AuthContext } from "../App";

import { useContext } from "react"

const Dashboard = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            {user ? <TrainingApp /> : <HomeHero />}
        </div>
    )

}

export default Dashboard