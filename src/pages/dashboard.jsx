import Grades_card from "../components/grade/grades_card.jsx";
import Average_card from "../components/average/average_card.jsx";

function Dashboard() {

    return (

        <>
            <div className="flex flex-col gap-y-10">
                <div className="flex flex-row justify-between h-full">
                    <Average_card title="Moyenne générale"/>
                    <Average_card title="Base élargie" />
                    <Average_card title="Culture générale"/>
                    <Average_card title="Informatique"/>
                </div>

                <div className="flex flex-col">
                    <Grades_card/>
                </div>

                <div className=" flex items-center justify-center">
                    <button className="bg-[#141e66] text-white px-10 py-2 rounded-md hover:bg-[#8fc62e] hover:text-[#141e66] transition">
                        Ajouter note
                    </button>
                </div>
            </div>
        </>

    )

}

export default Dashboard;