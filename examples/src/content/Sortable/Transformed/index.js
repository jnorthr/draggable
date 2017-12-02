import {Sortable} from '../../../scripts/vendor/draggable';

export default function Transformed() {
  const containerSelector = '.Transformed';
  const containers = document.querySelectorAll(containerSelector);
  const sortable = new Sortable(containers, {
    draggable: '.TransformedListItem--isDraggable',
    appendTo: containerSelector,
  });

  // --- Drag states --- //
  sortable.on('drag:start', evt => {
    evt.originalSource.classList.add('TransformedListItem--isCloned');
    console.log('Drag: Start', evt); // eslint-disable-line no-console
  });

  sortable.on('drag:stop', evt => {
    evt.originalSource.classList.remove('TransformedListItem--isCloned');
    console.log('Drag: Stop', evt); // eslint-disable-line no-console
  });

  return sortable;
}
