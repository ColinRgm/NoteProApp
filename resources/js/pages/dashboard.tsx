import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Table from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { IoAddCircleOutline } from 'react-icons/io5';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: 'dashboard',
    },
];

export default function Dashboard() {
    const { grades } = usePage().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            <div className="flex flex-1 flex-col items-center justify-center gap-20 rounded-xl p-4">
                <div className="grid w-[85%] auto-rows-min gap-20 md:grid-cols-5">
                    {/*
                        Moyenne de tout les groupes
                    */}
                    <Card className="p-5">
                        <CardTitle size="xl">Moyenne</CardTitle>
                        <CardContent className="text-5xl"></CardContent>
                    </Card>

                    {/*
                        Moyenne des notes aillant le group_id 1
                    */}
                    <Card className="p-5">
                        <CardTitle size="md">Culture générale</CardTitle>
                        <CardContent className="text-4xl"></CardContent>
                    </Card>

                    {/*
                        Moyenne des notes aillant le group_id 2
                    */}
                    <Card className="p-5">
                        <CardTitle size="md">Base élargie</CardTitle>
                        <CardContent className="text-4xl"></CardContent>
                    </Card>

                    {/*
                        Moyenne des notes aillant le group_id 3
                    */}
                    <Card className="p-5">
                        <CardTitle size="md">Informatique</CardTitle>
                        <CardContent className="text-4xl"></CardContent>
                    </Card>

                    {/*
                        Moyenne des notes aillant le group_id 4
                    */}
                    <Card className="p-5">
                        <CardTitle size="md">Travail pratique</CardTitle>
                        <CardContent className="text-4xl"></CardContent>
                    </Card>
                </div>

                <Card className="w-[70%] p-5">
                    <CardTitle size="xxl" margin="big">
                        5 dernière notes
                    </CardTitle>

                    <CardContent>
                        <Table grades={grades} maxRows={5} />
                    </CardContent>
                </Card>

                <Link href="/addGrade" prefetch>
                    <IoAddCircleOutline className="hover:[h-20 w-20] h-10 w-10" />
                </Link>
            </div>
        </AppLayout>
    );
}
