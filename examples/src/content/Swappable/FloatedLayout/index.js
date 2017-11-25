import {Swappable} from '../../../scripts/vendor/draggable';

export default function FloatedLayout() {
  const containers = document.querySelectorAll('.FloatedLayout');
  const draggable = new Swappable(containers, {
    draggable: '.Block--isDraggable',
    appendTo: source => source.parentNode,
    // placedTimeout: 3000,
    classes: {
      'source:placed': '', // doesn't work
    },
  });

  // EXPERIMENT WITH MANAGING THE PLACED CLASS MYSELF

  // --- Drag states --- //
  draggable.on('drag:start', evt => {
    // MAX WILL UPDATE THE LIB TO HAVE A NEW CLASS I CAN HOOK INTO
    evt.originalSource.classList.add('Block--isCloned');
    console.log('Drag: Start', evt); // eslint-disable-line no-console
  });

  /*
  // doesn't actually work... consult with Max
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
