interface GradesTablesProps {
    moduleName: string,
    pdfUrl: string,
    grades: number
}

export default function GradesTables({moduleName, pdfUrl, grades } : GradesTablesProps) {

    return (
        <>
            {/* ----- Tableau de note ----- */}
            <table className="w-[100%] divide-y-1 divide-gray-300">
                {/* ----- Entête du tableau ----- */}
                <thead className="h-20">
                    <tr>
                        <th className="tg-0lax w-4/6 text-left text-xl">Nom de la branche / module</th>
                        <th className="tg-0lax w-1/6 text-xl">PDF</th>
                        <th className="tg-0lax w-1/6 text-xl">Note</th>
                    </tr>
                </thead>

                {/* ----- Contenu du tableau ----- */}
                <tbody className="divide-y divide-gray-300">
                    {/* ----- Condition d'ajout pour chaque ligne du tableau ----- */}
                    <tr className="h-15 text-center">
                        <td className="tg-0lax text-left">{moduleName}</td>
                        <td className="tg-0lax">{pdfUrl}</td>
                        <td className="tg-0lax">{grades}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );

}
