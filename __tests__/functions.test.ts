import {
  sumOfArray,
  asyncSumOfArray,
  asyncSumOfArraySometimesZero,
  getFirstNameThrowIfLong,
} from "../functions";
import { DatabaseMock } from "../util/index";
import { NameApiService } from "../nameApiService";

describe("sumOfArray", () => {
  test("pass [1, 1], it returns 2", () => {
    expect(sumOfArray([1, 1])).toBe(2);
  });

  test("pass [1, 2, 3], it returns 6", () => {
    expect(sumOfArray([1, 2, 3])).toBe(6);
  });

  test("pass [], it throws error", () => {
    expect(() => sumOfArray([])).toThrow(TypeError);
  });
});

describe("asyncSumOfArray", () => {
  test("pass [1, 1], it returns 2", async () => {
    const data = await asyncSumOfArray([1, 1]);
    expect(data).toBe(2);
  });

  test("pass [1, 2, 3], it returns 6", async () => {
    const data = await asyncSumOfArray([1, 2, 3]);
    expect(data).toBe(6);
  });

  test("pass [], it throws error", async () => {
    await expect(() => asyncSumOfArray([])).rejects.toThrow(TypeError);
  });
});

describe("asyncSumOfArraySometimesZero", () => {
  test("DatabaseMock does not throw Error", async () => {
    const database = new DatabaseMock();
    const saveMock = jest.spyOn(database, "save").mockImplementation(() => {});

    const data = await asyncSumOfArraySometimesZero([1, 1], database);
    expect(data).toBe(2);
    expect(saveMock).toBeCalledTimes(1);
  });

  test("DatabaseMock throws Error", async () => {
    const database = new DatabaseMock();
    const saveMock = jest.spyOn(database, "save").mockImplementation(() => {
      throw new Error("fail!");
    });

    const data = await asyncSumOfArraySometimesZero([1, 1], database);
    expect(data).toBe(0);
    expect(saveMock).toBeCalledTimes(1);
  });
});

describe("getFirstNameThrowIfLong", () => {
  test("resolved: api response is smaller than equal NameApiService's max length and getFirstNameThrowIfLong's max length", async () => {
    const nameApiService = new NameApiService();
    const apiResponse = "1234";
    const getFirstNameMock = jest
      .spyOn(nameApiService, "getFirstName")
      .mockResolvedValue(apiResponse);

    const data = await getFirstNameThrowIfLong(4, nameApiService);
    expect(data).toBe(apiResponse);
    expect(getFirstNameMock).toBeCalledTimes(1);
  });

  test("rejected: api response is smaller than equal NameApiService's max length but bigger getFirstNameThrowIfLong's max length", async () => {
    const nameApiService = new NameApiService();
    const apiResponse = "1234";
    const getFirstNameMock = jest
      .spyOn(nameApiService, "getFirstName")
      .mockResolvedValue(apiResponse);

    await expect(() =>
      getFirstNameThrowIfLong(3, nameApiService)
    ).rejects.toThrow(/^first_name too long$/);
    expect(getFirstNameMock).toBeCalledTimes(1);
  });

  test("rejected: api response is bigger than NameApiService's max length", async () => {
    const nameApiService = new NameApiService();
    const getFirstNameMock = jest
      .spyOn(nameApiService, "getFirstName")
      .mockImplementation(() => {
        throw new Error("firstName is too long!");
      });

    await expect(() =>
      getFirstNameThrowIfLong(4, nameApiService)
    ).rejects.toThrow(/^firstName is too long!$/);
    expect(getFirstNameMock).toBeCalledTimes(1);
  });
});
