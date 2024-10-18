import Image from "next/image";
import { Dancing_Script, Pacifico } from "next/font/google";
const dancingScript = Dancing_Script({ subsets: ["latin"] });
const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });
import smoke from "@/public/general/smoke.webp";

function Hero() {
    return (
        <div
            id="hero"
            className={`${dancingScript.className} relative w-full top-0 -z-10 text-white h-[max(100vh,800px)]`}>
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 text-6xl md:text-7xl leading-snug font-bold text-center z-30"
                style={{ textShadow: "#000 2px 2px 10px" }}>
                <p className="animate-slide-from-top">Tatlı Anların Adresi</p>
                <div className="flex flex-col md:flex-row animate-slide-from-bottom">
                    <p className={`${pacifico.className} mr-4 text-primary`}>
                        <i>Mestiva</i>
                    </p>{" "}
                    Pastanesi
                </div>
            </div>

            <div className="relative h-full select-none  overflow-hidden">
                <img
                    srcSet="./general/hero-bg-1900w.webp 4000w, ./general/hero-bg-500w.webp 500w"
                    // sizes="(max-width: 600px) 480px, 800px"
                    // sizes="100vw"
                    src="./general/hero-bg-1900w.webp"
                    alt="hero"
                    className="filter blur-[3px] brightness-75 object-cover h-full w-full scale-105 min-[1999px]:scale-[0.99]"
                />
            </div>

            <div className="absolute w-full h-[300px] lg:h-[450px] -bottom-1 pointer-events-none select-none">
                <svg
                    preserveAspectRatio="none"
                    className="w-full h-full"
                    viewBox="0 0 2562.6667 720"
                    >
                    <g id="g1">
                        <path
                            style={{fill:"#f0f0f0", fillOpacity:"1"}}
                            d="M -2.174876,615.77969 C -1.5520763,558.45983 0,467.57361 0,413.81323 v -97.74615 l 11,4.09102 c 123.41546,45.89965 292.31786,97.57667 439.46912,134.45905 292.51722,73.31728 569.15928,113.86056 838.19758,122.84206 51.936,1.73382 186.0276,0.91658 228.6667,-1.39363 202.3512,-10.96351 372.9055,-38.4726 532.6667,-85.91502 63.5339,-18.86695 91.5897,-29.07218 127.1112,-46.23651 88.0246,-42.53426 147.8006,-99.41676 205.1793,-195.24738 6.5862,-11 21.1376,-36.5 32.3363,-56.66667 46.1404,-83.08939 69.1415,-117.329151 101.9499,-151.764293 11.4691,-12.0378 38.7416,-36.3957367 43.7566,-39.0804219 2.2196,-1.18819415 2.3333,16.3090209 2.3333,358.7978049 V 720 H 1282.2194 L -3.3294372,722.04063 Z"
                        />
                    </g>
                </svg>
            </div>

            {/* <div className="absolute w-full h-[450px] -bottom-1 pointer-events-none select-none">
            <Image src="./general/wave.png" alt="wave" fill priority className="text-purple-500 fill-slate-900"/>
        </div> */}

            <div className="select-none">
                <div className="absolute bottom-4 left-10 z-20 pointer-events-none">
                    <Image
                        src="./general/simit_dropshadow.webp"
                        alt="wave"
                        width={0}
                        height={0}
                        priority
                        className="w-[300px] lg:w-[450px] h-[230px] lg:h-[330px]"
                    />
                </div>

                <div className="absolute bottom-[30%] left-10 animate-smoke1 z-10 pointer-events-none">
                    <Image
                        src={smoke}
                        alt="wave"
                        width={0}
                        height={0}
                        priority
                        className="w-[230px] h-[300px]"
                    />
                </div>
                <div className="absolute bottom-[25%] left-10 animate-smoke2 z-30 pointer-events-none">
                    <Image
                        src={smoke}
                        alt="wave"
                        width={0}
                        height={0}
                        priority
                        className="w-[230px] h-[300px]"
                    />
                </div>
                <div className="absolute bottom-[25%] left-[10%] animate-smoke2 z-30 pointer-events-none">
                    <Image
                        src={smoke}
                        alt="wave"
                        width={0}
                        height={0}
                        priority
                        className="w-[230px] h-[300px]"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;
