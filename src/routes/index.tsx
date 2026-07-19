import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-window.jpg";
import craftImg from "@/assets/craft-detail.jpg";
import furnitureImg from "@/assets/furniture.jpg";
import doorsImg from "@/assets/doors.jpg";
import windowsImg from "@/assets/windows.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const portfolio = [
  { src: windowsImg, title: "Caixilharia Baleal", place: "Peniche" },
  { src: doorsImg, title: "Porta Guia", place: "Leiria" },
  { src: craftImg, title: "Janela Qt. Pinheiro", place: "Coimbra" },
  { src: furnitureImg, title: "Corredora-Elevadora", place: "Évora" },
  { src: heroImg, title: "Sacada Mt. Redondo", place: "Leiria" },
  { src: windowsImg, title: "Guilhotina Leiria", place: "Leiria" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="mx-auto max-w-7xl px-6 md:px-10 py-6 flex items-center justify-between">
          <a href="#" className="flex items-baseline gap-2">
            <span className="font-display text-2xl tracking-tight text-background">
              Damásio<span className="text-wood">&</span>Leal
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-background/70">
              Caixiliz®
            </span>
          </a>
          <ul className="hidden md:flex items-center gap-10 text-sm text-background/85">
            <li><a href="#sobre" className="hover:text-background transition">Quem somos</a></li>
            <li><a href="#produtos" className="hover:text-background transition">Produtos</a></li>
            <li><a href="#certificacoes" className="hover:text-background transition">Certificações</a></li>
            <li><a href="#portfolio" className="hover:text-background transition">Portfólio</a></li>
            <li><a href="#contacto" className="hover:text-background transition">Contacto</a></li>
          </ul>
          <a href="#contacto" className="hidden md:inline-flex items-center gap-2 border border-background/40 text-background text-sm px-4 py-2 rounded-full hover:bg-background hover:text-foreground transition">
            Pedir orçamento
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <img src={heroImg} alt="Carpintaria Damásio & Leal — janela em madeira" width={1600} height={1100} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-wood-deep/90 via-wood-deep/35 to-wood-deep/65" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10 pb-20 md:pb-28 pt-40 w-full">
          <div className="max-w-3xl">
            <span className="inline-block text-[11px] uppercase tracking-[0.3em] text-background/80 mb-6">
              Desde 1998 · Carpintaria & Caixilharia
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-background">
              Onde <em className="italic text-background/90">decoração</em> e isolamento são um complemento.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-background/85 leading-relaxed">
              Mais de 25 anos a fabricar portas e janelas em madeira e madeira/alumínio, com a marca própria <strong className="font-medium">Caixiliz®</strong> — pensadas para durar, isolar e valorizar a sua casa.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contacto" className="inline-flex items-center gap-3 bg-background text-foreground px-6 py-3.5 rounded-full text-sm font-medium hover:bg-cream transition">
                Pedir orçamento <span aria-hidden>→</span>
              </a>
              <a href="#portfolio" className="inline-flex items-center gap-3 text-background text-sm px-6 py-3.5 border border-background/40 rounded-full hover:bg-background/10 transition">
                Ver trabalhos
              </a>
            </div>

            {/* stat bar */}
            <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl border-t border-background/25 pt-8">
              <div>
                <div className="font-display text-4xl text-background">25+</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-background/70">Anos de experiência</div>
              </div>
              <div>
                <div className="font-display text-4xl text-background">TOP 5%</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-background/70">Melhores PME de Portugal</div>
              </div>
              <div>
                <div className="font-display text-4xl text-background">Classe+</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-background/70">Etiqueta energética</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">01 — Quem somos</span>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-3xl md:text-5xl leading-tight text-foreground">
              Fundada em <em className="italic text-wood">1998</em>, especializada em caixilharias em madeira e madeira com alumínio.
            </h2>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              A <strong className="text-foreground font-medium">Damásio & Leal, Lda.</strong> nasceu na área das caixilharias em madeira e carpintarias interiores. Ao longo de mais de duas décadas construímos um vasto leque de produtos de alta qualidade e beleza, sempre com o mesmo lema:
            </p>
            <blockquote className="mt-8 border-l-2 border-wood pl-6 italic font-display text-2xl md:text-3xl text-foreground max-w-2xl">
              “Onde decoração e isolamento são um complemento.”
            </blockquote>
          </div>
        </div>
      </section>

      {/* PRODUTOS */}
      <section id="produtos" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
          <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">02 — Produtos</span>
              <h2 className="mt-4 text-4xl md:text-6xl">O que fabricamos.</h2>
            </div>
            <p className="max-w-sm text-muted-foreground">
              Três linhas de trabalho, uma mesma exigência: madeira nobre trabalhada por artesãos, sob a marca <strong className="text-foreground font-medium">Caixiliz®</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            <article className="md:col-span-7 group relative overflow-hidden rounded-sm bg-secondary">
              <img src={windowsImg} alt="Janela de madeira" width={1200} height={900} loading="lazy" className="h-[420px] md:h-[560px] w-full object-cover group-hover:scale-[1.02] transition duration-700" />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-wood-deep/90 to-transparent">
                <span className="text-[10px] uppercase tracking-[0.3em] text-background/70">Janelas</span>
                <h3 className="mt-2 text-3xl md:text-4xl text-background">Isolamento e luz, sem compromisso.</h3>
                <p className="mt-2 text-sm text-background/80 max-w-md">Batente, oscilo-batente, guilhotina, corredoras-elevadoras.</p>
              </div>
            </article>

            <article className="md:col-span-5 group relative overflow-hidden rounded-sm bg-secondary">
              <img src={doorsImg} alt="Porta em madeira maciça" width={1200} height={900} loading="lazy" className="h-[420px] md:h-[560px] w-full object-cover group-hover:scale-[1.02] transition duration-700" />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-wood-deep/90 to-transparent">
                <span className="text-[10px] uppercase tracking-[0.3em] text-background/70">Portas</span>
                <h3 className="mt-2 text-3xl md:text-4xl text-background">Entradas com peso e presença.</h3>
              </div>
            </article>

            <article className="md:col-span-12 group relative overflow-hidden rounded-sm bg-secondary">
              <img src={furnitureImg} alt="Mobiliário e carpintaria interior" width={1200} height={900} loading="lazy" className="h-[380px] md:h-[480px] w-full object-cover group-hover:scale-[1.02] transition duration-700" />
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 bg-gradient-to-t from-wood-deep/90 to-transparent">
                <span className="text-[10px] uppercase tracking-[0.3em] text-background/70">Mobiliário & Carpintarias interiores</span>
                <h3 className="mt-2 text-3xl md:text-4xl text-background max-w-xl">Peças à medida, do desenho ao encaixe.</h3>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CERTIFICAÇÕES */}
      <section id="certificacoes" className="bg-wood-deep text-background">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <img src={craftImg} alt="Detalhe de acabamento em madeira e alumínio" width={1200} height={1400} loading="lazy" className="w-full h-[520px] object-cover rounded-sm" />
          </div>
          <div className="md:col-span-7 flex flex-col justify-center">
            <span className="text-[11px] uppercase tracking-[0.3em] text-background/60">03 — Certificações</span>
            <h2 className="mt-4 text-4xl md:text-6xl leading-tight text-background">
              Rigor certificado, <em className="italic">desempenho comprovado</em>.
            </h2>
            <p className="mt-6 text-background/75 text-lg max-w-xl leading-relaxed">
              Empenhados na eficiência energética. Os nossos sistemas <strong className="font-medium">Caixiliz®</strong> são testados em laboratório acreditado e cumprem a norma europeia EN 14351-1.
            </p>

            <div className="mt-12 grid sm:grid-cols-3 gap-px bg-background/15">
              <div className="bg-wood-deep p-8">
                <div className="text-[11px] uppercase tracking-[0.3em] text-background/60">Marcação</div>
                <div className="mt-3 font-display text-4xl text-background">CE</div>
                <div className="mt-2 text-sm text-background/80">EN 14351-1:2006+A2 — Portas e janelas exteriores.</div>
              </div>
              <div className="bg-wood-deep p-8">
                <div className="text-[11px] uppercase tracking-[0.3em] text-background/60">Etiqueta Energética</div>
                <div className="mt-3 font-display text-4xl text-background">Classe+</div>
                <div className="mt-2 text-sm text-background/80">Janelas com desempenho energético certificado.</div>
              </div>
              <div className="bg-wood-deep p-8">
                <div className="text-[11px] uppercase tracking-[0.3em] text-background/60">Distinção</div>
                <div className="mt-3 font-display text-4xl text-background">TOP 5%</div>
                <div className="mt-2 text-sm text-background/80">Melhores PME de Portugal — SCORING 2023.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFÓLIO */}
      <section id="portfolio" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            <div className="md:col-span-5">
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">04 — Portfólio</span>
              <h2 className="mt-4 text-4xl md:text-6xl">Alguns trabalhos.</h2>
            </div>
            <p className="md:col-span-6 md:col-start-7 self-end text-lg text-muted-foreground leading-relaxed">
              Obras espalhadas por Portugal — de habitações particulares a projectos de arquitectura. Cada peça pensada, medida e instalada pela nossa equipa.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {portfolio.map((p, i) => (
              <figure key={i} className="group relative overflow-hidden rounded-sm bg-secondary aspect-[4/5]">
                <img src={p.src} alt={p.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-[1.04] transition duration-700" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-wood-deep/90 to-transparent">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-background/70">{p.place}</div>
                  <div className="mt-1 text-lg text-background">{p.title}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="oficina" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            <div className="md:col-span-5">
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">05 — Processo</span>
              <h2 className="mt-4 text-4xl md:text-6xl">Da árvore ao encaixe.</h2>
            </div>
            <p className="md:col-span-6 md:col-start-7 self-end text-lg text-muted-foreground leading-relaxed">
              Fabricamos internamente todo o processo: seleção da madeira, maquinação, montagem, envidraçamento, acabamentos e instalação em obra.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-px bg-border">
            {[
              { n: "01", t: "Projeto", d: "Levantamento, medição e desenho técnico com o cliente." },
              { n: "02", t: "Fabrico", d: "Maquinação e montagem por carpinteiros experientes." },
              { n: "03", t: "Acabamento", d: "Lacagem, envernizamento e ferragens de alta durabilidade." },
              { n: "04", t: "Instalação", d: "Colocação em obra por equipa própria, com garantia." },
            ].map((s) => (
              <div key={s.n} className="bg-background p-8 md:p-10">
                <div className="text-[11px] uppercase tracking-[0.3em] text-wood">{s.n}</div>
                <h3 className="mt-4 text-2xl">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VÍDEO — Inovação & Desenvolvimento */}
      <section id="video" className="bg-cream border-b border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-10 mb-12">
            <div className="md:col-span-5">
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">06 — Inovação</span>
              <h2 className="mt-4 text-4xl md:text-6xl">Inovação & Desenvolvimento.</h2>
            </div>
            <p className="md:col-span-6 md:col-start-7 self-end text-lg text-muted-foreground leading-relaxed">
              Um olhar sobre a nossa oficina, os processos de fabrico e o projecto Portugal 2030 que continua a modernizar a nossa produção.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-sm bg-wood-deep shadow-2xl aspect-video">
            <video
              controls
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
              poster={craftImg}
            >
              <source src="https://damasioeleal.pt/wp-content/uploads/2026/01/Apresentacao-2030-Web.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">07 — Contacto</span>
            <h2 className="mt-4 text-5xl md:text-7xl leading-[0.95]">
              Peça-nos um <em className="italic text-wood">orçamento</em>.
            </h2>
            <p className="mt-8 text-lg text-muted-foreground max-w-md leading-relaxed">
              Envie-nos as suas medidas ou o projeto de arquitectura. Respondemos com orçamento e prazos em 48 horas úteis.
            </p>
          </div>

          <div className="md:col-span-6 md:pl-10 md:border-l border-border">
            <dl className="space-y-8">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Email</dt>
                <dd className="mt-2 font-display text-2xl md:text-3xl">geral@damasioeleal.pt</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Website</dt>
                <dd className="mt-2 font-display text-2xl md:text-3xl">damasioeleal.pt</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Oficina</dt>
                <dd className="mt-2 text-lg text-foreground">Portugal — visitas com marcação prévia.</dd>
              </div>
            </dl>
            <a href="mailto:geral@damasioeleal.pt" className="mt-12 inline-flex items-center gap-3 bg-wood-deep text-background px-6 py-3.5 rounded-full text-sm font-medium hover:bg-foreground transition">
              Pedir orçamento <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background/75">
        <div className="mx-auto max-w-7xl px-6 md:px-10 pt-20 pb-10">
          <div className="grid md:grid-cols-12 gap-12 pb-14 border-b border-background/15">
            {/* Brand */}
            <div className="md:col-span-4">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl text-background">
                  Damásio<span className="text-wood">&</span>Leal
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-background/60">Caixiliz®</span>
              </div>
              <p className="mt-5 text-sm leading-relaxed max-w-xs">
                Desde 1998 a fabricar caixilharia em madeira e madeira/alumínio, mobiliário e carpintarias interiores, com a marca própria <strong className="text-background font-medium">Caixiliz®</strong>.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-[10px] uppercase tracking-[0.25em] bg-background/10 text-background/80 px-3 py-1.5 rounded-full">CE · EN 14351-1</span>
                <span className="text-[10px] uppercase tracking-[0.25em] bg-background/10 text-background/80 px-3 py-1.5 rounded-full">Classe+</span>
                <span className="text-[10px] uppercase tracking-[0.25em] bg-background/10 text-background/80 px-3 py-1.5 rounded-full">TOP 5% PME</span>
              </div>
            </div>

            {/* Navegar */}
            <div className="md:col-span-2">
              <div className="text-[11px] uppercase tracking-[0.3em] text-background/50">Navegar</div>
              <ul className="mt-5 space-y-3 text-sm">
                <li><a href="#sobre" className="hover:text-background transition">Quem somos</a></li>
                <li><a href="#produtos" className="hover:text-background transition">Produtos</a></li>
                <li><a href="#certificacoes" className="hover:text-background transition">Certificações</a></li>
                <li><a href="#portfolio" className="hover:text-background transition">Portfólio</a></li>
                <li><a href="#oficina" className="hover:text-background transition">Processo</a></li>
                <li><a href="#video" className="hover:text-background transition">Inovação</a></li>
                <li><a href="#contacto" className="hover:text-background transition">Contacto</a></li>
              </ul>
            </div>

            {/* Produtos */}
            <div className="md:col-span-3">
              <div className="text-[11px] uppercase tracking-[0.3em] text-background/50">Produtos Caixiliz®</div>
              <ul className="mt-5 space-y-3 text-sm">
                <li>Janelas batente & oscilo-batente</li>
                <li>Janelas de guilhotina</li>
                <li>Corredoras-elevadoras</li>
                <li>Portas de entrada em madeira</li>
                <li>Sacadas & envidraçados</li>
                <li>Mobiliário à medida</li>
                <li>Carpintarias interiores</li>
              </ul>
            </div>

            {/* Contacto */}
            <div className="md:col-span-3">
              <div className="text-[11px] uppercase tracking-[0.3em] text-background/50">Contacto</div>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <div className="text-background/50 text-[10px] uppercase tracking-widest">Email</div>
                  <a href="mailto:geral@damasioeleal.pt" className="hover:text-background transition">geral@damasioeleal.pt</a>
                </li>
                <li>
                  <div className="text-background/50 text-[10px] uppercase tracking-widest">Website</div>
                  <a href="https://damasioeleal.pt" className="hover:text-background transition">damasioeleal.pt</a>
                </li>
                <li>
                  <div className="text-background/50 text-[10px] uppercase tracking-widest">Oficina</div>
                  <span>Portugal — visitas com marcação prévia</span>
                </li>
                <li>
                  <div className="text-background/50 text-[10px] uppercase tracking-widest">Horário</div>
                  <span>Seg – Sex · 09h00 – 18h00</span>
                </li>
              </ul>
              <a href="#contacto" className="mt-6 inline-flex items-center gap-2 border border-background/30 text-background text-xs px-4 py-2.5 rounded-full hover:bg-background hover:text-foreground transition">
                Pedir orçamento <span aria-hidden>→</span>
              </a>
            </div>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-background/50">
            <p>© {new Date().getFullYear()} Damásio & Leal, Lda. — Caixiliz®. Todos os direitos reservados.</p>
            <p>Cofinanciado por Portugal 2030 · União Europeia</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
