import React from 'react'
import "./footer.css"
function Footer() {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-section">
        <h3>Haqqımızda</h3>
        <p>Biz sizin üçün ən keyfiyyətli məhsulları təqdim edirik. Müştəri məmnuniyyəti bizim üçün ən önəmlisidir.</p>
      </div>
      <div className="footer-section">
        <h3>Əlaqə</h3>
        <p>Email: info@example.com</p>
        <p>Telefon: +994 50 123 45 67</p>
      </div>
      <div className="footer-section">
        <h3>Sosial Media</h3>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 Bütün hüquqlar qorunur | Sizin Şirkət Adınız</p>
    </div>
  </footer>
  )
}

export default Footer