class VideoLibLoader {
  async load() {
    if ( this.loaded ) return this.loaded;

    if ( this.loading ) {
      await this.loading;
      return this.loaded;
    }

    this.loading = new Promise(async (resolve, reject) => {
      const plyr         = ( await import(/* webpackChunkName: "video-libs" */ 'plyr') ).default;
      const shaka_player = await import(/* webpackChunkName: "video-libs" */ 'shaka-player');
      
      this.loaded = {
        plyr,
        shaka_player
      }

      resolve(this.loaded);
    });

    return this.loading;
  }
}

export default new VideoLibLoader();