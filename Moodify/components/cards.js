import Image from "next/image";
import Link from "next/link";
import React,{useContext} from "react";
import { RiPlayFill } from "react-icons/ri";
import { DataContext } from "../utils/context";
const FirstCard = () => {

  const {mintingMusic} = useContext(DataContext);
  return (
    <div
      
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">Today&#39;s Top Hits</h5>
        <p className="text-gray-400 text-sm w-[18ch]">
          Taylor Swift is on top of the Hottest 50!
        </p>
        <p className="text-yellow-400 mt-2 text-sm w-[18ch] font-bold">20.34 ETH</p>
      </div>
      <button
        type="button"
        onClick={() =>mintingMusic("https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png","Swift","Taylor",2023,"https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png")}
        className="mt-3 text-smtext-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
       Transfer
      </button>
    </div>
  );
};

const SecondCard = () => {
  const {mintingMusic} = useContext(DataContext);
  return (
    <div
      
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045822562543861760/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">RapCaviar</h5>
        <p className="text-gray-400 text-sm w-[18ch]">
          Music from Drake, 21 Savage, Lil Uzi Vert and more.
        </p>
        <p className="text-yellow-400 mt-2 text-sm w-[18ch] font-bold">3.4 ETH</p>
      </div>
      <button
        type="button"
        onClick={() =>mintingMusic("https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png","Swift","Taylor",2023,"https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png")}
        className="mt-3 text-smtext-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
       Transfer
      </button>
    </div>
  );
};

const ThirdCard = () => {
  const {mintingMusic} = useContext(DataContext);
  return (
    <div
      
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045822644630593576/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">All Out 2010s</h5>
        <p className="text-gray-400 text-sm w-[18ch]">
          The biggest songs of the 2010s.
        </p>
        <p className="text-yellow-400 mt-2 text-sm w-[18ch] font-bold">9.34 ETH</p>
      </div>
      <button
        type="button"
        onClick={() =>mintingMusic("https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png","Swift","Taylor",2023,"https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png")}
        className="mt-3 text-smtext-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
       Transfer
      </button>
    </div>
  );
};

const FourthCard = () => {
  const {mintingMusic} = useContext(DataContext);
  return (
    <div
      
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045845888255410226/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">Rock Classics</h5>
        <p className="text-gray-400 text-sm w-[18ch]">
          Rock legends & epic songs that continue to inspire generations. Cover:
          Guns N&#39; Roses
        </p>
        <p className="text-yellow-400 mt-2 text-sm w-[18ch] font-bold">20.34 ETH</p>
        <button
          type="button"
          onClick={() =>mintingMusic("https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png","Swift","Taylor",2023,"https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png")}
          className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
         Transfer
        </button>
      </div>
    </div>
  );
};

const FifthCard = () => {
  const {mintingMusic} = useContext(DataContext);
  return (
    <div
 
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045822793092169759/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">Sleep</h5>
        <p className="text-gray-400 text-sm w-[18ch]">
          Gentle ambient piano to help you fall asleep.
        </p>
        <p className="text-yellow-400 mt-2 text-sm w-[18ch] font-bold">0.34 ETH</p>
      </div>
      <button
        type="button"
        onClick={() =>mintingMusic("https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png","Swift","Taylor",2023,"https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png")}
        className="mt-3 text-smtext-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
       Transfer
      </button>
    </div>
  );
};

const SixthCard = () => {
  const {mintingMusic} = useContext(DataContext);
  return (
    <div
      
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045822846997368912/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">DayDreamer</h5>
        <p className="text-gray-400 text-sm w-[18ch]">
          Drift away with enthralling instrumentals.
        </p>
        <p className="text-yellow-400 mt-2 text-sm w-[18ch] font-bold">1.21 ETH</p>
      </div>
      <button
        type="button"
        onClick={() =>mintingMusic("https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png","Swift","Taylor",2023,"https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png")}
        className="mt-3 text-smtext-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
       Transfer
      </button>
    </div>
  );
};

