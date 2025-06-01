import React from "react";
import Hero from '../components/Hero';
import Button from '../components/Button';
import Map from '../components/Map';
import IconText from '../components/IconText';
import SymptomSection from '../components/SymptomSection';
import { Link } from "react-router-dom";
import '../css/pages/home.css';
import '../css/common.css';


function HomePage() {
    return (
        <main>

            {/* <!-- ヒーロー --> */}
            <Hero title=" 「もうひとつの居場所」。" subTitle=""></Hero>
            {/* <!-- ヒーローナビ --> */}
            <section className="hero-nav">
                <div className="hero-nav-title">
                    <h3>あなたが今、気になっていることはありますか？</h3>
                </div>
                <div className="fade-item hero-nav-items row">
                    <a href="#about" className="hero-nav-item column offset">
                        <img src="../images/hero/hero-nav-thinking.png" alt="" width="100" />
                        <p>何してくれるの？</p>
                    </a>
                    <a href="#counselor" className="hero-nav-item column">
                        <img src="../images/hero/hero-nav-speaking.png" alt="" width="100" />
                        <p>どんな人とお話しするの？</p>
                    </a>
                    <a href="#use-cases" className="hero-nav-item column offset">
                        <img src="../images/hero/hero-nav-listening.png" alt="" width="100" />
                        <p>どんな人が対象なの？</p>
                    </a>
                    <a href="#access" className="hero-nav-item column">
                        <img src="../images/hero/hero-nav-helper.png" alt="" width="100" />
                        <p>どこにあるの？</p>
                    </a>
                </div>
            </section>

            {/* <!-- エルピスって何 --> */}
            <section className="about column" id="about">
                <h2>エルピスとは？</h2>
                <div className="about-content">
                    <div className="about-content-left">
                        <p>法人名　株式会社エルピス<br />
                            事業所名　居宅支援事業所エルピス<br />
                            エルピス介護ステーション<br />
                            〒289-1328 千葉県山武市湯坂108-3<br />
                            エルピス有料老人ホーム<br />（住宅型有料老人ホーム）<br />
                            〒283-0001　千葉県東金市家之子1671-35<br />
                            TEL　0475-52-7411<br />
                            FAX　0475-51-4931</p>
                    </div>
                    <div className="about-content-right">
                        <p>エルピスは、統合失調症、双極性障害、うつ病など、精神的な病を抱えている方のための場所です。「治療を受けてきたけれど、改善が見られなかった」「病名はついているけれど、どう付き合っていいかわからない」そんな方が、少しずつ“自分らしさ”を取り戻していくために、カウンセラーと話しながら、一緒に整えていく場所です。
                            医療機関では「改善が難しい」と言われた症状でも、 実際にここで落ち着きを取り戻した方が何人もいます。
                            お薬や診断だけではたどり着けなかった回復の形を、 私たちは “人と人との関わり” の中で探していきます。
                        </p>
                    </div>
                </div>

                {/*<Button text="詳細はこちら" link="/"></Button> */}
            </section>

            {/* <!-- どんな人が話を聞いてくれるの？ --> */}
            <section className="counselor" id="counselor">
                <div className="counselor-main container row fade-in">
                    <div className="counselor-left ">
                        <h2>カウンセラー紹介</h2>
                        <p className="counselor-name">代表取締役　今西三千代</p>
                        <p>
                            平成４年９月１日より５０歳になるまで何人もの方々の助けを得て今生かされているかと思う度、何のお返しもしていない私はその方々にお返しするのは申し訳ないので、貧しい人や病んでいる人々の助け手になるべく精神の身体の重荷を少しでも平安になれる心と体を鍛えて、また子供たちや心の交じう方々の助けによってこの施設をおよそ２８年間ものあいだ続けられてきたようにどこまでいっても誰かに助けられています。「お互いに助けあう」施設です。老人スタッフ３人（７０歳以上）若者５人の心を一つにした者によって成り立っている所です。牡蠣の殻なる牡蠣の身のかくも涯てなき海にして　生きのいのちの味気なき　その思いこそかなしけれ　と歌っています。その生命に喜びと感謝を感じられる施設だと思います。
                        </p>
                        <Button text="カウンセラーの想い" link="/"></Button>
                    </div>
                    <div className="counselor-right">
                        <img src="../images/person/wonyon.jpg" alt="今西三千代の写真" />
                    </div>
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

            <section className="access fade-in" id="access">
                <div className="column">
                    <h2>アクセス</h2>
                    <Map />
                    <br />
                    <div>＊最寄の駅（東金駅、成東駅）まで車でお迎えにあがります。</div>
                    <div className="info column">

                        <div className="map-info row">
                            <h3>所在地：</h3>
                            <p>111-1111 千葉県〇〇市〇〇町1-1-1</p>
                        </div>
                        <div className="map-info row">
                            <h3>電話　：</h3>
                            <p>000-0000-0000</p>
                        </div>
                        <div className="map-info row">
                            <h3>メール：</h3>
                            <p>test@example.com</p>
                        </div>
                    </div>

                </div>
            </section>

        </main >
    );
}

export default HomePage;