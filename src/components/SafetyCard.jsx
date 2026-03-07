import React from 'react';

const SafetyCard = () => {
  return (
    <section className="py-24 px-4 sm:px-6 bg-[#F7F7F5] section-divider" id="safety">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-14">
          <h2 className="text-4xl sm:text-5xl text-[#111] leading-tight">
            Safety first —<br/><span className="grad-orange">verified students</span> only
          </h2>
        </div>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="card-lift bg-[#F7F7F5] border border-black/7 rounded-3xl p-6">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF3EC] border border-[#F07B3A]/15 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-[#F07B3A]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.18L12 2.96 8.6 1.52 6.71 4.7 3.1 5.52l.34 3.69L1 12l2.44 2.79-.34 3.69 3.61.82 1.89 3.18L12 21.04l3.4 1.44 1.89-3.18 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 6.4-6.4 1.48 1.48-7.88 7.88z"/>
              </svg>
            </div>
            <h3 className="text-base text-[#111] mb-2">Student ID Verified</h3>
            <p className="text-[#111]/45 text-sm leading-relaxed">Every user uploads a valid student ID. Our team reviews manually within 24h.</p>
          </div>
          <div className="card-lift bg-[#F7F7F5] border border-black/7 rounded-3xl p-6">
            <div className="w-10 h-10 rounded-2xl bg-[#EAF9F7] border border-[#3DBDA8]/15 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-[#3DBDA8]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.49-1.73-2.11-2.96-3.84-3.22-.62-.08-.74-.29-.74-.49 0-.29.29-.55.55-.55.96 0 1.78.84 1.78 1.78 0 .49-.39.89-.89.89-.39 0-.72-.32-.72-.72 0-.16.13-.28.28-.28.15 0 .28.13.28.28 0 .15-.13.28-.28.28-.04 0-.08-.01-.12-.01-.04 0-.08.01-.12.01-.39 0-.72.32-.72.72 0 .39.32.72.72.72.89 0 1.78-.89 1.78-1.78 0-.96-.82-1.78-1.78-1.78-.26 0-.55.26-.55.55 0 .2.12.41.74.49 1.73.26 3.35 1.49 3.84 3.22.23.82.71 1.48 1.28 1.96L12 21.96l-9.94-9.94c.57-.48 1.05-1.14 1.28-1.96.49-1.73 2.11-2.96 3.84-3.22.62-.08.74-.29.74-.49 0-.29-.29-.55-.55-.55-.96 0-1.78.84-1.78 1.78 0 .49.39.89.89.89.39 0 .72-.32.72-.72 0-.16-.13-.28-.28-.28-.15 0-.28.13-.28.28 0 .15.13.28.28.28.04 0 .08-.01.12-.01.04 0 .08.01.12.01.39 0 .72-.32.72-.72 0-.39-.32-.72-.72-.72-.89 0-1.78.89-1.78 1.78 0 .96.82 1.78 1.78 1.78.26 0 .55-.26.55-.55 0-.2-.12-.41-.74-.49-1.73-.26-3.35-1.49-3.84-3.22-.23-.82-.71-1.48-1.28-1.96L12 2.04l9.94 9.94c-.57.48-1.05 1.14-1.28 1.96z"/>
              </svg>
            </div>
            <h3 className="text-base text-[#111] mb-2">Live GPS Tracking</h3>
            <p className="text-[#111]/45 text-sm leading-relaxed">Share your live location with trusted contacts during any ride.</p>
          </div>
          <div className="card-lift bg-[#F7F7F5] border border-black/7 rounded-3xl p-6">
            <div className="w-10 h-10 rounded-2xl bg-[#F7F7F5] border border-[#111]/15 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-[#111]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16c2.76 0 5-2.24 5-5V9h-2v3c0 1.66-1.34 3-3 3s-3-1.34-3-3V9H7v3c0 2.76 2.24 5 5 5zm6-10v1h-2V7h2z"/>
              </svg>
            </div>
            <h3 className="text-base text-[#111] mb-2">24/7 Support</h3>
            <p className="text-[#111]/45 text-sm leading-relaxed">Campus support team available for any incident reports or disputes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyCard;
