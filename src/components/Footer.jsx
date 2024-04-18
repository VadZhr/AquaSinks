import React from "react";
import { useSelector } from "react-redux";
import "./footer.css";
import { nanoid } from "@reduxjs/toolkit";

export default function Footer() {
  const icons = useSelector((state) => state.icons.whiteIcons);
  const link = useSelector((state) => state.path.pathForImagesPC);
  const contacts = useSelector((state) => state.contacts.numbers);
  const emails = useSelector((state) => state.contacts.emails);
  const address =useSelector((state) => state.contacts.address);
  return (
    <>
      <footer className="footer" id="footerAnchor">
        <div className="container">
          <div className="footer-wrapper">
            <div className="footer-wrapper-left">
              <div className="media">
                {icons.map((icon) => {
                  return (
                    <div
                      key={icon.path}
                      style={{ display: "flex", gap: "10px" }}
                    >
                      <a
                        href={icon.href}
                        target="_blank"
                        className="media-link"
                        style={{
                          backgroundImage: `url('${link}${icon.path}') `,
                        }}
                      >
                        {" "}
                      </a>
                      <span>{icon.name}</span>
                    </div>
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
              <div className="footer-address">
                  {address}
              </div>
            </div>
            {/* <div className="media">
              {icons.map((icon) => {
                return (
                  <a
                    href={icon.href}
                    target="_blank"
                    className="media-link"
                    key={icon.path}
                    style={{ backgroundImage: `url('${link}${icon.path}') ` }}
                  > </a>
                );
              })}
            </div>
            <div className="adress">
              Antonio Lupi Design S.p.A - Via Mazzini 73/75, 50050 Stabbia
              Cerreto Guidi (Firenze) Italy - P.IVA 04980750485
            </div> */}
          </div>
        </div>
      </footer>
    </>
  );
}
