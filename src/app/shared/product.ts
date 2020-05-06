export class Product {
    productId: string;
    productName: string;
    productPrice: number;

    constructor() {
        this.productId = null;
        this.productName = null;
        this.productPrice = null;
    }

    static get getProducts(): Product[] {
        const products = [
            { productId: '1', productName: 'Apple', productPrice: 1400 },
            { productId: '2', productName: 'Mouse', productPrice: 2000 },
            { productId: '3', productName: 'Keybaord', productPrice: 40000},
            { productId: '4', productName: 'Printer', productPrice: 5000 },
            { productId: '5', productName: 'iPhone 11', productPrice: 6000 },
            { productId: '6', productName: 'HP Laptop', productPrice: 2434 },
            { productId: '7', productName: 'Sony', productPrice: 2423423 },
            { productId: '8', productName: 'Galaxy S10e', productPrice: 1234 },
						{ productId: '9', productName: 'Screengaurd', productPrice: 2343 },
						{ productId: '10', productName: 'iPhone 11', productPrice: 343 },
            { productId: '11', productName: 'HP Laptop', productPrice: 300 },
            { productId: '12', productName: 'Sony', productPrice: 100},
        ] as Product[];
        return products;
    }
}
