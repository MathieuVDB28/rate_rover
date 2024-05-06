'use client'

import {signIn} from "next-auth/react";
import React from "react";

export const LoginButton = () => {
    return (
        <button
            className="flex select-none rounded-lg border border-white py-3 px-6 text-center align-middle font-sans text-sm font-bold uppercase text-white transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            onClick={async () => {
                await signIn();
            }}>
            <span className="mr-2">Se connecter</span>
        </button>
    )
}