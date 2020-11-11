// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.map = {};
  }
  // Register an event handler
  on(eventName, callback) {
    if (!this.map[eventName]) {
      this.map[eventName] = [callback];
    } else {
      this.map[eventName].push(callback);
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.map[eventName]) {
      for (const cb of this.map[eventName]) {
        cb();
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.map[eventName];
  }
}

module.exports = Events;
