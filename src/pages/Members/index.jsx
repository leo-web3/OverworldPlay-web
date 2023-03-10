import React from "react";
import "./index.scss";
const Members = [
  {
    name: "James Hall",
    title: "Creative Director",
    int: `Senior Global Marketing Art Director at Krafton for PUBG, New State Mobile and Moonbreaker. 
          
          One of the leading designers for the rebranding of PUBG and brand partnerships with Black Pink, Among Us, Mclaren`,
  },
  {
    name: "John Harris",
    title: "VP of Tech",
    int: `CTO of multiple gaming & tech start ups including DNArt,  Red Robot Labs, Plus3. Lead developer at Crowdstar/Glu.

          Opened his first checking account to buy the sheet music for Chrono Trigger `,
  },
  {
    name: "Stojan Madjunkov",
    title: "Director of Product",
    int: `Lead Game Designer at Big Viking Games and Sr Product Manager at Jam City developing player to player economies in virtual worlds that generated $100M+ revenue and web3 battler MMO Champions Ascension `,
  },
  {
    name: "Tom Tang",
    title: "Director of Design",
    int: `A game industry titan standing at 6’6 with over 25 years of experience. Leading game design teams and production for dozens of titles including Metal Knight, Fantasy Star Online, Halo Wars, Forza 2, Alan Wake and many more. `,
  },
  {
    name: "Brian Wilson",
    title: "Associate Art Director",
    int: `Graphic Designer at Activision for multiple Call of Duty titles and Senior Marketing Artist for Ubisoft’s The Division franchise, driving visual identity and branding. Past clients include HBO, WWE, Cartoon Network`,
  },
  {
    name: "Yitao Guan",
    title: "Advisor",
    int: `Co-Founder and CTO of FunPlus releasing award winning games such as King of Avalon, State of Survival and Family Farm Seaside.

          Programmer and Technologist from web1, web2, to web3 and to webN `,
  },
  {
    name: "Anthony Ulrich",
    title: "Lead Gameplay Engineer",
    int: `Unity Engineer and Systems Architect for award winning games and projects from Jam City, Moth+Flame and Disney generating $100M+ in revenue. 

          Part-time practitioner of homebrew beer and the art of smoked brisket`,
  },
  {
    name: "Michael Maurino",
    title: "Lead Concept Artist",
    int: `20+ years of experience in Entertainment. Senior Concept Artist at Riot for League of Legends designing champions and skins. Other titles include: Icons Combat Arena, Spellbreak and Fangs.`,
  },
  {
    name: "Darren Lue",
    title: "Community Manager",
    int: `Admin and Head of events for Valorant, LoL and TFT discord communities. Leading teams serving 1.3M+ players, in close collaboration with Riot and other companies including Discord, Dreamhack and Giantslayer`,
  },
];
export default React.memo(() => {
  return (
    <div className="members">
      <article>
        <img src={`asset/Jeremy Horn - Founder.png`} title={`Jeremy Horn - Founder.png`} />
        <h3>Jeremy Horn</h3>
        <h4>Founder</h4>
        <p>
          Hit-maker at Funplus, Jam City, Gameloft. Generated $1.5B+ with titles such as Harry Potter, Star Wars,
          Marvel, Avatar and more. Co-founder of web3 publishing leader @Xteriogames (over $40M raised).{" "}
        </p>
      </article>
      <ul>
        {Members.map((member) => (
          <li key={member.name}>
            <span className="border">
              <i></i>
              <b></b>
            </span>
            <img src={`asset/${member.name} - ${member.title}.png`} title={`${member.name} - ${member.title}`} />
            <h3>{member.name}</h3>
            <h4>{member.title}</h4>
            <p>{member.int}</p>
          </li>
        ))}
      </ul>
    </div>
  );
});
