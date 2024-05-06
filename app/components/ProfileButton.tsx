'use client'

import {User} from "iconoir-react";
import React from "react";
import Link from 'next/link';

type User = {
    name: string;
    email: string;
    image: string;
};

type Session = {
    user: User;
};

const ProfileButton = ({ session }: { session: Session}) => {
    return (
        <button className="hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            <Link
                href={{
                    pathname: '/profile'
                }}
                className="flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
            >
                <img src={session.user.image}  alt="Profile picture" className="rounded-full w-20 h-auto"/>
            </Link>
        </button>
    )
}

export default ProfileButton;