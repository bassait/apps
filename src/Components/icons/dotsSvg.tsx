function DotsSvg(props: any) {
  return (
    <div>
      <svg
        viewBox="0 0 52 24"
        fill="currentColor"
        className={props.className + " absolute hidden w-32 -mt-8 -ml-20 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"}
      >
        <defs>
          <pattern
            id="9ef1ff62-feb2-41fe-8163-772b4c79de7b"
            x="0"
            y="0"
            width=".135"
            height=".30"
          >
            <circle cx="1" cy="1" r=".7" />
          </pattern>
        </defs>
        <rect
          fill="url(#9ef1ff62-feb2-41fe-8163-772b4c79de7b)"
          width="52"
          height="24"
        />
      </svg>
    </div>
  );
}

export default DotsSvg;