const SeventhCard = () => {
  const {mintingMusic} = useContext(DataContext);
  return (
    <div
      
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045823483445268550/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">Peaceful Piano</h5>
        <p className="text-gray-400 text-sm w-[18ch]">
          Relax and indulge with beautiful piano pieces
        </p>
        <p className="text-yellow-400 mt-2 text-sm w-[18ch] font-bold">20.34 ETH</p>
      </div>
      <button
        type="button"
        onClick={() =>mintingMusic("https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png","Swift","Taylor",2023,"https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png")}
        className="mt-3 text-smtext-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
       Transfer
      </button>
    </div>
  );
};

const EighthCard = () => {
  const {mintingMusic} = useContext(DataContext);
  return (
    <div
      
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045823483747250237/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">Deep Focus</h5>
        <p className="text-gray-400 text-sm w-[18ch]">
          Keep calm and focus with ambient and post-rock music.
        </p>
        <p className="text-yellow-400 mt-2 text-sm w-[18ch] font-bold">11.34 ETH</p>
      </div>
      <button
        type="button"
        onClick={() =>mintingMusic("https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png","Swift","Taylor",2023,"https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png")}
        className="mt-3 text-smtext-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
       Transfer
      </button>
    </div>
  );
};

const NinthCard = () => {
  const {mintingMusic} = useContext(DataContext);
  return (
    <div
      
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045849052371243039/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">Instrumental Study</h5>
        <p className="text-gray-400 text-sm w-[18ch]">
          Focus with soft study music in the background.
        </p>
        <p className="text-yellow-400 mt-2 text-sm w-[18ch] font-bold">20 ETH</p>
      </div>
      <button
        type="button"
        onClick={() =>mintingMusic("https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png","Swift","Taylor",2023,"https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png")}
        className="mt-3 text-smtext-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
       Transfer
      </button>
    </div>
  );
};

const TenthCard = () => {
  const {mintingMusic} = useContext(DataContext);
  return (
    <div
      
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045849102044364861/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">
          chill lofi study beats
        </h5>
        <p className="text-gray-400 text-sm w-[18ch]">
          The perfect study beats. Find your focus, crush your productivity.
          </p>
          <p className="text-yellow-400 mt-2 text-sm w-[18ch] font-bold">2 ETH</p>
          <button
            type="button"
            onClick={() =>mintingMusic("https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png","Swift","Taylor",2023,"https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png")}
            className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
           Transfer
          </button>
      
      </div>
    </div>
  );
};

const EleventhCard = () => {
  const {mintingMusic} = useContext(DataContext);
  return (
    <div
      
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045823484070203422/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">Mood Booster</h5>
        <p className="text-gray-400 text-sm w-[18ch]">
          Get happy with today&#39;s dose of feel-good songs!
        </p>
        <p className="text-yellow-400 mt-2 text-sm w-[18ch] font-bold">0.9934 ETH</p>
      </div>
      <button
        type="button"
        onClick={() =>mintingMusic("https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png","Swift","Taylor",2023,"https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png")}
        className="mt-3 text-smtext-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
       Transfer
      </button>
    </div>
  );
};

const TwelfthCard = () => {
  const {mintingMusic} = useContext(DataContext);
  return (
    <div
      
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045823484397375619/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">Feelin&#39; Good</h5>
        <p className="text-gray-400 text-sm w-[18ch]">
          Feel good with this positively timeless playlist!
        </p>
        <p className="text-yellow-400 mt-2 text-sm w-[18ch] font-bold">1.34 ETH</p>
      </div>
      <button
        type="button"
        onClick={() =>mintingMusic("https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png","Swift","Taylor",2023,"https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png")}
        className="mt-3 text-smtext-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
       Transfer
      </button>
    </div>
  );
};

const ThirteenthCard = () => {
  const {mintingMusic} = useContext(DataContext);
  return (
    <div
      
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045823484707745802/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">Dark & Stormy</h5>
        <p className="text-gray-400 text-sm w-[18ch]">
          Beautifully dark, dramatic tracks.
        </p>
        <p className="text-yellow-400 mt-2 text-sm w-[18ch] font-bold">10.34 ETH</p>
      </div>
      <button
        type="button"
        onClick={() =>mintingMusic("https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png","Swift","Taylor",2023,"https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png")}
        className="mt-3 text-smtext-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
       Transfer
      </button>
    </div>
  );
};

const FourteenthCard = () => {
  const {mintingMusic} = useContext(DataContext);
  return (
    <div
      
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045868770176008293/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">Feel Good Piano</h5>
        <p className="text-gray-400 text-sm w-[18ch]">
          Happy vibes for an upbeat morning.
        </p>
        <p className="text-yellow-400 mt-2 text-sm w-[18ch] font-bold">2.667 ETH</p>
      </div>
      <button
        type="button"
        onClick={() =>mintingMusic("https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png","Swift","Taylor",2023,"https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png")}
        className="mt-3 text-smtext-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
       Transfer
      </button>
    </div>
  );
};

const FifteenthCard = () => {
  const {mintingMusic} = useContext(DataContext);
  return (
    <div
      
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045823485106196531/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">Start Nowhere</h5>
        <p className="text-gray-400 text-sm w-[18ch]">Sam Hunt</p>
        <p className="text-yellow-400 mt-2 text-sm w-[18ch] font-bold">3.34 ETH</p>
      </div>
      <button
        type="button"
        onClick={() =>mintingMusic("https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png","Swift","Taylor",2023,"https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png")}
        className="mt-3 text-smtext-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
       Transfer
      </button>
    </div>
  );
};

const SixteenthCard = () => {
  const {mintingMusic} = useContext(DataContext);
  return (
    <div
      
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045823485563383839/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">This Is What I Mean</h5>
        <p className="text-gray-400 text-sm w-[18ch]">Stormzy</p>
        <p className="text-yellow-400 mt-2 text-sm w-[18ch] font-bold">10.34 ETH</p>
      </div>
      <button
        type="button"
        onClick={() =>mintingMusic("https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png","Swift","Taylor",2023,"https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png")}
        className="mt-3 text-smtext-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
       Transfer
      </button>
    </div>
  );
};

const SeventeenthCard = () => {
  const {mintingMusic} = useContext(DataContext);
  return (
    <div
      
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045823485945057412/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">Love Sux (Deluxe)</h5>
        <p className="text-gray-400 text-sm w-[18ch]">Avril Lavigne</p>
        <p className="text-yellow-400 mt-2 text-sm w-[18ch] font-bold">2.34 ETH</p>
      </div>
      <button
        type="button"
        onClick={() =>mintingMusic("https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png","Swift","Taylor",2023,"https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png")}
        className="mt-3 text-smtext-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
       Transfer
      </button>
    </div>
  );
};

const EighteenthCard = () => {
  const {mintingMusic} = useContext(DataContext);
  return (
    <div
      
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045871840041644062/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">
          Dreamers [Music from the FIFA World Cup Qatar 2022 Official
          Soundtrack]
        </h5>
        <p className="text-gray-400 text-sm w-[18ch]">Jung Kook, BTS</p>
        <p className="text-yellow-400 mt-2 text-sm w-[18ch] font-bold">20.34 ETH</p>
        <button
          type="button"
          onClick={() =>mintingMusic("https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png","Swift","Taylor",2023,"https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png")}
          className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
         Transfer
        </button>
      </div>
    </div>
  );
};

export {
  FirstCard,
  SecondCard,
  ThirdCard,
  FourthCard,
  FifthCard,
  SixthCard,
  SeventhCard,
  EighthCard,
  NinthCard,
  TenthCard,
  EleventhCard,
  TwelfthCard,
  ThirteenthCard,
  FourteenthCard,
  FifteenthCard,
  SixteenthCard,
  SeventeenthCard,
  EighteenthCard,
};