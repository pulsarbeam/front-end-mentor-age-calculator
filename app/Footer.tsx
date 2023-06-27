const Footer = () => {
  return (
    <footer className="bg-slate-100 rounded-lg shadow m-4 ">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between ">
        <span className="text-sm text-gray-800 sm:text-center ">
          © 2023{' '}
          <a
            href="https://pulsarbeam.github.io/personal-website/"
            className="hover:underline"
          >
            Rene™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-700  sm:mt-0">
          <li>
            <a
              href="https://pulsarbeam.github.io/personal-website/"
              className="mr-4 hover:underline md:mr-6 "
            >
              Website
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/rene-groothuis-1801b01a0/"
              className="mr-4 hover:underline md:mr-6"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/pulsarbeam"
              className="mr-4 hover:underline md:mr-6"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://pulsarbeam.github.io/personal-website/"
              className="hover:underline"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer
