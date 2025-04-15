import { Card, CardContent, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FormEventHandler, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Ajouter une note',
        href: 'grades/create'
    }
];

interface RegisterForm {
    // Get the grade
    // Get the semester
    branch_id: string;
    module_id: number;
    grade: string;
    semester: string;
    test_name: string;
}

interface RegisterProps {
    branches: {
        id: string;
        name: string;
    };
    modules: {
        id: string;
        name: string;
    }[];
}

export default function Create({ branches, modules }: RegisterProps) {
    const { data, setData, post } = useForm<RegisterForm>({
        branch_id: '',
        module_id: '',
        grade: '',
        pdf: 'test.pdf',
        semester: '',
        test_name: ''
    });

    const [branchId, setBranchId] = useState(null)

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('grades.store'));
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
                            <div className="w-[400px]">
                                <Label htmlFor="branch">Choix de la branche</Label>
                                <Select
                                    onValueChange={(value) => {
                                        setBranchId(parseInt(value));
                                        setData('branch_id', value);
                                    }}
                                >
                                    <SelectTrigger>
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

                            {(branchId === 4 || branchId === 5) && (
                                <div>
                                    <Label htmlFor="branch">Choix du module</Label>
                                    <Select onValueChange={(value) => setData('module_id', value)}>
                                        <SelectTrigger className="w-[400px]">
                                            <SelectValue placeholder="Choix du module" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {modules.map((module) => (
                                                    <SelectItem key={module.id} value={module.id.toString()}>
                                                        {module.id} - {module.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            )}
                            {(branchId === 1 || branchId === 2 || branchId === 3) && (
                                <div className="w-[400px]">
                                    <Label htmlFor="branch">Titre du test</Label>
                                    <Input onChange={(value) => setData('test_name', value.target.value)}></Input>
                                </div>
                            )}

                            <div className="flex flex-col">
                                <Label htmlFor="grade">Choix de la note</Label>
                                <Input
                                    name="grade"
                                    type="number"
                                    min="1"
                                    max="6"
                                    step="0.5"
                                    className="w-[400px]"
                                    placeholder="Choix de la note"
                                    value={data.grade}
                                    onChange={(e) => setData('grade', e.target.value)}
                                />
                            </div>

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
                                        value={data.semester}
                                        onChange={(e) => setData('semester', e.target.value)}
                                    />
                                </div>
                            </div>

                            {/*<div>
                                <div className="flex flex-col">
                                    <Label htmlFor="pdf">Ajout d'un PDF</Label>
                                    <Input name="pdf" type="file" className="w-[400px]" />
                                </div>
                            </div>*/}

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
