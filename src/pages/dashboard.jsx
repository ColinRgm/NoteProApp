import Grades_card from "../components/grade/grades_card.jsx";
import Average_card from "../components/average/average_card.jsx";
import Add_grade from "../components/grade/add_grade.jsx";

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
                    <Grades_card title="5 dernières notes"/>
                </div>

                <div>
                    <Add_grade />
                </div>
            </div>
        </>

    )

}

export default Dashboard;