import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import Link from "next/link";

function NotFound() {
  return (
    <main>
        <Navbar/>
        <div className="flex flex-col items-center align-middle pt-40">
            <h1 className="text-4xl font-semibold mb-16">Aradığınız Sayfa Bulunamadı.</h1>
            <Link href="/" className="bg-primary py-4 px-8 rounded-lg font-semibold text-lg">Ana Sayfa</Link>
        </div>
        <Footer className="fixed bottom-0"/>
    </main>
  )
}

export default NotFound