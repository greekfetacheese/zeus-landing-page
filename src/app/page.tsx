import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container className="pt-16 md:pt-24 lg:pt-32">
        <Benefits />
      </Container>
    </>
  );
};

export default HomePage;
