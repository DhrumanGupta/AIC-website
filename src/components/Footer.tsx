function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-gray-50 mt-12">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 md:px-10 py-8 text-center space-y-3">
        <p className="text-sm text-gray-600">
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
        <p className="text-sm text-gray-500">
          © 2025 Bodhi Capital. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
