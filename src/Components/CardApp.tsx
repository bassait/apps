interface CardAppInterface {
  title: string;
  image: string;
  url: string;
  description: string;
}

function CardApp(props: CardAppInterface) {
  return (
    <div className="card rounded-lg shadow-light-line-20 md:shadow-light-line-40 px-3 py-3">
      <a href="#" className="flex justify-between py-2 items-center border-b border-gray-100">
        
        <h3 className="text-base text-gray-700 font-medium">{props.title}</h3>
        <img src={props.image} className="w-14" alt="" />
      </a>
      <div>
        <p className="text-sm text-gray-600 pt-3 pb-4 mb-3 font-medium">
            {props.description}
        </p>
        <div className="block w-16 mr-auto">
          <a
            href={props.url}
            className="py-1 px-4 bg-sky-600 hover:bg-sky-700 focus:ring-sky-500 focus:ring-offset-sky-200 text-white w-full transition ease-in duration-200 text-center text-sm shadow-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-md"
          >
            تثبيت
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardApp;
