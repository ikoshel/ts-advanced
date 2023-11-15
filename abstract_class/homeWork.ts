interface IPrintable {
    print(): void;
}

abstract class Shape {
    readonly name: string;
    readonly color: string;

    protected constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }

    abstract calculateArea(): number;
}

class Circle extends Shape {
    radius: number;

    constructor(name: string, color: string, radius: number) {
        super(name, color);
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Rectangle extends Shape implements IPrintable {
    width: number;
    height: number;

    constructor(name: string, color: string, width: number, height: number) {
        super(name, color);
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    print(): void {
        console.log(`Rectangle Area = width * height`);
    }
}

class Square extends Rectangle implements IPrintable {

    constructor(name: string, color: string, side: number) {
        super(name, color, side, side);
    }

    print(): void {
        console.log(`Square Area = side * side`);
    }
}

class Triangle extends Shape {
    base: number;
    height: number;

    constructor(name: string, color: string, base: number, height: number) {
        super(name, color);
        this.base = base;
        this.height = height;
    }

    calculateArea(): number {
        return 0.5 * this.base * this.height;
    }
}