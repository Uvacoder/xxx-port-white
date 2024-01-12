const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © tiff.
      <style jsx>{`
          footer {
            margin-top: 5rem;
            color: grey;
          }
        `}</style>
    </small>
  ),
  darkMode: true,
}
