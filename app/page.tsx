"use client";
import Footer from "@/components/Footer";
import GetInvolved from "@/components/GetInvolved";
import Hero from "@/components/Hero";
import Objectives from "@/components/Objectives";
import OurMission from "@/components/OurMission";
import OurVision from "@/components/OurVision";
import ProjectScope from "@/components/ProjectScope";
import { StatisticsSection } from "@/components/StatisticsSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Objectives />
      <OurMission />
      <ProjectScope />
      <OurVision />
      <StatisticsSection />
      <GetInvolved />
      <Footer />
    </div>
  );
}
