enum Airplane {
    Boeing = 747,
    Airbus = 380,
    Embraer = 190
}

let airplane: Airplane = Airplane.Airbus;   // 380
console.log(airplane);                      // 380

let airplaneName: string = Airplane[380];   // Airbus
console.log(airplaneName);                  // Airbus

let airplaneValue: number = Airplane['Airbus']; // 380
console.log(airplaneValue);                     // 380

//-------------

enum BankAccount {
    Savings = 100,
    Current = 200,
    Fixed
}

let account: BankAccount = BankAccount.Savings;
console.log(account);                        // 100

account = BankAccount.Current;
console.log(account);                        // 200

account = BankAccount.Fixed;
console.log(account);                        // 201

//------------ 
enum Color {
    Red = 1,
    Green,
    Blue
}

let color: Color = Color.Green;
console.log(color);                          // 2


//-------------------- Enum -------------------- 

enum Direction { // Default values are 0, 1, 2, 3
    North,
    South,
    East,
    West
}

function move(direction: Direction) {
    switch (direction) {
        case Direction.North:
            console.log("Moving North");
            break;
        case Direction.South:
            console.log("Moving South");
            break;
        case Direction.East:
            console.log("Moving East");
            break;
        case Direction.West:
            console.log("Moving West");
            break;
        default:
            console.log("Unknown direction");
    }
}

move(Direction.North);  // Moving North
move(Direction.West);   // Moving West

//-----------heterogeneous enum----------------   
//it’s also possible to create heterogeneous enums, which mix numeric and string values, though this is not a common practice. It can be useful in specific cases where you need both types.

enum Status {
    Active = 'ACTIVE',
    Inactive = 1
}

let stat: Status = Status.Active;
console.log(stat);                        // ACTIVE