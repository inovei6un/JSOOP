function solve(input, sort) {
    debugger
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let arr = [];
    for (const intel of input) {
        let [destination, price, availability] = intel.split('|');
        arr.push(new Ticket(destination, Number(price), availability));
    }

    switch (sort) {
        case 'destination':
            arr.sort(function(a, b) {
                if (a.destination < b.destination) {
                    return -1;
                }
                if (a.destination > b.destination) {
                    return 1;
                }
                return 0;
            })

            break;
        case 'price':
            arr.sort();
            break;
        case 'status':
            arr.sort(function(a,b) {
                if (a.status < b.status) {
                    return -1;
                }

                if (a.status > b.status) {
                    return 1;
                }

                return 0;
            })
            default:
                break;
    }
    return arr
}


solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination')