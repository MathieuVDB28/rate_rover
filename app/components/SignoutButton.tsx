'use client'

import {signOut} from "next-auth/react";
import React from "react";

export const SignoutButton = () => {
    return (
        <button
            onClick={async () => {
                await signOut();
            }}
            className="text-2xl md:text-3xl font-extrabold leading-tighter tracking-tighter border-4 p-2 bg-right-bottom hover:bg-blue-500 transition-all duration-300 ease-in-out">
            Déconnexion
        </button>
    )
}