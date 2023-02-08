class TimeMap {
    constructor() {
        this.map = new Map();
    }

    set(key, value, timestamp) {
        if (!this.map.has(key)) {
            this.map.set(key, []);
        }
        let data = this.map.get(key);
        data.push([timestamp, value]);
    };

    get(key, timestamp) {
        if (this.map.has(key)) {
            let data = this.map.get(key);
            let l = 0;
            let r = data.length - 1;
            let result = '';
            while (l <= r) {
                let mid = l + Math.floor((r - l) / 2);
                if (data[mid][0] <= timestamp) {
                    result = data[mid][1];
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }
            return result;
        }
        return '';
    };
}

/*LEARNING
    1. use map.has() don't use | 0
    2. if you get an array back from get you can change the array and you don't need it to set it back as it is a reference type
    3. If we have ordered valued and we need to get value back always use binary search as it is O (log(n))
*/