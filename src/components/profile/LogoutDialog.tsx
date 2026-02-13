import { useNavigate } from "react-router-dom";

interface LogoutDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function LogoutDialog({ open, onOpenChange }: LogoutDialogProps) {
    const navigate = useNavigate();

    if (!open) return null;

    function handleLogout() {
        // TODO: Clear auth state / tokens
        onOpenChange(false);
        navigate("/");
    }

    return (
        <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/40"
                onClick={() => onOpenChange(false)}
            />

            {/* Dialog */}
            <div className="relative z-50 mx-4 mb-8 w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl sm:mb-0">
                <p className="text-center text-[15px] font-medium text-foreground leading-relaxed">
                    Do You Want To Register The Exit Already ?
                </p>

                <div className="mt-6 flex items-center justify-center gap-8">
                    <button
                        onClick={() => onOpenChange(false)}
                        className="px-6 py-2 text-[15px] font-semibold text-foreground transition-colors hover:text-foreground/70"
                    >
                        NO
                    </button>
                    <button
                        onClick={handleLogout}
                        className="px-6 py-2 text-[15px] font-semibold text-destructive transition-colors hover:text-destructive/70"
                    >
                        Yes
                    </button>
                </div>
            </div>
        </div>
    );
}
