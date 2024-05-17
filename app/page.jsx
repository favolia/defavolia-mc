import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Nav from "@/components/nav";
import dynamic from "next/dynamic";

/**
 * @type {import("next").Viewport}
 */
export const viewport = {
  userScalable: false,
}

const SteveScene = dynamic(() => import("@/components/threeScene/steveScene"), {
  ssr: false
})

const CreeperScene = dynamic(() => import("@/components/threeScene/creeperScene"), {
  ssr: false
})

export default function Home() {

  return (
    <div className="bg-gradient-to-t sm:bg-gradient-to-tl from-slate-300 sm:from-slate-300 to-white">
      <main className="w-full min-h-screen flex flex-col justify-start items-center pb-16">
        <Nav />
        <div className="w-full min-h-[90vh] flex flex-col pt-48 pb-20 gap-y-36 justify-center items-center">
          <Banner />

          {/* Card */}
          <div className="flex flex-col gap-y-20">
            <Card title={'Steve Minecraft'}
              description={`Steve is a player character from the 2011 sandbox video game Minecraft.
          Created by Swedish video game developer Markus "Notch" Persson and introduced
          in the 2009 Java-based version, Steve is one of nine default player character
          skins available for players of contemporary versions of Minecraft. Steve lacks
          an official backstory as he is intended to be a customizable player avatar as
          opposed to being a predefined character.`}
            >
              <SteveScene />
            </Card>

            <Card title={'Creeper Minecraft'}
              description={`A creeper is a fictional creature within the sandbox game Minecraft.
            Creepers are hostile mobs (a mobile non-player character) that can spawn anywhere
            that is dark, but can still survive in bright environments. Instead of attacking 
            the player directly, they creep up on the player and explode, destroying blocks in
            the surrounding area and potentially hurting or killing the player if they are 
            within the blast radius.`}
            >
              <CreeperScene />
            </Card>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
