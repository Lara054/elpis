import React, { useState, useEffect } from "react";
import Hero from '../components/Hero';
import Button from '../components/Button';
import Map from '../components/Map';
import SymptomSection from '../components/SymptomSection';
import { Link } from 'react-router-dom';
import FlowerDecoration from "../components/FlowerDecoration";

import '../css/pages/home.css';
import '../css/common.css';

function scrollToIdSmooth(id) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function HomePage() {
    // 追加: もっと見る用のstate
    const [showAboutFull, setShowAboutFull] = useState(false);
    const [showCounselorFull, setShowCounselorFull] = useState(false);
    const [showConcreteFull, setShowConcreteFull] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 600);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // テキスト定義
    const aboutText = `エルピスは、統合失調症、双極性障害、うつ病など、精神的な病を抱えている方のための場所です。「治療を受けてきたけれど、改善が見られなかった」「病名はついているけれど、どう付き合っていいかわからない」そんな方が、少しずつ“自分らしさ”を取り戻していくために、カウンセラーと話しながら、一緒に整えていく場所です。
医療機関では「改善が難しい」と言われた症状でも、 実際にここで落ち着きを取り戻した方が何人もいます。
お薬や診断だけではたどり着けなかった回復の形を、 私たちは “人と人との関わり” の中で探していきます。`;
    const counselorText = `平成４年９月１日より５０歳になるまで何人もの方々の助けを得て今生かされているかと思う度、何のお返しもしていない私はその方々にお返しするのは申し訳ないので、貧しい人や病んでいる人々の助け手になるべく精神の身体の重荷を少しでも平安になれる心と体を鍛えて、また子供たちや心の交じう方々の助けによってこの施設をおよそ２８年間ものあいだ続けられてきたようにどこまでいっても誰かに助けられています。「お互いに助けあう」施設です。老人スタッフ３人（７０歳以上）若者５人の心を一つにした者によって成り立っている所です。牡蠣の殻なる牡蠣の身のかくも涯てなき海にして　生きのいのちの味気なき　その思いこそかなしけれ　と歌っています。その生命に喜びと感謝を感じられる施設だと思います。`;
    const concreteText = `82年間の人生の中で、昭和43年から6人の障害児を産み育てていく人生が与えられました。
4男2女、それぞれ重度の障害でしたが、特に三男は脳性麻痺と診断され、東京女子医大の福山先生からは「将来の約束は何もない」と告げられました。

写真は当時3歳、一家で撮ったものです。首も手も足も完全に麻痺し、一日に600回の引きつけ（痙攣）を起こすという診断結果でした。

そこから、私の戦いが始まりました。世界で一番の名医と言われる先生から、学びが始まったのです。

なぜ脳性麻痺の子が私に与えられたのか。その答えは199号に記されています。
私の質問に対して、先生は「夫の父が戦死し、残された姑に仕える仕事が答え」と教えてくださいました。

そのことが心から理解できた時、私はある決心をしました。なんの薬も使っていなかったのに、その決心一つで600回の発作が止まったのです。

もしあの時、薬漬けになっていたら、この現象は起こらなかったかもしれません。

原因がどこにあるかが分かり、そこで本当の決断をすれば、人は治されるということを、私は体験しました。

地に向かう手が前に動き出し、物を取ることができたのです。
それからはまるで聖書にある「コネクト、コネクト」のように、足が、頭が、口が、耳が、動き始めました。

物が言えるようになるまでに1年かかり、彼は4歳で完全な自由を得ました。

食べることができなかったので口移しで与えていましたが、それも必要なくなりました。
18歳の時には、彼が働ける場所を千葉に作り、33年間、私の片腕として、朝5時から夕方5時まで、休むことなく老人介護施設で働いています。

3階からお年寄りを抱えて降ろすなど、まさに人の役に立つ存在になってくれました。`;

    // 文字数制御
    const aboutLimit = window.innerWidth > 900 ? 400 : 100;
    const counselorLimit = window.innerWidth > 900 ? 400 : 100;
    const concreteLimit = 300;
    const aboutShort = aboutText.length > aboutLimit ? aboutText.slice(0, aboutLimit) + '…' : aboutText;
    const counselorShort = counselorText.length > counselorLimit ? counselorText.slice(0, counselorLimit) + '…' : counselorText;
    const concreteShort = concreteText.length > concreteLimit ? concreteText.slice(0, concreteLimit) + '…' : concreteText;

    return (
        <main>

            {/* <!-- ヒーロー --> */}
            <Hero title="エルピスへようこそ" subTitle="" backgroundImage="/images/hero/background-image/hero-background-image.jpg"></Hero>
            {/* <!-- ヒーローナビ --> */}
            <section className="hero-nav">
                <div className="hero-nav-title">
                    <FlowerDecoration src="flower4.png" />
                    <h3>{isMobile ? "気になる項目をタップしてください" : "何について知りたいですか？"}</h3>
                </div>
                <div className="fade-item hero-nav-items row">
                    <a href="#about" className="hero-nav-item column offset" onClick={e => { e.preventDefault(); scrollToIdSmooth('about'); }}>
                        <img src={`${process.env.PUBLIC_URL}/images/hero/hero-nav-thinking.png`} alt="" width="100" />
                        <p>{isMobile ? "エルピスとは" : "何してくれるの？"}</p>
                    </a>
                    <a href="#counselor" className="hero-nav-item column" onClick={e => { e.preventDefault(); scrollToIdSmooth('counselor'); }}>
                        <img src={`${process.env.PUBLIC_URL}/images/hero/hero-nav-speaking.png`} alt="" width="100" />
                        <p>{isMobile ? "代表の考え" : "代表の考え"}</p>
                    </a>
                    <a href="#use-cases" className="hero-nav-item column offset" onClick={e => { e.preventDefault(); scrollToIdSmooth('use-cases'); }}>
                        <img src={`${process.env.PUBLIC_URL}/images/hero/hero-nav-listening.png`} alt="" width="100" />
                        <p>{isMobile ? "対象症例" : "対象の症例は？"}</p>
                    </a>
                    <a href="#access" className="hero-nav-item column" onClick={e => { e.preventDefault(); scrollToIdSmooth('access'); }}>
                        <img src={`${process.env.PUBLIC_URL}/images/hero/hero-nav-helper.png`} alt="" width="100" />
                        <p>{isMobile ? "アクセス" : "どこにあるの？"}</p>
                    </a>
                </div>
            </section>

            {/* <!-- エルピスって何 --> */}
            <section className="about column" id="about">
                <FlowerDecoration src="flower5.png" />
                <h2>エルピスとは？</h2>
                <div className="about-content-right">
                    <p>
                        {showAboutFull || aboutText.length <= aboutLimit ? aboutText : aboutShort}
                        {aboutText.length > aboutLimit && (
                            <button className="more-btn" onClick={() => setShowAboutFull(v => !v)}>
                                {showAboutFull ? '閉じる' : 'もっと見る'}
                            </button>
                        )}
                    </p>
                </div>


                {/*<Button text="詳細はこちら" link="/"></Button> */}
            </section>

            {/* <!-- どんな人が話を聞いてくれるの？ --> */}
            <section className="counselor" id="counselor">

                <div className="counselor-main container row fade-in">
                    <div className="counselor-left ">
                        <FlowerDecoration src="flower6.png" />
                        <h2>代表紹介</h2>
                        <p className="counselor-name">代表取締役　今西三千代</p>
                        <p>
                            {showCounselorFull || counselorText.length <= counselorLimit ? counselorText : counselorShort}
                            {counselorText.length > counselorLimit && (
                                <button className="more-btn" onClick={() => setShowCounselorFull(v => !v)}>
                                    {showCounselorFull ? '閉じる' : 'もっと見る'}
                                </button>
                            )}
                        </p>
                        <Link to="/counselor" style={{ textDecoration: 'none' }}><Button text="代表の想い" /></Link>
                    </div>
                    {/* 第二リリース　おばあちゃんの画像 */}
                    {/* <div className="counselor-right">
                        <img src={`${process.env.PUBLIC_URL}/images/person/wonyon.jpg`} alt="今西三千代の写真" />
                    </div> */}

                </div>
                {/* <div className="support-member container column fade-in">
                    <h3>サポートメンバー</h3>
                    <div className="support-member-items row">
                        <div className="support-member-item column">
                            <img src="../images/person/wonyon.jpg" alt="サポートメンバー写真" />
                            <p>サナ</p>
                        </div>
                        <div className="support-member-item column">
                            <img src="../images/person/wonyon.jpg" alt="サポートメンバー写真" />
                            <p>ソリュン</p>
                        </div>
                        <div className="support-member-item column">
                            <img src="../images/person/wonyon.jpg" alt="サポートメンバー写真" />
                            <p>ウンチェ</p>
                        </div>
                    </div>

                </div> */}
            </section>

            {/* <!-- どんな人が来てるの？ --> */}
            {/* <section className="use-cases fade-in" id="use-cases">
                <div className="column white-bg">
                    <div className="column">
                        <h2>対象となる症状や実績</h2>
                        <div className="row second">
                            <IconText icon="../images/icon/sentiment_dissatisfied.png" text="うつ病" />
                            <IconText icon="../images/icon/psychology_alt.png" text="統合失調" />
                        </div>
                        <div className="row">
                            <IconText icon="../images/icon/mindfulness.png" text="認知症" />
                            <IconText icon="../images/icon/person_off.png" text="自閉症" />

                        </div>


                    </div>



                </div>

            </section> */}
            <div id="use-cases">
                <SymptomSection />
            </div>

            {/* 具体的な症例セクション */}
            <section className="concrete-cases fade-in" id="concrete-cases">

                <FlowerDecoration src="flower7.png" />



                <div className="column concrete-cases">
                    <h2>具体的な症例</h2>
                    <h3 className="concrete-cases__subtitle">三男：脳性麻痺・発作1日600回からの回復</h3>
                    <div className="concrete-cases-content">
                        <p>
                            {showConcreteFull || concreteText.length <= concreteLimit ? concreteText : concreteShort}
                            {concreteText.length > concreteLimit && (
                                <button className="more-btn" onClick={() => setShowConcreteFull(v => !v)}>
                                    {showConcreteFull ? '閉じる' : 'もっと見る'}
                                </button>
                            )}
                        </p>
                    </div>
                </div>
            </section>

            <section className="access fade-in" id="access">
                <div className="column access">
                    <FlowerDecoration src="flower4.png" />
                    <h2>アクセス</h2>

                    <Map />

                    <div className="access-info">
                        <div className="access-card">
                            <div>
                                <h3>駅からの送迎</h3>
                                <p>＊最寄の駅（東金駅、成東駅）まで車でお迎えにあがります。</p>
                            </div>
                        </div>
                        <div className="access-card">
                            <div>
                                <h3>車でお越しの方</h3>
                                <p>東金有料道路山武成東ICで降り、車で５分</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main >
    );
}

export default HomePage;