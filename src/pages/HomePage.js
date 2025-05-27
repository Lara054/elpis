import React from "react";
import Hero from '../components/Hero';
import Button from '../components/Button';
import Map from '../components/Map';
import { Link } from "react-router-dom";
import '../css/pages/home.css';
import '../css/common.css'


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
                <p>エルピスは、統合失調症、双極性障害、うつ病など、精神的な病を抱えている方のための場所です。「治療を受けてきたけれど、改善が見られなかった」「病名はついているけれど、どう付き合っていいかわからない」そんな方が、少しずつ“自分らしさ”を取り戻していくために、カウンセラーと話しながら、一緒に整えていく場所です。
                    医療機関では「改善が難しい」と言われた症状でも、 実際にここで落ち着きを取り戻した方が何人もいます。
                    お薬や診断だけではたどり着けなかった回復の形を、 私たちは “人と人との関わり” の中で探していきます。
                </p>
                {/*<Button text="詳細はこちら" link="/"></Button> */}
            </section>

            {/* <!-- どんな人が話を聞いてくれるの？ --> */}
            <section className="counselor" id="counselor">
                <div className="counselor-main container row fade-in">
                    <div className="counselor-left ">
                        <h2>カウンセラー紹介</h2>
                        <p className="counselor-name">ウォニョン</p>
                        <p>
                            自分を変えたいと思う人の背中を、私は本気で押します。
                            私のやり方は、少し厳しいかもしれません。
                            でも、“本当に良くなりたい”という気持ちがあるなら、
                            私はその覚悟に応えます。自分を変えたいと思う人の背中を、私は本気で押します。
                            私のやり方は、少し厳しいかもしれません。
                            でも、“本当に良くなりたい”という気持ちがあるなら、
                            私はその覚悟に応えます。自分を変えたいと思う人の背中を、私は本気で押します。
                            私のやり方は、少し厳しいかもしれません。
                            でも、“本当に良くなりたい”という気持ちがあるなら、
                            私はその覚悟に応えます。
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
            <section className="use-cases fade-in" id="use-cases">
                <div className="column">
                    <h2>対象となる症状や実績</h2>
                    <div className="column">
                        <div className="row">


                        </div>

                    </div>



                </div>

            </section>
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

        </main>
    );
}

export default HomePage;