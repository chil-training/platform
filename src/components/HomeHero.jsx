import LoginBox from "./LoginBox";

const HomeHero = () => {
    return (
        <div className="w-full min-h-screen bg-gradient-to-tr from-blue-900 to-purple-950 flex justify-center">
            <div className="grid grid-cols-10 items-center container">
                <div className="flex flex-col items-left justify-center h-full container col-span-7">
                    <h1 className="text-7xl font-bold text-white">Data Action Accelerator</h1>
                    <p className="mt-4 text-xl text-white">Driving professional growth in health data science.</p>
                </div >
                <div className="col-span-3">
                    <LoginBox />
                </div>
            </div >
        </div >
    )
}

export default HomeHero;