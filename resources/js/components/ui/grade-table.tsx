
interface Props {
    grades: {
        id: number;
        grade: number;
        semester: number;
        branch: {
            name: string;
        }
    }[]
}

export default function GradeTable({grades}: Props) {

    console.log(grades);


        return (
            <>
                {/* ----- Tableau de note ----- */}
                <table className="w-[100%] divide-y-1 divide-gray-300">
                    {/* ----- Entête du tableau ----- */}
                    <thead className="h-20">
                    <tr>
                        <th className="tg-0lax w-4/6 text-left text-xl">Branches / modules</th>
                        <th className="tg-0lax w-1/6 text-xl">PDF</th>
                        <th className="tg-0lax w-1/6 text-xl">Note</th>
                    </tr>
                    </thead>

                    {/* ----- Contenu du tableau ----- */}
                    <tbody className="divide-y divide-gray-300">
                    {/* ----- Condition d'ajout pour chaque ligne du tableau ----- */}

                    {grades.length > 0 ? (
                        grades.map((grade) => (
                            <tr className="h-15 text-center" key={grade.id}>
                                <td className="tg-0lax text-left">{grade.branch.name}</td>
                                <td className="tg-0lax"><a href="" target="_blank">Ouvrir</a></td>
                                <td className="tg-0lax">{grade.grade}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={3} className="text-center p-4">
                                Aucune note trouvée..
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </>
        );
}
