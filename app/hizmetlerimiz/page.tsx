"use client";

import React, { useRef } from "react";
import { Title } from "@/app/Components/Title";
import Navbar from "../sections/Navbar";
import Image from "next/image";
import Footer from "../sections/Footer";
import Contact from "../sections/Contact";
import Services from "../sections/Services";
import { useInView } from "framer-motion";





function Page() {
    const ref = useRef(null);
    const isInView = useInView(ref, {margin: "-100px", once: true});

    return (
        <div className="m-auto max-w-[1300px]">
            <Navbar active="services" />
            <Title underline text="Hizmetlerimiz" class="pt-40" />

            <div className="mx-auto w-[90%] lg:w-8/12 mt-24 grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-16">
                <ServiceItem
                    className="animate-slide-from-bottom duration-700"
                    number="01."
                    title="Özel Gün ve Kutlama Pastaları"
                    description="Doğum günü, düğün, nişan ve diğer özel günler için size özel tasarlanmış, göz alıcı ve lezzet dolu pastalar hazırlıyoruz. Hayalinizdeki pastayı yaratmak için buradayız!"
                    imageSrc="./products/cikolata-truf.jpg"
                />

                <ServiceItem
                    className="animate-slide-from-bottom duration-700"
                    number="02."
                    title="Kahve ve Çay Keyfi"
                    description="Günlük hayatın koşturmacasında küçük bir mola verin! Taze çekilmiş kahve çeşitlerimiz ve özenle demlenmiş çaylarımızla lezzetli tatlılarımızı tamamlayacak keyifli bir deneyim sunuyoruz."
                    imageSrc="./pasta_cay.webp"
                />

                <ServiceItem
                    className="animate-slide-from-bottom duration-700"
                    number="03."
                    title="Parti ve Etkinlik Malzemeleri"
                    description="Etkinliklerinizi renklendirecek pasta süsleri, tabaklar, bardaklar ve diğer dekoratif malzemelerle ihtiyacınız olan her şeyi sağlıyoruz. Şık ve renkli bir ortam için Mestiva’ya göz atın!"
                    imageSrc="./birthday-concept.webp"
                />
            </div>

            <div ref={ref} className="mx-auto w-[90%] lg:w-8/12 mt-36 grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-16">
                <ServiceItem
                    className={`${isInView ? "translate-y-0" : "translate-y-64"} transition-all duration-700`}
                    number="04."
                    title="Diyet ve Özel Ürünler"
                    description="Glutensiz, şekersiz ve vegan gibi özel diyet ihtiyaçlarınıza uygun tatlı ve tuzlu alternatiflerimizle herkesin gönül rahatlığıyla tat almasını sağlıyoruz."
                    imageSrc="./products/ingiliz-kurabiyesi.webp"
                />

                <ServiceItem
                    className={`${isInView ? "translate-y-0" : "translate-y-80"} transition-all duration-700`}
                    number="05."
                    title="Toplu Siparişler ve Catering"
                    description="Şirket toplantıları, özel davetler veya kalabalık etkinlikler için toplu siparişlerinizi özenle hazırlıyoruz. Catering hizmetimizle organizasyonlarınızda lezzetlerimizi paylaşın!"
                    imageSrc="./products/erol-ahmed-FpnTM-OER_w-unsplash.webp"
                />

                <ServiceItem
                    className={`${isInView ? "translate-y-0" : "translate-y-96"} transition-all duration-700`}
                    number="06s."
                    title="Tatlı ve Tuzlu Atıştırmalıklar"
                    description="Tatlı ve tuzlu atıştırmalıklarımızla açlığınızı lezzetli bir mola ile bastırın. Günlük taze börekler, kurabiyeler ve mini sandviçler ile her öğüne uygun atıştırmalıklar Mestiva’da!"
                    imageSrc="./products/nina-plobner-IxVSmiQKsH8-unsplash.webp"
                />
            </div>

            <Contact />
            <Footer />
        </div>
    );
}

type ServiceItemProps = {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt?: string;
    className?: string;
    number: string;
};


function ServiceItem({
    title,
    description,
    imageSrc,
    imageAlt,
    className,
    number,
}: ServiceItemProps) {
    return (
        <div className={`${className} group border-b-2 border-slate-300`}>
            <div className="relative h-[400px]">
                <div className="-z-10 relative h-full rounded-t-2xl overflow-hidden">
                    <Image
                        src={imageSrc}
                        alt={imageAlt ? imageAlt : title}
                        fill
                        className={`object-cover group-hover:scale-[1.02] transition-all duration-500 rounded-t-2xl`}
                    />
                </div>
                <div className="-z-10 group-hover:scale-[1.03] w-[calc(100%+4px)] h-[200px] absolute -left-[2px] -bottom-[100px] bg-background -skew-y-6 group-hover:-skew-y-0 transition-all duration-700 origin-top-left"></div>
            </div>
            <div className="-mt-20">
                <p>{number}</p>
                <h2 className="text-2xl mt-2">{title}</h2>
                <p className="my-2 ">{description}</p>
            </div>
        </div>
    );
}

export default Page;
