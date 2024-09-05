import React from 'react';
import Head from 'next/head';

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
                <link rel="stylesheet" href="/style/style.css" />
            </Head>

            <nav className="bg-gray-100 p-2 shadow-md fixed top-0 w-full">
                <div className="container mx-auto text-center">
                    <a className="font-bold text-gray-800 hover:text-gray-600 transition duration-300" href="/">Nithin I Bhandari</a>
                </div>
            </nav>

            <div className="container mx-auto py-16 px-4 max-w-2xl">
                <h4 className="text-2xl font-bold mb-6 mt-16">Local Shop Search By MERN Stack</h4>

                <p className="mt-4 text-gray-700 leading-relaxed">
                    Hi, I have created a project using the MERN Stack.<br />
                    Local Shop Search allows you to find shops near you using an interactive map.<br />
                    Shop owners can add their shops and list their products.<br />
                    End-users can search for products and visit shops to make purchases.<br /><br />

                    <a href="https://local-shop-search.netlify.app/search/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2 transition duration-300">
                        Visit Website
                    </a>
                    <a href="https://github.com/NithinIBhandari1999/localshopsearch_client" target="_blank" rel="noopener noreferrer" className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                        View Source Code
                    </a>
                </p>

                <h5 className="text-xl font-semibold mt-8 mb-4">Screenshot:</h5>
                <div className="mt-3 max-w-2xl mx-auto">
                    <img
                        src="/project/localshopsearch/image/localshopsearch_search.png"
                        alt="Homepage image | Local Shop Search"
                        className="w-full h-auto border border-gray-300 rounded-lg shadow-lg"
                    />
                </div>
            </div>

            <footer className="mt-16 bg-gray-100 p-4 shadow-md">
                <div className="container mx-auto">
                    <h6 className="text-center font-bold text-gray-700">Nithin © {new Date().getFullYear()}</h6>
                </div>
            </footer>

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