import React, { useState } from 'react';
import Button from '../components/Button';
import Hero from '../components/Hero';


function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 簡易バリデーション（空欄チェック）
        if (!formData.name || !formData.phone || !formData.email || !formData.message) {
            alert("全ての項目を入力してください。");
            return;
        }

        console.log("送信データ:", formData);
        setSubmitted(true);

        // 通常はここで fetch / axios でAPI送信する
    };

    return (
        <main>

            <Hero title={"お問い合わせ"} />
            <div style={styles.container}>
                <h2>お問い合わせフォーム</h2>
                {submitted ? (
                    <p>送信が完了しました。ありがとうございました！</p>
                ) : (
                    <form onSubmit={handleSubmit} style={styles.form}>
                        <div style={styles.formGroup}>
                            <label>お名前</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="山田 太郎"
                                required
                                style={styles.input}
                            />
                        </div>

                        <div style={styles.formGroup}>
                            <label>電話番号</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="090-1234-5678"
                                required
                                style={styles.input}
                            />
                        </div>

                        <div style={styles.formGroup}>
                            <label>メールアドレス</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="example@mail.com"
                                required
                                style={styles.input}
                            />
                        </div>

                        <div style={styles.formGroup}>
                            <label>相談内容</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="ご相談内容をお書きください"
                                required
                                style={styles.textarea}
                            />
                        </div>

                        <button type="submit" style={styles.button}><Button text="送信する"></Button></button>
                    </form>
                )}
            </div>

        </main>
    );
}

const styles = {
    container: {
        maxWidth: '500px',
        margin: '80px auto',
        padding: '30px',
        background: '#fff',
        borderRadius: '12px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column'
    },
    input: {
        padding: '10px',
        fontSize: '16px',
        borderRadius: '6px',
        border: '1px solid #ccc'
    },
    textarea: {
        padding: '10px',
        fontSize: '16px',
        borderRadius: '6px',
        border: '1px solid #ccc',
        resize: 'vertical',
        height: '100px'
    },
    button: {
        color: '#fff',
        backgroundColor: '#FFFFFF',
        border: 'none',
        cursor: 'pointer',
        margin: '0 auto',
        fontWeight: 'bold',
    }


};

export default ContactPage;
