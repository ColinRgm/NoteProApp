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
                        {uniqueGrade.title}
                    </CardTitle>

                    <CardContent className="flex-3 items-start gap-20">
                        <div className="flex flex-col justify-center w-2/3">
                            {uniqueGrade.pdf && uniqueGrade.pdf !== '' ? (
                                <>
                                    <p className="mb-4 font-semibold">Aperçu du PDF</p>
                                    <iframe src={`/storage/${uniqueGrade.pdf}`} className="h-[600px] w-full border" title="Aperçu du test"></iframe>
                                    {/*<img src={`/storage/${uniqueGrade.pdf}`} alt={uniqueGrade.title} className="h-[100%] w-[100%]"/>*/}
                                </>
                            ) : (
                                <p className="mb-4 font-semibold">Aucun PDF pour ce test</p>
                            )}
                        </div>
                        <div className="flex flex-1/3 flex-col gap-20">
                            <Card className="p-5">
                                <CardTitle size="lg">Note</CardTitle>
                                <CardContent className="text-4xl">{uniqueGrade.grade}</CardContent>
                            </Card>
                            <div>
                                <p className="mb-4 font-semibold">Descriptif de la note</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi corporis, dolores ducimus id labore odit perferendis
                                    possimus quo repellendus sunt veniam veritatis, voluptates. Inventore ipsum porro repellendus saepe suscipit?
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
