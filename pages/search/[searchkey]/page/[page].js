import Head from 'next/head';
import { useRouter } from "next/router";
import { BeatLoader } from 'react-spinners';
import Pagination from '../../../../components/Pagination';
import Sidebar from '../../../../components/Sidebar';
import Videos from "../../../../components/Videos";
import Header from '../../../../components/searchPage/Header';
import { scrapeVideos } from '../../../../config/spangbang';


function Search({ video_collection, pages }) {

    const router = useRouter();
    const { searchkey, page } = router.query



    const currentPageNumberURL = page

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    if (router.isFallback) {
        return (
            <div className="flex justify-center mx-auto mt-10 ">
                <BeatLoader loading size={25} color={'#232b2b'} />
            </div>
        )
    }

    return (
        <>
            <Head>
                <title>{`${capitalizeFirstLetter(searchkey.replace('+', " ").replace("+", " "))} Porn Videos - ${currentPageNumberURL}`}</title>
                <meta name="description"
                    content={`Watch ${capitalizeFirstLetter(searchkey.replace('+', " ").replace("+", " "))} porn videos for free, here on Chutlunds.com. Discover the growing collection of high quality Most Relevant XXX movies and clips. No other sex tube is more popular and features more ${capitalizeFirstLetter(searchkey.replace('+', " ").replace("+", " "))} scenes than Chutlunds! Browse through our impressive selection of porn videos in HD quality on any device you own.`} />


                <meta property="og:title" content={`${capitalizeFirstLetter(searchkey.replace('+', " ").replace("+", " "))} Porn Videos - ${currentPageNumberURL}`} />
                <meta property="og:description" content={`Watch ${capitalizeFirstLetter(searchkey.replace('+', " ").replace("+", " "))} porn videos for free, here on Chutlunds.com. Discover the growing collection of high quality Most Relevant XXX movies and clips. No other sex tube is more popular and features more ${capitalizeFirstLetter(searchkey.replace('+', " ").replace("+", " "))} scenes than Chutlunds! Browse through our impressive selection of porn videos in HD quality on any device you own.`} />
                <meta name="twitter:title" content={`${capitalizeFirstLetter(searchkey.replace('+', " ").replace("+", " "))} Porn Videos - ${currentPageNumberURL}`} />
                <meta name="twitter:description" content={`Watch ${capitalizeFirstLetter(searchkey.replace('+', " ").replace("+", " "))} porn videos for free, here on Chutlunds.com. Discover the growing collection of high quality Most Relevant XXX movies and clips. No other sex tube is more popular and features more ${capitalizeFirstLetter(searchkey.replace('+', " ").replace("+", " "))} scenes than Chutlunds! Browse through our impressive selection of porn videos in HD quality on any device you own.`} />
                <link rel="canonical" href={`https://www.chutlunds.com/search/${searchkey}/page/${page}`} />





            </Head>

            <Header keyword={searchkey.replace("+", " ")} pageNumber={currentPageNumberURL} />
            <div className="flex">
                {/* <Sidebar /> */}
                <Videos data={video_collection} />

            </div>

            <Pagination data={{ url: `/search/${searchkey.toLowerCase().trim()}`, currentPageNumberURL: currentPageNumberURL, pages: pages, }} />

        </>
    )
}

export default Search


// export async function getStaticPaths() {
//     return {

//         paths: [{ params: { searchkey: 'bbc', page: '1' } }],
//         fallback: true // false or 'blocking'
//     };
// }


export async function getServerSideProps(context) {

    const { searchkey, page } = context.params;



    if (searchkey == "bbc" && page == "1") {

        const parcelData = { url: `https://spankbang.party/s/${searchkey.toLowerCase().trim()}/${page}/?o=all` };

        const API_URL = `${process.env.BACKEND_URL}getvideos`;

        const rawResponse = await fetch(API_URL, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(parcelData),
        });

        const { finalDataArray, pages } = await rawResponse.json();


        return {
            props: {
                video_collection: finalDataArray,
                pages: pages
            }
        }
    } else {

        const obj = await scrapeVideos(`https://spankbang.party/s/${searchkey.toLowerCase().trim()}/${page}/?o=all`)
        var finalDataArray = obj.finalDataArray
        var pages = obj.pages

        return {
            props: {
                video_collection: finalDataArray,
                pages: pages
            }
        }
    }


}
