// src/sections/Hero.jsx
import profilePic from "../assets/profilePic.jpg"; // or .png if you have transparent bg
import AnimatedScrollArrow from "../components/MotionSlideArrow";
import Button from "../components/ModernButton";

export default function Hero() {
    return (
        <section
            id="home"
            className="
        min-h-screen
        flex items-center
        px-6 md:px-12
        pt-28
      "
        >
            <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
                {/* ---------- LEFT : Text ---------- */}

                <div className="w-full md:w-1/2">
                    {/* intro */}
                    <p className="text-lg md:text-xl text-white/70 mb-6">
                        Hi, I am <span className="font-semibold text-white">Ashutosh</span> <br />
                        Welcome to my <span className="font-outfit font-[700] text-white">portfolio</span>
                    </p>

                    {/* big title */}
                    <div className="mb-8">
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

                    {/* description */}
                    <p className="max-w-md text-base md:text-lg text-white/60">
                        I build smooth and animated web experiences using React and modern UI.
                    </p>
                    <div className="mt-8 mr-20">
                    <Button/>

                    </div>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                    <AnimatedScrollArrow/>
                    </div>


                </div>
                <div className="mt-8">
  

</div>




                {/* ---------- RIGHT : Tilted frame + popping face ---------- */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <div className="relative w-64 h-64 md:w-72 md:h-72 flex items-center justify-center">
                        {/* glow behind frame */}
                        <div
                            className="
                absolute
                w-52 h-64
                rounded-2xl
                bg-[#10B9B7]/35
                blur-3xl
                rotate-12
              "
                        />

                        {/* tilted frame */}
                        <div
                            className="
                relative
                w-52 h-64
                border border-[#ffffff80]
                rounded-2xl
                rotate-12
                bg-transparent
              "
                        />

                        {/* face popping out of the frame */}
                        <img
                            src={profilePic}
                            alt="Ashutosh"
                            className="
                absolute
                w-40 md:w-44
                -top-8
                right-6
                translate-x-4
                object-cover
                drop-shadow-[0_0_25px_rgba(16,185,183,0.75)]
              "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

