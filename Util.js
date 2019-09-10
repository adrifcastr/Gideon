class Util {
    constructor() {
        throw new Error("This class cannot be instantiated!");
    }

    /**
     * @summary An overly complicated and low-level method for parsing episode stuff
     * @param {string} input 
     */
    static ParseEpisodeId(input) {
        if (!input) return null;
        
        let str = input.toLowerCase();
        let s = "", e = "";
        let hit_limiter = false;
    
        for (let letter of str) {
            if (letter == "s") continue;
    
            if (letter == "e" || letter == "x") {
                hit_limiter = true;
                continue;
            }
    
            if (!(/^\d+$/.test(letter))) continue;
    
            if (!hit_limiter) s += letter;
            else e += letter;
        }
    
        let s_num = Number(s);
        let e_num = Number(e);
    
        if (isNaN(s_num) || isNaN(e_num)) return null;
    
        return "S" + (s_num < 10 ? "0" + s_num : s_num) + "E" + (e_num < 10 ? "0" + e_num : e_num);
    }

    //more methods to come
}

module.exports = Util;