import IndustriesWeServe from "@/components/IndustriesWeServe";
import WebDevAgile from "@/components/WebDevAgile";
import WebDevEnsures from "@/components/WebDevEnsures";
import WebDevHero from "@/components/WebDevHero";
import WebDevServices from "@/components/WebDevServices";
import WebFaqs from "@/components/WebFaqs";
import WebSuccessStories from "@/components/WebSuccessStories";

export default function WebDev() {
    return (
        <main>
        <WebDevHero/>
        <WebDevServices/>
        <WebDevEnsures/>
        <WebDevAgile/>
        <WebSuccessStories/>
        <IndustriesWeServe/>
        <WebFaqs/>
        </main>
    );
  }
  