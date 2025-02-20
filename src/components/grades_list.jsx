function GradesList() {

    const datas = {
        name_branch: [
            "Module 117 - Mettre en place l’infrastructure informatique d’une petite entreprise",
            "Module 122 - Automatiser des procédures à l’aide de scripts",
            "Module 162 - Analyser et modéliser des données"
        ],
        grades: [
            "3.5",
            "4.5",
            "5"
        ]
    }

    return (
        <>
            {/* ----- Tableau de note ----- */}
            <table className="w-full divide-y-1 divide-gray-300">


                {/* ----- Entête du tableau ----- */}
                <thead className="h-20">
                <tr>
                    <th className="tg-0lax text-left">Nom de la branche / module</th>
                    <th className="tg-0lax">PDF</th>
                    <th className="tg-0lax">Note</th>
                </tr>
                </thead>


                {/* ----- Contenu du tableau ----- */}
                <tbody className="divide-y divide-gray-300">

                {/* ----- Condition d'ajout pour chaque ligne du tableau ----- */}
                {datas.name_branch.map((branch, index) => (
                    <tr key={index} className="text-center h-15">
                        <td className="tg-0lax text-left">{branch}</td>
                        <td className="tg-0lax">
                                Lien PDF
                        </td>
                        <td className="tg-0lax">{datas.grades[index]}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )

}

export default GradesList