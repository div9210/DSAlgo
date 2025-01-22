/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function (formula) {
    let n = formula.length;
    let st = [];
    let i = 0;
    let composition = {};
    while (i < n) {
        let ch = formula[i];
        if (ch != ")") {
            if (ch == "(") {
                st.push(ch);
                i++;
            } else if (ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90) {
                let element = ch;
                i++;
                if (i < n && formula[i].charCodeAt(0) >= 97 && formula[i].charCodeAt(0) <= 122) {
                    element += formula[i];
                    i++;
                }
                let count = 1;
                if (i < n && !isNaN(formula[i])) {
                    count = Number(formula[i]);
                    i++;
                }

                if (composition[element] == undefined) composition[element] = 0;
                composition[element] += count;
                st.push({ element, count });
            }
        }
        else {
            // If it's a closing bracket
            i++;
            let multiple = Number(formula[i]);
            while (st[st.length - 1] != "(") {
                let stEl = st.pop();
                let { element, count } = stEl;
                let newCount = (multiple - 1) * count;
                composition[element] += newCount;
            }

            // Remove the opening bracket
            st.pop();

            i++;
        }
    }

    console.log(composition);
};

let formula = "K4(ON(SO3)2)2";
countOfAtoms(formula);