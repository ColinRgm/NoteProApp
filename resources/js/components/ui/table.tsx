export default function Tables() {

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

                                <tr className="h-15 text-center">

                                    <td className="tg-0lax text-left"></td>
                                    <td className="tg-0lax">
                                        <a href="" target="_blank">Ouvrir</a>
                                    </td>
                                    <td className="tg-0lax"></td>
                                </tr>
                    </tbody>
                </table>
            </>
        );
}
