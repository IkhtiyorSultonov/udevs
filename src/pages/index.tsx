import Seo from "@/components/seo/seo";
import { HomePageComponents } from "@/page-components";
export default function Home() {
  return (
    <Seo metaTitle="Udevs" metaDescription="Udev | Programming">
      <HomePageComponents/>
    </Seo>
  );
}
