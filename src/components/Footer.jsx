import { useSelector } from "react-redux";
import "./footer.css";
import { nanoid } from "@reduxjs/toolkit";

export default function Footer() {
  const icons = useSelector((state) => state.icons.whiteIcons);
  const link = useSelector((state) => state.path.pathForImagesPC);
  const contacts = useSelector((state) => state.contacts.numbers);
  const emails = useSelector((state) => state.contacts.emails);
  const address = useSelector((state) => state.contacts.address);
  return (
    <>
      <footer className="footer" id="footerAnchor">
        <div className="container">
          <div className="footer-wrapper">
            <div className="footer-wrapper-left">
              <div className="media">
                {icons.map((icon) => {
                  return (
                    <a
                      key={icon.path}
                      href={icon.href}
                      target="_blank"
                      className="media-link"
                    >
                      <div>
                        <div
                          style={{
                            backgroundImage: `url('${link}${icon.path}')`,
                          }}
                          className="footer-icon"
                        ></div>{" "}
                        <span>{icon.name}</span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="footer-wrapper-right">
              <div className="footer_numbers">
                {contacts.map((el) => (
                  <a key={nanoid()} href={`tel:${el}`}>
                    {el}
                  </a>
                ))}
              </div>
              <div className="footer-emails">
                {emails.map((el) => (
                  <div key={nanoid()}>
                    <div>Cотрудничество:</div>
                    <a href={`mailto:${el}`}>{el}</a>
                  </div>
                ))}
              </div>
              <div className="footer-address">{address}</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
