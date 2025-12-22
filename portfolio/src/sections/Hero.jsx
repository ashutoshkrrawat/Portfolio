// src/sections/Hero.jsx
import AnimatedScrollArrow from "../components/MotionSlideArrow";
import Button from "../components/ModernButton";
import { WordRotate } from "../components/WordRotate";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import DownloadBtn from "../components/DownloadBtn";

export default function Hero() {
    return (
        <>
            <section
                id="home"
                className="
        relative
        min-h-screen
        flex items-center
        px-6 md:px-12
        pt-28
        "
            >
                <span
                    className="
                        absolute
                        top-32
                        left-1/2
                        -translate-x-1/2
                        flex items-center gap-3
                        select-none
                        whitespace-nowrap
                    "
                >
                    <WordRotate
                        words={["Hello", "Namaste", "Bonjour", "Ciao"]}
                        className="
                                  inline-block
                            font-doto-rounded
                            text-[4vw]      
                            
                            
                            text-white
                            "
                    /> <br />
                    <span className="text-white text-[4vw] font-doto-rounded">
                        World
                    </span>

                </span>

                <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center gap-12 mt-24 relative">
                    

                    {/* text + CTA */}
                    <div className="max-w-3xl">
                        <p className="text-lg md:text-xl text-white/70 mb-6">
                            Hi, I am <span className="font-semibold text-white text-lg font-bold">ASHUTOSH</span> <br />
                            Welcome to my <span className="font-outfit font-[700] text-white">portfolio</span>
                        </p>

                        <div className="mb-6 flex justify-center gap-8 items-center">
                            <h1 className="text-4xl md:text-7xl font-semibold text-white leading-none">
                                Web
                            </h1> 
                            <h2
                                className="
        text-4xl md:text-7xl
        font-semibold
        leading-none
        text-transparent bg-clip-text
        bg-gradient-to-r from-[#10B9B7] to-[#6CF2F0]
      "
                            >
                                Developer
                            </h2>
                        </div>

                        <p className="max-w-2xl mx-auto text-base md:text-lg text-white/70">
                            I build smooth and animated web experiences using React and modern UI.
                        </p>

                        <div className="mt-8 flex justify-center items-center gap-20 translate-x-2">
                            <Button />
                            <DownloadBtn />
                        </div>
                    </div>

                    {/* highlight cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        {[
                            { label: "Projects Delivered", value: "4+", detail: "React / Node" },
                            { label: "Open to", value: "Freelance & Collaborations", detail: "Remote-friendly" },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 text-left shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/0" />
                                <div className="relative">
                                    <p className="text-sm uppercase tracking-[0.15em] text-white/50 mb-2">
                                        {item.label}
                                    </p>
                                    <p className="text-3xl font-semibold text-white mb-1">{item.value}</p>
                                    <p className="text-white/60 text-sm">{item.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                        <AnimatedScrollArrow />
                    </div>
            </section >
        </>
    );
}

