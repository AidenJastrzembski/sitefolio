import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">
        Hello there! I&apos;m Aiden Jastrzembski
      </Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack developer that loves building products that can
        help <Highlight>millions of people</Highlight> with their daily lives.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Despite being young, I have years of experience{" "}
        <Highlight>building scalable products and webapps</Highlight>
        that are performance optimized while still looking amazing.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
