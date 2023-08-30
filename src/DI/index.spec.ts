import { it, expect, describe } from "vitest";
import { FileReaderImpl, fileRead } from "./index";

describe("DI", () => {
  it("read and process file", () => {
    class FileReader implements FileReaderImpl {
      readFileSync(path: string, options: any): string {
        return "test";
      }
    }

    expect(fileRead("any", new FileReader())).toBe("test=> test");
  });
});
