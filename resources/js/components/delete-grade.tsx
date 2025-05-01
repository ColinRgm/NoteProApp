import { Trash2 } from 'lucide-react';
import { FormEventHandler } from 'react';
import { useForm } from '@inertiajs/react';

export default function DeleteGrade({ id }) {

    const {delete: destroy} = useForm();
    const deleteGrade: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route('grades.destroy', id));

        console.log('Suppression de la note');
    };

    return (
        <>
            <form onSubmit={deleteGrade}>
                <button type="submit" className="cursor-pointer">
                    <Trash2 />
                </button>
            </form>
        </>
    );
}
