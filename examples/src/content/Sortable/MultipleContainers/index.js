import {Sortable} from '../../../scripts/vendor/draggable';

export default function MultipleContainers() {
  const containerSelector = '.MultipleContainers .Container';
  const containers = document.querySelectorAll(containerSelector);
  const draggable = new Sortable(containers, {
    draggable: '.StackedListItem--isDraggable',
    appendTo: '.MultipleContainers',
  });

  // --- Drag states --- //
  draggable.on('drag:start', evt => {
    evt.originalSource.classList.add('StackedListItem--isCloned');
    console.log('Drag: Start', evt); // eslint-disable-line no-console
  });

  draggable.on('drag:stop', evt => {
    evt.originalSource.classList.remove('StackedListItem--isCloned');
    console.log('Drag: Stop', evt); // eslint-disable-line no-console
  });

  return draggable;
}
