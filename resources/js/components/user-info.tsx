import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useInitials } from '@/hooks/use-initials';
import { type User } from '@/types';

export function UserInfo({ user, showEmail = false }: { user: User; showEmail?: boolean }) {
    const getInitials = useInitials();

    if (!user) {
        return <div className="text-sm text-white">Utilisateur inconnu</div>;
    }

    return (
        <>
            <Avatar className="h-8 w-8 overflow-hidden rounded-full">
                <AvatarImage src={user.avatar || ''} alt={user.first_name || 'Avatar'} />
                <AvatarFallback className="rounded-lg bg-white text-black dark:bg-neutral-700 dark:text-white">
                    {getInitials(`${user.first_name ?? ''} ${user.last_name ?? ''}`)}
                </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight text-white">
                <span className="truncate font-medium">
                    {user.first_name} {user.last_name}
                </span>
                {showEmail && <span className="text-muted-foreground truncate text-xs">{user.email}</span>}
            </div>
        </>
    );
}
