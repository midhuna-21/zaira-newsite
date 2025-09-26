"use client"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { useState } from "react"
import ImagePopup from "@/modals/ImagePopup"

import logo_1 from "@/assets/img/logo/logo.png"
import logo_2 from "@/assets/img/logo/w_logo.png"
import businessData from '../../../../public/data/business.json';
import usData from '../../../../public/data/us.json';
import innovationData from '../../../../public/data/innovation.json';
import investingData from '../../../../public/data/investing.json';
import enterpriseData from '../../../../public/data/enterprise.json';

const img_1: string = businessData[0].image;
const img_2: string = usData[0].image;
const img_3: string = innovationData[0].image;
const img_4: string = investingData[0].image;
const img_5: string = enterpriseData[0].image;
const img_6: string = usData[1].image;

const image_data = [
   { src: businessData[0].image, href: "/business" },
   { src: usData[0].image, href: "/us" },
   { src: innovationData[0].image, href: "/innovation" },
   { src: investingData[0].image, href: "/investing" },
   { src: enterpriseData[0].image, href: "/enterprise" },
   { src: usData[1].image, href: "/us" },
];


interface MobileSidebarProps {
   offCanvas: boolean;
   setOffCanvas: (offCanvas: boolean) => void;
}

const Offcanvas = ({ offCanvas, setOffCanvas }: MobileSidebarProps) => {

   const [photoIndex, setPhotoIndex] = useState<number>(0);
   const [isOpen, setIsOpen] = useState(false);

   const handleImagePopup = (i: number) => {
      setPhotoIndex(i);
      setIsOpen(true);
   };

   const slides = image_data.map((img) => ({
      src: img,
   }));

   return (
      <>
         <div className={offCanvas ? "offCanvas-menu-visible" : ""}>
            <div className="offCanvas-wrap">
               <div className="offCanvas-body">
                  <div onClick={() => setOffCanvas(false)} className="offCanvas-toggle">
                     <span></span>
                     <span></span>
                  </div>
                  <div className="offCanvas-content">
                     <div className="offCanvas-logo logo">
                        <Link href="/" className="logo-dark"><Image src={logo_1} alt="Logo" /></Link>
                        <Link href="/" className="logo-light"><Image src={logo_2} alt="Logo" /></Link>
                     </div>
                     <p>Providing reliable reporting and valuable insights to help people stay informed every day, everywhere.</p>
                     <ul className="offCanvas-instagram list-wrap">
                        {image_data.map((item, index) => (
                           <li key={index}>
                              <Link
                                 href={item.href}
                                 onClick={() => handleImagePopup(index)}
                                 style={{ cursor: "pointer" }}
                                 className="popup-image"
                              >
                                 <Image
                                    src={item.src}
                                    alt={`instagram-${index}`}
                                    width={100}
                                    height={100}
                                 />
                              </Link>
                           </li>
                        ))}
                     </ul>


                  </div>
                  <div className="offCanvas-contact">
                     {/* <h4 className="title">Get In Touch</h4>
                     <ul className="offCanvas-contact-list list-wrap">
                        <li><i className="fas fa-envelope-open"></i><Link href="mailto:info@webmail.com">info@webmail.com</Link></li>
                        <li><i className="fas fa-phone"></i><Link href="tel:88899988877">888 999 888 77</Link></li>
                        <li><i className="fas fa-map-marker-alt"></i> 12/A, New Booston, NYC</li>
                     </ul> */}
                     <ul className="offCanvas-social list-wrap" style={{ marginTop: '20px' }}>
                        <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                        <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                        <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                        <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
                     </ul>
                  </div>
               </div>
            </div>
            <div onClick={() => setOffCanvas(false)} className="offCanvas-overlay"></div>
         </div>

      </>
   )
}

export default Offcanvas
