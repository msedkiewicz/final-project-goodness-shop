import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getAll(): Promise<import("./product.interface").Product[]>;
    getById(id: string): Promise<import("./product.interface").Product>;
}
