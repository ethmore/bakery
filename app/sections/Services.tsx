import Image from "next/image";
import { Title } from "../Components/Title";

const services = [
    {
        imgSrc: "/services/birthday-cake-svgrepo-com.svg",
        imgAlt: "Kutlama Pastaları",
        title: "Kutlama Pastaları",
        description:
            "Kişiye özel pasta ve tatlılarımızla unutulmaz bir anı yaşatın.",
    },
    {
        imgSrc: "/services/coffee-to-go-svgrepo-com.svg",
        imgAlt: "Kahve ve Çay Keyfi",
        title: "Kahve ve Çay Keyfi",
        description:
            "Mestiva'da keyifli bir kahve veya çay deneyimi de bulabilirsiniz.",
    },
    {
        imgSrc: "/services/party-svgrepo-com.svg",
        imgAlt: "Parti Malzemeleri",
        title: "Parti Malzemeleri",
        description:
            "Parti veya etkinlikleriniz için ihtiyacınız olan tüm malzemeleri Mestiva'dan temin edebilirsiniz.",
    },

    {
        imgSrc: "/services/vegan-svgrepo-com.svg",
        imgAlt: "Diyet ve Özel Ürünler",
        title: "Diyet ve Özel Ürünler",
        description:
            "Glutensiz, vegan veya diğer özel diyet ihtiyaçlarınıza uygun seçeneklerimizle, herkesin lezzetli bir tat almasını sağlıyoruz.",
    },
    {
        imgSrc: "/services/small-crowd-people-public-men-svgrepo-com.svg",
        imgAlt: "Toplu Siparişler",
        title: "Toplu Siparişler",
        description:
            "Özel etkinlikleriniz, toplantılarınız veya kalabalık davetleriniz için toplu siparişlerinizi büyük bir özenle hazırlıyoruz.",
    },
    {
        imgSrc: "/services/cookie-svgrepo-com.svg",
        imgAlt: "Tatlı ve Tuzlu Atıştırmalıklar",
        title: "Tatlı ve Tuzlu Atıştırmalıklar",
        description:
            "Tuzlu kurabiyeler, sandviçler, börekler ve daha fazlasıyla açlığınızı hafifletin ve lezzetli bir mola verin.",
    },
];

function Services() {
    return (
        <div id="services" className="mt-40 scroll-mt-40">
            <Title text="Hizmetlerimiz" underline/>
            <div className="max-w-[1140px] m-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-y-10">
                {Object.values(services).map((service, key) => {
                    return (
                        <div key={key} className="flex flex-col items-center text-center">
                            <div className="relative h-24 w-24 rounded-full overflow-hidden border-black border-2">
                                <Image
                                    src={service.imgSrc}
                                    alt={service.imgAlt}
                                    fill
                                    className="p-4 group-hover:scale-110 duration-75 object-cover"
                                />
                            </div>
            
                            <h2 className="text-xl font-semibold mt-4">
                                {service.title}
                            </h2>
                            <div className="px-20 mt-4">{service.description}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Services;
