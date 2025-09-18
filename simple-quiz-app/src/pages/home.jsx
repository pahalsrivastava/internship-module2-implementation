import { useNavigate } from "react-router-dom";
export default function home(){
    const navigate = useNavigate();
    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-6">  WELCOME TO THE QUIZ ! </h1>
            <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600" onClick={() => navigate("/quiz")}>
                START QUIZ 
            </button>
        </div>
    )
}