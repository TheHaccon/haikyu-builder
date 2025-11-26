import { useState } from "react";
const BANNERS_BY_MONTH: Record<string, any[]> = {
    "November": [
        { id: "oikawa_nov", name: "Oikawa UR", type: "Nov 26", img: "img-global/oikawaUR.png" },
    ],
    "December": [
        { id: "komori_dec", name: "Komori UR", type: "Dec 3", img: "img-japan/komoriUR.png" },
        { id: "bokuto_dec", name: "Bokuto UR", type: "Dec 10", img: "img-global/bokutoUR.png" },
        { id: "kageyama_dec", name: "Kageyama UR", type: "Dec 17", img: "img-japan/tobioUR.png" },
        { id: "hinata_dec", name: "Hinata SP", type: "Dec 31", img: "img-japan/HinataSP.png" },
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
                                    src={`public/data/${b.img}`}
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