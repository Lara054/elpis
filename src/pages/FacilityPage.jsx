import React from 'react';
import '../css/pages/facility.css';
import Hero from '../components/Hero';

const photos = [
    { src: '/images/facility/bathroom.png', caption: '浴室' },
    { src: '/images/facility/changingroom.png', caption: '脱衣所' },
    { src: '/images/facility/corridor.png', caption: '廊下' },
    { src: '/images/facility/corridor2.png', caption: '廊下（別角度）' },
    { src: '/images/facility/kitchen.png', caption: 'キッチン' },
    { src: '/images/facility/kitchen2.png', caption: 'キッチン（別角度）' },
    { src: '/images/facility/kitchen3.png', caption: 'キッチン（調理中）' },
    { src: '/images/facility/room.png', caption: '個室' },
    { src: '/images/facility/room2.png', caption: '個室（別部屋）' },
    { src: '/images/facility/sink.png', caption: '洗面台' },
    { src: '/images/facility/sink2.png', caption: '洗面台（別角度）' },
    { src: '/images/facility/toilet.png', caption: 'トイレ' },
];

const FacilityPage = () => {
    // 施設が建設中かどうかのフラグ
    const underConstruction = true;

    return (
        <main>

            <Hero title="施設紹介" />
            <section className="facility">

                {underConstruction ? (
                    <div className="construction-banner">
                        <p>現在、施設は建設中です。</p>
                        <p>完成次第、写真や詳細をご紹介いたしますので、今しばらくお待ちください。</p>
                    </div>
                ) : (
                    <>
                        <p className="facility-description">
                            エルピスでは、ご本人が安心して過ごせるような環境づくりを大切にしています。<br />
                            ここでは、施設の雰囲気や暮らしの様子をご紹介します。
                        </p>

                        <div className="photo-grid">
                            {photos.map((photo, index) => (
                                <div key={index} className={`photo-card fade-in delay-${index + 1}`}>
                                    <img src={`${process.env.PUBLIC_URL}${photo.src}`} alt={photo.caption} />
                                    <p className="photo-caption">{photo.caption}</p>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </section>
        </main>
    );
};

export default FacilityPage;
