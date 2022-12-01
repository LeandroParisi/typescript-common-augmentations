export default class DevelopmentError extends Error {
    errorHappenedIn : string
    /**
     *
     */
    constructor(msg: string, errorHappenedIn : string) {
      super(msg)
      this.errorHappenedIn = errorHappenedIn
    }
  }
  