import {
  FirstSection,
  SecondSection,
  ThirdSection,
  FourthSection,
  FifthSection,
} from "../components/sections";
import { useAccount } from "wagmi";
export default function Home() {
  const { address } = useAccount();
  return (
    <>
      {address ? (
        <div className="pt-28 md:pl-72 p-8">
          <FirstSection title="Moodify Playlists" />
          <SecondSection title="Chill" />
          <ThirdSection title="Pill" />
          <FourthSection title="Drill" />
          <FifthSection title="Feel" />
        </div>
      ) : (
        <div className="flex justify-center items-center h-[100vh] ">
        <h1 className="mb-4 text-4xl font-extrabold w-[35%]  leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
              PLEASE CONNECT WALLET TO SEE 
              <span className="text-blue-600 dark:text-yellow-500 mx-4">
                {" "}
                Musical NFT's
              </span>{" "}
            </h1>
        </div>
      )}
    </>
  );
}