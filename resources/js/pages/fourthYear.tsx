import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import GradesTables from '@/components/ui/grade-table';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: '4ème année',
        href: '/fourthYear',
    },
];

export default function FourhtYear() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="1ère année" />

            <div className="flex flex-1 flex-col items-center justify-center gap-10 rounded-xl p-4">
                <Card className="w-[70%] p-5">
                    <CardTitle size="xxl" margin="big">4ème année</CardTitle>
                    <CardContent>
                        <GradesTables

                        />
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
