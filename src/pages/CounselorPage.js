import React, { useState } from "react";
import Hero from '../components/Hero';
import '../css/common.css';
import '../css/pages/counselor.css';

function CounselorItem({ title, text }) {
    const [expanded, setExpanded] = useState(false);
    const maxLength = 100;
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
        <main>
            {/* <!-- ヒーロー --> */}
            <Hero title=" カウンセラーの想い" subTitle=""></Hero>
            {/* <!-- ヒーローナビ --> */}

            <div className="counselor_content">
                <CounselorItem
                    title="うつ病について"
                    text={`うつ病の根本には、"我（わがまま）"の存在があると、私は考えています。ここで言う“わがまま”とは、自分の感情や苦しみに心をとらわれすぎてしまい、周囲との関わりを断ち切ってしまう状態を指します。うつから回復するためには、まず自分の心の奥ばかりを見るのではなく、少しずつでも他者の心に目を向け、思いやることが大切です。「相手はいま何を感じているのか」「どんな言葉があたたかいだろうか」と、他人の心に寄り添おうとする練習を重ねていくうちに、やさしさや慈しみ、そして人を愛する心が少しずつ育まれていきます。その変化が起きると、次第に“わがまま”はほどけていき、「自分の想い」ではなく「目の前の誰か」の大切さに気づけるようになります。そして、ふとした瞬間に「自分はひとりじゃなかった」「誰かのためにできることがある」と感じられるようになり、うつによる心の沈みは自然と和らいでいきます。うつを“治す”というよりも、人を思いやることで自分が変わっていく。その過程こそが、うつからの回復につながる――私は、たくさんの方との関わりを通してそう信じています。`}
                />
                <CounselorItem
                    title="統合失調について"
                    text="統合失調については、気分が持続的に落ち込み、興味や喜びを感じにくくなる精神的な疾患です。症状には、疲労感、集中力の低下、睡眠障害などが含まれます。"
                />
                <CounselorItem
                    title="認知症について"
                    text="認知症は、気分が持続的に落ち込み、興味や喜びを感じにくくなる精神的な疾患です。症状には、疲労感、集中力の低下、睡眠障害などが含まれます。"
                />
                <CounselorItem
                    title="自閉症について"
                    text="自閉症は、気分が持続的に落ち込み、興味や喜びを感じにくくなる精神的な疾患です。症状には、疲労感、集中力の低下、睡眠障害などが含まれます。"
                />
            </div>
        </main>
    );
}
export default Counselor;