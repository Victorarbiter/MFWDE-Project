const Initiator = {
  init({ toggler, drawer, header }) {
    toggler.addEventListener('click', (event) => {
      event.preventDefault();
      this._toggleDrawer({ event, toggler, drawer });
    });
    window.addEventListener('scroll', (event) => {
      this._toggleHeader(event, header);
    });
    const navigationLink = drawer.navigation.querySelectorAll('a');
    navigationLink.forEach((navlink) => {
      navlink.addEventListener('click', (event) => {
        this._toggleDrawer({ event, toggler, drawer });
      });
    });
  },
  _toggleDrawer({ event, toggler, drawer }) {
    event.stopPropagation();
    toggler.classList.toggle('nav__toggle--active');
    drawer.navigation.classList.toggle('nav--active');
    drawer.blur.classList.toggle('blur--active');
  },
  // scroll effect header
  _toggleHeader(event, header) {
    event.stopPropagation();
    const position = window.pageYOffset;
    if (position > 50) {
      header.classList.add('header--active');
    } else {
      header.classList.remove('header--active');
    }
  },
};

export default Initiator;
