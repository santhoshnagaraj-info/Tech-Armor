"use client";

import { Search } from "lucide-react";

export default function SearchBar() {

    return (

        <div className="relative w-full">

            <Search
                className="absolute left-4 top-1/2 -translate-y-1/2"
                size={18}
            />

            <input
                placeholder="Search components..."
                className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3 pl-11 pr-4 outline-none"
            />

        </div>
    );
}