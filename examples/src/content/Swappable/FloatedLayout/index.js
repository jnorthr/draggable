import {Swappable} from '../../../scripts/vendor/draggable';

export default function FloatedLayout() {
  const containerSelector = '.Example--pageFloat';
  const containers = document.querySelectorAll(containerSelector);
  const draggable = new Swappable(containers, {
    draggable: '.Block--isDraggable',
    appendTo: source => source.parentNode,
  });

  // --- Drag states --- //
  draggable.on('drag:start', evt => {
    evt.originalSource.classList.add('Block--isCloned');
    console.log('Drag: Start', evt); // eslint-disable-line no-console
  });

  // doesn't actually work... consult with Max
  /*
  draggable.on('swappable:swapped', ({dragEvent, swappedElement}) => {
    const mirror = dragEvent.data.mirror;
    const swappedHeight = swappedElement.offsetHeight;

    mirror.style.height = `${swappedHeight}px`;
  });
*/

  draggable.on('drag:stop', evt => {
    evt.originalSource.classList.remove('Block--isCloned');
    console.log('Drag: Stop', evt); // eslint-disable-line no-console
  });

  return draggable;
}
