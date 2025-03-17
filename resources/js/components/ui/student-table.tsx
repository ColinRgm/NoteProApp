interface Props {
    users: {
        id: number;
        last_name: string;
        first_name: string;
        email: string;
    }[];
}

export default function userTable({ users }: Props) {



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
