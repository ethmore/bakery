"use client";
import { prefix } from "@/prefix";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Navbar(props:{active?: 'main' | 'products' | 'about' | 'services' | 'contact'}) {
    const [isMenuActive, setIsMenuActive] = useState(false);

    return (
        <div className="fixed left-0 z-50 w-full h-[100px] backdrop-blur-xl backdrop-brightness-50 text-lg font-semibold text-white flex items-center justify-center">
            <div className="flex justify-center items-center gap-8">
                <div className="hidden md:flex justify-end justify-self-end gap-8 w-[40%]">
                    <Link className={`${props.active === 'main' ? 'text-primary' : null} hover:scale-105 duration-200`} href="/">Ana Sayfa</Link>
                    <Link className={`${props.active === 'products' ? 'text-primary' : null} hover:scale-105 duration-200`} href="/urunlerimiz" >Ürünlerimiz</Link>
                </div>

                <Link className="relative w-[100px] h-[100px] select-none  hover:scale-105 duration-200" href="/">
                    <Image
                        src={`./Brot-lineart.png`}
                        alt="logo"
                        fill
                        className="object-cover"
                    />
                </Link>

                <div className="hidden md:flex justify-start justify-self-start gap-8 w-[40%]">
                    <Link className={`${props.active === 'about' ? 'text-primary' : null} hover:scale-105 duration-200`} href="/hakkimizda">Hakkımızda</Link>
                    <Link className={`${props.active === 'services' ? 'text-primary' : null} hover:scale-105 duration-200`} href="/hizmetlerimiz">Hizmetlerimiz</Link>
                </div>
            </div>

            <Link className="hidden md:block absolute top-1/2 -translate-y-1/2 bg-primary text-black rounded-lg hover:scale-110 duration-200 right-4 md:right-10 px-3 md:px-4 p-2 text-[1rem]" href="/#contact">Bize Ulaşın</Link>


            <div className="md:hidden absolute left-0 w-8 h-6 flex flex-col gap-[6px] ml-6" onClick={()=>setIsMenuActive(!isMenuActive)}>
                <div className={`w-8 h-[3px] bg-background transition-all duration-300 ${isMenuActive? "-rotate-[315deg] translate-y-[9px]" : ""}`}></div>
                <div className={`w-8 h-[3px] bg-background transition-all ${isMenuActive? "opacity-0" : ""}`}></div>
                <div className={`w-8 h-[3px] bg-background transition-all duration-300 ${isMenuActive? "rotate-[315deg] -translate-y-[9px]" : ""}`}></div>
            </div>

            <div className={`absolute left-0 flex-col gap-4 bg-background text-black p-8 w-full items-center transition-all duration-300 flex ${isMenuActive? "top-[100px]" : "-top-[500px]"}`}>
                <Link className={`${props.active === 'main' ? 'text-primary' : null} hover:scale-105 duration-200`} href="/">Ana Sayfa</Link>
                <Link className={`${props.active === 'products' ? 'text-primary' : null} hover:scale-105 duration-200`} href="/urunlerimiz" >Ürünlerimiz</Link>
                <Link className={`${props.active === 'about' ? 'text-primary' : null} hover:scale-105 duration-200`} href="/hakkimizda">Hakkımızda</Link>
                <Link className={`${props.active === 'services' ? 'text-primary' : null} hover:scale-105 duration-200`} href="/hizmetlerimiz">Hizmetlerimiz</Link>
                <Link className="bg-primary text-black rounded-lg hover:scale-110 duration-200 right-4 md:right-10 px-3 md:px-4 p-2 text-[1rem]" href="/#contact">Bize Ulaşın</Link>
            </div>
        </div>
    );
}

export default Navbar;
