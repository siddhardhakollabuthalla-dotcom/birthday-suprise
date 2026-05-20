import { useEffect, useState } from "react";
import useLenis from "./hooks/useLenis";
import LoadingScreen from "./sections/LoadingScreen";
import CountdownSection from "./sections/CountdownSection";
import ParisScene from "./sections/ParisScene";
import EmotionalStory from "./sections/EmotionalStory";
import MemoryGallery from "./sections/MemoryGallery";
import EndingScene from "./sections/EndingScene";
import CursorGlow from "./components/CursorGlow";
import AudioController from "./components/AudioController";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {

  const [loading, setLoading] = useState(true);

  const [birthdayStarted, setBirthdayStarted] =
    useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
    useLenis();

  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">

      <AudioController
        birthdayStarted={birthdayStarted}
      />

      {loading ? (
        <LoadingScreen />
      ) : !birthdayStarted ? (
        <CountdownSection
          onComplete={() =>
            setBirthdayStarted(true)
          }
        />
      ) : (
        <>
          <ParisScene />
          <EmotionalStory />
          <MemoryGallery />
          <EndingScene />
          <CursorGlow />
          <ScrollProgress />
        </>
      )}

    </main>
  );
}