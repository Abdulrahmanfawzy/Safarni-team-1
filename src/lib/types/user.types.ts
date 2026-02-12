export interface User {
    id: number;
    name: string;
    email: string;
    phone: string | null;
    country: string | null;
    profile_picture: string | null;
    is_verified: boolean;
    status: "active" | "deactivated" | "deleted";
    created_at: string;
    updated_at: string;
}

export interface UpdateProfilePayload {
    name?: string;
    phone?: string;
    country?: string;
    profile_picture?: File;
}

export interface ChangePasswordPayload {
    current_password: string;
    new_password: string;
    new_password_confirmation: string;
}

export interface AccountSecuritySettings {
    biometric_id: boolean;
    face_id: boolean;
}
