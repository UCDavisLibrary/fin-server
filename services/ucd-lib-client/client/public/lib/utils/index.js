
class Utils {

  getYearFromDate(date) {
    if( !date ) return '';
    date = date+'';

    date = date.match(/^(\d{4})/);
    if( !date ) return '';
    return date[0];
  }

  /**
   * @method asArray
   * @description given a record object, return a key as an array.
   * If the key doesn't exist, the array will be empty.  Singletons will
   * be converted to single item arrays and keys that are already arrays
   * will be return as is.
   * 
   * @param {Object} item most likely a JSON-LD record
   * @param {String} key key/attribute to access in item/record
   * 
   * @return {Array}
   */
  asArray(item = {}, key) {
    let value = item[key] || [];
    return Array.isArray(value) ? value : [value];
  }
}

module.exports = new Utils();