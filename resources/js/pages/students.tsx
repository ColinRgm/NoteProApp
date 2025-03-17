import { type BreadcrumbItem } from '@/types';

import { Head, Link } from '@inertiajs/react';

import { Card, CardContent, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { Separator } from '@radix-ui/react-separator';
import { IoAddCircleOutline } from 'react-icons/io5';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Apprentis',
        href: 'students',
    },
];

interface Props {
    students: {
        id: number;
        first_name: string;
        last_name: string
    }
}

export default function Students({students}: Props) {
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
                                {students.map((student) => (
                                    <li>
                                        {student.first_name}
                                    </li>
                                ))}
                            </ul>
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
