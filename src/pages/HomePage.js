import React from "react";
import Hero from '../components/Hero';

function HomePage() {
    return (
        <main>
            <Hero title="エルピス" subTitle="あなたが今、気になっていることはありますか？">

                <div className="fade-item hero-nav-items row">
                    <a href="#about" className="hero-nav-item column offset">
                        <img src="../images/hero-nav-thinking.png" alt="" width="100" />
                        <p>エルピスって何？</p>
                    </a>
                    <a href="#counselor" className="hero-nav-item column">
                        <img src="../images/hero-nav-listen.png" alt="" width="100" />
                        <p>どんな人とお話しするの？</p>
                    </a>
                    <a href="#cases" className="hero-nav-item column">
                        <img src="../images/hero-nav-thinking.png" alt="" width="100" />
                        <p>症例や実績は？</p>
                    </a>
                    <a href="#use-cases" className="hero-nav-item column offset">
                        <img src="../images/hero-nav-listen.png" alt="" width="100" />
                        <p>どんな人が来てるの？</p>
                    </a>
                </div>
            </Hero>
            {/* <!-- <section class="curved"></section> --> */}


            {/* <!-- エルピスって何 --> */}
            <section class="about" id="about">
                <div class="container column fade-in">

                    <h2>エルピスとは？</h2>
                    <div class=""></div>
                    <p>エルピスは、統合失調症、双極性障害、うつ病など、精神的な病を抱えている方のための場所です。「治療を受けてきたけれど、改善が見られなかった」「病名はついているけれど、どう付き合っていいかわからない」そんな方が、少しずつ“自分らしさ”を取り戻していくために、カウンセラーと話しながら、一緒に整えていく場所です。
                        医療機関では「改善が難しい」と言われた症状でも、 実際にここで落ち着きを取り戻した方が何人もいます。
                        お薬や診断だけではたどり着けなかった回復の形を、 私たちは “人と人との関わり” の中で探していきます。
                    </p>
                    <a href="" class="button green">詳細はこちら</a>
                </div>

            </section>

            {/* <!-- どんな人が話を聞いてくれるの？ --> */}
            <section class="counselor" id="counselor">
                <div class="counselor-main container row fade-in">
                    <div class="counselor-left ">
                        <h2>カウンセラー紹介</h2>
                        <p class="counselor-name">ウォニョン
                        </p>
                        <p>
                            自分を変えたいと思う人の背中を、私は本気で押します。
                            私のやり方は、少し厳しいかもしれません。
                            でも、“本当に良くなりたい”という気持ちがあるなら、
                            私はその覚悟に応えます。
                        </p>
                        <div class="button white"><a href="">カウンセラーの想い</a></div>
                    </div>
                    <div class="counselor-right">
                        <img src="../images/person/wonyon.jpg" alt="今西三千代の写真" />
                    </div>
                </div>
                <div class="support-member container column fade-in">
                    <h3>サポートメンバー</h3>
                    <div class="support-member-items row">
                        <div class="support-member-item column">
                            <img src="../images/person/sana.png" alt="サポートメンバー写真" />
                            <p>サナ</p>
                        </div>
                        <div class="support-member-item column">
                            <img src="../images/person/soryun.png" alt="サポートメンバー写真" />
                            <p>ソリュン</p>
                        </div>
                        <div class="support-member-item column">
                            <img src="../images/person/unche.png" alt="サポートメンバー写真" />
                            <p>ウンチェ</p>
                        </div>
                    </div>

                </div>
            </section>
            {/* <!-- 症例や実績は？ --> */}
            <section class="cases" id="cases">
                <div class="container column fade-in">
                    <h2>症例・実績</h2>
                    <table>
                        <tr>
                            <th>会社名</th>
                            <td>テーブル株式会社</td>
                        </tr>
                        <tr>
                            <th>創業</th>
                            <td>1940年</td>
                        </tr>
                        <tr>
                            <th>従業員数</th>
                            <td>500人</td>
                        </tr>
                        <tr>
                            <th>電話番号</th>
                            <td>000-000-0000</td>
                        </tr>
                        <tr>
                            <th>電話番号</th>
                            <td>000-000-0000</td>
                        </tr>
                        <tr>
                            <th>電話番号</th>
                            <td>000-000-0000</td>
                        </tr>
                        <tr>
                            <th>電話番号</th>
                            <td>000-000-0000</td>
                        </tr>
                        <tr>
                            <th>電話番号</th>
                            <td>000-000-0000</td>
                        </tr>
                    </table>
                </div>
            </section>

            {/* <!-- どんな人が来てるの？ --> */}
            <section class="use-cases fade-in" id="use-cases">
                <div class="container column">
                    <h2>こんな方がご利用されています</h2>
                    <div class="use-cases-items column">
                        <div class="use-cases-item row">
                            <div class="left">
                                <p>うつ状態にある</p>
                            </div>
                            <div class="center"></div>
                            <div class="right">
                                <p>子供が言うことを聞いてくれない</p>
                            </div>
                        </div>
                        <div class="use-cases-item row">
                            <div class="left"></div>
                            <div class="center">
                                <p>統合失調に苦しんでいる</p>
                            </div>
                            <div class="right"></div>
                        </div>
                        <div class="use-cases-item row">
                            <div class="left">
                                <p>生きるのが辛い</p>
                            </div>
                            <div class="center"></div>
                            <div class="right">
                                <p>よる眠ることができない</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section class="access fade-in">
                <div class="container column">
                    <h2>アクセス</h2>
                    <img src="../images/map.png" alt="地図" />
                    <div class="info column">

                        <div class="map-info row">
                            <h3>所在地：</h3>
                            <div>111-1111 千葉県〇〇市〇〇町1-1-1</div>
                        </div>
                        <div>＊最寄の駅（東金駅、成東駅）まで車でお迎えにあがります。</div>
                        <div class="map-info row">
                            <h3>電話：</h3>
                            <div>000-0000-0000</div>
                        </div>
                        <div class="map-info row">
                            <h3>メール：</h3>
                            <div>test@example.com</div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}

export default HomePage;