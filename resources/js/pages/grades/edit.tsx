import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Modifier la note',
        href: 'grades/{id}/edit',
    },
];

interface RegisterForm {
    // Get the grade
    // Get the semester
    id: string;
    branch_id: string;
    module_id: string;
    grade: string;
    semester: string;
    test_name: string;
    pdf: File;
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

export default function GradeDetail({ branches, modules }: RegisterProps) {
    const { uniqueGrade } = usePage<{ props: { uniqueGrade: RegisterForm } }>().props;

    const { data, setData, patch } = useForm<RegisterForm>({
        branch_id: uniqueGrade.branch_id,
        module_id: uniqueGrade.module_id,
        grade: uniqueGrade.grade,
        pdf: uniqueGrade.pdf,
        semester: uniqueGrade.semester,
        test_name: uniqueGrade.test_name,
    });

    const [branchId, setBranchId] = useState(parseInt(uniqueGrade.branch_id));
    const [moduleId, setModuleId] = useState(parseInt(uniqueGrade.module_id));

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        patch(route('grades.update', uniqueGrade.id), {
            forceFormData: true,
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Modifier la note" />

            <div className="flex flex-1 flex-col items-center justify-center gap-10 rounded-xl p-4">
                <Card className="w-[70%] p-5">
                    <CardTitle size="xxl" margin="big">
                        Modifier la note
                    </CardTitle>
                    <CardContent className="flex flex-col gap-5">
                        <form className="flex flex-col items-center justify-center gap-12" onSubmit={submit} encType="multipart/form-data">
                            <div className="flex w-[500px] flex-col gap-2">
                                <Label htmlFor="branch">Choix de la branche</Label>

                                <Select
                                    value={data.branch_id.toString()}
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

                            {(branchId === 1 || branchId === 2 || branchId === 3) && (
                                <div className="w-[500px] gap-1">
                                    <Label htmlFor="branch">Titre du test</Label>
                                    <Input value={data.test_name} onChange={(value) => setData('test_name', value.target.value)}></Input>
                                </div>
                            )}

                            {(branchId === 4 || branchId === 5) && (
                                <div className="flex w-[500px] flex-col gap-2">
                                    <Label htmlFor="branch">Choix du module</Label>
                                    <Select
                                        value={data.module_id.toString()}
                                        onValueChange={(value) => {
                                            setModuleId(parseInt(value));
                                            setData('module_id', value);
                                        }}
                                    >
                                        <SelectTrigger className="w-[500px]">
                                            <SelectValue placeholder="Choix du module" defaultValue={data.module_id?.toString()} />
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

                            <div className="flex flex-col gap-2">
                                <Label htmlFor="grade">Choix de la note</Label>
                                <div className="flex w-[500px] flex-row items-center justify-center gap-2">
                                    <div className="flex w-[500px] flex-row items-center justify-center gap-2">
                                        {[1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6].map((value) => (
                                            <button
                                                key={value}
                                                type="button"
                                                onClick={() => setData('grade', value)}
                                                className={`h-10 w-full rounded-lg border text-sm font-medium transition ${
                                                    data.grade == value
                                                        ? 'border-[#141e66] bg-[#141e66] text-white'
                                                        : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-100'
                                                }`}
                                            >
                                                {value}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label htmlFor="semester">Choix du semestre</Label>
                                <div className="grid w-[500px] grid-cols-4 gap-2">
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
                                        <button
                                            key={value}
                                            type="button"
                                            onClick={() => setData('semester', value)}
                                            className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                                                data.semester == value
                                                    ? 'border-[#141e66] bg-[#141e66] text-white'
                                                    : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-100'
                                            }`}
                                        >
                                            {value}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className="flex w-[500px] flex-col gap-1">
                                    <Label htmlFor="pdf">Ajout d'un PDF</Label>
                                    <Input
                                        name="pdf"
                                        type="file"
                                        accept="application/pdf"
                                        onChange={(e) => setData('pdf', e.target.files?.[0] || null)}
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="mt-4 border-1 border-[#141e66] bg-[#141e66] hover:border-1 hover:border-[#141e66] hover:bg-white hover:text-[#141e66]"
                            >
                                Enregistrer les modifications
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
