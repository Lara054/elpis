import React from "react";
import Hero from '../components/Hero';

function AboutPage() {
    return (
        <main>
            {/* <!-- ヒーロー --> */}
            <Hero>
                <h1>エルピス</h1>
                <h3>
                    生きづらさを抱える人と、その家族のための「もうひとつの居場所」。
                </h3>
            </Hero>

            <section class="about" id="about">
                <div class="container column fade-in">

                    <h2>エルピスとは？</h2>
                    <div class="wave-line"></div>
                    <p>エルピスは、統合失調症、双極性障害、うつ病など、精神的な病を抱えている方のための場所です。「治療を受けてきたけれど、改善が見られなかった」「病名はついているけれど、どう付き合っていいかわからない」そんな方が、少しずつ“自分らしさ”を取り戻していくために、カウンセラーと話しながら、一緒に整えていく場所です。
                        医療機関では「改善が難しい」と言われた症状でも、 実際にここで落ち着きを取り戻した方が何人もいます。
                        お薬や診断だけではたどり着けなかった回復の形を、 私たちは “人と人との関わり” の中で探していきます。
                    </p>
                </div>
            </section>
            <section class="how-to-support" id="how-to-support">
                <div class="container column fade-in">

                    <h2>支援方法について</h2>
                    <div class="wave-line"></div>
                    <h3>「どんな支援か」は、お話の中で一緒に決めていきます</h3>
                    <p>エルピスでは、支援のかたちを最初から決めてしまうことはありません。
                        まずは、カウンセラーとゆっくりお話しするところから始まります。
                        その中で、生活や体調、気持ちの動きを少しずつ一緒に整理していき、
                        必要に応じて、住み込みでの支援や、定期的な通い、お話だけのサポートなど、
                        「その人にとって必要な支援のかたち」を共に見つけていきます。
                    </p>

                    <div class="support-example column">

                        <h3>▶ 支援例</h3>
                        <div class="support-example-item">1</div>
                        <div class="support-example-item">2</div>
                        <div class="support-example-item">3</div>

                    </div>
                </div>
            </section>
            <section class="value" id="value">
                <div class="container column fade-in">

                    <h2>大切にしていること</h2>
                    <div class="row">
                        <p>エルピスでは、支援のかたちを最初から決めてしまうことはありません。
                            まずは、カウンセラーとゆっくりお話しするところから始まります。
                            その中で、生活や体調、気持ちの動きを少しずつ一緒に整理していき、
                            必要に応じて、住み込みでの支援や、定期的な通い、お話だけのサポートなど、
                            「その人にとって必要な支援のかたち」を共に見つけていきます。
                        </p>
                        <img src="../images/person/sana.png" alt="" />
                    </div>
                </div>
            </section>


            <section class="facility" id="facility">
                <div class="container column fade-in">

                    <h2>施設紹介</h2>
                    <div class="autoplay">
                        <div><img src="../images/facility/f_image1.jpeg" alt="" /></div>
                        <div><img src="../images/facility/f_image2.jpeg" alt="" /></div>
                        <div><img src="../images/facility/f_image3.jpeg" alt="" /></div>
                        <div><img src="../images/facility/f_image4.jpeg" alt="" /></div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AboutPage;