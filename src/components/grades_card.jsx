import GradesList from "./grades_list.jsx";

function Grades_card({ title }) {
    return (

        <>

            {/* Titre de la carte */}
            <div className="relative pl-15 pr-15 pt-3 pb-3 w-fit ml-5 mb-[-27px] bg-white">
                <h1 className="text-2xl font-bold">{title}</h1>
            </div>

            {/* Contenu de la carte */}
            <div className="border-1 h-auto w-300 p-20">
                <GradesList />
            </div>
        </>

    )
}

export default Grades_card;