import { Card, CardContent, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: 'dashboard',
    },
];

export default function GradeDetail() {
    const { gradesInfo } = usePage().props;

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
            <Head title="Dashboard" />

            <div className="flex flex-1 flex-col items-center justify-center gap-20 rounded-xl p-4">
                <div className="grid auto-rows-min gap-20 md:grid-cols-1">
                    <div className="grid auto-rows-min gap-20 md:grid-cols-2">
                        <Card className="p-5">
                            <CardTitle size="xxl" margin="big">Nom de la branche</CardTitle>
                            <CardContent>
                                <Card>
                                    <CardTitle>Note</CardTitle>
                                    <CardContent>5</CardContent>
                                </Card>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
