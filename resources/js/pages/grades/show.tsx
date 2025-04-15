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

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Notes" />

            <div className="flex flex-1 flex-col items-center justify-center gap-20 rounded-xl p-4">
                <Card className="w-[70%] p-5">
                    <CardTitle size="xl" margin="big">
                        {uniqueGrade.title || uniqueGrade.titleModule}
                    </CardTitle>

                    <CardContent className="gap-20 flex-3">
                        <div className="w-2/3 flex flex-col items-center justify-center border-2">
                            <p>Le PDF</p>
                        </div>
                        <div className="flex-1/3">
                            <Card className="p-5">
                                <CardTitle size="lg">Note</CardTitle>
                                <CardContent className="text-4xl">{uniqueGrade.grade}</CardContent>
                            </Card>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi corporis, dolores ducimus id labore odit perferendis possimus quo repellendus sunt veniam veritatis, voluptates. Inventore ipsum porro repellendus saepe suscipit?</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
