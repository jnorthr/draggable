import {Swappable} from '../../../scripts/vendor/draggable';

export default function GridLayout() {
  const containerSelector = '.GridLayout';
  const containers = document.querySelectorAll(containerSelector);
  const draggable = new Swappable(containers, {
    draggable: '.Block--isDraggable',
    appendTo: containerSelector,
  });

  // --- Drag states --- //
  draggable.on('drag:start', evt => {
    console.log('Drag: Start', evt); // eslint-disable-line no-console
  });

  draggable.on('drag:stop', evt => {
    console.log('Drag: Stop', evt); // eslint-disable-line no-console
  });

  return draggable;
}
