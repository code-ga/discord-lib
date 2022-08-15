import { EventEmitter } from "events";

abstract class BaseClient extends EventEmitter {
  constructor() {
    super({ captureRejections: true });
  }
  abstract login(token: string): Promise<string>;
}

export default BaseClient;
