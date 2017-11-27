import MobileNav from '../components/MobileNav';

// import Home from '../content/Home';
import BasicDragging from '../content/Draggable/BasicDragging';
import SimpleList from '../content/Sortable/SimpleList';
import MultipleContainers from '../content/Sortable/MultipleContainers';
import FloatedLayout from '../content/Swappable/FloatedLayout';
import GridLayout from '../content/Swappable/GridLayout';
import SwapAnimation from '../content/Plugins/SwapAnimation';

const navActivator = document.getElementById('MobileNavActivator');

if (navActivator) {
  const mobileNav = new MobileNav(navActivator); // eslint-disable-line no-unused-vars
}

// Initialize all examples
// Home();
BasicDragging();
SimpleList();
MultipleContainers();
FloatedLayout();
SwapAnimation();
GridLayout();
