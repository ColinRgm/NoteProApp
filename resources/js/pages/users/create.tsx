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
        href: 'users/create'
    }
];

interface RegisterForm {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    role_id: number;
    manager_id: number;
}

interface RegisterProps {
    users: {
        id: string;
        first_name: string;
        last_name: string;
        email: string;
        password: string;
        manager_id: number;
    }[];
    roles: {
        id: number;
        name: string;
    }[];
}

export default function Create({ users, roles }: RegisterProps) {
    const { data, setData, post } = useForm<RegisterForm>({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        role_id: '',
        formateur: '',
        manager_id: ''
    });

    const [roleId, setRoleId] = useState(null);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('users.store'));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Ajouter un utilisateur" />

            <div className="flex flex-1 flex-col items-center justify-center gap-10 rounded-xl p-4">
                <Card className="w-[70%] p-5">
                    <CardTitle size="xxl" margin="big">
                        Ajouter un utilisateur
                    </CardTitle>
                    <CardContent className="flex flex-col gap-5">
                        <form className="flex flex-col items-center justify-center gap-6" onSubmit={submit}>
                            <div className="flex w-[400px] flex-col">
                                <Label htmlFor="firstName">Prénom</Label>
                                <Input id="firstName" placeholder="Prénom" type="text"
                                       onChange={(e) => setData('first_name', e.target.value)} />
                            </div>

                            <div className="flex w-[400px] flex-col">
                                <Label htmlFor="firstName">Nom</Label>
                                <Input id="lastname" placeholder="Nom" type="text"
                                       onChange={(e) => setData('last_name', e.target.value)} />
                            </div>

                            <div className="flex w-[400px] flex-col">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="Email" type="email"
                                       onChange={(e) => setData('email', e.target.value)} />
                            </div>

                            <div className="flex w-[400px] flex-col">
                                <Label htmlFor="password">Mot de passe</Label>
                                <Input id="password" placeholder="***********" type="password"
                                       onChange={(e) => setData('password', e.target.value)} />
                            </div>



                            <div className="flex w-[400px] flex-col">
                                <Label htmlFor="coach">Rôle</Label>
                                <Select
                                    onValueChange={(value) => {
                                        setRoleId(parseInt(value));
                                        setData('role_id', value);
                                    }}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Rôle" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {roles.map((role) => (
                                                <SelectItem key={role.id} value={role.id.toString()}>
                                                    {role.name}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/*
                                Afficher uniquement si le rôle est Apprenti -> ID 2
                            */}
                            {/*{roleId === 2 && (
                                <div className="flex w-[400px] flex-col">
                                    <Label htmlFor="coach">Formateur</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Formateur" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {
                                                    users.map((user) => (
                                                        <SelectItem key={user.id} value={user.id.toString()}>
                                                            {user.first_name} {user.last_name}
                                                        </SelectItem>
                                                    ))
                                                }
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            )}*/}

                            <Button
                                className="mt-4 w-xl border-1 border-[#141e66] bg-[#141e66] hover:border-1 hover:border-[#141e66] hover:bg-white hover:text-[#141e66]">
                                Ajouter
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
