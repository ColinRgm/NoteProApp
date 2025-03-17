import { Card, CardContent, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FormEventHandler } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Ajouter une note',
        href: '/addGrade',
    },
];

interface RegisterForm {
    // Get the grade
    // Get the semester
    branch_id: string;
    grade: string;
    semester: string;
}

interface RegisterProps {
    branches: {
        id: number;
        name: string;
    }[];
}

export default function AddGrade({ branches }: RegisterProps) {
    const { data, setData, post } = useForm<RegisterForm>({
        branch_id: '',
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
                            {/*
                             *
                             * Récupérer le nom des branches et les ajouter dans le select
                             *
                             * Puis récupérer la valeur du choix selectionné (ID) et l'ajouter dans la table grade
                             *
                             * branch_id
                             *
                             */}
                            <div>
                                <Label htmlFor="branch">Choix de la branche</Label>
                                <Select name="branch" onValueChange={(value) => setData('branch_id', value)}>
                                    <SelectTrigger className="w-[400px]">
                                        <SelectValue placeholder="Choix de la branche" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {branches.map((branche) => (
                                                <SelectItem key={branche.id} value={branche.id.toString()}>
                                                    {branche.name}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/*
                             *
                             * Puis récupérer la valeur du choix selectionné et l'ajouter dans la table grade
                             *
                             * grade
                             *
                             */}
                            <div className="flex flex-col">
                                <Label htmlFor="grade">Choix de la note</Label>
                                <Input name="grade" type="number" min="1" max="6" step="0.5" className="w-[400px]" placeholder="Choix de la note" />
                            </div>

                            {/*
                             *
                             * Gestion du PDF à mettre au clair
                             *
                             * Probablement le chemin vers le pdf
                             *
                            *
                            <div>

                            </div>
                            */}

                            {/*
                             *
                             * Puis récupérer la valeur du choix selectionné et l'ajouter dans la table grade
                             *
                             * semestre
                             *
                             */}
                            <div>
                                <div className="flex flex-col">
                                    <Label htmlFor="semester">Choix du semestre</Label>
                                    <Input
                                        name="semester"
                                        type="number"
                                        min="1"
                                        max="8"
                                        step="1"
                                        className="w-[400px]"
                                        placeholder="Choix du semestre"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex flex-col">
                                    <Label htmlFor="pdf">Ajout d'un PDF</Label>
                                    <Input name="pdf" type="file" className="w-[400px]" />
                                </div>
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
