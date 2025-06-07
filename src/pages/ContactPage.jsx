import React from 'react';
import Hero from '../components/Hero';


function ContactPage() {

    return (
        <main>

            <Hero title={"お問い合わせ"} />
            <div style={styles.container}>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '10vh' }}>
                    <h2>お問い合わせフォーム</h2>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeiW41pROSq-cvV2KFr_EDVEYtP2ldYzhpwYqPnMZKbKfvhIg/viewform?usp=dialog"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            background: '#5ca16d',
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                            padding: '16px 32px',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                            margin: '40px 0',
                            transition: 'background 0.2s, color 0.2s',
                        }}
                    >
                        Googleフォームでお問い合わせ
                    </a>
                    <p style={{ marginTop: '16px', color: '#666', fontSize: '0.98rem' }}>※外部サイト（Googleフォーム）が新しいタブで開きます</p>
                </div>

            </div>

        </main>
    );
}

const styles = {
    container: {
        maxWidth: '500px',
        margin: '80px 20px',
        padding: '10px',
        background: '#fff',
        borderRadius: '12px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
};

export default ContactPage;
