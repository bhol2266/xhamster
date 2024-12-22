import Script from "next/script";

function PopunderAds() {
    let currentHost = '';

    if (typeof window !== "undefined") {
        currentHost = window.location.host;
    }

    // Check if the app is running on localhost
    const isLocalhost = currentHost.includes('localhost')

    // Only render the Script component if not on localhost
    return (
        <div className="flex items-center justify-center">
            {!isLocalhost && (
                // <Script
                //     type="text/javascript"
                //     src="//cdn.tsyndicate.com/sdk/v1/p.js"
                //     data-ts-spot="f2a620cec4b04527ad64dae7221354ce"
                //     data-ts-extid="{extid}"
                //     data-ts-session-duration="300"
                //     data-ts-count="5"
                //     data-ts-mode="selective"
                //     data-ts-ignore-filter="block_popunder"
                //     async
                //     defer
                // />


                <>
                    <Script
                        id={uniqid}
                        strategy="beforeInteractive" // or "afterInteractive", depending on when you want the script to load
                        dangerouslySetInnerHTML={{
                            __html: `
        var ad_idzone = "5500684",
            ad_popup_fallback = false,
            ad_popup_force = false,
            ad_chrome_enabled = true,
            ad_new_tab = true,
            ad_frequency_period = 1,
            ad_frequency_count = 3,
            ad_trigger_method = 3,
            ad_trigger_delay = 0,
            ad_capping_enabled = true;
      `,
                        }}
                    />

                    {/* External Script */}
                    <Script
                        src="https://a.pemsrv.com/popunder1000.js"
                        strategy="beforeInteractive" // or "afterInteractive", depending on your needs
                        type="application/javascript"
                    /></>

            )}
        </div>
    );
}

export default PopunderAds;
