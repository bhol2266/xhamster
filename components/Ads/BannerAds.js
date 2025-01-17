import Script from "next/script";


function BannerAds() {

    var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    var uniqid = randLetter + Date.now();
    return (
        <div className="w-screen overflow-hidden">

            <Script
                type="text/javascript"
                src="//cdn.tsyndicate.com/sdk/v1/bi.js"
                data-ts-spot="9d2353bb144e44528acb154218a20ded"
                data-ts-width="300"
                data-ts-height="250"
                data-ts-extid="{extid}"
                async
                defer
            />


            {/* Exoclick Multiformat  */}



            {/* <Script
                strategy="afterInteractive"
                src="https://a.magsrv.com/ad-provider.js"
                async
                type="application/javascript"
            /> */}

            {/* Inline script to initialize the AdProvider */}
            {/* <Script
                id={uniqid}
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `(AdProvider = window.AdProvider || []).push({ "serve": {} });`,
                }}
            /> */}

            {/* The ad element */}
            {/* <ins className="eas6a97888e38" data-zoneid="5500694"></ins> */}


        </div>
    )
}

export default BannerAds;
