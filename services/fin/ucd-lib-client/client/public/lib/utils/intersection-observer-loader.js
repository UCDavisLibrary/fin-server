class IntersectionObserverLoader {
  async load() {
    if( window.IntersectionObserver ) return true;

    if ( this.loaded ) return true;

    if ( this.loading ) {
      await this.loading;
      return this.loaded;
    }

    this.loading = new Promise(async (resolve, reject) => {
      await import(/* webpackChunkName: "observer-polyfill" */ 'intersection-observer');
      resolve(true);
    });

    return this.loading;
  }
}

export default new IntersectionObserverLoader();