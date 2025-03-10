import { type BreadcrumbItem } from '@/types';

import { Head, Link } from '@inertiajs/react';

import { Card, CardContent, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { IoAddCircleOutline } from 'react-icons/io5';
import { Separator } from '@radix-ui/react-separator';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Apprentis',
        href: 'students',
    },
];

export default function Students() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            <div className="flex flex-1 flex-col items-center justify-center gap-20 rounded-xl p-4">
                <div className="grid w-[70%] auto-rows-min">
                    <Card className="p-5">
                        <CardTitle size="xxl" margin="big">
                            Liste des apprentis
                        </CardTitle>

                        <CardContent>
                            <ul>
                                <li>Regamey Colin</li>
                                <Separator />
                                <li>Heutschi Bryan</li>
                                <li></li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <button>
                        <Link href="/addStudent" prefetch>
                            <IoAddCircleOutline className="hover:[h-20 w-20] h-10 w-10" />
                        </Link>
                    </button>
                </div>
            </div>
        </AppLayout>
    );
}
