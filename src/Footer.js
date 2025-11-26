import React from 'react';

export default function Footer() {
    return (
        <footer className="text-center text-white text-base py-6 relative z-10">
            <div className="mb-4 flex justify-center gap-6 text-sm text-neutral-400">
                <a href="#/cookie-settings" className="hover:text-orange-400 transition-colors">Cookie Settings</a>
                <a href="#/terms" className="hover:text-orange-400 transition-colors">Terms & Conditions</a>
                <a href="#/privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
            </div>
            © {new Date().getFullYear()} Allan Deschamps x Bambi Visuals. All rights reserved.
        </footer>
    );
}
