function maxArea(height: number[]): number {
    let i = 0;
    let j = height.length - 1;
    let result = 0;

    while(i < j) {
        let areaCalculation = (j - i) * Math.min(height[i], height[j]);
        result = Math.max(result, areaCalculation)

        if(height[i] > height[j]) {
            j--;        
        }
        else {
            i++;
        }
    }

    return result;

};