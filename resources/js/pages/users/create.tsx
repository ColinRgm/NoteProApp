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
        title: 'Ajouter un utilisateur',
        href: 'users/create',
    },
];

interface RegisterForm {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    role_id: string;
    formateur_id: string;
    coach_id: string;
}

interface RegisterProps {
    formateurs: {
        id: string;
        first_name: string;
        last_name: string;
    };
    coachs: {
        id: string;
        first_name: string;
        last_name: string;
    };
    roles: {
        id: string;
        name: string;
    }[];
}

export default function Create({ formateurs, coachs, roles }: RegisterProps) {
    const { data, setData, post } = useForm<RegisterForm>({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        role_id: '',
        formateur_id: '',
        coach_id: '',
    });

    const [roleId, setRoleId] = useState(null);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('users.store'));
    };

    console.log(roles);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Ajouter un utilisateur" />

            <div className="flex flex-1 flex-col items-center justify-center gap-10 rounded-xl p-4">
                <Card className="w-[70%] p-5">
                    <CardTitle size="xxl" margin="big">
                        Ajouter un utilisateur
                    </CardTitle>
                    <CardContent className="flex flex-col gap-5">
                        <form className="flex flex-col items-center justify-center gap-y-12" onSubmit={submit}>
                            <div className="flex w-[500px] flex-col">
                                <div className="flex flex-row items-center justify-center space-x-7">
                                    {roles?.map((role) => (
                                        <label key={role.id} className="flex items-center space-x-2">
                                            <input
                                                type="radio"
                                                name="role"
                                                value={role.id}
                                                onChange={(e) => {
                                                    setRoleId(parseInt(e.target.value));
                                                    setData('role_id', e.target.value);
                                                }}
                                                className="accent-[#141e66]"
                                            />
                                            <span className="text-sm">{role.name}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className="flex w-[500px] flex-row gap-6">
                                <div className="flex w-[50%] flex-col gap-1">
                                    <Label htmlFor="firstName">Nom</Label>
                                    <Input id="firstName" placeholder="Prénom" type="text" onChange={(e) => setData('first_name', e.target.value)} />
                                </div>

                                <div className="flex w-[50%] flex-col justify-end">
                                    <Input id="lastName" placeholder="Nom" type="text" onChange={(e) => setData('last_name', e.target.value)} />
                                </div>
                            </div>

                            <div className="flex w-[500px] flex-col gap-1">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="Email" type="email" onChange={(e) => setData('email', e.target.value)} />
                            </div>

                            <div className="flex w-[500px] flex-col gap-1">
                                <Label htmlFor="password">Mot de passe</Label>
                                <Input
                                    id="password"
                                    placeholder="***********"
                                    type="password"
                                    onChange={(e) => setData('password', e.target.value)}
                                />
                            </div>

                            {/*
                                Afficher uniquement si le rôle est Apprenti -> ID 2
                            */}
                            {roleId === 2 && (
                                <>
                                    <div className="flex w-[500px] flex-col gap-2">
                                        <Label htmlFor="formateur">Formateur</Label>
                                        <Select
                                            onValueChange={(value) => {
                                                setData('formateur_id', value);
                                            }}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Formateur" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    {formateurs?.map((formateur) => (
                                                        <SelectItem key={formateur.id} value={formateur.id.toString()}>
                                                            {formateur.first_name} {formateur.last_name}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="flex w-[500px] flex-col gap-2">
                                        <Label htmlFor="coach">Coach</Label>
                                        <Select
                                            onValueChange={(value) => {
                                                setData('coach_id', value);
                                            }}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Coach" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    {coachs?.map((coach) => (
                                                        <SelectItem key={coach.id} value={coach.id.toString()}>
                                                            {coach.first_name} {coach.last_name}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </>
                            )}

                            <Button className="mt-4 w-xl border-1 border-[#141e66] bg-[#141e66] hover:border-1 hover:border-[#141e66] hover:bg-white hover:text-[#141e66]">
                                Ajouter
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
