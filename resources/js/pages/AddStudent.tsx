import { Card, CardContent, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Ajouter un apprenti',
        href: '/addStudent',
    },
];

export default function AddStudent() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Ajouter un apprenti" />

            <div className="flex flex-1 flex-col items-center justify-center gap-10 rounded-xl p-4">
                <Card className="w-[70%] p-5">
                    <CardTitle size="xxl" margin="big">
                        Ajouter un apprenti
                    </CardTitle>
                    <CardContent className="flex flex-col gap-5">
                        <div className="flex flex-row items-center justify-center gap-5">
                            <label htmlFor="firstName">Prénom:</label>
                            <Input id="firstName" placeholder="Prénom" type="text" className="w-130" />
                        </div>

                        <div className="flex flex-row items-center justify-center gap-5">
                            <label htmlFor="firstName">Nom:</label>
                            <Input id="lastname" placeholder="Nom" type="text" className="w-130" />
                        </div>

                        <div className="flex flex-row items-center justify-center gap-5">
                            <label htmlFor="firstName">Email:</label>
                            <Input id="email" placeholder="Email" type="email" className="w-130" />
                        </div>

                        <div className="flex flex-row items-center justify-center gap-5">
                            <label htmlFor="coach">Coach:</label>
                            <Select>
                                <SelectTrigger className="w-[400px]">
                                    <SelectValue placeholder="Coach" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {/*
                                         * Récupérer les coachs depuis la DB
                                         */}
                                        <SelectLabel>Coach</SelectLabel>
                                        <SelectItem value="1">Sophie Heim</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        <Button className="mt-4 w-xl border-1 border-[#141e66] bg-[#141e66] hover:bg-white hover:border-[#141e66] hover:border-1 hover:text-[#141e66]">
                            Ajouter
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
