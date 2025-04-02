import { type BreadcrumbItem } from '@/types';

import { Head, Link, usePage } from '@inertiajs/react';

import { Card, CardContent, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { IoAddCircleOutline } from 'react-icons/io5';
import Table from '@/components/ui/table';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Apprentis',
        href: 'users',
    },
];

export default function Students() {

    const pageProps = usePage().props;

    const { users } = pageProps as { users?: Array<{ id: number; last_name: string; first_name: string; email: string }> };


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Liste des apprentis" />

            <div className="flex flex-1 flex-col items-center justify-center gap-20 rounded-xl p-4">
                <div className="grid w-[70%] auto-rows-min">
                    <Card className="p-5">
                        <CardTitle size="xxl" margin="big">
                            Liste des apprentis
                        </CardTitle>

                        <CardContent>
                            {/*<StudentTable users={users ?? []} />*/}
                            <Table users={users}/>
                        </CardContent>
                    </Card>
                </div>
                <Link href="/addStudent" prefetch>
                    <IoAddCircleOutline className="hover:[h-40 w-40] h-10 w-10" />
                </Link>
            </div>
        </AppLayout>
    );
}
