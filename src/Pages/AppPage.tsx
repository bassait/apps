import Layout from "../Layout";

const AppPage = () => {
  return (
    <Layout>
      <section className="text-gray-600 body-font overflow-hidden" dir="rtl">
        <div className="container px-5 py-24 mx-auto">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="flex items-center gap-1 text-sm text-gray-600"
            >
              <li>
                <a href="/" className="block transition hover:text-gray-700">
                الرئيسية
                </a>
              </li>

              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 rotate-180"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </li>

              <li>
                <a href="#" className="block transition hover:text-gray-700">
                  رياكت نيتف
                </a>
              </li>
            </ol>
          </nav>
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://camlittle.com/posts/react-and-typescript/thumbnail.png"
            />
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                إحصائيات
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                رياكت نيتف
              </h1>
              <div className="flex mb-4"></div>
              <p className="leading-relaxed mb-6">
                يمكن باستخدامه توليد واجهات استخدام لكل من iOS وأندرويد. إطار
                عمل مفتوح المصدر، وقد يصبح متوافقًا مع منصات أخرى يمكن باستخدامه
                توليد واجهات استخدام لكل من iOS وأندرويد. إطار عمل مفتوح المصدر،
                وقد يصبح متوافقًا مع منصات أخرى
              </p>
              <div className="">
                <button className="block mr-auto text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded">
                  تثبيت
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AppPage;
