import { useSelector } from "react-redux";
import "./footer.css";
import instagram from '../assets/images/icons8-instagram-48.png';
import satu from '../assets/white-icons/satu.png'
import kaspi from '../assets/white-icons/kaspi-logo2.png'
import ozon from '../assets/white-icons/ozon.png'
import wb from '../assets/white-icons/wildberries.svg'
export default function Footer({ contacts, headerFooterImage, headerFooterTextColor, headerFooterMediaColor }) {
  const icons = useSelector((state) => state.icons.whiteIcons);
  const link = useSelector((state) => state.path.pathForImagesPC);
  const emails = useSelector((state) => state.contacts.emails);
  const address = useSelector((state) => state.contacts.address);

  const allElements = document.querySelectorAll('footer *')
  allElements.forEach(el => {
    el.style.color = headerFooterTextColor
  })

  return (
    <>
      <footer className="footer" id="footerAnchor" style={{ background: `#000 url(https://fratelli.kz/uploads/${headerFooterImage}) center/cover no-repeat` }}>
        <div className="container">
          <div className="footer-wrapper">
            <div className="footer-wrapper-left">
              <div className="media">
                <a
                  href={contacts?.instagramLink}
                  target="_blank"
                  className="media-link"
                >
                  <div>
                    <div
                      style={headerFooterMediaColor == 'black' ? { backgroundImage: `url('${instagram}')`, filter: 'invert(1)' } : { backgroundImage: `url('${instagram}')` }}

                      className="footer-icon"

                    ></div>{" "}

                    <span>Instagram</span>
                  </div>
                </a>
                <a
                  href={contacts?.ozonLink}
                  target="_blank"
                  className="media-link"
                >
                  <div>
                    <div
                      style={headerFooterMediaColor == 'black' ? { backgroundImage: `url(${ozon})`, filter: 'invert(1)' } : { backgroundImage: `url(${ozon})` }}
                      className="footer-icon"
                    ></div>{" "}
                    <span>Ozon</span>
                  </div>
                </a>
                <a
                  href={contacts?.kaspiLink}
                  target="_blank"
                  className="media-link"
                >
                  <div>
                    <div
                      style={headerFooterMediaColor == 'black' ? { backgroundImage: `url(${kaspi})`, filter: 'invert(1)' } : { backgroundImage: `url(${kaspi})` }}
                      className="footer-icon"
                    ></div>{" "}
                    <span>Kaspi</span>
                  </div>
                </a>
                <a
                  href={contacts?.satuLink}
                  target="_blank"
                  className="media-link"
                >
                  <div>
                    <div
                      style={headerFooterMediaColor == 'black' ? { backgroundImage: `url(${satu})`, filter: 'invert(1)' } : { backgroundImage: `url(${satu})` }}
                      className="footer-icon"
                    ></div>{" "}
                    <span>Satu</span>
                  </div>
                </a>
                <a
                  href={contacts?.wildBerriesLink}
                  target="_blank"
                  className="media-link"
                >
                  <div>
                    <div
                      style={headerFooterMediaColor == 'black' ? { backgroundImage: `url(${wb})`, filter: 'invert(1)' } : { backgroundImage: `url(${wb})` }}
                      className="footer-icon"
                    ></div>{" "}
                    <span>WildBerries</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-wrapper-right">
              <div className="footer_numbers">
                {contacts?.phoneOne && <a href={`tel:${contacts.phoneOne}`}>{'+' + contacts?.phoneOne}</a>}
                {contacts?.phoneTwo && <a href={`tel:${contacts.phoneTwo}`}>{'+' + contacts?.phoneTwo}</a>}
                {contacts?.phoneThree && <a href={`tel:${contacts.phoneThree}`}>{'+' + contacts?.phoneThree}</a>}
              </div>
              <div className="footer-emails">

                <div >
                  <div>Cотрудничество:</div>
                  <a href={`mailto:${contacts?.email}`}>{contacts?.email}</a>
                </div>

              </div>
              <div className="footer-address">{contacts?.address}</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
