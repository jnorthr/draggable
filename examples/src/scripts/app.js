import MobileNav from '../components/MobileNav';

import Home from '../content/Home';
import FloatedLayout from '../content/Swappable/FloatedLayout';
import GridLayout from '../content/Swappable/GridLayout';

const navActivator = document.getElementById('MobileNavActivator');

if (navActivator) {
  const mobileNav = new MobileNav(navActivator); // eslint-disable-line no-unused-vars
}

// Initialize all examples
Home();
FloatedLayout();
GridLayout();
