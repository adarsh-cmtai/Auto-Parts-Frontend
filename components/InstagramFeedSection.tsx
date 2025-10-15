import React from 'react';

export default function InstagramFeedSection() {
    return (
        <section className="bg-white py-8 sm:py-8">
            <div className="container mx-auto px-4 flex justify-center">
                <div className="w-full max-w-[800px]">
                    <iframe
                        title="Instagram Feed for ownsilent.international"
                        scrolling="no"
                        className="w-full border-none rounded-xl"
                        style={{ height: '683px' }}
                        src="https://www.instagram.com/ownsilent.international/embed"
                    ></iframe>
                </div>
            </div>

        </section>
    );
}