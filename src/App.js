import star from "./images/icon-star.svg";
import ThankYou from "./ThankYou";
import { useState } from "react";

function App() {
  const [isSubmited, setIsSubmited] = useState(false);
  const [items, setItems] = useState("");

  const Button = ({ number }) => {
    return (
      <button
        onClick={() => setItems(number)}
        className="bg-gray-700  btn-number h-10 w-10 rounded-full transition-all duration-150 text-gray-200 focus:bg-gray-400"
      >
        {number}
      </button>
    );
  };

  return (
    <>
      {!isSubmited && (
        <div className="wrapper ">
          <img src={star} alt="" className="bg-gray-700 p-2 rounded-full" />
          <h2 className="text-gray-100 text-3xl my-6">How did we do</h2>
          <p className="text-gray-400 mb-10">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <ul className="grid grid-cols-5 gap-3 mb-10">
            <li>
              <Button number={1} />
            </li>
            <li>
              <Button number={2} />
            </li>
            <li>
              <Button number={3} />
            </li>
            <li>
              <Button number={4} />
            </li>
            <li>
              <Button number={5} />
            </li>
          </ul>
          <div className="text-center btn">
            <button
              onClick={() => {
                setIsSubmited(true);
              }}
              className="btn-rating uppercase w-full text-white tracking-wide py-3 rounded-full"
            >
              submit
            </button>
          </div>
        </div>
      )}
      {isSubmited && <ThankYou items={items} />}
    </>
  );
}

export default App;
