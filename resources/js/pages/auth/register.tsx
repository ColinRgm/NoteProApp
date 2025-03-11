import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler, useEffect, useState } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AuthLayout from '@/layouts/auth-layout';
import AppLayout from '@/layouts/app-layout';
import { Card } from '@/components/ui/card';

interface RegisterForm {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

interface Role {
    id: number,
    type: string
}

export default function Register() {

    const [roles, setRoles] = useState<Role[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/roles')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données...');
                }
                return response.json();
            })
            .then(data => {
                setRoles(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Erreur: ', error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const { data, setData, post, processing, errors, reset } = useForm<RegisterForm>({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation')
        });
    };

    if (loading)
        return (
            <AppLayout>
                <div className="flex flex-1 flex-col items-center justify-center gap-10 rounded-xl p-4">
                    <Card className="w-[70%] p-5">
                        <p>Chargement...</p>
                    </Card>
                </div>
            </AppLayout>
        );
    else if (error)
        return (
            <AppLayout>
                <div className="flex flex-1 flex-col items-center justify-center gap-10 rounded-xl p-4">
                    <Card className="w-[70%] p-5">
                        <p>Erreur: {error}</p>
                    </Card>
                </div>
            </AppLayout>
        );
    else {
        return (
            <AuthLayout title="Créer un compte" description="Entrez vos informations pour la création de votre compte">
                <Head title="Register" />
                <form className="flex flex-col gap-6" onSubmit={submit}>
                    <div className="grid gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="first_name">Prénom</Label>
                            <Input
                                id="first_name"
                                type="text"
                                required
                                tabIndex={1}
                                autoComplete="first_name"
                                value={data.first_name}
                                onChange={(e) => setData('first_name', e.target.value)}
                                disabled={processing}
                                placeholder="Prénom"
                            />
                            <InputError message={errors.first_name} className="mt-2" />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="last_name">Nom</Label>
                            <Input
                                id="last_name"
                                type="text"
                                required
                                autoFocus
                                tabIndex={2}
                                autoComplete="last_name"
                                value={data.last_name}
                                onChange={(e) => setData('last_name', e.target.value)}
                                disabled={processing}
                                placeholder="Nom"
                            />
                            <InputError message={errors.last_name} className="mt-2" />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                required
                                tabIndex={3}
                                autoComplete="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                disabled={processing}
                                placeholder="email@jobtrek.ch"
                            />
                            <InputError message={errors.email} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="password">Mot de passe</Label>
                            <Input
                                id="password"
                                type="password"
                                required
                                tabIndex={4}
                                autoComplete="new-password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                disabled={processing}
                                placeholder="Mot de passe"
                            />
                            <InputError message={errors.password} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="password_confirmation">Confirmer mot de passe</Label>
                            <Input
                                id="password_confirmation"
                                type="password"
                                required
                                tabIndex={5}
                                autoComplete="new-password"
                                value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                disabled={processing}
                                placeholder="Confirmer mot de passe"
                            />
                            <InputError message={errors.password_confirmation} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="role">Rôle</Label>
                            <Select>
                                <SelectTrigger className="w-[400px]">
                                    <SelectValue placeholder="Rôle" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {
                                            roles.map(role => (
                                                <SelectItem key={role.id} value={role.id.toString()}>
                                                    {role.type}
                                                </SelectItem>
                                            ))
                                        }
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        <Button
                            type="submit"
                            className="mt-2 w-full border-1 border-[#141e66] bg-[#141e66] hover:border-1 hover:border-[#141e66] hover:bg-white hover:text-[#141e66]"
                            tabIndex={5}
                            disabled={processing}
                        >
                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                            Créer un compte
                        </Button>
                    </div>

                    <div className="text-muted-foreground text-center text-sm">
                        Vous avez déjà un compte ? {' '}
                        <TextLink href={route('login')} tabIndex={6}>
                            Se connecter
                        </TextLink>
                    </div>
                </form>
            </AuthLayout>
        );
    }
}
