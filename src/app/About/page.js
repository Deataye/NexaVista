import AboutHeroSection from "@/components/AboutHeroSection";
import JoinUs from "@/components/JoinUs";
import MeetOurTeam from "@/components/MeetOurTeam";
import OurMission from "@/components/OurMission";
import OurValues from "@/components/OurValues";

import WhatSetsUsApart from "@/components/WhatSetsUsApart";

export default function About() {
    return (
        <main>
        <AboutHeroSection/>
        <WhatSetsUsApart/>
        <OurValues/>
        <OurMission/>
        <MeetOurTeam/>
        <JoinUs/>
        </main>
    );
  }
  