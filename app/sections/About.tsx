function About() {
    return (
        <div id="about" className="text-center mt-24 scroll-mt-40 bg-background">
            <p className="flex flex-col md:flex-row justify-center md:items-end text-4xl lg:text-5xl font-semibold">
                Küçük pastane,
                <b className="text-[45px] lg:text-[54px] mx-4 font-bold ">BÜYÜK</b> 
                lezzet
            </p>
            <p className="m-auto text-xl md:text-2xl w-[90vw] md:w-[40vw] mt-8">
                Küçük bir pastane olmaktan gurur duyuyor, Her
                ürünümüzü özen ve <i><b>sevgiyle</b></i> hazırlıyoruz.
            </p>
        </div>
    );
}

export default About;
