class SmartSets {
    constructor(){
        var _smartSet = [];
        for(var i = 0; i<100; i++){
            _smartSet[i] = [];
        }
    }

    add(value){
        let numOfOnes = 0;
        let valueToAdd = value;
        while(value>0){
            if(value%2!==0){
                numOfOnes++;
            }
            value>>>1
        }
        _smartSet[numOfOnes].push(valueToAdd);
    }

    read(indexOfOnes=null){
        if(!!indexOfOnes){
            return _smartSet[indexOfOnes];
        } else {
            return _smartSet;
        }
    }

    readMin(indexOfOnes){
        return Math.min(..._smartSet[indexOfOnes]);
    }
}

class SmartestSet {
    constructor(nums) {
        console.log('This is running');
        const _smartSets = new SmartSets();
        for (var num of nums){
            console.log('num', num);
            _smartSets.add(num);
        }
    }

    getSmartestSet(){
        const setsLength = smartSets.read().length;
        let smartestSetToReturn =  [];
        for (var i = 0; i < setsLength; i++){
            if(_smartSets.read(i).length){
                smartestSetToReturn.push(_smartSets.readMin(i));
            }
        }
    }
}








const obj = new SmartestSet([6,2,1,11,1,9,14,13,4,18]);
console.log(obj.getSmartestSet());