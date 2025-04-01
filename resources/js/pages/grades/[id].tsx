import { Card, CardContent, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Notes',
        href: 'grades/{id}',
    },
];

export default function GradeDetail() {
    const {grades} = usePage().props;



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
                <div className="grid auto-rows-min gap-20 md:grid-cols-1">
                    <div className="grid">
                        <Card className="p-5">
                            <CardTitle size="xxl" margin="big">
                                Nom de la branche
                            </CardTitle>
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
