import { createContext, ReactNode, useState } from "react";
import { PassThrough } from "stream";

type AuthContextData = {
    user: UserProps;
    IsAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>
}
type UserProps = {
    id: string;
    name: string;
    email: string;
}

type SignInProps = {
    password: string;
    email: string;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps>()
    const IsAuthenticated = !!user;

    async function signIn({ email, password }: SignInProps) {
        console.log("DADOS PARA LOGAR", email)
        console.log("SENHA", password)
    }

    return (
        <AuthContext.Provider value={{ user, IsAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}