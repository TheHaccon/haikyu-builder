import { useState } from "react";
const BANNERS_BY_MONTH: Record<string, any[]> = {
    "December": [
        { id: "komori_dec", name: "Komori UR", type: "Dec 3", img: "img-japan/komoriUR.png" },
        { id: "bokuto_dec", name: "Bokuto UR", type: "Dec 10", img: "img-global/bokutoUR.png" },
        { id: "kageyama_dec", name: "Kageyama UR", type: "Dec 17", img: "img-japan/tobioUR.png" },
        { id: "hinata_dec", name: "Hinata SP", type: "Dec 31", img: "img-japan/hinataSP.png" },
    ],
    "January": [
        { id: "osamu_jan", name: "Osamu UR", type: "Jan 7", img: "img-global/osamuUR.png" },
        { id: "kenma_jan", name: "Kenma SP", type: "Jan 14", img: "img-japan/kenmaSP.png" },
        { id: "hoshiumi_jan", name: "Hoshiumi UR", type: "Jan 21", img: "img-global/hoshiumiUR.png" },
        { id: "nishinoya", name: "Nishinoya SP", type: "Jan 28", img: "img-japan/nishinoyaSP.png" },
    ],
    "February": [
        { id: "hirugami_feb", name: "Hirugami UR", type: "Feb 4", img: "img-global/hirugamiUR.png" },
        { id: "sugawara_feb", name: "Sugawara SP", type: "Feb 11", img: "img-japan/sugawaraSP.png" },
        { id: "sakusa_feb", name: "Sakusa UR", type: "Feb 18", img: "img-global/sakusaUR.png" },
        { id: "bokuto_feb", name: "Bokuto SP", type: "Feb 25", img: "img-japan/bokutoSP.png" },
    ],
    "March": [
        { id: "komori_march", name: "Komori UR", type: "March 4", img: "img-japan/komoriUR.png" },
        { id: "akaashi_march", name: "Akaashi SP", type: "March 11", img: "img-japan/akaashiSP.png" },
        { id: "kageyama_march", name: "Kageyama UR", type: "March 18", img: "img-japan/tobioUR.png" },
        { id: "aone_march", name: "Aone SP", type: "March 25", img: "img-japan/aoneSP.png" },
    ],
    "April": [
        { id: "hinata_april", name: "Hinata UR", type: "April 1", img: "img-japan/hinataSP.png" },
        { id: "tsukishima_april", name: "Tsukishima SP", type: "April 8", img: "img-japan/tsukishimaSP.png" },
        { id: "kenma_april", name: "Kenma SP", type: "April 15", img: "img-japan/kenmaSP.png" },
        { id: "kuroo_april", name: "Kuroo SP", type: "April 22", img: "img-japan/kurooSP.png" },
        { id: "nishinoya_april", name: "Nishinoya SP", type: "April 29", img: "img-japan/nishinoyaSP.png" },
    ],
    "May": [
        { id: "kunimi_may", name: "Kunumi SP", type: "May 6", img: "img-japan/kunimiSP.png" },
        { id: "sugawara_may", name: "Sugawara SP", type: "May 13", img: "img-japan/sugawaraSP.png" },
        { id: "kanji_april", name: "Kanji SP", type: "May 20", img: "img-japan/kanjiSP.png" },
        { id: "bokuto_april", name: "Bokuto SP", type: "May 27", img: "img-japan/bokutoSP.png" },
    ],
    "June": [
        { id: "oikawa_june", name: "Oikawa SP", type: "June 3", img: "img-japan/oikawaSP.png" },
        { id: "akaashi_june", name: "Akaashi SP", type: "June 10", img: "img-japan/akaashiSP.png" },
        { id: "iwaizumi_june", name: "Iwaizumi SP", type: "June 17", img: "img-japan/iwaizumiSP.png" },
        { id: "aone_june", name: "Aone SP", type: "June 24", img: "img-japan/aoneSP.png" },
    ],
    "July": [
        { id: "ushijima_july", name: "Ushijima SP", type: "July 1", img: "img-japan/ushijimaSP.png" },
        { id: "ginjima_july", name: "Ginjima SP", type: "July 8 FREE", img: "img-japan/ginjimaSP.png" },
        { id: "tendo_july", name: "Tendo SP", type: "July 15", img: "img-japan/tendoSP.png" },
        { id: "tsukishima_july", name: "Tsukishima SP", type: "July 22", img: "img-japan/tsukishimaSP.png" },
        { id: "atsumu_july", name: "Atsumu SP", type: "July 29", img: "img-japan/atsumuSP.png" },
    ],
        "August": [
        { id: "kuroo_august", name: "Kuroo SP", type: "August 5", img: "img-japan/kurooSP.png" },
    ],
};

const MONTH_KEYS = Object.keys(BANNERS_BY_MONTH);

export default function BannerGrid() {
    const [monthIndex, setMonthIndex] = useState(0);

    const currentMonth = MONTH_KEYS[monthIndex];
    const currentBanners = BANNERS_BY_MONTH[currentMonth];

    const nextMonth = () => {
        if (monthIndex < MONTH_KEYS.length - 1) setMonthIndex(monthIndex + 1);
    };
    const prevMonth = () => {
        if (monthIndex > 0) setMonthIndex(monthIndex - 1);
    };
    return (
        <div className="banner-grid-wrapper">
            <div className="month-nav">
                <button
                    className="nav-arrow"
                    onClick={prevMonth}
                    disabled={monthIndex === 0}
                >
                    ❮
                </button>
                <h3 className="month-title">{currentMonth}</h3>
                <button
                    className="nav-arrow"
                    onClick={nextMonth}
                    disabled={monthIndex === MONTH_KEYS.length - 1}
                >
                    ❯
                </button>
            </div>
            <div className="month-grid">
                {currentBanners.map((b) => {
                    return (
                        <div key={b.id} className="banner-card">
                            <div className="banner-header">
                                <span className="b-type">{b.type}</span>
                                <span className="b-name">• {b.name}</span>
                            </div>
                            <div className="banner-img">
                                <img
                                    src={`data/${b.img}`}
                                    alt={b.name}
                                    onError={(e) => e.currentTarget.style.display = 'none'}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}