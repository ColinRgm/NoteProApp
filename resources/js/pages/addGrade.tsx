import { Card, CardContent, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FormEventHandler } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Ajouter une note',
        href: '/addGrade',
    },
];

interface RegisterForm {
    grade_id: number;
}

interface RegisterProps {
    branches: {
        id: number;
        name: string;
    }[];
}

export default function AddGrade({ branches }: RegisterProps) {
    const { data, setData, post } = useForm<RegisterForm>({
        id: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('dashboard'));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Ajouter une note" />

            <div className="flex flex-1 flex-col items-center justify-center gap-10 rounded-xl p-4">
                <Card className="w-[70%] p-5">
                    <CardTitle size="xxl" margin="big">
                        Ajouter une note
                    </CardTitle>
                    <CardContent className="flex flex-col gap-5">
                        <form className="flex flex-col items-center justify-center gap-6" onSubmit={submit}>
                            <div>
                                <Label htmlFor="grade">Choix de la branche</Label>
                                <Select name="grade" onValueChange={(value) => setData('id', value)}>
                                    <SelectTrigger className="w-[400px]">
                                        <SelectValue placeholder="Choix de la branche" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {/*{branches.map((branche) => (
                                                <SelectItem key={branche.id} value={branche.id.toString()}>
                                                    {branche.name}
                                                </SelectItem>
                                            ))}*/}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <Label>Choix du semestre</Label>
                                <Select>
                                    <SelectTrigger className="w-[400px]">
                                        <SelectValue placeholder="Choix du semestre" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>1ère année</SelectLabel>
                                            <SelectItem value="semestre_1">Semestre 1</SelectItem>
                                            <SelectItem value="semestre_2">Semestre 2</SelectItem>

                                            <SelectLabel>2ème année</SelectLabel>
                                            <SelectItem value="semestre_3">Semestre 3</SelectItem>
                                            <SelectItem value="semestre_4">Semestre 4</SelectItem>

                                            <SelectLabel>3ème année</SelectLabel>
                                            <SelectItem value="semestre_5">Semestre 5</SelectItem>
                                            <SelectItem value="semestre_6">Semestre 6</SelectItem>

                                            <SelectLabel>4ème année</SelectLabel>
                                            <SelectItem value="semestre_7">Semestre 7</SelectItem>
                                            <SelectItem value="semestre_8">Semestre 8</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <Label>Choix de la note</Label>
                                <Select>
                                    <SelectTrigger className="w-[400px]">
                                        <SelectValue placeholder="Choix de la note" />
                                    </SelectTrigger>
                                    <SelectContent>

                                            <SelectItem value="semestre_1">Semestre 1</SelectItem>
                                            <SelectItem value="semestre_2">Semestre 2</SelectItem>

                                            <SelectItem value="semestre_3">Semestre 3</SelectItem>
                                            <SelectItem value="semestre_4">Semestre 4</SelectItem>

                                            <SelectItem value="semestre_5">Semestre 5</SelectItem>
                                            <SelectItem value="semestre_6">Semestre 6</SelectItem>

                                            <SelectItem value="semestre_7">Semestre 7</SelectItem>
                                            <SelectItem value="semestre_8">Semestre 8</SelectItem>

                                    </SelectContent>
                                </Select>
                            </div>

                            <Button
                                type="submit"
                                className="mt-4 w-xl border-1 border-[#141e66] bg-[#141e66] hover:border-1 hover:border-[#141e66] hover:bg-white hover:text-[#141e66]"
                            >
                                Ajouter
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
