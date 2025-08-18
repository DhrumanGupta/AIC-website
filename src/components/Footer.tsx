function Footer() {
  return (
    <footer className="w-full">
      <p className="text-center text-sm text-gray-600">
        Made with ❤️ by{" "}
        <a
          className="text-blue-600 underline"
          href="https://berlm.me"
          target="_blank"
        >
          Dhruman Gupta
        </a>{" "}
        and{" "}
        <a
          className="text-blue-600 underline"
          href="https://rushilgupta.in"
          target="_blank"
        >
          Rushil Gupta
        </a>{" "}
      </p>
      {/* <hr className="my-4 divide-secondary h-[1px]" /> */}
      <p className="text-center text-sm text-gray-500 my-2 pt-2 border-t-[1px] border-t-gray-300">
        © 2025 Bodhi Capital. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
