import { useEffect, useState } from 'react'

const BASE = import.meta.env.BASE_URL

/* ─── Image with graceful fallback ──────────────────────────────────────── */
function Img({ src, alt, className, fallback }) {
  const [failed, setFailed] = useState(false)
  if (failed || !src)
    return <div className={`${className} ${fallback}`} role="img" aria-label={alt} />
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      loading="lazy"
    />
  )
}

/* ─── Scroll reveal ──────────────────────────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document
      .querySelectorAll('.reveal, .reveal-left, .reveal-right')
      .forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/* ─── Inline SVG icons ───────────────────────────────────────────────────── */
const IcoRadio = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
  </svg>
)
const IcoHeart = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
)
const IcoUsers = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)
const IcoMusic = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
  </svg>
)
const IcoMonitor = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)
const IcoTrophy = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
)
const IcoPin = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)
const IcoPhone = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
  </svg>
)
const IcoMail = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)
const IcoDown = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)
const IcoStar = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
)

/* ════════════════════════════════════════════════════════════════════════════
   NAVBAR
   ════════════════════════════════════════════════════════════════════════════ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#radio', label: 'Rádio' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#historia', label: 'História' },
    { href: '#transparencia', label: 'Transparência' },
    { href: '#parceiros', label: 'Parceiros' },
    { href: '#contato', label: 'Contato' },
  ]

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/60 shadow-xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-white rounded-xl p-1 shadow-md shadow-black/30 transition-shadow group-hover:shadow-orange-400/20">
            <img src={BASE + 'images/Logo.jpg'} alt="Fundação Potiguar" className="h-9 w-auto" />
          </div>
          <div className="hidden sm:block">
            <div className="font-bold text-white text-sm leading-tight">Fundação Potiguar</div>
            <div className="text-orange-400 text-[10px] font-semibold tracking-widest uppercase">Mossoró · RN</div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-4 py-2 text-sm text-slate-300 hover:text-orange-400 font-medium rounded-lg hover:bg-white/5 transition-all duration-150"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#contato" className="hidden sm:inline-flex btn-primary text-sm py-2 px-5">
            <IcoHeart /> Apoiar
          </a>
          <button
            className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setOpen(o => !o)}
            aria-label="Abrir menu"
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-96 border-b border-slate-800' : 'max-h-0'}`}>
        <div className="bg-slate-950/97 backdrop-blur-md px-4 pb-4 space-y-1">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm text-slate-300 hover:text-orange-400 hover:bg-white/5 rounded-lg transition-all"
            >
              {l.label}
            </a>
          ))}
          <a href="#contato" onClick={() => setOpen(false)} className="block mt-2 btn-primary text-center text-sm">
            Apoiar a Fundação
          </a>
        </div>
      </div>
    </header>
  )
}

/* ════════════════════════════════════════════════════════════════════════════
   HERO — Logo como elemento visual principal
   ════════════════════════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      {/* Glows decorativos */}
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-green-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-red-700/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Conteúdo textual ── */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/25 mb-8">
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" />
              <span className="text-orange-300 text-xs font-semibold tracking-widest uppercase">
                Fundada em 1999 · Mossoró-RN
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.06] tracking-tight mb-6">
              Transformando{' '}
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Vidas
              </span>{' '}
              em Mossoró
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-xl">
              Há mais de 25 anos desenvolvemos projetos sociais, culturais e esportivos que promovem
              a dignidade, a cidadania e a inclusão das comunidades de Mossoró.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <a href="#sobre" className="btn-primary text-base px-8 py-3.5">
                <IcoHeart /> Nossa missão
              </a>
              <a href="#projetos" className="btn-outline text-base px-8 py-3.5">
                Ver projetos
              </a>
            </div>

            <div className="flex flex-wrap gap-10">
              {[
                { val: '25+', label: 'anos de história' },
                { val: '700+', label: 'formados digitalmente' },
                { val: '60', label: 'crianças por dia' },
                { val: '2', label: 'títulos de utilidade pública' },
              ].map(s => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-3xl font-black text-orange-400">{s.val}</span>
                  <span className="text-xs text-slate-400 font-medium mt-0.5">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Logo como elemento visual ── */}
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* Glow atrás do card */}
              <div className="absolute inset-0 scale-110 bg-gradient-to-br from-green-500/20 via-orange-500/10 to-red-500/20 rounded-3xl blur-2xl" />
              {/* Card branco elevado */}
              <div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-2xl shadow-black/60 ring-1 ring-white/20">
                <img
                  src={BASE + 'images/Logo.jpg'}
                  alt="Logótipo da Fundação Potiguar"
                  className="w-full max-w-xs lg:max-w-sm mx-auto"
                  draggable={false}
                />
              </div>
              {/* Badge flutuante */}
              <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg shadow-orange-500/40">
                Desde 1999
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-500 hover:text-orange-400 transition-colors"
      >
        <span className="text-[10px] font-semibold tracking-widest uppercase">Explorar</span>
        <IcoDown />
      </a>
    </section>
  )
}

