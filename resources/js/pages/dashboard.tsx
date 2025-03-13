import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Tables from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { IoAddCircleOutline } from 'react-icons/io5';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard'
    }
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            <div className="flex flex-1 flex-col items-center justify-center gap-20 rounded-xl p-4">
                <div className="grid w-[70%] auto-rows-min gap-20 md:grid-cols-4">
                    <Card className="p-5">
                        <CardTitle size="lg">Culture générale</CardTitle>
                        <CardContent className="text-4xl">5</CardContent>
                    </Card>

                    <Card className="p-5">
                        <CardTitle size="lg">Base élargie</CardTitle>
                        <CardContent className="text-4xl">5</CardContent>
                    </Card>

                    <Card className="p-5">
                        <CardTitle size="lg" margin="small">
                            Informatique
                        </CardTitle>
                        <CardContent className="text-4xl">5</CardContent>
                    </Card>

                    <Card className="p-5">
                        <CardTitle size="lg">Culture générale</CardTitle>
                        <CardContent className="text-4xl">5</CardContent>
                    </Card>
                </div>

                <Card className="w-[70%] p-5">
                    <CardTitle size="xxl" margin="big">
                        5 dernière notes
                    </CardTitle>

                    {/*
                     * Récupérer les 5 dernières notes (en fonction de la date)
                     * Limiter le nombre de lignes
                     */}
                    <CardContent>
                        <Tables />
                    </CardContent>
                </Card>

                <div>
                    <button>
                        <Link href="/addGrade" prefetch>
                            <IoAddCircleOutline className="hover:[h-20 w-20] h-10 w-10" />
                        </Link>
                    </button>
                </div>
            </div>
        </AppLayout>
    );
}
