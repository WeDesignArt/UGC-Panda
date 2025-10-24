import Divider from "@/components/Divider";
import ChannelCarousel from "./tiktok/ChannelCarousel";
import InstaChannelCarousel from "./instagram/InstaChannelCarousel";
import SnapChannelCarousel from "./snapchat/SnapChannelCarousel";
import FbChannelCarousel from "./facebook/FbChannelCarousel";
import YtChannelCarousel from "./youtube/YtChannelCarousel";
import ShopifyChannelCarousel from "./shopify/ShopifyChannelCarousel";
import Clients from "@/components/clients";
import Link from "next/link";

export default function Channels() {
  return (
    <>
      <Divider
        title="Channels"
        breadcrumb={
          <>
            <Link href="/">Home</Link> / <Link href="/channels">Channels</Link>
          </>
        }
      />

      <ChannelCarousel />

      <InstaChannelCarousel />

      <SnapChannelCarousel />

      <FbChannelCarousel />

      <YtChannelCarousel />

      <ShopifyChannelCarousel />

      <Clients />
    </>
  );
}
