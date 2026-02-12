import type { LucideIcon } from "lucide-react";

export interface Suggestion {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon | React.ReactNode;
}

