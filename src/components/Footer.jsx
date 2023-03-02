import styles from "../style"
import { logo } from "../assets"
import { footerLinks, socialMedia } from "../constants"

function Footer() {
  function sayHi() {
    alert("Hi!")
  }

  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-[1] flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="logo"
            className="w-[200px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex-[1] flex flex-row flex-wrap w-full justify-between md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
            >
              <h4 className=" text-white font-poppins font-medium text-[18px] leading-[27px]">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={` text-dimWhite hover:text-secondary font-poppins font-normal text-[16px] leading-[24px] cursor-pointer ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    <a href={`#${link.name}`} onClick={sayHi} data-testid={`${link.name}`}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t-[gray] border-t-[1px] w-full flex justify-between items-center md:flex-row flex-col pt-6 ">
        <p className="text-dimWhite font-poppins font-normal text-center text-[14px] leading-[27px]">
          Copyright Ⓒ 2023 - Modern Website using React.js and Tailwind 🍃
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer
