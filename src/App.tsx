import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import './App.css'

const heroImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjL5TkZiZ8hpnA5NpUk9oGucM4iZiXmVaAbi1-CTsLATATFa7HvLlBM6d33pzDErbpzp7WgC5dIP9-lbzTSnqndeFl9bkdPZqf8GK0UFpJY2er7VgQFbmLGMEtuz8ZaWJpAcT2FB1qe9Bu7SbXrLxVlgodgeOMkB02CeZi8sWDEO9ExAwmrfVvrtrFwHf4CeNOeKZAv6x1kA6ybv9OvM2LA-2o4-h4Lk-Rm9SM7qHOo4OBEcOHc7KEdpu5Lguoi5VeZorW1bc0Q'

const featuredItems = [
  {
    title: 'The Library Series',
    label: 'Curated Spaces',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBp3gja6bdJFAgEo4edK19oNWAs0xTd92aqzN9y2EOyOrSjMRAdQ4dHNFL5Ii_aPGY9p7kcU4mqY4jOPnUdLemleElJMAcK3Sz8_TB9mUYa9rYhUhI0096LyHJ86BYzQruC3dzmBjoX1VNHj3MRmobIkbRUKSJ3eWHZ8xxYZJV1Xjr7NxUB547DE6AJaL9V1ejJ7Sply9XzaMTIyXfG7b_ypk9IB9Zi-VVv3efKZSkn-4qqtI5_qN6PgBaGK77WaTT2j7TTLuE4ws4',
  },
  {
    title: 'Shop Tailoring',
    label: 'Tailoring',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCw1El6B78kY3Gee8XoSrDDUXKxz7-Ial9-jzGgYxUh3ZD1dcSaZkC_uo9wB78L7FEaJqfqIOxBGTWiZ5OipfyUFCO8vayF6_fAaCz0iEzSvFlRB2vbjl1S0_ziTjN4M6DY9PzQH9Sj6r8RJrJzZ_FLSodmrtMfY4WJJ_2mjEy_eMe_TCLrBGKut9Y6hjtQmZVIPCr51tLtOdMijosTUoncjUpweesMoJoGDiU9QLNab_hxv3CBVu__WKs3rXfvp2lKQ2EmkOXAy88',
  },
  {
    title: 'Highland Escape',
    label: 'Inspiration',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC0QjRgiaLTCWp4iBO4eUn8bsyjEyDcUYdmCy_rmpA0Dry8yt52BY5VCdzoDMVRwFylVeWu5sAxAMW3O6OtKGlcAEB42RvXMdkuT757Anj4DrMACIfK_vMI3YDIww9eVDA06jJ2YnT1ITdI0Y_MHxA_zGYfmi8AXsUDN_PpdQbQoYNEW2m9R81l9w1g4PBFIScNzMNJiUClSUWcIlKnmS4JsqQ_z4Jszs_h8azyIZSabAadaau2TNFquzqtIXMhplykg9jkT685mfM',
  },
]

