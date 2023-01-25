import CardApp from "./CardApp";
import DotsSvg from "./icons/dotsSvg";
function LandingPage() {
  return (
    <div
      dir="rtl"
      className="flex flex-col items-center justify-center max-w-2xl px-4 pt-16 mx-auto sm:max-w-xl md:max-w-5xl lg:pt-32 md:px-8"
    >
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            التطبيقات
          </p>
        </div>
        <h2 className="relative max-w-lg mb-6 text-center tracking-tight text-gray-800 text-3xl sm:text-6xl md:mx-auto">
          اضف تطبيقات الى متجرك لتطوير موقعك كالمحترفين
          <span className=" inline-block ">
            <DotsSvg className="text-blue-500 -z-10 left-5 top-0" />
          </span>
        </h2>
        <p className="text-sm text-gray-600 md:text-base">
          جميع التطبيقات صنعت وتمت مرجعتها بعناية كبيره
        </p>
      </div>
      <form className="flex flex-col text-center items-center w-full mb-4 md:flex-row md:px-16">
        <input
          placeholder="ادخل كلمة البحث"
          required
          type="text"
          className="flex-grow  w-full h-12 px-4 text-center text-lg transition duration-200 bg-white rounded appearance-none md:mr-2 md:mb-0 shadow-light-line-50 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
        />
      </form>
      <p className="max-w-md mb-10 text-xs text-gray-600 sm:text-sm md:text-center">
        ابحث عن تطبيق محدد
      </p>

      <div className="grid md:grid-cols-3 gap-x-4 gap-y-4 md:gap-y-10 md:gap-x-6 mb-10 w-full">
        {Array(5)
          .fill(1)
          .map((el, i) => (
            <CardApp
              key={i}
              title={`رياكت نيتف ${i + 1}`}
              description="يمكن باستخدامه توليد واجهات استخدام لكل من iOS وأندرويد. · إطار عمل مفتوح المصدر، وقد يصبح متوافقًا مع منصات أخرى"
              image="/src/assets/react.svg"
              url={`#${i}`}
            />
          ))}
      </div>
    </div>
  );
}

export default LandingPage;
