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

export default function Users() {

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
                            {
                                /**
                                 * Si la personne connectée est Admin (ID 1) -> Afficher tout les utilisateurs
                                 * Si la personne connectée est Formateur (ID 3) -> Afficher tout les apprentis aillant le métier accrodé
                                 * Si la personne connectée est Coach (ID 4) -> Afficher tout les apprentis aillant le manager_id correspondant
                                 * Si la personne connectée est Admin (ID 1) -> Page inacessible
                                 */
                            }
                            <Table users={users}/>
                        </CardContent>
                    </Card>
                </div>
                <Link href="users/create" prefetch>
                    <IoAddCircleOutline className="hover:[h-40 w-40] h-10 w-10" />
                </Link>
            </div>
        </AppLayout>
    );
}
