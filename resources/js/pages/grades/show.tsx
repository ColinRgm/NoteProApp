import { Card, CardContent, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Notes',
        href: 'grades/{id}',
    },
];

export default function GradeDetail() {

    const { uniqueGrade } = usePage().props;

    /**
     *
     * --------------------------------------
     *
     *  Afficher le nom de la branche en titre
     *  Afficher la note à droite du nom
     *
     *  Afficher le pdf en grand dans la page
     *
     */

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Notes" />

            <div className="flex flex-1 flex-col items-center justify-center gap-20 rounded-xl p-4">
                <Card className="w-[70%] p-5">
                    <CardTitle size="xxl" margin="big">
                        {uniqueGrade.branch?.name}
                    </CardTitle>

                    <CardContent>
                        <div className="grid auto-rows-min">
                            <Card className="p-5">
                                <CardTitle size="lg">Note</CardTitle>
                                <CardContent className="text-4xl">{uniqueGrade.grade}</CardContent>
                            </Card>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
