import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconBrandGithub,
  IconChartRadar,
  IconUser,
  IconCode,
  IconTrophy,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";

import SkillsRadar from "@/components/RadarCharts";
import GithubContributions from "@/components/GithubContributions";
import ContributionTrend from "@/components/GithubLineGraph";
import PieChartWithPaddingAngle from "@/components/PieCharts";
import { WordRotate } from "@/components/WordRotate";

export default function PortfolioBento() {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldLoadCharts, setShouldLoadCharts] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Delay chart loading slightly for better animation effect
            setTimeout(() => {
              setShouldLoadCharts(true);
            }, 300);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section 
      id="skills-section"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-[#000000] via-[#0f1417] to-[#03070e]"
    >
      
      {/* SUBTLE GRID BACKGROUND */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(16,185,183,0.03) 0 1px,
              transparent 1px 100px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(16,185,183,0.03) 0 1px,
              transparent 1px 100px
            )
          `,
        }}
      />

      {/* MINIMAL PARTICLES */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              backgroundColor: i % 3 === 0 ? 'rgba(16,185,183,0.4)' : 'rgba(108,242,240,0.3)',
              animation: `floatSubtle ${Math.random() * 15 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      
      {/* ================= SKILLS HEADING ================= */}
      <div className={`max-w-7xl mx-auto px-4 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <h2 className="text-3xl md:text-5xl font-bold text-white flex justify-center">
          <WordRotate 
            words={["Skills & Stats","Progress", "Analytics"]}
            className="font-doto text-6xl"
          />
        </h2>
        <div className="mt-6 h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-[#10B9B7] to-transparent rounded-full" />
      </div>

      {/* ================= BENTO GRID ================= */}
      <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <BentoGrid className="max-w-7xl mx-auto px-4">
          
          {/* ================= ROW 1 ================= */}

          {/* GitHub Heatmap */}
          <BentoGridItem
            title={
              <span className="flex items-center gap-2 text-white">
                <IconBrandGithub className="h-4 w-4 text-[#10B9B7]" />
                GitHub Contributions
              </span>
            }
            description={
              <span className="text-gray-400">
                Consistency in the last year
              </span>
            }
            header={
              <div className="h-full p-2">
                {shouldLoadCharts ? (
                  <GithubContributions />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#10B9B7]"></div>
                  </div>
                )}
              </div>
            }
            className="md:col-span-1 bg-[#0d1321]/30 backdrop-blur-sm border border-white/10 hover:border-[#10B9B7]/40 transition-all duration-500 rounded-xl shadow-lg hover:shadow-[#10B9B7]/10"
          />

          {/* Contribution Trend */}
          <BentoGridItem
            title={
              <span className="flex items-center gap-2 text-white">
                <IconChartRadar className="h-4 w-4 text-[#10B9B7]" />
                Contribution Trend
              </span>
            }
            description={
              <span className="text-gray-400">
                Daily activity pattern
              </span>
            }
            header={
              <div className="h-full p-2">
                {shouldLoadCharts ? (
                  <ContributionTrend />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#10B9B7]"></div>
                  </div>
                )}
              </div>
            }
            className="md:col-span-2 bg-[#0d1321]/30 backdrop-blur-sm border border-white/10 hover:border-[#10B9B7]/40 transition-all duration-500 rounded-xl shadow-lg hover:shadow-[#10B9B7]/10"
          />

          {/* ================= ROW 2 ================= */}

          {/* Pie Chart */}
          <BentoGridItem
            title={
              <span className="flex items-center gap-2 text-white">
                <IconCode className="h-4 w-4 text-[#10B9B7]" />
                Progress Breakdown
              </span>
            }
            description={
              <span className="text-gray-400">
                Skill distribution overview
              </span>
            }
            header={
              <div className="h-full p-2">
                {shouldLoadCharts ? (
                  <PieChartWithPaddingAngle />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#6CF2F0]"></div>
                  </div>
                )}
              </div>
            }
            className="md:col-span-1 bg-[#0d1321]/30 backdrop-blur-sm border border-white/10 hover:border-[#6CF2F0]/40 transition-all duration-500 rounded-xl shadow-lg hover:shadow-[#6CF2F0]/10"
          />

          {/* Radar Chart */}
          <BentoGridItem
            title={
              <span className="flex items-center gap-2 text-white">
                <IconChartRadar className="h-4 w-4 text-[#10B9B7]" />
                Skill Overview
              </span>
            }
            description={
              <span className="text-gray-400">
                Self-assessment radar
              </span>
            }
            header={
              <div className="h-full p-2">
                {shouldLoadCharts ? (
                  <SkillsRadar />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#10B9B7]"></div>
                  </div>
                )}
              </div>
            }
            className="md:col-span-1 bg-[#0d1321]/30 backdrop-blur-sm border border-white/10 hover:border-[#10B9B7]/40 transition-all duration-500 rounded-xl shadow-lg hover:shadow-[#10B9B7]/10"
          />

          {/* Projects Count */}
          <BentoGridItem
            title={
              <span className="flex items-center gap-2 text-white">
                <IconTrophy className="h-4 w-4 text-[#10B9B7]" />
                Projects
              </span>
            }
            description={
              <span className="text-gray-400">
                Completed & deployed
              </span>
            }
            header={
              <div className="flex flex-col items-center justify-center h-full py-4">
                <span className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#10B9B7] to-[#6CF2F0]">
                  17
                </span>
                <span className="text-xs text-gray-400 uppercase tracking-wider mt-2">
                  Projects
                </span>
                <div className="mt-4 flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#10B9B7] animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-[#10B9B7] animate-pulse" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 rounded-full bg-[#10B9B7] animate-pulse" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            }
            className="md:col-span-1 bg-[#0d1321]/30 backdrop-blur-sm border border-white/10 hover:border-[#10B9B7]/40 transition-all duration-500 rounded-xl shadow-lg hover:shadow-[#10B9B7]/10"
          />
        </BentoGrid>
      </div>

      <style jsx>{`
        @keyframes floatSubtle {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(15px, -15px); }
          66% { transform: translate(-10px, 10px); }
        }
      `}</style>
    </section>
  );
}