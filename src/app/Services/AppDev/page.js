import MobileAppAgile from "@/components/MobileAppAgile";
import MobileAppEnsures from "@/components/MobileAppEnsures";
import MobileAppFaqs from "@/components/MobileAppFaqs";
import MobileAppHero from "@/components/MobileAppHero";
import MobileAppIndustries from "@/components/MobileAppIndustries";
import MobileAppServices from "@/components/MobileAppServices";
import MobileAppStories from "@/components/MobileAppStories";


export default function AppDev() {
    return (
        <main>
      <MobileAppHero/>
      <MobileAppServices/>
      <MobileAppEnsures/>
      <MobileAppAgile/>
      <MobileAppStories/>
      <MobileAppIndustries/>
      <MobileAppFaqs/>
      
      </main>
    );
  }
  