import React from 'react';
import Head from 'next/head';

const CityClassifiedAds = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="description" content="I am Nithin I Bhandari and I provide Web Development and Android Development service." />
                <meta name="keywords" content="Nithin I Bhandari, nithinibhandari1999, nithinibhandari1999.github.io, Web Development in Bengaluru, Android Development in Bengaluru, Web Development in Bangalore, Android Development in Bangalore, freelancer in Bangalore" />
                <meta name="author" content="Nithin I Bhandari" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>City Classified Ads By MERN Stack | Nithin I Bhandari</title>
                <link rel="stylesheet" href="/style/style.css" />
            </Head>

            <nav className="bg-gray-100 p-2 shadow-md fixed top-0 w-full">
                <div className="container mx-auto text-center">
                    <a className="font-bold text-gray-800 hover:text-gray-600 transition duration-300" href="/">Nithin I Bhandari</a>
                </div>
            </nav>

            <div className="container mx-auto py-16 px-4 max-w-2xl">
                <h4 className="text-2xl font-bold mb-6 mt-16">City Classified Ads By MERN Stack</h4>

                <p className="mt-4 text-gray-700 leading-relaxed">
                    Hi, I have created a project by MERN Stack.<br />
                    It can be used to search or post ad by user.<br />
                    It has a Admin panel to approve or disapprove posted ad.<br />
                    I have used MERN Stack to create project.<br /><br />

                    <a href="http://city-classified-ads.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition duration-300">Visit Website</a><br />
                    <a href="https://github.com/NithinIBhandari1999/city-classified-ads" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition duration-300">View Source Code</a>
                </p>

                <h5 className="text-xl font-semibold mt-8 mb-4">Screenshot:</h5>
                <div className="mt-3 max-w-2xl mx-auto">
                    <img
                        src="/project/city_classified_ads_by_mern_stack/image/city_classified_ads_homepage.png"
                        alt="Homepage image | City Classified Ads"
                        className="w-full h-auto border border-gray-300 rounded-lg shadow-lg mb-4"
                    />
                    <img
                        src="/project/city_classified_ads_by_mern_stack/image/city_classified_ads_about.png"
                        alt="About page image | City Classified Ads"
                        className="w-full h-auto border border-gray-300 rounded-lg shadow-lg mb-4"
                    />
                    <img
                        src="/project/city_classified_ads_by_mern_stack/image/city_classified_ads_search.png"
                        alt="Search page image | City Classified Ads"
                        className="w-full h-auto border border-gray-300 rounded-lg shadow-lg mb-4"
                    />
                    <img
                        src="/project/city_classified_ads_by_mern_stack/image/city_classified_ads_view_ad.png"
                        alt="View ad page image | City Classified Ads"
                        className="w-full h-auto border border-gray-300 rounded-lg shadow-lg mb-4"
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

export default CityClassifiedAds;