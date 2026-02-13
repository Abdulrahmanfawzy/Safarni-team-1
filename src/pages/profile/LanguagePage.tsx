import { useState } from "react";
import { Check } from "lucide-react";
import { PageHeader } from "../../components/profile/PageHeader";

const languages = [
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "ar", label: "العربية" },
];

export function LanguagePage() {
    const [selectedLanguage, setSelectedLanguage] = useState("en");

    return (
        <div className="flex min-h-screen flex-col bg-white px-6 pt-4">
            <PageHeader title="App Language" />

            <div className="overflow-hidden rounded-xl border border-border">
                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => setSelectedLanguage(lang.code)}
                        className="flex w-full items-center justify-between border-b border-border/50 px-4 py-4 text-left transition-colors hover:bg-muted/50 last:border-b-0"
                    >
                        <span className="text-[15px] font-medium text-foreground">
                            {lang.label}
                        </span>

                        {selectedLanguage === lang.code && (
                            <Check className="h-5 w-5 text-primary" />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}
