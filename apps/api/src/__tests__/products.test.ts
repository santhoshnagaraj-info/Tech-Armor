import request from "supertest";
import { createApp } from "../app";
import * as productService from "../modules/products/product.service";
import { HttpStatus } from "../constants/httpStatusCodes";

// Mock the product service layer
jest.mock("../modules/products/product.service");
const mockedProductService = productService as jest.Mocked<typeof productService>;

describe("Products API Integration Tests", () => {
  const app = createApp();

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("GET /api/products", () => {
    it("should return 200 with an empty array when no products are found", async () => {
      mockedProductService.getProducts.mockResolvedValueOnce([]);

      const response = await request(app).get("/api/products");

      expect(response.status).toBe(HttpStatus.OK);
      expect(response.body).toEqual({
        success: true,
        message: "Products retrieved successfully",
        data: [],
      });
    });

    it("should return 200 with products list", async () => {
      const mockProduct = {
        _id: "64abc0000000000000000001",
        name: "Test Case",
        category: {
          _id: "64cat0000000000000000001",
          name: "Cases",
          slug: "cases",
        },
        description: "Test description for case",
        image: "https://example.com/test.jpg",
        price: 29.99,
        brand: "TestBrand",
        rating: 4.5,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      mockedProductService.getProducts.mockResolvedValueOnce([mockProduct as any]);

      const response = await request(app).get("/api/products");

      expect(response.status).toBe(HttpStatus.OK);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveLength(1);
      expect(response.body.data[0].name).toBe("Test Case");
    });
  });

  describe("GET /api/products/:id", () => {
    it("should return 400 when invalid ObjectId is passed", async () => {
      const response = await request(app).get("/api/products/invalid-id");

      expect(response.status).toBe(HttpStatus.BAD_REQUEST);
      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe("Invalid URL parameters");
    });
  });

  describe("POST /api/products", () => {
    it("should return 400 when body fails Zod schema validation", async () => {
      const response = await request(app).post("/api/products").send({
        name: "A", // too short
      });

      expect(response.status).toBe(HttpStatus.BAD_REQUEST);
      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe("Invalid request body");
      expect(response.body.errors).toBeDefined();
    });

    it("should return 201 when valid product payload is provided", async () => {
      const payload = {
        name: "Ultra Case",
        category: "64abc0000000000000000002",
        description: "High durability phone case",
        image: "https://example.com/ultra.jpg",
        price: 39.99,
        brand: "ArmorTech",
        rating: 5,
      };

      mockedProductService.createProduct.mockResolvedValueOnce({
        _id: "64abc0000000000000000003",
        ...payload,
      } as any);

      const response = await request(app).post("/api/products").send(payload);

      expect(response.status).toBe(HttpStatus.CREATED);
      expect(response.body.success).toBe(true);
      expect(response.body.data.name).toBe("Ultra Case");
    });
  });

  describe("GET /api/health", () => {
    it("should return 200 health status", async () => {
      const response = await request(app).get("/api/health");

      expect(response.status).toBe(HttpStatus.OK);
      expect(response.body.success).toBe(true);
      expect(response.body.data.status).toBe("healthy");
    });
  });
});
