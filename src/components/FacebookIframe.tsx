"use client"
import React, { useEffect } from 'react';

const FacebookPage: React.FC = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v19.0';
        script.async = true;
        script.defer = true;
        script.crossOrigin = 'anonymous';
        script.setAttribute('nonce', 'K0VZ98Fw');
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div >
            <div id="fb-root"></div>
            <div className="fb-page"
                data-href="https://www.facebook.com/profile.php?id=61553855435839"
                data-height="300"
                data-width="380"
                data-hide-cover="false"
                data-show-facepile="false">
            </div>
        </div>
    );
};

export default FacebookPage;
