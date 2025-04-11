function lemonadeChange(bills: number[]): boolean {
    let fiveBillsCount : number = 0;
    let tenBillsCount : number = 0;

    if(bills[0] != 5)
        return false;
    
    for(const bill of bills) {
        if(bill == 5) {
            fiveBillsCount++;
            continue;
        }
            
        if(bill == 10) {
            if(fiveBillsCount < 1)
                return false;
            tenBillsCount++;
            fiveBillsCount--;
            continue;
        }
        
        // bill === 20
        if(fiveBillsCount > 0 && tenBillsCount > 0) {
                fiveBillsCount--;
                tenBillsCount--;
                continue;
        }

        if(fiveBillsCount > 2) {
             fiveBillsCount -= 3;
             continue;
        }

        return false;
    }

    return true;

};