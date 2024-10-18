import { Title } from "@/app/Components/Title";
import React from "react";
import Navbar from "../sections/Navbar";
import Image from "next/image";
import Footer from "../sections/Footer";
import Contact from "../sections/Contact";

function page() {
    return (
        <div className="m-auto max-w-[1300px]">
            <Navbar active="about" />
            <Title text="Hakkımızda" underline class="pt-40" />
            <div className="grid grid-cols-1 lg:grid-cols-2 mx-8 lg:mx-auto lg:w-7/12 mt-12 lg:mt-24 lg:gap-24">
                <div className="order-2 lg:order-1 animate-slide-from-left duration-700">
                    <AboutSection
                        className="mt-0"
                        title="Mestiva'ya Hoş Geldiniz!"
                        description="Merhaba! Mestiva ailesi olarak, gönüllere mutluluk katan
                        taptaze tatlar sunmak için buradayız. Küçük bir
                        pastaneyiz, ama yüreğimizdeki büyük sevgiyle her gün
                        daha fazla kişiye ulaşmanın heyecanını yaşıyoruz."
                    />

                    <AboutSection
                        title="Hikayemiz"
                        description="Mestiva, lezzet dolu bir hayalin gerçeğe dönüştüğü yer.
                        Küçük bir mutfakta başlayan bu serüven, sizlerin
                        desteğiyle kocaman bir aileye dönüştü. Her şeyin en
                        tazesini ve en doğalını kullanarak, pastalarımızdan
                        kurabiyelerimize kadar her üründe sevgi ve özeni
                        hissetmenizi istiyoruz. Bizim için en önemli şey,
                        misafirlerimizin yüzündeki o mutlu gülümseme!"
                    />

                    <AboutSection
                        title="Neden Mestiva?"
                        description="Çünkü burası sadece bir pastane değil, sizin lezzet
                        durağınız. Her gün özenle hazırladığımız ürünlerle
                        sizlere bir anlık mutluluk sunmayı hedefliyoruz. Günlük
                        hayatın koşturmacası içinde bir mola vermek, sıcak bir
                        kahve eşliğinde bir dilim pastanın tadını çıkarmak için
                        buyrun, bekleriz."
                    />
                </div>

                <div className="order-1 lg:order-2 relative w-full h-[300px] lg:h-auto animate-slide-from-right duration-700">
                    <Image
                        src="./general/holding_tray_2.webp"
                        alt="hakkimizda"
                        fill
                        className="object-cover rounded-2xl lg:rounded-[30%70%71%29%/24%30%70%76%] object-[0px_-200px] lg:object-center"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 mx-8 lg:mx-auto lg:w-7/12 mt-52 gap-8">
                <div className="relative w-full h-[300px] lg:h-auto">
                    <Image
                        src="./general/in_shop.webp"
                        alt="hakkimizda"
                        fill
                        className="object-cover rounded-2xl lg:rounded-[62%38%37%63%/35%52%48%65%]"
                    />
                </div>

                <div>
                    <AboutSection
                        className="mt-0"
                        title="Değerlerimiz"
                        description="Mestiva olarak, en büyük değerimizin samimiyet olduğunu
                        düşünüyoruz. Lezzetlerimizde olduğu kadar, hizmetimizi
                        de sıcak ve samimi tutmaya özen gösteriyoruz. Kalite ve
                        müşteri memnuniyeti bizim için her zaman öncelikli.
                        Sizlere en iyi deneyimi sunabilmek için sürekli
                        gelişiyor, öğreniyoruz."
                    />

                    <AboutSection
                        title="Bizimle Tanışın!"
                        description="Sizleri Mestiva’ya bekliyoruz! Pastalarımızı denemek,
                        bir fincan kahvemizi içmek veya sadece sıcak bir sohbet
                        için her zaman kapımız açık. Bizim için her müşteri bir
                        misafir değil, ailemizin bir parçası. Siz de bize
                        katılın ve birlikte bu lezzet yolculuğunun tadını
                        çıkaralım!"
                    />
                </div>
            </div>

            <Contact />
            <Footer />
        </div>
    );
}

type AboutSectionProps = {
    title: string;
    description: string;
    className?: string;
};

function AboutSection({ title, description, className }: AboutSectionProps) {
    return (
        <div className={`mt-12 ${className}`}>
            <h2
                className="text-center text-2xl font-semibold  mb-4">
                {title}
            </h2>
            <p>{description}</p>
        </div>
    );
}

export default page;
