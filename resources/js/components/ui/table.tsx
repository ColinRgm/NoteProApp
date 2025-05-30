import { Link } from '@inertiajs/react';
import { PencilLine, Trash2 } from 'lucide-react';
import DeleteGrade from '@/components/delete-grade';

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
        test_name: string;
        title: string;
        module: {
            id: number;
            name: string;
            title: string
        }
    }[];
    maxRows?: number;
}

export default function Table({ users, grades, maxRows }: Props) {

    const displayGrades = maxRows ? grades.slice(0, maxRows) : grades;

    const gradesURL = 'grades';
    const dashboardURL = 'dashboard';
    const studentsURL = 'users';


    const getTableConfig = () => {


        if (window.location.href.includes(studentsURL)) {
            return {
                headers: ['Nom Prénom', 'Email'],
                rows: users.map(user => [
                    user.last_name + ' ' + user.first_name, user.email
                ]),
                noDataMessage: 'Aucun apprenti trouvé..'
            };
        } else if (window.location.href.includes(gradesURL) || window.location.href.includes(dashboardURL)) {
            return {
                headers: ['Branches / modules', 'Note', 'Modifier / Supprimer'],
                rows: displayGrades.map(grade => [
                    <Link
                        href={`/grades/${grade.id}`} key={grade.id}>
                        {grade.title}
                    </Link>,
                    grade.grade,
                    <div className="flex flex-row items-center justify-end gap-5">
                        <Link href={`/grades/${grade.id}/edit`} key={grade.id}>
                            <PencilLine />
                        </Link>
                        <DeleteGrade id={grade.id}/>
                    </div>

                ]),
                noDataMessage: 'Aucune note trouvée..'
            };
        }
        return null;
    };

    const tableConfig = getTableConfig();

    if (tableConfig) {
        return (
            <>
                <table className="w-[100%] divide-y-1 divide-gray-300">

                    <thead className="h-20">
                    <tr>
                        {tableConfig.headers.map((header, index) => (
                            <th key={index}
                                className={`tg-0lax ${
                                    index === 0 ? 'text-left' : index === 2 ? 'text-right' : 'text-center'}`}>{header}</th>
                        ))}
                    </tr>
                    </thead>


                    <tbody className="divide-y divide-gray-300">
                    {tableConfig.rows.length > 0 ? (
                        tableConfig.rows.map((row, index) => (

                            <tr className="h-15 text-left" key={index}>
                                {row.map((cell, i) => (
                                    <td key={i}
                                        className={`tg-0lax ${i === 0 ? 'text-left' : 'text-center'}`}>{cell}</td>
                                ))}
                            </tr>

                        ))
                    ) : (
                        <tr>
                            <td colSpan={tableConfig.headers.length} className="text-center p-4">
                                {tableConfig.noDataMessage}
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </>
        );
    }
}
