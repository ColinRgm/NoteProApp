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
                    <CardTitle size="xxl" margin="big">
                        {uniqueGrade.module?.name || uniqueGrade.branch?.name}
                    </CardTitle>

                    <CardContent /* Aligner le contenu en haut */ className="w-5/5">
                        <div className="w-3/5">
                            <p>{uniqueGrade.pdf}</p>
                        </div>
                        <div className="grid">
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
