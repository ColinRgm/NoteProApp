import { Card, CardContent, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import Table from '@/components/ui/table';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Notes',
        href: '/grades',
    },
];

export default function Grades() {

    const { grades } = usePage().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="1ère année" />

            <div className="flex flex-1 flex-col items-center justify-center gap-10 rounded-xl p-4">
                <Card className="w-[70%] p-5">
                    <CardTitle size="xxl" margin="big">
                        1ère année
                    </CardTitle>
                    <CardContent>
                        <Table grades={grades} />
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
