"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { ProfileForm } from "../Components/ContactForm";

const mail = "info@mestiva.com.tr";
const apiEndpoint = "/api/contact";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        fetch(apiEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((response) => {
                alert(response.message);
                setFormData({name:'',email:'',message:''})
                
            })
            .catch((err) => console.error(err));
    };

    return (
        <div
            id="contact"
            className="flex flex-col md:flex-row items-center md:items-start justify-between w-10/12 m-auto mt-40 scroll-mt-40">
            <div className="md:w-1/2">
                <h2 className="text-3xl lg:text-5xl">Bize Ulaşın</h2>
                <p className="lg:text-xl mt-8">
                    Sizlerle iletişime geçmek ve sorularınızı yanıtlamak için
                    her zaman hazırız. Bizimle iletişime geçmek için yandaki
                    iletişim formunu kullanabilir yada <b>{mail}</b> adresine
                    mail atabilirsiniz.
                </p>
            </div>

            <div className="w-[90vw] md:w-[500px] mt-16 md:mt-0 text-lg shadow-[0px_0px_20px_1px_rgba(0,0,0,0.25)] p-6 rounded-2xl">
                {/* <form
                    onSubmit={(e) => handleSubmit(e)}
                    className="flex flex-col ">
                    <label htmlFor="name">Ad Soyad*</label>
                    <input
                        id="name"
                        type="text"
                        maxLength={100}
                        required
                        className="p-2 bg-gray-300 mb-4 rounded-lg"
                        onChange={handleChange}
                    />
                    <label htmlFor="email">Email*</label>
                    <input
                        id="email"
                        type="email"
                        maxLength={100}
                        required
                        className="p-2 bg-gray-300 mb-4 rounded-lg"
                        onChange={handleChange}
                    />
                    <label htmlFor="message">Mesajınız*</label>
                    <textarea
                        id="message"
                        rows={7}
                        maxLength={1000}
                        required
                        className="p-2 bg-gray-300 mb-4 rounded-lg"
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="p-2 px-10 bg-primary w-fit rounded-lg">
                        Gönder
                    </button>
                </form> */}
                
                <ProfileForm/>

            </div>
        </div>
    );
}

export default Contact;
