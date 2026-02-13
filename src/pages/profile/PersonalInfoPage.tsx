import { PageHeader } from "../../components/profile/PageHeader";
import { User, Mail, MapPin, Phone } from "lucide-react";
import { MOCK_USER } from "../../lib/constants/mockData";

interface InfoFieldProps {
    label: string;
    value: string;
    icon: React.ElementType;
}

function InfoField({ label, value, icon: Icon }: InfoFieldProps) {
    return (
        <div className="space-y-1.5">
            <label className="text-sm text-muted-foreground">{label}</label>
            <div className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3">
                <Icon className="h-5 w-5 text-muted-foreground/70" />
                <span className="text-[15px] text-foreground">{value}</span>
            </div>
        </div>
    );
}

export function PersonalInfoPage() {
    const user = MOCK_USER;
    console.log("PersonalInfoPage --> " + user);

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <PageHeader title="Personal Information" />

            <div className="flex flex-col gap-5 px-6 pt-4">
                <InfoField label="Name" value={user.name} icon={User} />
                <InfoField
                    label="Email"
                    value={user.email}
                    icon={Mail}
                />
                <InfoField
                    label="Country"
                    value={user.country ?? ""}
                    icon={MapPin}
                />
                <InfoField
                    label="Phone Number"
                    value={user.phone ?? ""}
                    icon={Phone}
                />
            </div>
        </div>
    );
}