/* ════════════════════════════════════════════════════════════════════════════
   STATS BAND
   ════════════════════════════════════════════════════════════════════════════ */
function StatsBand() {
  const stats = [
    { icon: <IcoHeart />, val: '1999', label: 'Fundação', sub: '15 de Novembro' },
    { icon: <IcoUsers />, val: '700+', label: 'Formados', sub: 'Inclusão digital' },
    { icon: <IcoHeart />, val: '60', label: 'Crianças/dia', sub: 'Capoeira & Futebol' },
    { icon: <IcoTrophy />, val: '2', label: 'Títulos', sub: 'Utilidade pública' },
    { icon: <IcoRadio />, val: '24h', label: 'Rádio no ar', sub: 'Programação diária' },
  ]
  return (
    <div className="bg-gradient-to-r from-orange-700 via-orange-500 to-orange-600 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x lg:divide-orange-400/40">
          {stats.map(s => (
            <div key={s.label} className="flex flex-col items-center text-center px-4 py-2">
              <div className="text-orange-100/70 mb-1">{s.icon}</div>
              <div className="text-3xl font-black text-white">{s.val}</div>
              <div className="text-orange-100 font-semibold text-sm mt-0.5">{s.label}</div>
              <div className="text-orange-200/60 text-xs mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ════════════════════════════════════════════════════════════════════════════
   ABOUT
   ════════════════════════════════════════════════════════════════════════════ */
function About() {
  const pillars = [
    { icon: <IcoHeart />, color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20', title: 'Social', desc: 'Projetos de inclusão e assistência às comunidades vulneráveis.' },
    { icon: <IcoMusic />, color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20', title: 'Cultural', desc: 'Preservação da cultura nordestina através da arte e da tradição.' },
    { icon: <IcoMonitor />, color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20', title: 'Digital', desc: 'Qualificação profissional e inclusão digital para jovens.' },
    { icon: <IcoRadio />, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20', title: 'Informativo', desc: 'Rádio comunitária: voz da cidadania no ar 24 horas por dia.' },
  ]

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <div className="reveal-left">
              <span className="section-label bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-4">
                Sobre nós
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mt-3 mb-6">
                Mais de duas décadas{' '}
                <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                  transformando
                </span>{' '}
                vidas
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                A <strong className="text-white">Fundação Potiguar</strong> é uma entidade privada sem fins
                lucrativos, dotada de autonomia administrativa e financeira. Nossa missão é desenvolver e executar
                projetos que melhorem a qualidade de vida da população, especialmente nas áreas de desenvolvimento
                social e de comunicação comunitária via rádio.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                Localizada no bairro Dom Jaime Câmara em Mossoró-RN, uma área de grande vulnerabilidade social,
                a fundação atua com caráter social, educacional, cultural, formativo, informativo, esportivo e
                artístico desde 15 de Novembro de 1999.
              </p>
            </div>

            <div className="reveal-left grid grid-cols-2 gap-3">
              {pillars.map(p => (
                <div key={p.title} className={`p-4 rounded-xl border ${p.bg} card-hover`}>
                  <div className={`${p.color} mb-2`}>{p.icon}</div>
                  <div className="font-semibold text-white text-sm mb-1">{p.title}</div>
                  <div className="text-slate-400 text-xs leading-relaxed">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-right space-y-4">
            {/* Imagem principal — vista aérea da sede */}
            <div className="relative overflow-hidden rounded-2xl group">
              <Img
                src={BASE + 'images/sede.jpg'}
                alt="Vista aérea da Sede da Fundação Potiguar"
                className="w-full h-72 lg:h-80 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                fallback="w-full h-72 lg:h-80 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-500/90 backdrop-blur-sm text-white text-xs font-bold rounded-full shadow-lg shadow-orange-900/40">
                  <IcoPin /> Vista aérea · Dom Jaime Câmara
                </span>
              </div>
            </div>

            {/* Linha inferior: fachada + endereço */}
            <div className="grid grid-cols-2 gap-4">
              {/* Fachada */}
              <div className="relative overflow-hidden rounded-xl group">
                <Img
                  src={BASE + 'images/fachada.jpg'}
                  alt="Fachada da Fundação Potiguar"
                  className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                  fallback="w-full h-40 bg-gradient-to-br from-slate-800 to-slate-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                <p className="absolute bottom-2.5 left-3 text-white text-xs font-semibold tracking-wide">Fachada</p>
              </div>

              {/* Mapa / Endereço */}
              <div className="relative overflow-hidden rounded-xl group">
                <img
                  src={BASE + 'images/endereco.png'}
                  alt="Localização da Fundação Potiguar no mapa"
                  className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3">
                  <p className="text-white text-xs font-semibold">Av. Antônio Bento, 44</p>
                  <p className="text-slate-300 text-[10px] mt-0.5">Mossoró · RN</p>
                </div>
              </div>
            </div>

            {/* Reconhecimento */}
            <div className="flex items-start gap-3 p-4 bg-yellow-500/5 border border-yellow-500/15 rounded-xl">
              <div className="w-8 h-8 bg-yellow-500/15 rounded-lg flex items-center justify-center text-yellow-400 shrink-0 mt-0.5">
                <IcoTrophy />
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-0.5">Reconhecimento oficial</p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Título de Utilidade Pública concedido pelo Município de Mossoró-RN e pelo Estado do Rio Grande do Norte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════════════════════════
   RADIO PROGRAMS
   ════════════════════════════════════════════════════════════════════════════ */
function RadioPrograms() {
  const programs = [
    { title: 'Pandeiro e a Viola', desc: 'Promoção da cultura nordestina: cantigas, poesia, entrevistas e a rica tradição cultural do sertão.', border: 'border-red-500/30 hover:border-red-400/60', badge: 'Cultura' },
    { title: '98 Esporte Club', desc: 'Transmissão de jogos de futebol amador e comunitário, incentivando a participação juvenil no esporte.', border: 'border-green-500/30 hover:border-green-400/60', badge: 'Esporte' },
    { title: 'Seresteiros da Noite', desc: 'Programa itinerante que leva a música e a cultura ao encontro das comunidades, praças e residências.', border: 'border-orange-500/30 hover:border-orange-400/60', badge: 'Itinerante' },
    { title: 'Festival de Artistas da Terra', desc: 'Festival eclético que divulga e valoriza artistas locais de todos os estilos musicais da região.', border: 'border-purple-500/30 hover:border-purple-400/60', badge: 'Festival' },
    { title: '98 Comunidades', desc: 'Transmissões ao vivo de praças, residências e feiras — a voz real das comunidades de Mossoró.', border: 'border-blue-500/30 hover:border-blue-400/60', badge: 'Comunidade' },
  ]

  return (
    <section id="radio" className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="section-label bg-red-500/10 text-red-400 border border-red-500/20 mb-4">
            <IcoRadio /> Rádio Comunitária
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-4">
            A voz da{' '}
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              cidadania
            </span>{' '}
            no ar
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Programação 24 horas com música, cultura, cidadania e educação.
            Nossa rádio é uma imprensa livre a serviço da comunidade.
          </p>
        </div>

        {/* Foto do estúdio + cards em grid */}
        <div className="reveal grid lg:grid-cols-3 gap-5">

          {/* Foto do estúdio — ocupa coluna completa na esquerda */}
          <div className="lg:col-span-1 lg:row-span-3 relative overflow-hidden rounded-2xl">
            <img
              src={BASE + 'images/radio.png'}
              alt="Estúdio da Rádio 98 FM"
              className="w-full h-64 lg:h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-500/90 backdrop-blur-sm text-white text-xs font-bold rounded-full mb-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" /> AO VIVO · 24H
              </span>
              <p className="text-white font-bold text-lg leading-tight">Rádio 98 FM</p>
              <p className="text-slate-300 text-xs mt-1">Mossoró-RN</p>
            </div>
          </div>

          {/* Programas — 2 colunas × 3 linhas */}
          {programs.map((p, i) => (
            <div
              key={p.title}
              className={`group p-5 bg-slate-800/50 rounded-2xl border ${p.border} transition-all duration-300 card-hover`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-9 h-9 bg-red-500/15 rounded-xl flex items-center justify-center text-red-400">
                  <IcoRadio />
                </div>
                <span className="text-xs font-semibold text-slate-500 bg-slate-700/60 px-2.5 py-1 rounded-full">
                  {p.badge}
                </span>
              </div>
              <h3 className="text-white font-bold text-base mb-1.5 group-hover:text-red-300 transition-colors">
                {p.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}

          {/* CTA */}
          <div className="p-5 bg-gradient-to-br from-red-600/15 via-red-500/8 to-orange-500/8 rounded-2xl border border-red-500/25 flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 bg-red-500 rounded-xl flex items-center justify-center text-white mb-3">
                <IcoMail />
              </div>
              <h3 className="text-white font-bold text-base mb-1.5">Fale com a Rádio</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Sugestão de pauta ou quer participar de um programa?
              </p>
            </div>
            <a href="mailto:fundacaopotiguar@gmail.com" className="btn-primary text-sm justify-center">
              <IcoMail /> Enviar e-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════════════════════════
   SOCIAL PROJECTS — BENTO
   ════════════════════════════════════════════════════════════════════════════ */
function SocialProjects() {
  const projects = [
    {
      title: 'Capoeira',
      subtitle: 'Resgate Cultural Afro-Brasileiro',
      desc: 'A convivência entre culturas e o resgate da dignidade do povo negro evidenciados pelo projeto de capoeira — uma alavanca para o conhecimento histórico-cultural afro-brasileiro.',
      image: BASE + 'images/capoeira.png',
      fallback: 'bg-gradient-to-br from-yellow-900 via-amber-800/80 to-orange-900',
      tag: '60 crianças/dia',
      tagColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
      large: true,
    },
    {
      title: 'Escolinha de Futebol',
      subtitle: 'Disciplina e Saúde',
      desc: 'Time juvenil que ensina disciplina, saúde e trabalho em equipa para crianças do bairro.',
      image: BASE + 'images/futebol.png',
      fallback: 'bg-gradient-to-br from-green-900 to-green-800/60',
      tag: 'Esporte',
      tagColor: 'bg-green-500/20 text-green-300 border-green-500/30',
      large: false,
    },
    {
      title: 'Inclusão Digital',
      subtitle: '+700 certificados',
      desc: 'Cursos de informática básica que certificaram mais de 700 pessoas, transformando o acesso à tecnologia.',
      image: BASE + 'images/inclusaodigital.png',
      fallback: 'bg-gradient-to-br from-blue-900 to-blue-800/60',
      tag: '700+ certificados',
      tagColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      large: false,
    },
    {
      title: 'Festa das Crianças',
      subtitle: 'Alegria e Aprendizado',
      desc: 'Evento anual com brincadeiras educativas e presentes para as crianças da comunidade.',
      image: BASE + 'images/festakid1.png',
      fallback: 'bg-gradient-to-br from-pink-900 to-purple-900/60',
      tag: 'Anual',
      tagColor: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
      large: false,
    },
    {
      title: 'Lendo e Aprendendo',
      subtitle: 'Literacia e Cidadania',
      desc: 'Programa de leitura e alfabetização para crianças e adultos da comunidade.',
      image: BASE + 'images/lendo.png',
      fallback: 'bg-gradient-to-br from-indigo-900 to-indigo-800/60',
      tag: 'Educação',
      tagColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
      large: false,
    },
    {
      title: 'Ponto de Cultura',
      subtitle: 'Arte e Expressão',
      desc: 'Fortalecimento de grupos artístico-culturais locais com intercâmbios e formação criativa.',
      image: BASE + 'images/pontodecultura.png',
      fallback: 'bg-gradient-to-br from-orange-900 to-red-900/60',
      tag: 'Cultura',
      tagColor: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
      large: false,
    },
  ]

  return (
    <section id="projetos" className="py-24 lg:py-32 bg-slate-950 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="section-label bg-green-500/10 text-green-400 border border-green-500/20 mb-4">
            <IcoUsers /> Projetos Sociais
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-4">
            Ação social que{' '}
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              transforma
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Projetos em diversas frentes que impactam diretamente crianças, jovens e famílias.
          </p>
        </div>

        {/* Bento grid */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Featured capoeira card — spans 2×2 */}
          <div className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 card-hover lg:col-span-2 lg:row-span-2">
            <Img
              src={projects[0].image}
              alt={projects[0].title}
              className="w-full h-72 lg:h-[480px] object-cover transition-transform duration-500 group-hover:scale-105"
              fallback={`w-full h-72 lg:h-[480px] ${projects[0].fallback}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className={`inline-block text-[11px] font-semibold px-3 py-1 rounded-full border mb-3 ${projects[0].tagColor}`}>
                {projects[0].tag}
              </span>
              <h3 className="text-white font-black text-2xl leading-tight">{projects[0].title}</h3>
              <p className="text-slate-300 text-sm mt-1 mb-3">{projects[0].subtitle}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{projects[0].desc}</p>
            </div>
          </div>

          {/* Smaller cards */}
          {projects.slice(1).map((p, i) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 card-hover"
              style={{ transitionDelay: `${(i + 1) * 50}ms` }}
            >
              <Img
                src={p.image}
                alt={p.title}
                className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                fallback={`w-full h-44 ${p.fallback}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className={`inline-block text-[10px] font-semibold px-2.5 py-1 rounded-full border mb-2 ${p.tagColor}`}>
                  {p.tag}
                </span>
                <h3 className="text-white font-bold text-base leading-tight">{p.title}</h3>
                <p className="text-slate-400 text-xs mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {p.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════════════════════════
   HISTORY — BENTO BOX
   ════════════════════════════════════════════════════════════════════════════ */
function History() {
  const milestones = [
    { year: '1999', event: 'Fundação criada em 15 de Novembro, no bairro Dom Jaime Câmara, Mossoró-RN.' },
    { year: '2000s', event: 'Primeiros programas de rádio comunitária e projetos sociais no bairro.' },
    { year: '2009', event: 'Posse no COMDICA — Conselho Municipal dos Direitos da Criança e do Adolescente.' },
    { year: '2009–12', event: 'Vice-Presidência do COMDICA — maior representação institucional.' },
    { year: '2013–15', event: 'Presidência do COMDICA — liderança plena na política pública juvenil.' },
    { year: 'Hoje', event: 'Mais de 700 formados digitalmente, 60 crianças atendidas diariamente.' },
  ]

  return (
    <section id="historia" className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.05),transparent_60%)] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="section-label bg-slate-700/60 text-slate-300 border border-slate-600 mb-4">
            Nossa História
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-4">
            25 anos de{' '}
            <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              dedicação
            </span>
          </h2>
        </div>

        <div className="reveal grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Feature card */}
          <div className="lg:col-span-2 relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-orange-600/15 via-orange-500/8 to-slate-900 border border-orange-500/20">
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/8 rounded-full blur-2xl pointer-events-none" />
            <div className="relative">
              <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center text-orange-400 font-black text-xl mb-6">
                25
              </div>
              <h3 className="text-2xl lg:text-3xl font-black text-white mb-5">
                Uma história de luta{' '}
                <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                  pela igualdade
                </span>
              </h3>
              <blockquote className="border-l-2 border-orange-500 pl-5 mb-6">
                <p className="text-slate-300 italic leading-relaxed">
                  "Lutar pela Igualdade sempre que as diferenças nos discriminem.
                  Lutar pela diferença sempre que a igualdade nos descaracterize."
                </p>
                <cite className="text-slate-500 text-sm mt-2 block not-italic">
                  — Boaventura de Souza Santos
                </cite>
              </blockquote>
              <p className="text-slate-400 leading-relaxed">
                A Fundação Potiguar nasceu da necessidade de dar voz e oportunidade às comunidades
                periféricas de Mossoró. Com caráter social, educacional, cultural, esportivo e artístico,
                nossa trajetória é marcada por conquistas coletivas e pelo compromisso com a cidadania.
              </p>
            </div>
          </div>

          {/* Milestone cards column */}
          <div className="flex flex-col gap-4">
            {milestones.slice(0, 3).map((m, i) => (
              <div
                key={m.year}
                className={`p-5 rounded-2xl border card-hover flex-1 ${
                  i === 0
                    ? 'bg-orange-500/8 border-orange-500/25'
                    : 'bg-slate-800/40 border-slate-700/50'
                }`}
              >
                <div className={`text-xl font-black mb-1.5 ${i === 0 ? 'text-orange-400' : 'text-slate-300'}`}>
                  {m.year}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{m.event}</p>
              </div>
            ))}
          </div>

          {/* Bottom row */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {milestones.slice(3).map((m, i) => (
              <div
                key={m.year}
                className={`p-5 rounded-2xl border card-hover ${
                  i === 2
                    ? 'bg-green-500/8 border-green-500/25'
                    : 'bg-slate-800/40 border-slate-700/50'
                }`}
              >
                <div className={`text-xl font-black mb-1.5 ${i === 2 ? 'text-green-400' : 'text-slate-300'}`}>
                  {m.year}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════════════════════════
   TRANSPARENCY — BENTO BOX
   ════════════════════════════════════════════════════════════════════════════ */
function Transparency() {
  return (
    <section id="transparencia" className="py-24 lg:py-32 bg-slate-950 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="section-label bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
            Transparência
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-4">
            Gestão{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              transparente
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Comprometidos com a transparência e o controle social em todas as nossas ações.
          </p>
        </div>

        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Institutional data */}
          <div className="lg:col-span-2 p-7 bg-slate-900 rounded-2xl border border-slate-700/50 card-hover">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500/15 rounded-xl flex items-center justify-center text-blue-400 shrink-0">
                <IcoTrophy />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">
                  Dados Institucionais
                </div>
                <div className="text-white font-bold text-lg mb-3">Fundação Potiguar</div>
                <dl className="space-y-2">
                  {[
                    { dt: 'CNPJ', dd: '03.536.100/0001-25', mono: true },
                    { dt: 'Tipo', dd: 'Entidade privada sem fins lucrativos' },
                    { dt: 'Fundação', dd: '15 de Novembro de 1999' },
                  ].map(r => (
                    <div key={r.dt} className="flex gap-3 text-sm">
                      <dt className="text-slate-500 w-16 shrink-0">{r.dt}</dt>
                      <dd className={`text-slate-200 ${r.mono ? 'font-mono' : ''}`}>{r.dd}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="p-6 bg-slate-900 rounded-2xl border border-slate-700/50 card-hover">
            <div className="w-10 h-10 bg-orange-500/15 rounded-xl flex items-center justify-center text-orange-400 mb-4">
              <IcoPin />
            </div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">Endereço</div>
            <p className="text-slate-200 text-sm leading-relaxed">
              Av. Antônio Bento, nº 44<br />
              Dom Jaime Câmara<br />
              Mossoró-RN
            </p>
          </div>

          {/* Contact */}
          <div className="p-6 bg-slate-900 rounded-2xl border border-slate-700/50 card-hover">
            <div className="w-10 h-10 bg-green-500/15 rounded-xl flex items-center justify-center text-green-400 mb-4">
              <IcoPhone />
            </div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">Contacto</div>
            <div className="space-y-1.5">
              <p className="text-slate-200 text-sm">(84) 3312-5656</p>
              <p className="text-slate-200 text-sm">(84) 9 9136-2980</p>
              <a
                href="mailto:fundacaopotiguar@gmail.com"
                className="text-orange-400 text-xs hover:text-orange-300 transition-colors break-all block mt-2"
              >
                fundacaopotiguar@gmail.com
              </a>
            </div>
          </div>

          {/* Titles */}
          <div className="lg:col-span-2 p-7 bg-gradient-to-br from-yellow-950/40 to-slate-900 rounded-2xl border border-yellow-500/20 card-hover">
            <div className="w-10 h-10 bg-yellow-500/20 rounded-xl flex items-center justify-center text-yellow-400 mb-4">
              <IcoStar />
            </div>
            <div className="text-xs font-semibold text-yellow-600/80 uppercase tracking-widest mb-4">
              Títulos Recebidos
            </div>
            <div className="space-y-4">
              {[
                { title: 'Utilidade Pública Municipal', body: 'Título concedido pelo Município de Mossoró-RN.' },
                { title: 'Utilidade Pública Estadual', body: 'Título concedido pelo Estado do Rio Grande do Norte.' },
              ].map(t => (
                <div key={t.title} className="flex gap-3 items-start">
                  <IcoStar className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-yellow-200 font-semibold text-sm">{t.title}</div>
                    <div className="text-slate-400 text-xs mt-0.5">{t.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* COMDICA years */}
          <div className="p-6 bg-slate-900 rounded-2xl border border-slate-700/50 card-hover text-center">
            <div className="text-5xl font-black text-white mb-1">6</div>
            <div className="text-slate-300 text-sm font-semibold">anos no COMDICA</div>
            <div className="text-slate-500 text-xs mt-1">2009 – 2015</div>
            <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-500 leading-relaxed">
              Conselho Municipal dos Direitos da Criança e do Adolescente
            </div>
          </div>

          {/* Leadership roles */}
          <div className="p-6 bg-gradient-to-br from-orange-950/30 to-slate-900 rounded-2xl border border-orange-500/15 card-hover">
            <div className="space-y-4">
              {[
                { role: 'Vice-Presidente', period: '2009–12', color: 'bg-orange-500', textColor: 'text-orange-400', w: 'w-1/2' },
                { role: 'Presidente', period: '2013–15', color: 'bg-green-500', textColor: 'text-green-400', w: 'w-1/3' },
              ].map(r => (
                <div key={r.role}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-slate-400 text-xs">{r.role}</span>
                    <span className={`${r.textColor} font-semibold text-sm`}>{r.period}</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full">
                    <div className={`h-full ${r.color} rounded-full ${r.w}`} />
                  </div>
                </div>
              ))}
              <p className="text-slate-500 text-xs pt-1">Liderança no COMDICA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════════════════════════
   PARTNERS
   ════════════════════════════════════════════════════════════════════════════ */
function Partners() {
  const partners = [
    { src: BASE + 'images/parceiro-culturaviva.png',    alt: 'Cultura Viva' },
    { src: BASE + 'images/parceiro-estacaodigital.png', alt: 'Estação Digital' },
    { src: BASE + 'images/parceiro-estacaocultura.png', alt: 'Estação Cultura' },
    { src: BASE + 'images/parceiro-fundacaobb.png',     alt: 'Fundação Banco do Brasil' },
    { src: BASE + 'images/parceiro-josealgusto.png',    alt: 'Fundação José Augusto' },
    { src: BASE + 'images/parceiro-ministerio.png',     alt: 'Ministério da Cultura' },
  ]

  return (
    <section id="parceiros" className="py-20 lg:py-28 bg-slate-900 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <span className="section-label bg-slate-700/60 text-slate-300 border border-slate-600 mb-4">
            Parceiros
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-3 mb-3">
            Quem acredita na nossa{' '}
            <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              missão
            </span>
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            Instituições públicas e privadas que tornam os nossos projetos possíveis.
          </p>
        </div>

        <div className="reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map(p => (
            <div
              key={p.alt}
              className="group bg-white rounded-2xl p-4 flex items-center justify-center aspect-square card-hover shadow-lg shadow-black/20"
            >
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════════════════════════
   CONTACT
   ════════════════════════════════════════════════════════════════════════════ */
function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contato" className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(249,115,22,0.05),transparent_60%)] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="reveal-left">
            <span className="section-label bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-4">
              Contato
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-6">
              Fale com a{' '}
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Fundação
              </span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Tem perguntas sobre nossos projetos, quer voluntariar ou apoiar a fundação?
              Estamos sempre abertos ao diálogo.
            </p>

            <div className="space-y-5">
              {[
                { icon: <IcoPin />, label: 'Endereço', value: 'Av. Antônio Bento, 44 — Dom Jaime Câmara, Mossoró-RN' },
                { icon: <IcoPhone />, label: 'Telefone', value: '(84) 3312-5656 · (84) 9 9136-2980' },
                { icon: <IcoMail />, label: 'E-mail', value: 'fundacaopotiguar@gmail.com', href: 'mailto:fundacaopotiguar@gmail.com' },
              ].map(c => (
                <div key={c.label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs font-semibold uppercase tracking-wide mb-0.5">
                      {c.label}
                    </div>
                    {c.href ? (
                      <a href={c.href} className="text-slate-200 hover:text-orange-400 transition-colors text-sm">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-slate-200 text-sm">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-right">
            <form
              onSubmit={handleSubmit}
              className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-2xl p-7 space-y-5"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Nome', type: 'text', placeholder: 'Seu nome' },
                  { label: 'E-mail', type: 'email', placeholder: 'seu@email.com' },
                ].map(f => (
                  <div key={f.label}>
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5 block">
                      {f.label}
                    </label>
                    <input
                      required
                      type={f.type}
                      placeholder={f.placeholder}
                      className="w-full bg-slate-800/60 border border-slate-700 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5 block">
                  Assunto
                </label>
                <select className="w-full bg-slate-800/60 border border-slate-700 text-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors">
                  {['Projetos sociais', 'Rádio comunitária', 'Voluntariado', 'Doação / Apoio', 'Outro'].map(o => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5 block">
                  Mensagem
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Escreva sua mensagem..."
                  className="w-full bg-slate-800/60 border border-slate-700 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors resize-none"
                />
              </div>

              {sent ? (
                <div className="w-full py-3 bg-green-500/15 border border-green-500/30 text-green-400 rounded-xl text-sm text-center font-semibold">
                  Mensagem enviada! Obrigado pelo contato.
                </div>
              ) : (
                <button type="submit" className="btn-primary w-full justify-center py-3.5">
                  <IcoMail /> Enviar mensagem
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════════════════════════
   FOOTER
   ════════════════════════════════════════════════════════════════════════════ */
function Footer() {
  const year = new Date().getFullYear()
  const navLinks = [
    ['#sobre', 'Sobre'],
    ['#radio', 'Rádio'],
    ['#projetos', 'Projetos'],
    ['#historia', 'História'],
    ['#transparencia', 'Transparência'],
    ['#contato', 'Contato'],
  ]

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white rounded-xl p-1.5 shadow-md shadow-black/40">
                <img src={BASE + 'images/Logo.jpg'} alt="Fundação Potiguar" className="h-9 w-auto" />
              </div>
              <div>
                <div className="font-bold text-white">Fundação Potiguar</div>
                <div className="text-orange-400 text-xs font-semibold tracking-widest uppercase">Mossoró · RN</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-4">
              Transformando vidas através de projetos sociais, cultura e comunicação comunitária desde 1999.
            </p>
            <p className="text-slate-700 text-xs">CNPJ 03.536.100/0001-25</p>
          </div>

          <div>
            <div className="text-white font-semibold text-sm mb-4">Navegação</div>
            <ul className="space-y-2.5">
              {navLinks.map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-slate-400 hover:text-orange-400 text-sm transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-white font-semibold text-sm mb-4">Contacto</div>
            <div className="space-y-2">
              <p className="text-slate-400 text-sm">Av. Antônio Bento, 44</p>
              <p className="text-slate-400 text-sm">Dom Jaime Câmara · Mossoró-RN</p>
              <a href="tel:+558433125656" className="text-slate-400 hover:text-orange-400 text-sm transition-colors block mt-3">
                (84) 3312-5656
              </a>
              <a
                href="mailto:fundacaopotiguar@gmail.com"
                className="text-slate-400 hover:text-orange-400 text-xs transition-colors block break-all"
              >
                fundacaopotiguar@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/60 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">
            © {year} Fundação Potiguar. Todos os direitos reservados.
          </p>
          <p className="text-slate-700 text-xs">
            Desenvolvido com dedicação à comunidade de Mossoró
          </p>
        </div>
      </div>
    </footer>
  )
}

/* ════════════════════════════════════════════════════════════════════════════
   APP ROOT
   ════════════════════════════════════════════════════════════════════════════ */
export default function App() {
  useScrollReveal()
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBand />
        <About />
        <RadioPrograms />
        <SocialProjects />
        <History />
        <Transparency />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
