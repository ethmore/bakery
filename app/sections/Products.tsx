import Image from "next/image"
import {Title} from "../Components/Title"
import Link from "next/link"
import './style.css'

function Products() {
  return (
    <div id="products" className="mt-40 scroll-mt-40">
        <Title text="Ürünlerimiz" underline/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit m-auto gap-y-14 gap-x-10 lg:gap-x-20 mt-10">
        {/* <div className="flex flex-col md:flex-row flex-wrap justify-center w-full lg:w-[60%] m-auto gap-y-14 gap-x-10 lg:gap-x-20 mt-10"> */}
            <Product title="Hamur İşleri" href="/urunlerimiz" imgSrc="./products/banner/kruvasan.webp" imgAlt="product1"/>
            <Product title="Tuzlular" href="/urunlerimiz" imgSrc="./products/banner/pizza.webp" imgAlt="product2"/>
            <Product title="Tatlılar" href="/urunlerimiz" imgSrc="./products/banner/tatli.webp" imgAlt="product4"/>
            <Product title="Ekmekler" href="/urunlerimiz" imgSrc="./products/banner/ekmek.webp" imgAlt="product5"/>
            <Product title="Şerbetliler" href="/urunlerimiz" imgSrc="./products/banner/sekerpare.webp" imgAlt="product6"/>
            <Product title="Pastalar" href="/urunlerimiz"  imgSrc="./products/banner/pasta.webp" imgAlt="product3"/>
        </div>
    </div>
  )
}

interface ProductProps {
    title:string
    imgSrc:string
    imgAlt:string
    href:string
}

function Product({title, imgSrc, imgAlt, href}:ProductProps) {
        return (
        <Link href={href} className={"relative w-[80vw] md:w-[250px] hover:scale-105 duration-300"}>
            {title? <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 z-10 text-md text-center font-semibold p-3 rounded-b-[20px] bg-background text-black inverted-border-radius">{title}</div> : null}
            <div className="relative w-full h-[350px]">
                <Image src={imgSrc} alt={imgAlt} fill className="rounded-bl-3xl rounded-tr-3xl rounded-tl-3xl object-cover"/>
            </div>
            <div className="absolute bottom-4 right-6 bg-primary px-3 py-1 font-semibold">Daha Fazla</div>
        </Link>
        )
}


export default Products