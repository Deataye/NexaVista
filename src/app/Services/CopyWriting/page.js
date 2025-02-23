import CopyFaqs from "@/components/CopyFaqs";
import CopyMethods from "@/components/CopyMethods";
import CopyProcess from "@/components/CopyProcess";
import CopyServices from "@/components/CopyServices";
import CopySolutions from "@/components/CopySolutions";
import CopyWritingHero from "@/components/CopyWritingHero";

export default function CopyWriting() {
    return (
        <main>
       <CopyWritingHero/>
       <CopyMethods/>
       <CopyServices/>
       <CopyProcess/>
       <CopySolutions/>
       <CopyFaqs/>
        </main>


);
}