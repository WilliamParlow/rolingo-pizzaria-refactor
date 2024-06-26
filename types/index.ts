interface Dessert {
    id: number;
    name: string;
    recipe: string;
    ingredient: string;
    description: string;
    imageUrl: string | null;
}

interface Dessert {
    id: number;
    name: string;
    recipe: string;
    ingredient: string;
    description: string;
    imageUrl: string | null;
}

type Pizza = {
    id: number;
    name: string;
    recipe: string;
    ingredient: string;
    description: string;
    imageUrl: string | null;
};

interface User {
    id: number;
    name: string;
    login: string;
    passwd: string;
    admin: boolean;
    blocked: boolean;
}