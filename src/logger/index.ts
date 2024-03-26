export interface ILogger {
  log(message: string | any): void;
}

export class LoggerFactory {
  public static _logger: ILogger;
  public static getInstance(): ILogger {
    if (!this._logger) this._logger = new ConsoleLogger();

    return this._logger;
  }
}

export class ConsoleLogger implements ILogger {
  log(message: any): void {
    console.log(message);
  }
}


