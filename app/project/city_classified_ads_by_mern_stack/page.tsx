import React from 'react';
import Head from 'next/head';
import Footer from '@/srcCustom/components/Footer';

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
            </Head>

            <nav className="bg-[#2561e8] p-3 shadow-lg fixed top-0 w-full">
                <div className="container mx-auto text-center">
                    <a className="font-bold text-white hover:text-gray-200 transition duration-300 text-xl" href="/">Nithin I Bhandari</a>
                </div>
            </nav>

            <div className="container mx-auto py-20 px-4 max-w-3xl">
                <h4 className="text-3xl font-bold mb-8 mt-16 text-[#2561e8]">City Classified Ads By MERN Stack</h4>

                <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                    Hey there! I've crafted an awesome project using the MERN Stack.<br />
                    This platform allows users to search for or post classified ads with ease.<br />
                    It features a sleek Admin panel for ad approval management.<br />
                    The entire project is built on the powerful MERN Stack.<br /><br />

                    <a href="http://city-classified-ads.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="bg-[#2561e8] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full mr-4 transition duration-300 inline-block">
                        Visit Website
                    </a>
                    <a href="https://github.com/NithinIBhandari1999/city-classified-ads" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-full transition duration-300 inline-block">
                        View Source Code
                    </a>
                </p>

                <h5 className="text-2xl font-semibold mt-12 mb-6 text-[#2561e8]">Screenshot Gallery:</h5>
                <div className="mt-4 grid grid-cols-1 gap-6">
                    <img
                        src="/project/city_classified_ads_by_mern_stack/image/city_classified_ads_homepage.png"
                        alt="Homepage image | City Classified Ads"
                        className="w-full h-auto border-4 border-[#2561e8] rounded-xl shadow-2xl hover:shadow-3xl transition duration-300"
                    />
                    <img
                        src="/project/city_classified_ads_by_mern_stack/image/city_classified_ads_about.png"
                        alt="About page image | City Classified Ads"
                        className="w-full h-auto border-4 border-[#2561e8] rounded-xl shadow-2xl hover:shadow-3xl transition duration-300"
                    />
                    <img
                        src="/project/city_classified_ads_by_mern_stack/image/city_classified_ads_search.png"
                        alt="Search page image | City Classified Ads"
                        className="w-full h-auto border-4 border-[#2561e8] rounded-xl shadow-2xl hover:shadow-3xl transition duration-300"
                    />
                    <img
                        src="/project/city_classified_ads_by_mern_stack/image/city_classified_ads_view_ad.png"
                        alt="View ad page image | City Classified Ads"
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

export default CityClassifiedAds;