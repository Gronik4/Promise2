export default class GameSaving {
  constructor(dat) {
    const { created, id, userInfo } = dat;
    this.created = created;
    this.id = id;
    this.userInfo = userInfo;
  }
}
