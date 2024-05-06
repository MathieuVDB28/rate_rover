import {getServerSession} from "next-auth";
import {authConfig} from "@/pages/api/auth/[...nextauth]";
import React from "react";
import HomePage from "@/pages/HomePage";
import RatePage from "@/app/rate/page";

export default async function Home() {
    const session = await getServerSession(authConfig);
    if (session) {
        return (
            <RatePage/>
        );
    }

    return (
        <HomePage/>
    );
}
