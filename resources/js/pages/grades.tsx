import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Table from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

import { useState } from 'react';
import { SlArrowLeftCircle, SlArrowRightCircle } from 'react-icons/sl';
import { IoAddCircleOutline } from 'react-icons/io5';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Notes',
        href: '/grades',
    },
];

export default function Grades({ grades }) {

    const [activeYear, setActiveYear] = useState(Object.keys(grades)[0]);

    const years = Object.keys(grades);
    const activeGrades = grades[activeYear];

    const previousTable = () => {
        const currentIndex = years.indexOf(activeYear);
        const nextIndex = currentIndex > 0 ? currentIndex - 1 : years.length - 1;
        setActiveYear(years[nextIndex]);
    };

    const nextTable = () => {
        const currentIndex = years.indexOf(activeYear);
        const nextIndex = currentIndex < years.length - 1 ? currentIndex + 1 : 0;
        setActiveYear(years[nextIndex]);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={activeYear} />

            <div className="flex flex-1 flex-col items-center justify-center gap-10 rounded-xl">
                <div className="flex flex-row items-center justify-center gap-10 rounded-xl p-4 w-[100%]">
                    <SlArrowLeftCircle className="cursor-pointer text-2xl" onClick={previousTable} />
                    <Card className="w-[70%] p-5">
                        <CardTitle size="xxl" margin="big">
                            {activeYear}
                        </CardTitle>

                        <CardContent className="flex flex-col">
                            <Table grades={activeGrades} />
                        </CardContent>
                    </Card>
                    <SlArrowRightCircle className="cursor-pointer text-2xl" onClick={nextTable} />
                </div>


                <Link href="/create">
                    <IoAddCircleOutline className="hover:[h-20 w-20] h-10 w-10" />
                </Link>
            </div>



        </AppLayout>
    );
}
