import { BookCollection } from "./BookCollection";
import { getRandomValues } from "crypto";

const getAveragePrice = (title: string, country: string): number => {
    const price = 12;
    return price;
};

class BookCollectionAdvanced extends BookCollection {
    getBookPrice(title: string, country: string): number {
        return getAveragePrice(title, country);
    };
};

export { getAveragePrice, BookCollectionAdvanced };
