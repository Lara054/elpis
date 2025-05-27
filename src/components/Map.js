import React from 'react';

const Map = () => {
    return (
        <div style={{ width: '100%', height: '300px' }}>
            <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4424.5394170987765!2d140.3797198044402!3d35.589207210836314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6022eaf76be67665%3A0x321005e98ace9cf3!2z5a6244Gu5a2Q77yI44OQ44K577yJ!5e0!3m2!1sja!2sjp!4v1748347498407!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
};

export default Map;
