import { useState } from "react";
import { PageHeader } from "../../components/profile/PageHeader";
import { ChevronRight } from "lucide-react";

interface ToggleSettingProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

function ToggleSetting({ label, checked, onChange }: ToggleSettingProps) {
    return (
        <div className="flex items-center justify-between px-1 py-4">
            <span className="text-[15px] font-medium text-foreground">{label}</span>
            <button
                role="switch"
                aria-checked={checked}
                onClick={() => onChange(!checked)}
                className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full transition-colors ${checked ? "bg-primary" : "bg-muted"
                    }`}
            >
                <span
                    className={`inline-block h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${checked ? "translate-x-6" : "translate-x-1"
                        }`}
                />
            </button>
        </div>
    );
}

interface LinkSettingProps {
    title: string;
    description: string;
    destructive?: boolean;
}

function LinkSetting({ title, description, destructive }: LinkSettingProps) {
    return (
        <button className="flex items-center gap-3 py-4 text-left">
            <div className="flex-1">
                <p
                    className={`text-[15px] font-medium ${destructive ? "text-destructive" : "text-foreground"
                        }`}
                >
                    {title}
                </p>
                <p className="mt-0.5 text-[13px] leading-snug text-muted-foreground">
                    {description}
                </p>
            </div>
            <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground" />
        </button>
    );
}

export function AccountSecurityPage() {
    const [biometricId, setBiometricId] = useState(false);
    const [faceId, setFaceId] = useState(false);

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <PageHeader title="Account & Security" />

            <div className="flex flex-col px-6">
                {/* Toggle settings */}
                <ToggleSetting
                    label="Biometric ID"
                    checked={biometricId}
                    onChange={setBiometricId}
                />

                <ToggleSetting
                    label="Face ID"
                    checked={faceId}
                    onChange={setFaceId}
                />

                {/* Divider */}
                <div className="my-1 border-t border-border/40" />

                {/* Link settings */}
                <LinkSetting
                    title="Device Management"
                    description="Manage your account on the various devices you own."
                />

                <div className="border-t border-border/40" />

                <LinkSetting
                    title="Deactivate Account"
                    description="Temporarily deactivate your account. Easily reactivate when you're ready."
                />

                <div className="border-t border-border/40" />

                <LinkSetting
                    title="Delete Account"
                    description="Permanently remove your account and data from Tripmate. Proceed with caution."
                    destructive
                />
            </div>
        </div>
    );
}
