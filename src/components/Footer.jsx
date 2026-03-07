import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-[#F7F7F5] border-t border-black/7 py-10 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
                    <a href="#" className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-xl bg-[#F07B3A] flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                            </svg>
                        </div>
                        <span style={{ fontFamily: 'Syne', sansSerif: true, fontWeight: 800 }} className="text-[#111]">Sharezi</span>
                    </a>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[#111]/40">
                        <a href="#" className="hover:text-[#111]/70 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-[#111]/70 transition-colors">Terms</a>
                        <a href="#" className="hover:text-[#111]/70 transition-colors">Contact</a>
                        <a href="#" className="hover:text-[#111]/70 transition-colors">FAQ</a>
                    </div>
                    <p className="text-[#111]/25 text-xs"> 2025 Sharezi. Students first.</p>
                </div>
            </footer></>
    )
}

export default Footer