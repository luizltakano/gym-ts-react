import logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            blandit sapien nec facilisis elementum. Aenean facilisis facilisis
            metus, et pharetra sem scelerisque ac. Sed ac tellus vehicula,
            pellentesque nisi sed, viverra mauris. Etiam vel vehicula dui.
            Aenean pulvinar rhoncus neque vitae mattis.
          </p>
          <p>Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Link number 1</p>
          <p className="my-5">Link number 2</p>
          <p>Something else</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">email@email.com</p>
          <p className="my-5">Mobile:</p>
          <p>+34 666 666 666</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
