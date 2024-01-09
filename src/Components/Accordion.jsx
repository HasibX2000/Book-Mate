export default function Accordion(props) {
  return (
    <div className="border border-orange-300 dark:border-orange-600 mb-3">
      <button
        className="w-full p-4 text-left text-2xl  bg-white dark:bg-orange-600 transition duration-300 dark:text-white text-orange-600"
        onClick={props.toggleAccordion}
      >
        {props.title}
        <span
          className={`float-right transform ${
            props.isOpen ? 'rotate-180' : 'rotate-0'
          } transition-transform duration-300`}
        >
          &#9660;
        </span>
      </button>
      {props.isOpen && (
        <div className="p-4 text-xl bg-white dark:bg-orange-600 dark:text-white text-orange-600 ">
          {props.data}
        </div>
      )}
    </div>
  );
}
