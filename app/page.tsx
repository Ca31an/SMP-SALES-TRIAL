const discordUrl = "https://discord.com/invite/smpsales";

const departments = [
  {
    id: "development",
    number: "01",
    title: "Development",
    description: "Code, websites and Minecraft Related Services.",
    items: [
      "Plugins",
      "Datapacks",
      "Bot Development",
      "Mods",
      "Skript",
      "Web Development",
      "Minecraft Builds",
    ],
  },
  {
    id: "graphics",
    number: "02",
    title: "Graphics",
    description: "Branding and artwork.",
    items: [
      "Textures",
      "Minecraft Skins",
      "Thumbnails",
      "Logos",
      "Renders",
      "Art",
    ],
  },
  {
    id: "video",
    number: "03",
    title: "Video & Content",
    description: "Edits and scripts.",
    items: ["Editing", "Scriptwriting"],
  },
  {
    id: "servers",
    number: "04",
    title: "Servers & Community",
    description: "Server and Discord setup.",
    items: ["Discord Setups", "Server Setup"],
  },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="logo" href="#top" aria-label="SMP Sales home">
          <img src="/smp-sales-logo.svg" alt="SMP Sales" />
        </a>
        <nav aria-label="Services">
          <a href="#development">Development</a>
          <a href="#graphics">Graphics</a>
          <a href="#video">Video</a>
          <a href="#servers">Servers</a>
        </nav>
        <a className="top-discord" href={discordUrl} target="_blank" rel="noreferrer">
          Order on Discord <span>↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="eyebrow">SMP Sales · NO1 Best Place For Services</span>
          <h1>Creative and technical services for your next project.</h1>
          <p>
            From Minecraft development and graphics to video work and full
            server setup. Browse what we offer, then open a ticket in Discord.
          </p>
          <a href={discordUrl} target="_blank" rel="noreferrer">
            Start an order <span>↗</span>
          </a>
        </div>
        <div className="hero-mark" aria-hidden="true">
          <img src="/smp-sales-mark.svg" alt="" />
          <span>Sales</span>
        </div>
        <div className="hero-bottom">
          <span>Development</span>
          <span>Graphics</span>
          <span>Video & Content</span>
          <span>Servers & Community</span>
        </div>
      </section>

      <section className="catalog">
        <div className="catalog-intro">
          <span>Services</span>
          <h2>Choose what you need.</h2>
          <p>Pick a service, then open a ticket in Discord.</p>
        </div>

        <div className="department-list">
          {departments.map((department) => (
            <article className="department" id={department.id} key={department.id}>
              <div className="department-heading">
                <span>{department.number}</span>
                <div>
                  <h3>{department.title}</h3>
                  <p>{department.description}</p>
                </div>
              </div>
              <div className="department-items">
                {department.items.map((item) => (
                  <a href={discordUrl} target="_blank" rel="noreferrer" key={item}>
                    <span>{item}</span>
                    <b>Order ↗</b>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="how">
        <span>How to order</span>
        <div className="how-steps">
          <article><b>1</b><h3>Join Discord</h3><p>Use the invite and enter the SMP Sales server.</p></article>
          <article><b>2</b><h3>Open a ticket</h3><p>Choose a service and explain what you need.</p></article>
          <article><b>3</b><h3>Get started</h3><p>Go to the orders channel and fill out a form of what you require and want..</p></article>
        </div>
      </section>

      <section className="cta">
        <img src="/smp-sales-mark.svg" alt="" />
        <div>
          <span>Have something in mind?</span>
          <h2>Open a ticket.</h2>
        </div>
        <a href={discordUrl} target="_blank" rel="noreferrer">
          Join the Discord <span>↗</span>
        </a>
      </section>

      <footer>
        <img src="/smp-sales-logo.svg" alt="SMP Sales" />
        <span>© {new Date().getFullYear()} SMP Sales</span>
      </footer>
    </main>
  );
}
