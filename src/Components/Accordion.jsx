export default function Accordion(props) {
  return (
    <div className="border border-gray-500 mb-3">
      <button
        className="w-full p-4 text-left text-2xl  bg-white dark:bg-gray-900  
                           transition duration-300 dark:text-white text-gray-800"
        onClick={props.toggleAccordion}
      >
        {props.title}
        <span
          className={`float-right transform ${
            props.isOpen ? 'rotate-180' : 'rotate-0'
          }  
                                 transition-transform duration-300`}
        >
          &#9660;
        </span>
      </button>
      {props.isOpen && (
        <div className="p-4 text-xl bg-white dark:bg-gray-800 dark:text-blue-100 text-gray-800 ">
          {props.data}
        </div>
      )}
    </div>
  );
}
