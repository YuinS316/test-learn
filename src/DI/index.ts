// import { readFileSync } from "fs";

export interface FileReaderImpl {
  readFileSync(path: string, options: any): string;
}

export function fileRead(path: string, fileReader: FileReaderImpl): string {
  const content = fileReader.readFileSync(path, { encoding: "utf-8" });
  return content + "=> test";
}

export class FileRead {
  // constructor(public filerReader: FileReaderImpl) {}

  private _fileReader: FileReaderImpl;

  public fileReader(value: FileReaderImpl) {
    this._fileReader = value;
  }

  fileRead(path: string) {
    return this._fileReader.readFileSync(path, {}) + "=> test";
  }
}
