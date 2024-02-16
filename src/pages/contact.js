import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import { useRouter } from 'next/router';

export default function Contact() {
    const [showAlert, setShowAlert] = useState(false);
    const router = useRouter();
    async function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        try {
            const response = await fetch('/api/contact', {
                method: 'post',
                body: new URLSearchParams(data),
            });
            if (!response.ok) {
                throw new Error(`Invalid response: ${response.status}`);
            }
            setShowAlert(true);
            setTimeout(() => {
                router.push('/'); // Redirect to the home page
            }, 2000); // Delay of 2 seconds
        } catch (err) {
            console.error(err);
            alert('Oops something is not working right,Try again later');
        }
    }

    return (
        <>
            <Head>
                <title>Contact | Soumyank Padhy</title>
                <meta name="description" content="Contact Soumyank Padhy for your queries and lead to a journey of building something big" />
            </Head>

            <Layout>
            {showAlert && (
            <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md mb-4" role="alert">
                        <div class="flex">
                            <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                            <div>
                                <p class="font-bold">Submission Successfull</p>
                                <p class="text-sm">I will get back to you soon!</p>
                            </div>
                        </div>
             </div>
            )}
                <form className="container bg-white dark:bg-gray-800 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <AnimatedText className='mb-8 lg:!text-7xl sm:mb-8 sm:!!text-6xl xs:!text-4xl' text='Get in touch' />
                    <div className="email block">
                        <label className='dark:text-light' htmlFor="frm-email">Email</label>
                        <input
                            id="frm-email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            required
                            className="border border-gray-300 dark:border-gray-600 rounded-md p-2 w-full font-semibold"
                        />
                    </div>
                    <div className="block phone=">
                        <label className='dark:text-light' htmlFor="frm-phone">Phone</label>
                        <input
                            id="frm-phone"
                            type="tel"
                            name="phone"
                            autoComplete="tel"
                            className="border border-gray-300 dark:border-gray-600 rounded-md p-2 w-full font-semibold"
                        />
                    </div>
                    <div className="name block">
                        <div className="flex justify-between">
                            <div className="w-1/2 pr-2">
                                <label className='dark:text-light' htmlFor="frm-first">First Name</label>
                                <input
                                    id="frm-first"
                                    type="text"
                                    name="first"
                                    autoComplete="given-name"
                                    required
                                    className="border border-gray-300 dark:border-gray-600 rounded-md p-2 w-full font-semibold"
                                />
                            </div>
                            <div className="w-1/2 pl-2">
                                <label className='dark:text-light' htmlFor="frm-last">Last Name</label>
                                <input
                                    id="frm-last"
                                    type="text"
                                    name="last"
                                    autoComplete="family-name"
                                    required
                                    className="border border-gray-300 dark:border-gray-600 rounded-md p-2 w-full font-semibold"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="message block">
                        <label className='dark:text-light' htmlFor="frm-message">Message</label>
                        <textarea id="frm-message" rows="6" name="message" className="border border-gray-300 dark:border-gray-600 rounded-md p-2 w-full font-semibold"></textarea>
                    </div>
                    <div className="button flex mt-2 justify-center">
                        <button type="submit" className="md:p-2 md:px-4 md:text-base bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-white hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light py-2 ">Submit</button>
                    </div>
                </form>
            </Layout>
        </>
    );
}
