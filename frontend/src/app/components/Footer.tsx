const Footer = () => {
  return (
    <footer className="max-w-[1400px] justify-center p-[40px] ">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-between gap-1">
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate"
          >
            <path
              d="M11 6H13V10.079L16.3413 7.73938L17.4885 9.37768L13.7434 12L17.4885 14.6223L16.3413 16.2606L13 13.921V18H11V13.921L7.65864 16.2606L6.51148 14.6223L10.2565 12L6.51147 9.37769L7.65863 7.73938L11 10.079V6Z"
              fill="currentColor"
            />
          </svg>
          <p className="text-xs font-extralight">© Oli Harris 2023</p>
        </div>
        <div className="flex flex-row justify-between gap-4 text-xs font-extralight">
          <p>Twitter</p>
          <p>Linkedin</p>
          <p>Mail</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
