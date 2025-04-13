import sidefolioSuperstring from "public/images/sidefolio-superstring-1.png";
import sidefolioSuperstring2 from "public/images/sidefolio-superstring-2.png";
import sidefolioSwiftplay from "public/images/sidefolio-swiftplay-1.png";
import sidefolioSwiftplay2 from "public/images/sidefolio-swiftplay-2.png";
import sidefolioRaiden from "public/images/sidefolio-raiden-1.png";
import sidefolioRaiden2 from "public/images/sidefolio-raiden-2.png";

export const products = [
  {
    href: "#",
    title: "Superstring",
    description: "Productivity webapp with AI-centric design and features.",
    thumbnail: sidefolioSuperstring,
    images: [sidefolioSuperstring, sidefolioSuperstring2],
    stack: ["Nextjs", "Tailwindcss", "Supabase", "Machine Learning"],
    slug: "superstring",
    content: (
      <div>
        <p>
          As a college student, varsity esports player, D2 athlete, and
          engineer, I spent my time in college stressing out about what to do
          next. I would have 4 todo lists at a time, and none of my calendars
          could sync in just the right way. Not to mention, nothing on the
          market really clicked with how my brain worked.
        </p>
        <p>
          So, I built Superstring. Superstring is a productivity webapp with AI
          built into the core of the app. I built it to make sense to me, as a
          software engineer, and to make it customizable for others. The main
          focus of Superstring is to provide a seemless experience to users,
          while integrating into complex workflows and systems. Superstring
          allows for notes, tasks, events, calendars, kanban, gantt, and so much
          more. Each page is customizable to display just what you need to see.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://gomoonbeam.com",
    title: "Swiftplay",
    description:
      "Platform for sharing and competiting in speedrunning. Integrated webapp and mobile app.",
    thumbnail: sidefolioSwiftplay,
    images: [sidefolioSwiftplay, sidefolioSwiftplay2],
    stack: ["Nextjs", "Tailwindcss", "Mongodb", "Lynx"],
    slug: "swiftplay",
    content: (
      <div>
        <p>
          Swiftplay is a platform for sharing and competing in speedrunning. You
          can create and join speedrunning communities, where you can discuss in
          forums, post runs, and compete on the leaderboard.
        </p>
        <p>
          In the development of Swiftplay, I was given the title of Lead
          Frontend Developer, and Lead Mobile Developer. I founded and led my
          team to create beautiful interfaces. At the start, my team knew no
          Javascript, and at the end with my help they were able to write react
          and react native code with ease. This project showcased not only my
          ability to write amazing and effective code, but also my ability to
          lead a team to success.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://tailwindmasterkit.com",
    title: "Raiden Investments",
    description:
      "Investment platform for crypto and stocks which leverages machine learning to predict future trends and optimize trading.",
    thumbnail: sidefolioRaiden,
    images: [sidefolioRaiden, sidefolioRaiden2],
    stack: ["Nextjs", "Python", "Tensorflow", "Django"],
    slug: "raiden",
    content: (
      <div>
        <p>
          Investing is hard. Not everyone can sit around all day and keep an eye
          on every variable that effects the market. Not to mention most people,
          just like me when I started investing, have no clue what to look for.
          So I built Raiden Investments as a way to help with that issue.
        </p>
        <p>
          Utilizing complex algorithms and machine learning models, Raiden
          Investments provides personalized investment recommendations and
          optimized trading strategies. We use sentiment analysis to predict
          future trends and optimize trading, as well as real time market
          analysis. Raiden is still a work in progress, but it is a passion
          project I am very proud of.
        </p>{" "}
      </div>
    ),
  },
];
