import './Marquee.css'

function Marquee({ direction, text }) {
  return <marquee direction={direction}>{text}</marquee>;
  
}

function RankSection() {
  return (
    <section id="rank">
      <Marquee  direction="left" text="                 HERE TO INSPIRE HERE TO INSPIRE HERE TO INSPIRE HERE TO INSPIREHERE TO INSPIRE HERE TO INSPIREHERE TO INSPIRE HERE TO INSPIRE" />
      <Marquee  direction="right" text="HERE TO INSPIRE HERE TOHERE TO INSPIRE HERE TO INSPIREHERE TO INSPIRE HERE TO INSPIRE" />
      <Marquee  direction="left" text="     HERE TO INSPIRE HERE TO INSPIRE HERE TO INSPIRE HERE TO INSPIREHERE TO INSPIRE HERE TO INSPIREHERE TO INSPIRE HERE TO INSPIRE" />
      <Marquee  direction="right" text="           HERE TO INSPIREHERE TO INSPIRE HERE TO INSPIREHERE TO INSPIRE HERE TO INSPIRE" />
      <Marquee  direction="left" text="   HERE TO INSPIRE HERE TO INSPIRE HERE TO INSPIRE HERE TO INSPIREHERE TO INSPIRE HERE TO INSPIREHERE TO INSPIRE HERE TO INSPIRE" />
    </section>
  );
}



export default RankSection;

