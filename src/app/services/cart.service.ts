import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private totalItems: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    public cartItems: any[] = [];
    public totalAmount: number = 0;
    public products: any[] = [
        {
            "id": 1,
            "title": "Color:Blue Width:17.02cm Storage:128GB",
            "brand": "Apple 13 ProMax",
            "price": 129999,
            "image": "apple13promax.jpg"
        },
        {
            "id": 2,
            "title": "Color:Grey Width:17.02cm Storage:128GB",
            "brand": "Apple 12 ProMax",
            "price": 119999,
            "image": "apple12promax.jpg"
        },

        {
            "id": 3,
            "title": "Color:Pink Width:15.49cm Storage:128GB",
            "brand": "Apple IPhone SE",
            "price": 48999,
            "image": "appleSE.jpg"
        },
        {
            "id": 4,
            "title": "Color:green Width:17.02cm Storage:256GB",
            "brand": "OnePlus 10 Pro",
            "price": 66999,
            "image": "oneplus10.jpg"
        },
        {
            "id": 5,
            "title": "Color:radiant Width:17.8cm Storage:256GB",
            "brand": "OnePlus 9RT",
            "price": 46999,
            "image": "oneplus9rt.jpg"

        },

        {
            "id": 6,
            "title": "Color:blue Width:16.8cm Storage:256GB",
            "brand": "OnePlus Nord CE",
            "price": 24999,
            "image": "oneplusce.jpg"
        },
        {
            "id": 7,
            "title": "Color:White Width:16.5cm Storage:64GB",
            "brand": "Oppo A5",
            "price": 16999,
            "image": "oppoa5.jpg"
        },
        {
            "id": 8,
            "title": "Color:Blue Width:16.5cm Storage:32GB",
            "brand": "Oppo A33",
            "price": 11999,
            "image": "oppoa33.jpg"
        },

        {
            "id": 9,
            "title": "Color:Black Width:16.75cm Storage:64GB",
            "brand": "Oppo A7 Pro",
            "price": 16999,
            "image": "oppoa7.jpg"
        },
        {
            "id": 10,
            "title": "Color:white Width:16.02cm Storage:128B",
            "brand": "Samsung M32",
            "price": 14999,
            "image": "samsungm32.jpg"
        },
        {
            "id": 11,
            "title": "Color:black Width:17.8cm Storage:32GB",
            "brand": "Samsung A53",
            "price": 34999,
            "image": "samsunga53.jpg"
        },
        {
            "id": 12,
            "title": "Color:blue Width:16.8cm Storage:64GB",
            "brand": "Samsung A32",
            "price": 22999,
            "image": "samsunga32.jpg"
        }

    ];
    get applePhones() {
        return this.products.filter(product => product.brand.includes('Apple'));
    }
    get onePlusPhones() {
        return this.products.filter(product => product.brand.includes('OnePlus'));
    }
    get samsungPhones() {
        return this.products.filter(product => product.brand.includes('Samsung'));
    }
    get oppoPhones() {
        return this.products.filter(product => product.brand.includes('Oppo'));
    }

    getCartItems() {
        return this.totalItems.asObservable();
    }

    updateCartItems(item: any, action: string = 'add') {
        if (item) {
            let itemExists = this.cartItems.find(cartItem => cartItem.id === item.id);
            if (!itemExists) {
                itemExists = { ...item, quantity: 0 };
                this.cartItems.push({ ...item, quantity: action == "add" ? itemExists.quantity + 1 : itemExists.quantity - 1 });
            } else if (itemExists?.quantity == 1 && action == "remove") {
                this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
            } else {
                this.cartItems.map(cartItem => {
                    if (cartItem.id === item.id) {
                        cartItem.quantity = action == "add" ? itemExists.quantity + 1 : itemExists.quantity - 1;
                    }
                });
            }
            this.totalAmount = this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        }
        console.log(this.cartItems)
        this.totalItems.next(item);
    }
}