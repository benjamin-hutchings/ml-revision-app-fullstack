import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-600 body-font sticky bottom-0">
      <div className="container px-10 py-8 mx-auto flex items-center flex-col sm:flex-row">
        <div className="flex title-font font-medium items-center justify-center text-gray-900 mb-4 sm:mb-0">
          <span className="ml-3 text-xl">Benjamin Hutchings</span>
        </div>

        <span className="inline-flex w-full sm:w-auto justify-center items-center sm:ml-auto sm:mt-0 mt-4">
          <a
            href="https://www.linkedin.com/in/benjaminhutchings1/"
            className="flex items-center justify-center text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-10 h-5">
              {/* LinkedIn icon SVG */}
              <path d="M19 0h-14c-1.11 0-2 .9-2 2v20c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2v-20c0-1.1-.89-2-2-2zm-8 19h-3v-8h3v8zm-1.5-9h-.03c-.92 0-1.52-.64-1.52-1.44c0-.82.63-1.44 1.59-1.44s1.53.62 1.56 1.44c0 .8-.6 1.44-1.52 1.44zm10.5 9h-3v-4.5c0-1.08-.02-2.47-1.56-2.47c-1.56 0-1.8 1.18-1.8 2.39v4.58h-3v-8h3v1.09h.05c.42-.79 1.44-1.61 2.95-1.61c3.16 0 3.75 2.08 3.75 4.78v3.74z" />
            </svg>
          </a>
          <a
            href="https://github.com/benjamin-hutchings/"
            className="flex items-center justify-center text-gray-500 ml-3"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-10 h-5">
              {/* GitHub icon SVG */}
              <path
                fillRule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.46-1.15-1.12-1.46-1.12-1.46-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.55 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.69.93.69 1.87 0 1.35-.01 2.44-.01 2.77 0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
