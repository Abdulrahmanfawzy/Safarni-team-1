import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    User,
    Settings,
    ClipboardList,
    Globe,
    LogOut,
    ChevronRight,
    Camera,
} from "lucide-react";
import { LogoutDialog } from "../../components/profile/LogoutDialog";
import { MOCK_USER } from "../../lib/constants/mockData";

const menuItems = [
    {
        icon: User,
        label: "Personal Info",
        path: "/profile/personal-info",
    },
    {
        icon: Settings,
        label: "Account & Security",
        path: "/profile/account-security",
    },
    {
        icon: ClipboardList,
        label: "My Booking",
        path: "/profile/my-booking",
    },
    {
        icon: Globe,
        label: "App Language",
        path: "/profile/language",
    },
];

export function ProfilePage() {
    const navigate = useNavigate();
    const [logoutOpen, setLogoutOpen] = useState(false);
    const user = MOCK_USER;
    const hasProfileImage = user.profile_picture && user.profile_picture.trim() !== "";

    return (
        <div className="flex min-h-screen flex-col bg-white">
            {/* Avatar + user info */}
            <div className="flex flex-col items-center pb-6 pt-10">
                <div className="relative">
                    <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-primary/20 bg-muted">
                        {hasProfileImage ? (
                            <img
                                src={user.profile_picture ?? undefined}
                                alt={user.name}
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300">
                                <User className="h-10 w-10 text-slate-400" />
                            </div>
                        )}
                    </div>
                    <button
                        className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-primary/10 text-primary"
                        aria-label="Change profile picture"
                    >
                        <Camera className="h-3.5 w-3.5" />
                    </button>
                </div>
                <h2 className="mt-3 text-lg font-semibold text-foreground">
                    {user.name}
                </h2>
                <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>

            {/* Menu items */}
            <div className="flex flex-col px-4">
                {menuItems.map((item) => (
                    <button
                        key={item.label}
                        onClick={() => {
                            navigate(item.path);
                            console.log("path:" + item.path);
                        }}
                        className="flex items-center gap-4 border-b border-border/50 px-2 py-4 transition-colors hover:bg-muted/50"
                    >
                        <item.icon className="h-5 w-5 text-foreground/70" />
                        <span className="flex-1 text-left text-[15px] font-medium text-foreground">
                            {item.label}
                        </span>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </button>
                ))}

                {/* Logout */}
                <button
                    onClick={() => setLogoutOpen(true)}
                    className="flex items-center gap-4 px-2 py-4 transition-colors hover:bg-muted/50"
                >
                    <LogOut className="h-5 w-5 text-destructive" />
                    <span className="flex-1 text-left text-[15px] font-medium text-destructive">
                        Logout
                    </span>
                </button>
            </div>

            <LogoutDialog open={logoutOpen} onOpenChange={setLogoutOpen} />
        </div>
    );
}
