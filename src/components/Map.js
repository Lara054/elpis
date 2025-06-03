import React from 'react';

const Map = () => {
    return (
        <div style={{ width: '100%', height: '300px' }}>
            <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6488.553931603157!2d140.380197!3d35.59623400000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6022eafd3c22d6d3%3A0xb18eec04be9f7a0d!2z5pel5pys44CB44CSMjgzLTAwMDEg5Y2D6JGJ55yM5p2x6YeR5biC5a625LmL5a2Q77yR77yW77yX77yR4oiS77yT77yV!5e0!3m2!1sja!2sus!4v1748739358076!5m2!1sja!2sus"
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
