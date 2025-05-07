import React from "react";

function ContactPage() {
    return (
        <main>
            <section class="hero">
                <div class="container column">
                    <h1>お問い合わせ</h1>
                    <div class="hero-content">
                        <p>
                            サービスに関するご質問、ご不明点などがございましたら、以下のフォームよりお気軽にお問い合わせください。
                            <br />※ご相談予約は<a href="reserve.html">こちらのフォームからお願いいたします。</a>
                        </p>
                    </div>
                </div>
            </section>
            <section class="faq">
                <div class="container column">
                    <h2>よくある質問</h2>
                    <div>
                        <a href="">
                            Q.サービスは誰でも受けられますか？
                        </a>
                    </div>
                    <div>
                        <a href="">
                            Q. 入所型と通い型、どちらでも選べますか？
                        </a>
                    </div>
                </div>

            </section>
            <section class="form">
                <div class="container column">
                    <h2>お問い合わせ</h2>
                    <form action="#" method="post">
                        <div class="form-item">
                            <label for="name">お名前</label>
                            <input type="text" name="name" />
                        </div>
                        <div class="form-item">
                            <label for="emial">メールアドレス</label>
                            <input class="form-content" type="email" name="email" />
                        </div>
                        <div class="form-item">
                            <label for="tel">電話番号</label>
                            <input class="form-content" type="tel" name="tel" />
                        </div>
                        <div class="form-item">
                            <label for="content">お問い合わせ内容</label>
                            <textarea name="content" id="content" rows="5" cols="80"></textarea>
                        </div>
                        <button type="submit">送信する</button>

                    </form>

                </div>
            </section>
        </main>


    )
}

export default ContactPage;