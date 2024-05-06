import React from "react";
import Image from "next/image";
import {LoginButton} from "@/app/components/LoginButton";
import {getServerSession} from "next-auth";
import {authConfig} from "@/pages/api/auth/[...nextauth]";
import ProfileButton from "@/app/components/ProfileButton";

export default async function Header() {
    const session = await getServerSession(authConfig);

    return (
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <Image
                src="/logo.png"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
            />
            <div
                className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"
            >
            { session ? (
               <ProfileButton session={session}/>
            ) : (
               <LoginButton />
            )}
            </div>
        </div>
    );
}