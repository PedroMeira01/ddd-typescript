import Product from "../../Domain/Entity/product";
import ProductRepositoryInterface from "../../Domain/Repository/product-repository.interface";
import ProductModel from "../Persistence/Sequelize/Model/product.model";

export default class ProductRepository implements ProductRepositoryInterface {
    
    async create(entity: Product): Promise<void> {
        await ProductModel.create({
            id: entity.id,
            name: entity.name,
            price: entity.price,
        });
    }

    async update(entity: Product): Promise<void> {
        await ProductModel.update(
            {
                name: entity.name,
                price: entity.price,
            },
            {
                where: {
                    id: entity.id,
                },
            }
        );
    }

    async find(id: string): Promise<Product> {
        const productModel = await ProductModel.findOne({ where: { id } });
        return new Product(productModel.id, productModel.name, productModel.price);
    }

    async findAll(): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }
}