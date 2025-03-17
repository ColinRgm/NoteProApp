interface Props {
    students: {
        id: number;
        first_name: string;
        last_name: string
    }[];
}

export default function StudentTable({ students }: Props) {


    return (
        <>
            {/* ----- Tableau de note ----- */}
            <table className="w-[100%] divide-y-1 divide-gray-300">
                {/* ----- Entête du tableau ----- */}
                <thead className="h-20">
                <tr>
                    <th className="tg-0lax w-3/6 text-left text-xl">Nom Prénom</th>
                    <th className="tg-0lax w-3/6 text-xl">Email</th>
                </tr>
                </thead>

                {/* ----- Contenu du tableau ----- */}
                <tbody className="divide-y divide-gray-300">
                {/* ----- Condition d'ajout pour chaque ligne du tableau ----- */}

                {students.map((student) => (
                    <tr className="h-15 text-center">
                        <td className="tg-0lax text-left">
                            {student.last_name && student.last_name}
                        </td>
                        <td className="tg-0lax">
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}
