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

export default function userTable({ users, grades, maxRows }: Props) {

    const displayedLines = maxRows ? grades.slice(0, maxRows) || users.slice(0, maxRows) : grades;

    return (
        <>

            <table className="w-[100%] divide-y-1 divide-gray-300">

                <thead className="h-20">
                <tr>
                    <th className="tg-0lax w-3/6 text-left text-xl">{/* Champ dynamique - Nom Prénom || Branches */}</th>
                    <th className="tg-0lax w-3/6 text-xl">{/* Champ dynamique - Email || Note */}</th>
                </tr>
                </thead>

                <tbody className="divide-y divide-gray-300">

                {/**
                 *
                 * Si l'URL contient users afficher le tableau users
                 *
                 * Si l'URL contient grades afficher le tableau grades
                 *
                 * Sinon ne rien afficher
                 *
                 */}

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
}
