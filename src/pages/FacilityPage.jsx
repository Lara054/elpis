import React from 'react';
import { Helmet } from 'react-helmet';
import '../css/pages/facility.css';
import Hero from '../components/Hero';

const photos = [
    { src: '/images/facility/bathroom.png', caption: '浴室' },
    { src: '/images/facility/changingroom.png', caption: '脱衣所' },
    { src: '/images/facility/corridor.png', caption: '廊下' },
    { src: '/images/facility/kitchen.png', caption: 'キッチン' },
    { src: '/images/facility/room.png', caption: '個室' },
    { src: '/images/facility/sink2.png', caption: '洗面台' },
    { src: '/images/facility/toilet.png', caption: 'トイレ' },
];

const FacilityPage = () => {
    // 施設が建設中かどうかのフラグ
    const underConstruction = false;

    return (
        <>
            <Helmet>
                <title>支援施設のご紹介｜安心できる住環境とケア体制</title>
                <meta name="description" content="住み込みにも対応した、静かで安心できる環境をご紹介。心の病や障がいを持つ方が落ち着いて過ごせる空間を整えています。" />
            </Helmet>

            <main>
                <Hero title="施設紹介" backgroundImage={"/images/hero/background-image/contact-background-image.jpg"} />
                <section className="facility">
                    {underConstruction ? (
                        <div className="construction-banner">
                            <p>現在、施設は建設中です。</p>
                            <p>完成次第、写真や詳細をご紹介いたしますので、今しばらくお待ちください。</p>
                        </div>
                    ) : (
                        <>
                            <p className="facility-description fade-in">
                                エルピスでは、ご本人が安心して過ごせるような環境づくりを大切にしています。<br />
                            </p>
                            <div className="photo-grid">
                                {photos.map((photo, index) => (
                                    <div key={index} className={`photo-card fade-in delay-${index + 1}`}>
                                        <img
                                            src={`${photo.src}`}
                                            alt={photo.caption}
                                        />
                                        <p className="photo-caption">{photo.caption}</p>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </section>
            </main>
        </>
    );
};

export default FacilityPage;
