import Reveal from "../components/Reveal"

function ContactPage() {
  return (
    <main className="wrap">
      <Reveal as="section" className="card">
        <h1>Contact</h1>
        <p className="meta">
          Phone / Viber / WhatsApp: <a href="tel:+639178778099">+63 917 877 8099</a><br />
          Email: <a href="mailto:marioccalatan@gmail.com">marioccalatan@gmail.com</a><br />
          Company Email: <a href="mailto:mario.calatan@beneco.com.ph">mario.calatan@beneco.com.ph</a><br />
          Facebook: <a href="https://www.facebook.com/mcalatan" target="_blank" rel="noreferrer">
            facebook.com/mcalatan
          </a><br />
          GitHub: <a href="https://github.com/marioccalatan" target="_blank" rel="noreferrer">
            github.com/marioccalatan
          </a>
        </p>
      </Reveal>
    </main>
  )
}
export default ContactPage
