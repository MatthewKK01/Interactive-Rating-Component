import thanks from "./images/illustration-thank-you.svg";
const ThankYou = ({items}) => {
  return (
    <div className="wrapper">
      <img src={thanks} className="mx-auto block mb-5" alt="" />
      <div className="flex items-center justify-center">
        <p className="text-sm px-2 pt-1 p-rating bg-gray-700 rounded-full text-center ">
          You Selected {items} out of 5
        </p>
      </div>
      <h2 className="text-gray-100 text-center text-3xl my-6">Thank You!</h2>
      <p className="text-gray-400 mb-10 text-s text-center">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThankYou;
