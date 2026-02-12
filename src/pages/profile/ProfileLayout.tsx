import { Outlet } from "react-router-dom";

export function ProfileLayout() {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Outlet />
        </div>
    );
}