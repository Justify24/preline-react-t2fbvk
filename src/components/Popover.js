export default function Popover() {
  return (
    <div className="flex justify-center gap-4">
      <div className="hs-tooltip inline-block [--trigger:click] [--placement:left]">
        <a className="hs-tooltip-toggle block text-center" href="javascript:;">
          <span className="w-10 h-10 inline-flex justify-center items-center gap-2 rounded-md bg-white/[.1] border shadow-md shadow-gray-800/[.05] hover:bg-white hover:border-white hover:text-blue-600 hover:shadow-gray-800/[.1] transition">
            <svg
              className="w-2.5 h-2.5"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </span>
          <div
            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-3 px-4 bg-white border text-sm text-gray-600 rounded-md shadow-md dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400"
            role="tooltip"
          >
            Left popover
          </div>
        </a>
      </div>

      <div className="hs-tooltip inline-block [--trigger:focus]">
        <a className="hs-tooltip-toggle block text-center" href="javascript:;">
          <span className="w-10 h-10 inline-flex justify-center items-center gap-2 rounded-md bg-white/[.1] border shadow-md shadow-gray-800/[.05] hover:bg-white hover:border-white hover:text-blue-600 hover:shadow-gray-800/[.1] transition">
            <svg
              className="w-2.5 h-2.5"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M2.27921 10.64L7.92565 4.99357C8.12091 4.79831 8.4375 4.79831 8.63276 4.99357L14.2792 10.64"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </span>
          <div
            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-3 px-4 bg-white border text-sm text-gray-600 rounded-md shadow-md dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400"
            role="tooltip"
          >
            Top popover
          </div>
        </a>
      </div>

      <div className="hs-tooltip inline-block [--trigger:click] [--placement:bottom]">
        <a className="hs-tooltip-toggle block text-center" href="javascript:;">
          <span className="w-10 h-10 inline-flex justify-center items-center gap-2 rounded-md bg-white/[.1] border shadow-md shadow-gray-800/[.05] hover:bg-white hover:border-white hover:text-blue-600 hover:shadow-gray-800/[.1] transition">
            <svg
              className="w-2.5 h-2.5"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M2.27921 4.64001L7.92565 10.2865C8.12091 10.4817 8.4375 10.4817 8.63276 10.2865L14.2792 4.64001"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </span>
          <div
            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-3 px-4 bg-white border text-sm text-gray-600 rounded-md shadow-md dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400"
            role="tooltip"
          >
            Bottom popover
          </div>
        </a>
      </div>

      <div className="hs-tooltip inline-block [--trigger:click] [--placement:right]">
        <a className="hs-tooltip-toggle block text-center" href="javascript:;">
          <span className="w-10 h-10 inline-flex justify-center items-center gap-2 rounded-md bg-white/[.1] border shadow-md shadow-gray-800/[.05] hover:bg-white hover:border-white hover:text-blue-600 hover:shadow-gray-800/[.1] transition">
            <svg
              className="w-2.5 h-2.5"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </span>
          <div
            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-3 px-4 bg-white border text-sm text-gray-600 rounded-md shadow-md dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400"
            role="tooltip"
          >
            Right popover
          </div>
        </a>
      </div>
    </div>
  );
}
