import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Table from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

import { useState } from 'react';
import { SlArrowLeftCircle, SlArrowRightCircle } from 'react-icons/sl';

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
            {/* Dynamique titre avec l'année active */}
            <Head title={activeYear} />

            <div className="flex flex-1 flex-row items-center justify-center gap-10 rounded-xl p-4">
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
        </AppLayout>
    );
}
