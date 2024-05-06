import {getServerSession} from "next-auth";
import {authConfig} from "@/pages/api/auth/[...nextauth]";
import {SignoutButton} from "@/app/components/SignoutButton";
import Link from "next/link";
import React from "react";

export default async function ProfilePage(){
    const session = await getServerSession(authConfig);

    return (
        <div className="text-center flex-grow mt-40">
            <div className="flex flex-col justify-center">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter">Bonjour {session.user.name} !</h1>
                    <div className="flex flex-row content-between justify-between gap-40 mt-10">
                        <Link
                            href={{
                                pathname: '/favorite-currencies'
                            }}
                        >
                            <button
                                className="text-2xl md:text-3xl font-extrabold leading-tighter tracking-tighter border-4 p-2 bg-right-bottom hover:bg-blue-500 transition-all duration-300 ease-in-out">
                                Suivez vos devises favories
                            </button>
                        </Link>
                        <SignoutButton/>
                    </div>
                </div>
            </div>
        </div>
    );
}