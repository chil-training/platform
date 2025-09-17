import { useContext } from "react";
import { AuthContext } from "../App";
import { auth } from "../firebase_config";
import { Link } from "react-router";


const Navbar = () => {

    const { user } = useContext(AuthContext);

    const handleLogOut = () => {
        auth.signOut();

        // Redirect to home page
        window.location.href = "/";
    }

    return (
        <nav className="bg-slate-900 fixed top-0 w-full z-10 shadow-md">
            <div className="h-16 mx-auto container px-4 flex align-middle justify-between text-white">
                <div className="flex align-middle items-center gap-8">
                    <Link to="/" className="text-2xl font-bold self-center">
                        <h1 className="text-2xl font-bold self-center">HDS Training</h1>
                    </Link>
                </div>
                {user ? (
                    <button className="self-center" onClick={handleLogOut}>Logout</button>
                ) : (
                    <div className="flex align-middle gap-8">
                        <Link to="/auth/login" className="self-center">
                            Login
                        </Link>
                        <Link to="/auth/register" className="self-center">
                            Register
                        </Link>
                    </div>
                )}
            </div>

        </nav>
    )
}

export default Navbar