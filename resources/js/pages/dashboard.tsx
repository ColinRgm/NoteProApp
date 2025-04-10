import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Table from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: 'dashboard',
    },
];

export default function Dashboard() {

    const { generalAvg, groupeAvg, grades } = usePage().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            <div className="flex flex-1 flex-col items-center justify-center gap-20 rounded-xl p-4">
                <div className="grid auto-rows-min gap-20 md:grid-cols-1">
                    {/* Première carte avec une largeur de 40% et centrée */}
                    <div className="w-[40%] mx-auto">
                        <Card className="p-5">
                            <CardTitle size="xxl">Moyenne générale</CardTitle>
                            <CardContent className="text-5xl">{generalAvg}</CardContent>
                        </Card>
                    </div>

                    {/* Cartes pour les moyennes des groupes */}
                    <div className="grid auto-rows-min gap-10 md:grid-cols-2 lg:grid-cols-4">
                        {groupeAvg.map((group, index) => (
                            <div key={index}>
                                <Card className="p-5">
                                    <CardTitle size="xl">{group.groupe_name}</CardTitle>
                                    <CardContent className="text-4xl">{group.average}</CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>

                </div>

                <Card className="w-[70%] p-5">
                    <CardTitle size="xxl" margin="big">
                        5 dernière notes
                    </CardTitle>

                    <CardContent>
                        <Table grades={grades.data} maxRows={5} />
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
