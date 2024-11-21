import logo from './EraseBackdrop.png'
import logo_icon from './logoiconu.jpg'
import arrow_icon from './arrow_icon.svg'
import header_img from './headerimg_u.png'
import remove_bg_icon from './third_icon_n.png'
import upload_btn_icon from './upload_btn_icon.svg'
import upload_icon from './upload_icon_n.png'
import download_icon from './download_icon_n.png'
import image_w_bg from './imagewobgj.jpg'
import image_wo_bg from './imagewoobgj.jpg'
import facebook_icon from './facebook_icon.svg'
import google_plus_icon from './google_plus_icon.svg'
import twitter_icon from './twitter_icon.svg'
import profile_img_1 from './profileimg1.jpg'
import profile_img_2 from './profileimg2.jpg'
import credit_icon from './credit_icon.png'

export const assets = {
    logo,
    logo_icon,
    arrow_icon,
    header_img,
    remove_bg_icon,
    upload_icon,
    download_icon,
    image_w_bg,
    image_wo_bg,
    facebook_icon,
    google_plus_icon,
    twitter_icon,
    upload_btn_icon,
    credit_icon
}

export const testimonialsData = [
    {
        id: 1,
        text: "This tool has streamlined my workflow and consistently delivers high-quality results.",
        author: "Richard Nelson",
        image: profile_img_1,
        jobTitle:'Web Developer'
    },
    {
        id: 2,
        text: "Impressive quality and user-friendly experience. A great tool for any designer!",
        author: "Donald Jackman",
        image: profile_img_2,
        jobTitle:'UI Deginer'
    },
];

export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]