import Image from "next/image"
import { Dancing_Script, Pacifico } from "next/font/google"
const dancingScript = Dancing_Script({subsets: ['latin']})
const pacifico = Pacifico({subsets: ['latin'], weight: ['400']})
import smoke from "@/public/smoke.png"
import { prefix } from "@/prefix"

function Hero() {
  return (
    <div id="hero" className={`${dancingScript.className} relative w-full top-0 -z-10 text-white`}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 text-6xl md:text-7xl leading-snug font-bold text-center z-30" style={{ textShadow: "#000 2px 2px 10px" }}>
            <p className="animate-slide-from-top">Tatlı Anların Adresi</p>
            <div className="flex flex-col md:flex-row animate-slide-from-bottom"><p className={`${pacifico.className} mr-4 text-primary`}><i>Mestiva</i></p> Pastanesi</div>
        </div>

        <div className="relative min-h-[min(100vh,900px)] select-none  overflow-hidden">
            <Image src={`./bakery/louis-hansel-KEV9F9nHVrw-unsplash.webp`} alt="hero" fill priority className="filter blur-[3px] brightness-75 object-cover scale-105 min-[1999px]:scale-[0.99]"/>
        </div>

        <div className="absolute w-full h-[450px] -bottom-1 pointer-events-none select-none">
            <Image src={`/wave.png`} alt="wave" fill priority className="text-purple-500 fill-slate-900"/>
        </div>
        
        <div className="select-none">
            <div className="absolute bottom-4 left-10 z-20 pointer-events-none">
                <Image src={`${prefix}/simit_dropshadow.webp`} alt="wave" width={0} height={0} priority className="w-[450px] h-[330px]"/>
            </div>
    
            <div className="absolute bottom-[30%] left-10 animate-smoke1 z-10 pointer-events-none">
                <Image src={smoke} alt="wave" width={0} height={0} priority className="w-[230px] h-[300px]"/>
            </div>
            <div className="absolute bottom-[25%] left-10 animate-smoke2 z-30 pointer-events-none">
                <Image src={smoke} alt="wave" width={0} height={0} priority className="w-[230px] h-[300px]"/>
            </div>
            <div className="absolute bottom-[25%] left-[10%] animate-smoke2 z-30 pointer-events-none">
                <Image src={smoke} alt="wave" width={0} height={0} priority className="w-[230px] h-[300px]"/>
            </div>
        </div>
    </div>
  )
}

export default Hero