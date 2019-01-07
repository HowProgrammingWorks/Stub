'use strict';

class EventEmitter {
  on() {}
  emit() {}
}

const ee = new EventEmitter();

ee.on('eventName', data => {
  console.dir({ data });
});

ee.emit('eventName', 'data');
