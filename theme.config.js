const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Your Name.
      <style jsx>{`
          footer {
            margin-top: 5rem;
            color: grey;
          }
        `}</style>
    </small>
  )
}
