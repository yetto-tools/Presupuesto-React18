import React from "react";
import { Budget } from "./Bugdet";

export const Header = ({budget, setBudget}) =>{

    return (
        <header className="text-white">
            <h1 className="my-5 text-5xl font-semibold">Budget</h1>
        </header>
    )
}