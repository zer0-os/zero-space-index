export default function Toggle({ checked, setChecked }) {
  return (
    <span className="box-glow relative z-0 inline-flex rounded-md">
      <button
        onClick={(e) => setChecked(false)}
        type="button"
        className={`relative inline-flex items-center px-6 py-2 rounded-l-md border text-md font-medium bg-forest text-white border-forest hover:bg-forest hover:bg-opacity-70 ${
          !checked ? "bg-opacity-70" : "bg-opacity-20"
        } hover:text-white focus:z-10 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 focus:outline-none`}
      >
        WILD
      </button>
      <button
        onClick={(e) => setChecked(true)}
        type="button"
        className={`-ml-px relative inline-flex items-center px-6 py-2 rounded-r-md border text-md font-medium bg-forest text-white border-forest hover:bg-forest hover:bg-opacity-70 ${
          checked ? "bg-opacity-70" : "bg-opacity-20"
        } hover:text-white focus:z-10 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 focus:outline-none`}
      >
        LOOT
      </button>
    </span>
  );
  // return (
  //   <div className="flex items-center justify-center">
  //     <span className="mr-8">WILD</span>
  //     <span
  //       role="checkbox"
  //       tabIndex="0"
  //       onClick={(e) => setChecked((e) => !e)}
  //       className={`bg-gradient relative inline-flex flex-shrink-0 h-6 w-11 border-none p-0.5 border-transparent rounded-md cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`}
  //     >
  //       <span
  //         aria-hidden="true"
  //         className={`${
  //           checked ? "translate-x-5" : "translate-x-0"
  //         } inline-block h-5 w-5 rounded-md bg-white shadow transform transition ease-in-out duration-200`}
  //       />
  //     </span>
  //     <span className="ml-8">LOOT</span>
  //   </div>
  // );
}
