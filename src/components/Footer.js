import React from 'react';
import '../css/components/footer.css'; // 必要に応じてCSSを外部化

function Footer() {
  return (
    <footer className="footer">
      <section className="information">
        <h2 className="footer-heading">会社情報</h2>
        <div className="information-content">
          <div><strong>法人名：</strong>株式会社エルピス</div>
          <div><strong>事業所名：</strong>居宅支援事業所エルピス</div>
          <div>
            <strong>所在地：</strong><br />
            エルピス介護ステーション<br />
            〒289-1328 千葉県山武市湯坂108-3<br />
            エルピス有料老人ホーム（住宅型有料老人ホーム）<br />
            〒283-0001 千葉県東金市家之子1671-35
          </div>
          <div><strong>TEL：</strong>0475-52-7411</div>
          <div><strong>FAX：</strong>0475-51-4931</div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
