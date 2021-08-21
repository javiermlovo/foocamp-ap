export default function Footer({ footer }) {
  const {
    logo: { fields: logo },
    footerNavLinks: navFooter,
    closedCaption: copy,
    title,
    companyDescription: description,
    contactNumber: phone,
    socialNetworksSection: iconsFooter,
  } = footer;
  const contactLabel = 'Contáctanos';
  return (
    <footer className="footer">
      <div className="container footer-nav">
        <div className="footer-nav__logo">
          <a href="/">
            <img src={logo.file.url} alt={logo.title} />
          </a>
        </div>
        <div className="footer-nav__list">
          <nav>
            <ul>
              {navFooter.map((link) => (
                <li key={link.sys.id}>
                  <a href={link.fields.link} className="navigation__item">
                    {link.fields.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footer-nav__contact">
          <p className="title">
            {title}
          </p>
          <p className="paragraph">
            {description}
          </p>
          <p className="title">
            {contactLabel}
          </p>
          <div className="links">
            <a href={`https://api.whatsapp.com/send?phone=${phone}&amp;text=`} className="button-main button-footer" target="_blank" rel="noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.0568848 24L1.74388 17.837C0.702885 16.033 0.155885 13.988 0.156885 11.891C0.159885 5.335 5.49488 0 12.0499 0C15.2309 0.001 18.2169 1.24 20.4629 3.488C22.7079 5.736 23.9439 8.724 23.9429 11.902C23.9399 18.459 18.6049 23.794 12.0499 23.794C10.0599 23.793 8.09888 23.294 6.36188 22.346L0.0568848 24ZM6.65388 20.193C8.32988 21.188 9.92988 21.784 12.0459 21.785C17.4939 21.785 21.9319 17.351 21.9349 11.9C21.9369 6.438 17.5199 2.01 12.0539 2.008C6.60188 2.008 2.16688 6.442 2.16488 11.892C2.16388 14.117 2.81588 15.783 3.91088 17.526L2.91188 21.174L6.65388 20.193ZM18.0409 14.729C17.9669 14.605 17.7689 14.531 17.4709 14.382C17.1739 14.233 15.7129 13.514 15.4399 13.415C15.1679 13.316 14.9699 13.266 14.7709 13.564C14.5729 13.861 14.0029 14.531 13.8299 14.729C13.6569 14.927 13.4829 14.952 13.1859 14.803C12.8889 14.654 11.9309 14.341 10.7959 13.328C9.91288 12.54 9.31588 11.567 9.14288 11.269C8.96988 10.972 9.12488 10.811 9.27288 10.663C9.40688 10.53 9.56988 10.316 9.71888 10.142C9.86988 9.97 9.91888 9.846 10.0189 9.647C10.1179 9.449 10.0689 9.275 9.99389 9.126C9.91889 8.978 9.32488 7.515 9.07788 6.92C8.83589 6.341 8.59089 6.419 8.40889 6.41L7.83888 6.4C7.64088 6.4 7.31888 6.474 7.04688 6.772C6.77488 7.07 6.00688 7.788 6.00688 9.251C6.00688 10.714 7.07188 12.127 7.21988 12.325C7.36888 12.523 9.31488 15.525 12.2959 16.812C13.0049 17.118 13.5589 17.301 13.9899 17.438C14.7019 17.664 15.3499 17.632 15.8619 17.556C16.4329 17.471 17.6199 16.837 17.8679 16.143C18.1159 15.448 18.1159 14.853 18.0409 14.729Z" fill="white" />
              </svg>
              Whatsapp
            </a>
            <a href={`tel:${phone}`} className="button-main button-footer">
              <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 22.621L12.479 15.826C12.471 15.83 10.505 16.796 10.415 16.837C8.17504 17.923 3.61604 9.017 5.80604 7.843L7.88904 6.817L4.39604 0L2.29004 1.039C-4.91196 4.794 6.52304 27.021 13.89 23.654C14.011 23.599 15.992 22.625 16 22.621Z" fill="white" />
              </svg>
              {phone}
            </a>
          </div>
        </div>
        <div className="footer-nav__social-media">
          <div className="media-container">
            {iconsFooter.map((icon) => (
              <a key={icon.sys.id} href={icon.fields.link} target="_blank" rel="noreferrer">
                <img
                  src={icon.fields.icon.fields.file.url}
                  alt={icon.fields.title}
                />
              </a>
            ))}
          </div>
        </div>
        <div className="footer-nav__copy">
          <p>
            {copy}
          </p>
        </div>
      </div>
    </footer>
  );
}
