import axios from "axios";
import { NameApiService } from "../nameApiService";

jest.mock("axios");

describe("NameApiService", () => {
  test("resolved: api response is smaller than equal NameApiService's max length", async () => {
    const axiosMock = axios as jest.Mocked<typeof axios>;
    axiosMock.get.mockResolvedValue({ data: { first_name: "1234" } });

    const nameApiService = new NameApiService();
    const data = await nameApiService.getFirstName();
    expect(data).toBe("1234");
  });

  test("rejected: api response is bigger than NameApiService's max length", async () => {
    const axiosMock = axios as jest.Mocked<typeof axios>;
    axiosMock.get.mockResolvedValue({ data: { first_name: "12345" } });

    const nameApiService = new NameApiService();
    await expect(() => nameApiService.getFirstName()).rejects.toThrow(
      /^firstName is too long!$/
    );
  });
});
