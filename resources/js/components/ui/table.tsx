interface Props {
    users: {
        id: number;
        last_name: string;
        first_name: string;
        email: string;
    },
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

export default function Table({ users, grades, maxRows }: Props) {

    const displayGrades = maxRows ? grades.slice(0, maxRows) : grades;

    const gradesURL = 'grades';
    const dashboardURL = 'dashboard';
    const studentsURL = 'users';

    if (window.location.href.includes(studentsURL)) {
        return (
            <>
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

                    {users.length > 0 ? (
                        users.map((user) => (
                            <tr className="h-15 text-center" key={user.id}>
                                <td className="tg-0lax text-left">{user.last_name} {user.first_name}</td>
                                <td className="tg-0lax">{user.email}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={2} className="text-center p-4">
                                Aucun apprenti trouvé..
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </>
        );
    } else if (window.location.href.includes(gradesURL) || window.location.href.includes(dashboardURL)) {
        return (
            <>
                <table className="w-[100%] divide-y-1 divide-gray-300">

                    <thead className="h-20">
                    <tr>
                        <th className="tg-0lax w-4/6 text-left text-xl">Branches / modules</th>
                        <th className="tg-0lax w-1/6 text-xl">Note</th>
                    </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-300">

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
}
