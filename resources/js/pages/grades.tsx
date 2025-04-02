import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Table from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

import { IoAddCircleOutline } from 'react-icons/io5';
import Pagination from '@/components/pagination';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Notes',
        href: '/grades',
    },
];

export default function Grades({ grades }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Année" />

            <div className="flex flex-1 flex-col items-center justify-center gap-10 rounded-xl">
                <div className="flex w-[100%] flex-row items-center justify-center gap-10 rounded-xl p-4">
                    <Card className="w-[70%] p-5">
                        <CardTitle size="xxl" margin="big">
                            Test
                        </CardTitle>

                        <CardContent className="flex flex-col">
                            <Table grades={grades.data} />
                        </CardContent>
                    </Card>
                </div>

                {/* Pagination Component */}
                <div>
                    <Pagination links={grades.links} /> {/* Utilisation des liens de la pagination ici */}
                </div>

                <Link href="grades/create">
                    <IoAddCircleOutline className="hover:[h-20 w-20] h-10 w-10" />
                </Link>
            </div>
        </AppLayout>
    );
}
