interface Point {
    x: number;
    y: number;
}

interface LabeledPoint extends Point {
    label: string;
}

const point: LabeledPoint = {
    x: 10,
    y: 20,
    label: "A"
};

function printPoint(p: Point): void {
    console.log(`Point(${p.x}, ${p.y})`);
}

printPoint(point);
// Point(10, 20)