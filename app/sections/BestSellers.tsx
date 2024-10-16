import Image from "next/image"
import { Title } from "../Components/Title"
import Link from "next/link"
import { prefix } from "@/prefix"

function BestSellers() {
    return (
      <div className="relative w-full h-[700px] mt-40">
          <div className="absolute w-full h-[600px] overflow-hidden -z-10">
              <Image src={`${prefix}/yeh-xintong-go3DT3PpIw4-unsplash.webp`} alt="En çok satanlar arkaplan" fill className="filter blur-[3px] brightness-50 scale-105 object-cover"/>
          </div>
  
          <Title text="En Çok Satanlar" underline class="text-white pt-16"/>
  
  
          <div className="overflow-x-scroll w-[100vw] lg:overflow-x-hidden lg:w-full absolute px-10 bottom-0">
              <div className="flex lg:grid grid-cols-5 gap-10 py-10">
                  <BestSellerItem src={`${prefix}/products/Fistikli-Baklava.webp`} alt="En çok satanlar arkaplan" description="Fıstıklı Baklava"/>
                  <BestSellerItem src={`${prefix}/products/katmer.jpg`} alt="En çok satanlar arkaplan" description="Katmer"/>
                  <BestSellerItem src={`${prefix}/products/ekler.webp`} alt="En çok satanlar arkaplan" description="Ekler"/>
                  <BestSellerItem src={`${prefix}/products/tahinli-corek.jpg`} alt="En çok satanlar arkaplan" description="Tahinli Çörek"/>
                  <BestSellerItem src={`${prefix}/products/revani.webp`} alt="En çok satanlar arkaplan" description="Revani"/>
              </div>
          </div>
      </div>
    )
  }
  
  type BestSellerItemProps = {
      src: string
      alt: string
      description: string
  }
  
  function BestSellerItem({src, alt, description}:BestSellerItemProps) {
      return (
          <Link href="/urunlerimiz" className="select-none relative min-h-[450px] min-w-[300px] lg:min-w-[200px] flex overflow-hidden shadow-lg shadow-gray-500 rounded-2xl group hover:scale-105 duration-300 transition-transform ">
              <Image src={src} alt={alt} fill className="object-cover rounded-2xl"/>
              <div className="absolute left-0 -bottom-20 backdrop-blur-lg backdrop-brightness-50 w-full p-4 text-lg text-center text-white group-hover:bottom-0 transition-all duration-300">{description}</div>
          </Link>
      )
  }


export default BestSellers







  




// -------------------------------------------------------------------------------------------------


// function BestSellers() {
//     return (
//       <div className="relative w-full h-[656px] mt-40">
//           <div className="absolute w-full h-[600px] overflow-hidden -z-10">
//               <Image src={"/yeh-xintong-go3DT3PpIw4-unsplash.webp"} alt="En çok satanlar arkaplan" fill objectFit="cover" className="filter blur-[3px] brightness-50 scale-105"/>
//           </div>
  
//           <Title text="En Çok Satanlar" underline class="text-white pt-16"/>
  
//           <div className="grid grid-cols-5 absolute w-full px-10 bottom-0 gap-10">
//               <BestSellerItem src="/products/Fistikli-Baklava.webp" alt="En çok satanlar arkaplan" description="Fıstıklı Baklava"/>
//               <BestSellerItem src="/products/katmer.jpg" alt="En çok satanlar arkaplan" description="Katmer"/>
//               <BestSellerItem src="/products/ekler.webp" alt="En çok satanlar arkaplan" description="Ekler"/>
//               <BestSellerItem src="/products/tahinli-corek.jpg" alt="En çok satanlar arkaplan" description="Tahinli Çörek"/>
//               <BestSellerItem src="/products/revani.webp" alt="En çok satanlar arkaplan" description="Revani"/>
//           </div>
//       </div>
//     )
//   }
  
//   type BestSellerItemProps = {
//       src: string
//       alt: string
//       description: string
//   }
  
//   function BestSellerItem({src, alt, description}:BestSellerItemProps) {
//       return (
//           <Link href="/urunlerimiz" className="relative h-[450px] overflow-hidden shadow-lg shadow-gray-500 rounded-2xl group hover:scale-105 duration-300 transition-transform ">
//               <Image src={src} alt={alt} fill className="object-cover"/>
//               <div className="absolute left-0 -bottom-20 backdrop-blur-lg backdrop-brightness-50 w-full p-4 text-lg text-center text-white group-hover:bottom-0 transition-all duration-300">{description}</div>
//           </Link>
//       )
//   }