const products = [
  {
    name: 'Cavalry Twill Overcoat',
    tag: 'Navy Wool Heritage Blend',
    price: '$1,250',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC1erhzBRP7qNKOtLLNpcKuXC7-J961IZBNKT2YEl-S0YjSYteoTbppWq2c8b4i9VDRpMgp0i-QDLLmFnG9z0tZ4kbhRQKNlDHynEGkRklPXXP5USW3GO4CaoSTwiSINUHwXrgZZ71iG_LMJxS7xoF2NHwm2IfG-p5HeunSVcMzoZxdF4EKbKMXZVpTRSd05uOG0Nt65LSI5YTtbOPyYTp4pZJ9Om6Cum1ciy3HblYO_lnHzBxA4FyOJR4fY6nuWqDmzfCM6xI90hc',
  },
  {
    name: 'The Estate Oxford',
    tag: 'Calfskin Leather',
    price: '$695',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCkWAxf7i2ihI4eBxXY420zgC5QiOPv2b4j0Ys7vObidwmwwNqC_ukGUzz4y86WuZ27crdGN9OObiJHVSb5gw8JSwH8ig-8i-Hnj6oYFN3KsqRug3n9JlqWTQlwoat19PfK9jhohDuI0jqSd-GJu7PsnIdwqgjfOmvVi7cAwvJDV7stPLCvCf2Gxjw7T6solzwxYl4GQs7QhXd7HEVannbeRAFqdaa3s0qoP1mgmZZaOjYr4QgGBT0rfUGK-D_1iTqrhdnRtDCRpV8',
  },
  {
    name: 'Atelier Chronograph',
    tag: '18k Gold & Hand-stitched Leather',
    price: '$4,800',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBmyjRH832JVkSzsonQmLI25HxpmXYfXLQ0crzeflu0ux5aKw29PzlrN5M8AQXu0u9MpUEMISdnRwQKiQ9xiwxCLkX5DJ6aj62qzUM6F28RM6oH6aaZ_MfD9RxqPwpks5_VgBM4H5vKuALBO6xlexvOrfKa1fGV9GbLygG68FRGAkP2MH_3j9ZrPe9bKuybF0xw3RwbE-tx1R63J24gaI-Cf0wQzpfEaD1zeb5SE3vo86d-MNjD8va3eo1fmscxij7iqNUxZmaiyLk',
  },
  {
    name: 'Fine Gauge Cashmere',
    tag: 'Mongolian Sourced',
    price: '$450',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCg7K2eeskLyn3ctXnFeOHy9dZDLjkgJ1Smsj-wk4QitLuRvfmzy4pC5ucYPccAPTBfoycMsu6VzLPRaxpZHImux6old4hq2NTygIfAutWhalyIecXWgkQGuMdHH9dERDgGIbpocElf5H4fmuNJM7OVSggP9KUHxYTFxJjD7LUxijJ0mqcaEVROF4lb7oa4_EyCcSQiQtVRDDnEu-yI0wEGOjxIqMzO5m3oA8yPdebe-q0IYjYpPn8_p61A7qpgmtsLT7CzlR4_E2g',
  },
]

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [newsletterSuccess, setNewsletterSuccess] = useState(false)
  const [wishlist, setWishlist] = useState<number[]>([])
  const [backToTopVisible, setBackToTopVisible] = useState(false)

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('heritage-theme')
    const isDark = storedTheme === 'dark'
    setDarkMode(isDark)
    document.documentElement.classList.toggle('dark', isDark)
    document.documentElement.classList.toggle('light', !isDark)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )

    document.querySelectorAll<HTMLElement>('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setBackToTopVisible(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    const nextMode = !darkMode
    setDarkMode(nextMode)
    document.documentElement.classList.toggle('dark', nextMode)
    document.documentElement.classList.toggle('light', !nextMode)
    window.localStorage.setItem('heritage-theme', nextMode ? 'dark' : 'light')
  }

  const toggleWishlist = (index: number) => {
    setWishlist((current) =>
      current.includes(index) ? current.filter((id) => id !== index) : [...current, index]
    )
  }

  const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setNewsletterSuccess(true)
    event.currentTarget.reset()
  }

  return (
    <div className="min-h-screen bg-[#fdf9f0] text-[#1c1c16] antialiased">
      <div
        className={`${mobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'} fixed inset-0 z-40 bg-black/40 transition-all duration-300`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-[#fdf9f0] p-10 transition-transform duration-300 dark:bg-[#0a1f44] ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button className="mb-8 text-[#00081e] dark:text-[#fdf9f0]" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="mb-10 font-serif text-2xl tracking-[0.2em] uppercase text-[#00081e] dark:text-[#fdf9f0]">HERITAGE</div>
        <nav className="flex flex-col gap-8">
          {['Collection', 'Atelier', 'Journal', 'Sustainability', 'Contact'].map((link) => (
            <a
              key={link}
              className="font-manrope uppercase tracking-[0.1em] text-sm text-[#755844] border-b border-[#755844] pb-2 transition hover:text-[#00081e] dark:text-[#fdf9f0]"
              href="#"
            >
              {link}
            </a>
          ))}
        </nav>
      </aside>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#1c1c16]/10 bg-[#fdf9f0]/85 backdrop-blur-md dark:bg-[#0d0d0a]/85">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
          <div className="flex items-center gap-6">
            <button
              className="text-[#00081e] dark:text-[#fdf9f0] active:scale-95 duration-200"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <nav className="hidden md:flex gap-8">
              {['Collection', 'Atelier', 'Journal'].map((link) => (
                <a
                  key={link}
                  className="font-manrope uppercase tracking-[0.1em] text-[11px] transition-all duration-300 text-[#00081e] dark:text-[#fdf9f0] opacity-80 hover:opacity-100 hover:text-[#755844]"
                  href="#"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
          <div className="font-serif text-2xl tracking-[0.2em] uppercase text-[#00081e] dark:text-[#fdf9f0]">HERITAGE</div>
          <div className="flex items-center gap-6">
            <button className="text-[#00081e] dark:text-[#fdf9f0] active:scale-95 duration-200" aria-label="Search">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button
              className="text-[#00081e] dark:text-[#fdf9f0] active:scale-95 duration-200"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              <span className="material-symbols-outlined">{darkMode ? 'light_mode' : 'dark_mode'}</span>
            </button>
            <button className="text-[#00081e] dark:text-[#fdf9f0] active:scale-95 duration-200" aria-label="Shopping bag">
              <span className="material-symbols-outlined">shopping_bag</span>
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative h-screen w-full overflow-hidden">
          <div className="absolute inset-0 bg-[#00081e]/20 z-10" />
          <img className="absolute inset-0 h-full w-full object-cover" src={heroImage} alt="Heritage Lifestyle" />
          <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center text-white">
            <h1 className="font-serif italic text-6xl md:text-8xl leading-[1.03] tracking-tight max-w-4xl mb-8">
              The Art of <br />Enduring Elegance
            </h1>
            <p className="font-manrope text-sm md:text-base uppercase tracking-[0.2em] text-white/90 mb-12">
              Autumn Winter 2024 Collection
            </p>
            <button className="rounded-md bg-[#00081e] px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#0a1f44]">
              Explore the Collection
            </button>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
            <span className="material-symbols-outlined text-white/60">expand_more</span>
          </div>
        </section>

        <section className="py-32 px-8 bg-[#fdf9f0] dark:bg-[#0d0d0a]">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8 group relative overflow-hidden rounded-[1rem] bg-[#f7f3ea] aspect-[16/9] reveal">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={featuredItems[0].image} alt={featuredItems[0].title} />
                <div className="absolute bottom-0 left-0 p-12 w-full bg-gradient-to-t from-[#00081e]/60 to-transparent text-white">
                  <span className="font-manrope text-[10px] uppercase tracking-[0.3em] block mb-2">Curated Spaces</span>
                  <h2 className="font-noto-serif text-4xl italic">{featuredItems[0].title}</h2>
                </div>
              </div>
              <div className="md:col-span-4 group relative overflow-hidden rounded-[1rem] bg-[#f7f3ea] aspect-square md:aspect-auto reveal reveal-delay-1">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={featuredItems[1].image} alt={featuredItems[1].title} />
                <div className="absolute inset-0 flex items-center justify-center bg-[#00081e]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="bg-white text-[#00081e] px-6 py-3 font-manrope text-[10px] font-bold uppercase tracking-widest">Shop Tailoring</span>
                </div>
              </div>
              <div className="md:col-span-4 group relative overflow-hidden rounded-[1rem] bg-[#f7f3ea] aspect-square reveal reveal-delay-2">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={featuredItems[2].image} alt={featuredItems[2].title} />
              </div>
              <div className="md:col-span-8 group relative overflow-hidden rounded-[1rem] bg-[#f7f3ea] aspect-[16/9] md:aspect-auto reveal reveal-delay-3">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={featuredItems[2].image} alt={featuredItems[2].title} />
                <div className="absolute top-12 right-12 text-right">
                  <span className="font-manrope text-[10px] text-white uppercase tracking-[0.3em] block mb-2">Inspiration</span>
                  <h2 className="font-noto-serif text-4xl text-white italic">Highland Escape</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f1eee5] dark:bg-[#0a1218] py-32 overflow-hidden">
          <div className="mx-auto max-w-7xl px-8">
            <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32 mb-48">
              <div className="w-full md:w-1/2 reveal">
                <img className="w-full h-[600px] object-cover rounded-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMZr-GsRzgP87jejNeivUaYi-JAoagkd0sgQfx9lmUvdvTZa3IU1MQP9czcyk7jyBWaJykwbRWG7l3QwXclKPW9KjktUx-U43iHeoTigWNy3O4uJ1x2qxf1yBHVAuYqZAhwoYLOASf1pDX8YmEIK98a8iRnqnRh3kKG5MQAKepo8c3uoxXrcaQ0e1df8C1Ns_WiPZbzuPzZTOEzxQhLQ1py8Sr9EgMdaDA9IGbS42UEMICrhb1RF-Z0RrxC_w7DODsmeDdvV5Vrws" alt="Craftsmanship" />
              </div>
              <div className="w-full md:w-1/2 reveal reveal-delay-2">
                <span className="font-manrope text-secondary text-[11px] font-bold uppercase tracking-[0.3em] mb-6 block">Our Heritage</span>
                <h3 className="font-noto-serif text-5xl italic leading-tight text-[#00081e] dark:text-[#fdf9f0] mb-8">Crafted by Hand, <br />Refined by Time.</h3>
                <p className="font-manrope text-[#44464e] dark:text-[#fdf9f0]/70 leading-relaxed text-lg mb-10 max-w-md">
                  Each piece in our collection is born from a legacy of uncompromising quality. We believe that true luxury is found in the details�the double-stitched leather, the hand-woven wool, and the architectural silhouettes that define our signature aesthetic.
                </p>
                <a className="inline-flex items-center gap-4 font-manrope text-[10px] font-extrabold uppercase tracking-[0.2em] group text-[#00081e] dark:text-[#fdf9f0]" href="#">
                  Discover the Atelier
                  <span className="w-12 h-[1px] bg-[#00081e] dark:bg-[#fdf9f0] group-hover:w-20 transition-all duration-500" />
                </a>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-32">
              <div className="w-full md:w-1/2 reveal">
                <img className="w-full h-[600px] object-cover rounded-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-robrUym-c5g9ztqV2bgAYS-uTjfqqCXqyz4xxLCq6QS6lCPgIiayjMSBci_lHqTIiWfai8eSxQriNkNDW9KlvIlZLSn5Az7cQV82y4l2xE8T2fPuMPDaUxjI_rqzg9LfxmZd_Jivo3mdXSrAjKTo4_OJd_nzz-lE7NxQWWVlPQmC3xDUwUxnDVZCvzSjVx3Jd9EdQN-X-2znqwr-sQP4Whqgld2EmULDNGYAoujPv3PnyLMmH9pSCywYI_s0Egssw7Jsazp0wMQ" alt="The Silhouette" />
              </div>
              <div className="w-full md:w-1/2 reveal reveal-delay-2">
                <span className="font-manrope text-secondary text-[11px] font-bold uppercase tracking-[0.3em] mb-6 block">The Modern Icon</span>
                <h3 className="font-noto-serif text-5xl italic leading-tight text-[#00081e] dark:text-[#fdf9f0] mb-8">A Dialogue Between <br />Past and Present.</h3>
                <p className="font-manrope text-[#44464e] dark:text-[#fdf9f0]/70 leading-relaxed text-lg mb-10 max-w-md">
                  Our design philosophy centers on the evolution of style. By reimagining archival shapes for the modern life, we create a wardrobe that transcends seasons and remains eternally relevant.
                </p>
                <a className="inline-flex items-center gap-4 font-manrope text-[10px] font-extrabold uppercase tracking-[0.2em] group text-[#00081e] dark:text-[#fdf9f0]" href="#">
                  Read the Journal
                  <span className="w-12 h-[1px] bg-[#00081e] dark:bg-[#fdf9f0] group-hover:w-20 transition-all duration-500" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-8 bg-[#fdf9f0] dark:bg-[#0d0d0a]">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-4 reveal">
              <div>
                <span className="font-manrope text-secondary text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">New Arrivals</span>
                <h2 className="font-noto-serif text-4xl text-[#00081e] dark:text-[#fdf9f0]">The Signature Selection</h2>
              </div>
              <a className="font-manrope text-[10px] font-bold uppercase tracking-widest border-b border-[#75777f] pb-1 text-[#1c1c16] transition hover:text-[#755844] hover:border-[#755844] dark:text-[#fdf9f0]/70 dark:border-[#fdf9f0]/30" href="#">
                View All Products
              </a>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
              {products.map((product, index) => (
                <div key={product.name} className="group cursor-pointer reveal">
                  <div className="relative overflow-hidden rounded-[1rem] bg-[#f7f3ea] aspect-[3/4] mb-6">
                    <img className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src={product.image} alt={product.name} />
                    <button
                      type="button"
                      className="absolute top-3 right-3 rounded-full bg-white/80 backdrop-blur-sm p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      onClick={(event) => {
                        event.stopPropagation()
                        toggleWishlist(index)
                      }}
                      aria-label="Add to wishlist"
                    >
                      <span className="material-symbols-outlined text-[18px] text-[#00081e]">
                        {wishlist.includes(index) ? 'favorite' : 'favorite_border'}
                      </span>
                    </button>
                    <button className="absolute inset-x-4 bottom-4 rounded-full bg-white/90 backdrop-blur-sm py-3 text-[10px] font-bold uppercase tracking-widest translate-y-12 transition-transform duration-300 group-hover:-translate-y-1">
                      Quick Add
                    </button>
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.22em] mb-1 text-[#1c1c16] dark:text-[#fdf9f0]">{product.name}</h3>
                  <p className="text-[0.65rem] uppercase tracking-[0.22em] text-[#5f5e5e] dark:text-[#fdf9f0]/60">{product.tag}</p>
                  <p className="mt-3 font-serif text-lg italic text-[#00081e] dark:text-[#fdf9f0]">{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#00081e] text-white py-32 px-8">
          <div className="mx-auto max-w-4xl text-center reveal">
            <span className="material-symbols-outlined text-secondary text-5xl mb-8">mail</span>
            <h2 className="font-noto-serif text-4xl italic mb-6">Join The Heritage Society</h2>
            <p className="font-manrope text-on-primary/60 text-sm uppercase tracking-widest mb-12">
              Receive exclusive access to new collections and editorial insights.
            </p>
            <form className="flex flex-col gap-4 md:flex-row md:justify-center" onSubmit={handleNewsletterSubmit}>
              <label className="flex w-full flex-col gap-3 text-left text-[0.75rem] uppercase tracking-[0.2em] text-white/80 md:w-96">
                Email Address
                <input
                  className="w-full border-b border-white/30 bg-transparent pb-3 text-white outline-none placeholder:text-white/30"
                  placeholder="atelier@heritage.com"
                  type="email"
                  required
                />
              </label>
              <button className="rounded-md bg-[#ffd8be] px-10 py-4 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-[#755844] transition hover:bg-[#ffdcc5]">
                Subscribe
              </button>
            </form>
            {newsletterSuccess && (
              <div className="mt-6 text-[0.75rem] uppercase tracking-[0.2em] text-secondary">
                Thank you � welcome to the Heritage Society.
              </div>
            )}
            <p className="mt-8 text-[0.65rem] uppercase tracking-[0.2em] text-white/30">
              By signing up you agree to our Privacy Policy
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-[#e6e2d9] dark:bg-[#0a1f44] py-16 px-8 text-[#1c1c16]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="font-serif text-lg uppercase tracking-[0.18em]">HERITAGE</div>
          <nav className="flex flex-wrap justify-center gap-8 text-[0.65rem] uppercase tracking-[0.15em] text-[#1c1c16]/70 dark:text-[#fdf9f0]/70">
            {['Collection', 'Atelier', 'Journal', 'Sustainability', 'Contact'].map((link) => (
              <a key={link} href="#" className="transition hover:text-[#755844] dark:hover:text-[#ffdcc5]">
                {link}
              </a>
            ))}
          </nav>
          <div className="text-[0.65rem] uppercase tracking-[0.15em] text-[#1c1c16]/50 dark:text-[#fdf9f0]/50">
            � 2024 Heritage Editorial. All Rights Reserved.
          </div>
        </div>
      </footer>

      <button
        id="back-to-top"
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`${backToTopVisible ? 'fixed bottom-8 right-8 flex opacity-100 translate-y-0' : 'hidden opacity-0 translate-y-4'} z-50 h-12 w-12 items-center justify-center rounded-full bg-[#00081e] text-white shadow-lg transition-all duration-200`}
      >
        <span className="material-symbols-outlined">arrow_upward</span>
      </button>
    </div>
  )
}

export default App
