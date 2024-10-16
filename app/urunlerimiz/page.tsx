"use client";

import React, { useRef } from "react";
import Navbar from "../sections/Navbar";
import SubTitle, { Title } from "../Components/Title";
import Image from "next/image";
import Footer from "../sections/Footer";
import "./style.css";
import { useInView } from "framer-motion";

// import type { Metadata } from "next";

// export const metadata: Metadata = {
//     title: "Ürünlerimiz | Mestiva Pastanesi",
//   };

const hamurisleri = [
    {
        name: "Çikolatalı Puf",
        imgSrc: "/products/cikopuf.jpg",
    },
    {
        name: "Peynirli Milföy",
        imgSrc: "/products/peynirlimilfoy.jpg",
    },
    {
        name: "Katmer",
        imgSrc: "/products/katmer.jpg",
    },
    {
        name: "Ekler",
        imgSrc: "/products/ekler.webp",
    },
    {
        name: "Tahinli Çörek",
        imgSrc: "/products/tahinli-corek.jpg",
    },
];

const tuzlukurabiyeler = [
    {
        name: "Tuzlu Klasik",
        imgSrc: "/products/tuzlu-klasik.webp",
    },
    {
        name: "Dereotlu",
        imgSrc: "/products/dereotlu.webp",
    },
    {
        name: "Pizza Kurabiye",
        imgSrc: "/products/pizza-kurabiye.jpg",
    },
    {
        name: "Çörekotlu",
        imgSrc: "/products/corekotlu.jpg",
    },
    {
        name: "Maydanozlu",
        imgSrc: "/products/maydanozlu.webp",
    },
];

const tatlikurabiyeler = [
    {
        name: "Un Kurabiyesi",
        imgSrc: "/products/un-kurabiyesi.jpg",
    },
    {
        name: "Marmelatlı Kurabiye",
        imgSrc: "/products/marmelatli-kurabiye.jpg",
    },
    {
        name: "İngiliz Kurabiyesi",
        imgSrc: "/products/ingiliz-kurabiyesi.webp",
    },
    {
        name: "Elmalı Kurabiye",
        imgSrc: "/products/elmalı.jpg",
    },
    {
        name: "Portakallı Kurabiye",
        imgSrc: "/products/portakalli-kurabiye.webp",
    },
];

const ekmekler = [
    {
        name: "Hamburger Ekmeği",
        imgSrc: "/products/hamburger-ekmegi.webp",
    },
    {
        name: "Pirinç Ekmeği",
        imgSrc: "/products/pirinc-ekmek.webp",
    },
    {
        name: "Tam Tahıllı Ekmek",
        imgSrc: "/products/tam-tahilli.jpg",
    },
    {
        name: "Baget Ekmek",
        imgSrc: "/products/baguette.jpg",
    },
    {
        name: "Sandviç Ekmeği",
        imgSrc: "/products/sandwich.jpg",
    },
];

const serbetliler = [
    {
        name: "Soğuk Baklava",
        imgSrc: "/products/sogukbaklava.webp",
    },
    {
        name: "Fıstıklı Baklava",
        imgSrc: "/products/Fistikli-Baklava.webp",
    },
    {
        name: "Şekerpare",
        imgSrc: "/products/sekerpare-1.webp",
    },
    {
        name: "Revani",
        imgSrc: "/products/revani.webp",
    },
    {
        name: "Güllaç",
        imgSrc: "/products/gullac.webp",
    },
];

const pastalar = [
    {
        name: "Çilekli Pasta",
        imgSrc: "/products/cilekli.jpg",
    },
    {
        name: "Çikolatalım",
        imgSrc: "/products/cikolatalım.jpg",
    },
    {
        name: "Yaban Mersinli Pasta",
        imgSrc: "/products/yabanmersini.webp",
    },
    {
        name: "Çikolatalı Trüf Pasta",
        imgSrc: "/products/cikolata-truf.jpg",
    },
    {
        name: "Bademli Pasta",
        imgSrc: "/products/bademli.webp",
    },
];

function page() {
    return (
        <div className="m-auto max-w-[1300px]">
            <Navbar active="products" />
            <Title text="Ürünlerimiz" underline class="pt-40" />
            <p className="w-fit m-auto text-xl mt-4">
                Daha fazla ürün için pastanemize bekleriz
            </p>

            <div className="max-w-[1140px] m-auto">
                <ProductGroup title="Hamur İşleri" products={hamurisleri} />
                <ProductGroup
                    title="Tuzlu Kurabiyeler"
                    products={tuzlukurabiyeler}
                />
                <ProductGroup
                    title="Tatlı Kurabiyeler"
                    products={tatlikurabiyeler}
                />
                <ProductGroup title="Ekmekler" products={ekmekler} />
                <ProductGroup
                    title="Şerbetli Tatlılar"
                    products={serbetliler}
                />
                <ProductGroup title="Pastalar" products={pastalar} />
            </div>

            <Footer />
        </div>
    );
}

function ProductGroup(props: { title: string; products: Object }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-200px", once: true });

    return (
        <div className={`mt-16 ml-4 lg:ml-0`} ref={ref}>
            <SubTitle text={props.title} underline />
            <div className="flex mt-4 gap-4 overflow-x-scroll lg:overflow-hidden">
                {Object.values(props.products).map((product, key) => {
                    return (
                        <Product
                            key={key}
                            imgSrc={product.imgSrc}
                            name={product.name}
                            className={`${
                                isInView
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-64 opacity-0"
                            }`}
                            style={{
                                transition: "all",
                                transitionDuration: `1000ms`,
                                transitionDelay: `${key * 50}ms`,
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}

function Product(props: {
    name: string;
    imgSrc: string;
    className?: string;
    style: {};
}) {
    return (
        <div
            className={`relative w-full min-w-[250px] lg:min-w-max bg-slate-20 overflow-hidden ${props.className}`}
            style={props.style}>
            <div className="relative h-[300px]">
                <Image
                    src={props.imgSrc}
                    alt={props.name}
                    fill
                    className="rounded-2xl object-cover"
                />
            </div>
            <div className="py-2 px-4 text-sm font-semibold flex items-center justify-center text-center absolute left-0 top-0 bg-background rounded-br-2xl inverted-border-radius">
                {props.name}
            </div>
        </div>
    );
}

export default page;
