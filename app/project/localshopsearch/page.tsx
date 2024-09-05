import React from 'react';
import Head from 'next/head';
import Footer from '@/srcCustom/components/Footer';

const LocalShopSearch = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="description" content="I am Nithin I Bhandari and I provide Web Development and Android Development service." />
                <meta name="keywords" content="Nithin I Bhandari, nithinibhandari1999, nithinibhandari1999.github.io, Web Development in Bengaluru, Android Development in Bengaluru, Web Development in Bangalore, Android Development in Bangalore, freelancer in Bangalore" />
                <meta name="author" content="Nithin I Bhandari" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>Local Shop Search By MERN Stack | Nithin I Bhandari</title>
            </Head>

            <nav className="bg-[#2561e8] p-3 shadow-lg fixed top-0 w-full">
                <div className="container mx-auto text-center">
                    <a className="font-bold text-white hover:text-gray-200 transition duration-300 text-xl" href="/">Nithin I Bhandari</a>
                </div>
            </nav>

            <div className="container mx-auto py-20 px-4 max-w-3xl">
                <h4 className="text-3xl font-bold mb-8 mt-16 text-[#2561e8]">Local Shop Search By MERN Stack</h4>

                <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                    Hi, I have created a project using the MERN Stack.<br />
                    Local Shop Search allows you to find shops near you using an interactive map.<br />
                    Shop owners can add their shops and list their products.<br />
                    End-users can search for products and visit shops to make purchases.<br /><br />

                    <a href="https://local-shop-search.netlify.app/search/" target="_blank" rel="noopener noreferrer" className="bg-[#2561e8] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full mr-4 transition duration-300 inline-block">
                        Visit Website
                    </a>
                    <a href="https://github.com/NithinIBhandari1999/localshopsearch_client" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-full transition duration-300 inline-block">
                        View Source Code
                    </a>
                </p>

                <h5 className="text-2xl font-semibold mt-12 mb-6 text-[#2561e8]">Screenshot:</h5>
                <div className="mt-4 max-w-3xl mx-auto">
                    <img
                        src="/project/localshopsearch/image/localshopsearch_search.png"
                        alt="Homepage image | Local Shop Search"
                        className="w-full h-auto border-4 border-[#2561e8] rounded-xl shadow-2xl hover:shadow-3xl transition duration-300"
                    />
                </div>
            </div>

            <Footer />

            <script src="https://webreader.naturalreaders.com/nr-webreader.js" defer></script>
            <script dangerouslySetInnerHTML={{
                __html: `
                    window.addEventListener("DOMContentLoaded", function () {
                        if (typeof NRWebReader != 'undefined') {
                        window['NRWebReader'] = new NRWebReader({
                            widget_id: "xp5ko8ppvr"
                        });
                        }
                    });
                    `
            }} />

            <script async src="https://www.googletagmanager.com/gtag/js?id=G-033X0C4R32"></script>
            <script dangerouslySetInnerHTML={{
                __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-033X0C4R32');
        `
            }} />
        </>
    );
};

export default LocalShopSearch;