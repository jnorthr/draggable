import {Draggable} from '../../../scripts/vendor/draggable';

export default function BasicDragging() {
  const containers = document.querySelectorAll('.PillSwitch');
  const draggable = new Draggable(containers, {
    draggable: '.PillSwitchControl',
    // droppable: '.PillSwitchDropzone',
    appendTo: source => source.parentNode,
    // plugins: [Plugins.Snappable],
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
