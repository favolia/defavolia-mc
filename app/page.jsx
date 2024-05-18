import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Support from "@/components/Support";
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

const SheepScene = dynamic(() => import("@/components/threeScene/sheepScene"), {
  ssr: false
})

const CowScene = dynamic(() => import("@/components/threeScene/cowScene"), {
  ssr: false
})

export default function Home() {

  return (
    <div className="bg-gradient-to-t sm:bg-gradient-to-t from-60% from-green-50 to-white">
      <main className="w-full min-h-screen flex flex-col justify-start items-center pb-16">
        <Nav />
        <div className="w-fit min-h-[90vh] flex flex-col pt-48 pb-20 gap-y-36 justify-center items-center">
          <Banner />

          {/* Card */}
          <div className="flex flex-col gap-y-20 items-center w-full lg:w-[40.801rem]">
            <Card id={"steve"} title={'Steve'}
              description={`Steve is a player character from the 2011 sandbox video game Minecraft.
          Created by Swedish video game developer Markus "Notch" Persson and introduced
          in the 2009 Java-based version, Steve is one of nine default player character
          skins available for players of contemporary versions of Minecraft. Steve lacks
          an official backstory as he is intended to be a customizable player avatar as
          opposed to being a predefined character.`}
            >
              <SteveScene />
            </Card>

            <Card id={"sheep"} title={'Sheep'}
              description={`Sheep wander aimlessly and individually or in small flocks of two to
              four. Sheep avoid cliffs and hazardous areas if it warrants damage. Sheep emit hoarse
              bleats in mostly random patterns and especially when attacked. If harmed, sheep flee 
              for a few seconds, but make no special attempt to avoid wolves. 
              Sheep are nonchalant to players or other mobs, but follow a player holding wheat within
              a six blocks radius.`}
            >
              <SheepScene />
            </Card>

            <Card id={"cow"} title={'Cow'}
              description={`A cow moos and huffs occasionally while wandering aimlessly, but tends to
              stay on well lit and grassy places. Like most other passive mobs. An adult cow can be milked
              by using a bucket on it, yielding a milk bucket. A cow follows a player who holds wheat but 
              stops following if separated from the player by at least six blocks.`}
            >
              <CowScene />
            </Card>

            <Card id={"creeper"} title={'Creeper'}
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

          <Support />

        </div>
      </main>
      <Footer />
    </div>
  );
}
