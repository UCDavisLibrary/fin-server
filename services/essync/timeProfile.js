
class TimeProfile {

  constructor() {
    this.enabled = false;
    this.profiles = {};
    this.log = [];
  }

  profileStart(id) {
    if( this.enabled ) return;
    if( !this.profiles[id] ) this.profiles[id] = [];
    this.profiles[id].push(Date.now());
  }

  profileEnd(id) {
    if( this.enabled ) return;
    let index = this.profiles[id].length-1;
    let startTime = this.profiles[id][index];
    this.profiles[id][index] = Date.now() - this.profiles[id][index];
  }

  print() {
    console.log('\n**** Time Profile');
    console.log('* Event Details *');
    for( var key in this.profiles ) {
      this._print(key, this.profiles[key]);
    }
    console.log('* Time Logs *');
    this.log.forEach(item => console.log(item));
    console.log('******\n');
  }

  _print(id, values) {
    let min = Number.MAX_VALUE, max = 0, avg = 0;
    values.forEach(val => {
      if( val < min ) min = val;
      if( val > max ) max = val;
      avg += val;
    });
    avg = Math.floor(avg / values.length);  
    console.log(id, `min=${min}ms`, `max=${max}ms`, `avg=${avg}ms`)
  }

}

module.exports = new TimeProfile();