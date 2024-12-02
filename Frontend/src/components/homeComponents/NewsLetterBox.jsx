import React from "react";

export const NewsLetterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium">Subscribe now & get 20% off</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, ad.</p>
      <form className="border w-full sm:w-1/2 flex mx-auto my-6 pl-3" action="">
        <input
          className="w-full outline-none"
          type="email"
          placeholder="Enter your email"
        />
        <button
          onSubmit={onSubmitHandler}
          type="submit"
          className="bg-black text-white px-10 py-4 text-xs"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};
