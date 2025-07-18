import React, { useState } from "react";
import Hero from '../components/Hero';
import '../css/common.css';
import '../css/pages/counselor.css';

function CounselorItem({ title, text }) {
    const [expanded, setExpanded] = useState(false);
    // 画面幅でmaxLengthを切り替え
    const isPC = typeof window !== 'undefined' && window.innerWidth > 900;
    const maxLength = isPC ? 200 : 100;
    const isLong = text.length > maxLength;
    const displayText = !expanded && isLong ? text.slice(0, maxLength) + '…' : text;

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>{title}</h2>
            <p style={{ textAlign: 'left', whiteSpace: 'pre-line' }}>
                {displayText}
                {isLong && (
                    <button className="counselor-more-btn" onClick={() => setExpanded(v => !v)}>
                        {expanded ? '閉じる' : 'もっと見る'}
                    </button>
                )}
            </p>
        </div>
    );
}

function Counselor() {
    return (
        <>
            <Helmet>
                <title>カウンセラー紹介｜心に寄り添う支援を届けます</title>
                <meta name="description" content="コイノニアのカウンセラーが伝えたい想い。利用者と真摯に向き合い、一人ひとりに寄り添ったケアを行っています。" />
            </Helmet>


            <main>
                {/* <!-- ヒーロー --> */}
                <Hero title=" 代表の想い" subTitle="" backgroundImage={"/images/hero/background-image/counselor-background-image.jpg"}></Hero>
                {/* <!-- ヒーローナビ --> */}

            <div className="counselor_content fade-in">
                <CounselorItem
                    title="うつ病について"
                    text={`うつ病の根本には、"我（わがまま）"の存在があると、私は考えています。ここで言う“わがまま”とは、自分の感情や苦しみに心をとらわれすぎてしまい、周囲との関わりを断ち切ってしまう状態を指します。うつから回復するためには、まず自分の心の奥ばかりを見るのではなく、少しずつでも他者の心に目を向け、思いやることが大切です。「相手はいま何を感じているのか」「どんな言葉があたたかいだろうか」と、他人の心に寄り添おうとする練習を重ねていくうちに、やさしさや慈しみ、そして人を愛する心が少しずつ育まれていきます。その変化が起きると、次第に“わがまま”はほどけていき、「自分の想い」ではなく「目の前の誰か」の大切さに気づけるようになります。
                        そして、ふとした瞬間に「自分はひとりじゃなかった」「誰かのためにできることがある」と感じられるようになり、うつによる心の沈みは自然と和らいでいきます。
                        うつを“治す”というよりも、人を思いやることで自分が変わっていく。
                        その過程こそが、うつからの回復につながる――私は、たくさんの方との関わりを通してそう信じています。`}
                    />
                    <CounselorItem
                        title="認知症について"
                        text="認知症は、単なる老化現象ではなく、心のあり方や人との関係の中で進行する面もあると私たちは考えています。長年にわたる反発や孤立、他者との関係が断たれた生活は、やがて心の柔軟さを失い、妄想や孤独感を深めてしまいます。一方、素直さや感謝、人への思いやりを忘れずに生きる人は、年齢を重ねても多くの人に囲まれ、穏やかに心を保ち続けられる傾向があります。
                    私たちは、人との温かなつながりを回復することが、認知症の予防や進行の緩和においても、大きな意味を持つと信じています。"
                    />
                    <CounselorItem
                        title="自閉症について"
                        text="自閉症の背景には、親子の絆や愛情の在り方が影響していることがあると、私たちは経験から感じています。生まれた瞬間から、肌を通じた愛情や、心から子どもを受け入れることが、その子の心の成長に深く関わります。母親自身が他者を思いやり、心を開いて人を愛することができると、自然と母乳も出やすくなり、安心感を育む土台となります。一方で、冷たさや孤立を抱えたままでは、子どもにも影響が及ぶことがあります。
自分自身の心と向き合い、人を愛することを学び直すことで、子どもとの関係も変わり、自閉症の子を支える新たな道が開かれると、私たちは考えています"
                    />
                    <CounselorItem
                        title="統合失調について"
                        text="詳しくはお電話にてお問い合わせください"
                    />
                </div>
            </main>
        </>
    );
}
export default Counselor;