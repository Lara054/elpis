import React from 'react';
import '../css/components/symptom_section.css';
import FlowerDecoration from "../components/FlowerDecoration";

const symptoms = [
    {
        title: 'うつ病',
        description: 'うつは、心が自分の内側に閉じてしまうことで深まります。でも、誰かを思いやり関わるうちに、自然と心が外に向きはじめる――私はその変化こそが、回復のはじまりだと感じています。'
    },
    {
        title: '統合失調症',
        description: '統合失調は、思考障害、思考の貧困、意欲の欠如、自閉などの症状が見られます。スタッフとの共同生活や対話の中で、改善点を見出していけると考えています。'
    },
    {
        title: '認知症',
        description: '認知症の背景には、孤独や人との断絶が深く関わっていると私たちは考えています。思いやりとつながりの中に、心を穏やかに保つ鍵があるのです。'
    },
    {
        title: '自閉症',
        description: '自閉症の背景には、親子の愛着や人とのつながりが深く関わっていると私たちは考えています。愛することの大切さに気づくことが、支援の第一歩となります。'
    },
];

// const cases = [
//     {
//         condition: '【自閉症】5歳男児／発語なし・目を合わせない',
//         support: '1対1の生活支援・感覚統合的アプローチ・日常からのアプローチを継続的に実施。',
//         result: '半年後には「おはよう」「ママ」などの言葉が出るようになり、目も合うように。'
//     },
//     {
//         condition: '【うつ】40代女性／不眠・無気力・閉じこもり',
//         support: '生活リズムの改善支援と、距離感を尊重した対話を継続。',
//         result: '1年後には日中に外出し、近所の公園にひとりで行けるように。'
//     }
// ];

const SymptomSection = () => {
    return (
        <section className="symptom-section">
            <FlowerDecoration src="flower4.png" position="top-center" />
            <h2 className="section-title">対応可能な症例</h2>
            <p className="section-lead">
                エルピスでは、病名や診断にとらわれず、「その人らしさ」を大切に支援しています。<br />
                以下は、私たちが対応可能な症例になります。
            </p>

            <div className="symptom-list">
                {symptoms.map((symptom, idx) => (
                    <div key={idx} className="symptom-card">
                        <h3>{symptom.title}</h3>
                        <p>{symptom.description}</p>
                    </div>
                ))}
            </div>
            {/* 第二リリース 症例 */}
            {/* <div className="case-list">
                {cases.map((c, idx) => (
                    <div key={idx} className="case-card">
                        <p className="case-condition">{c.condition}</p>
                        <p><strong>支援：</strong>{c.support}</p>
                        <p><strong>変化：</strong>{c.result}</p>
                    </div>
                ))}
            </div> */}
        </section>
    );
};

export default SymptomSection;
