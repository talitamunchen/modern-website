import { quotes } from "../assets"

function FeedbackCard(props) {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img
        src={quotes}
        alt="quotes"
        className="w-[42px] h-[27px] object-contain"
      />
      <p className="text-white font-poppins font-normal text-[18px] leading-[32px] my-10">
        {props.content}
      </p>
      <div className="flex flex-row">
        <img src={props.img} alt={props.name} className="w-[48px] h-[48px] rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="text-white font-poppins font-semibold text-[18px] leading-[32px] uppercase">
            {props.name}
          </h4>
          <p className="text-dimWhite font-poppins font-normal text-[16px] leading-[24px]">
            {props.title}
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard
