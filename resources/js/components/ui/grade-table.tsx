
interface Props {
    grades: {
        id: number;
        grade: number;
        semester: number;
        branch: {
            name: string;
        }
    }[];
    maxRows?: number;
}

export default function GradeTable({grades, maxRows}: Props) {

    console.log(grades);

    const displayGrades = maxRows ? grades.slice(0, maxRows) : grades;

        return (
            <>
                {/* ----- Tableau de note ----- */}
                <table className="w-[100%] divide-y-1 divide-gray-300">
                    {/* ----- Entête du tableau ----- */}
                    <thead className="h-20">
                    <tr>
                        <th className="tg-0lax w-4/6 text-left text-xl">Branches / modules</th>
                        <th className="tg-0lax w-1/6 text-xl">Note</th>
                    </tr>
                    </thead>

                    {/* ----- Contenu du tableau ----- */}
                    <tbody className="divide-y divide-gray-300">
                    {/* ----- Condition d'ajout pour chaque ligne du tableau ----- */}

                    {displayGrades.length > 0 ? (
                        displayGrades.map((grade) => (
                            <tr className="h-15 text-center" key={grade.id}>
                                <td className="tg-0lax text-left">{grade.branch.name}</td>
                                <td className="tg-0lax">{grade.grade}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={2} className="text-center p-4">
                                Aucune note trouvée..
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </>
        );
}
