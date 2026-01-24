/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function (code, businessLine, isActive) {
    const businessOrder = ["electronics", "grocery", "pharmacy", "restaurant"];
    const businessSet = new Set(businessOrder);
    const validCodeRegex = /^[a-zA-Z0-9_]+$/;

    let res = [];

    for (let i = 0; i < code.length; i++) {
        if (
            validCodeRegex.test(code[i]) &&
            businessSet.has(businessLine[i]) &&
            isActive[i]
        ) {
            res.push({ code: code[i], business: businessLine[i] });
        }
    }

res.sort((a, b) => {
    const orderA = businessOrder.indexOf(a.business);
    const orderB = businessOrder.indexOf(b.business);

    if (orderA !== orderB) return orderA - orderB;

    if (a.code < b.code) return -1;
    if (a.code > b.code) return 1;
    return 0;
});

    return res.map(item => item.code);
};
