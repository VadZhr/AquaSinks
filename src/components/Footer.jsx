import React from "react";
import { useSelector } from "react-redux";
import './footer.css'

export default function Footer() {
  const icons = useSelector((state) => state.icons.iconsPath);
  const link = useSelector((state) => state.path.pathForImagesPC);

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-wrapper">
            <div className="media">
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
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
