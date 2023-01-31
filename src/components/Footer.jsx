export default function Footer ({ phone, mail, instagram }) {
  return (
    <footer className='footer'>
      <article className='footer-socials'>
        <h4>CONTACTANOS</h4>
        <div className='social'>
          <svg viewBox='0 0 24 24'>
            <path
              fill='currentColor'
              d='M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2Z'
            />
          </svg>
          <a href={`tel:+${phone}`}>{`${phone}`}</a>
        </div>
        <div className='social'>
          <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'><path fill='currentColor' d='m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z' /></svg>
          <a href={`mailto:${mail}`}>{mail}</a>
        </div>
        <h4>REDES SOCIALES</h4>
        <div className='social'>
          <a
            id='instagram'
            href={`https://www.instagram.com/${instagram}`}
            target='_blank'
            rel='noreferrer'
          >
            <svg viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z'
              />
            </svg>
          </a>
        </div>
      </article>
    </footer>
  )
}
