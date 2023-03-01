import styles from "../style"
import { arrowUp } from "../assets"

const Paragraph = ({text}) => {
  return (
    <p className="font-poppins font-medium text-[18px] leading-[23px]">
      <span className="text-gradient">{text}</span>
    </p>
  )
}

function GetStarted() {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <Paragraph text="Get" />
          <img
            src={arrowUp}
            alt="arrow"
            className="w-[23px] h-[23px] object-contain ml-2"
          />
        </div>
        <Paragraph text="Started" />
      </div>
    </div>
  )
}

export default GetStarted
