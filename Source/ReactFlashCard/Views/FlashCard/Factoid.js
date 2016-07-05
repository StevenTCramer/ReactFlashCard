var FactoidType;
(function (FactoidType) {
    FactoidType[FactoidType["Text"] = 0] = "Text";
    FactoidType[FactoidType["Unicode"] = 1] = "Unicode";
    FactoidType[FactoidType["Audio"] = 2] = "Audio";
    FactoidType[FactoidType["Image"] = 3] = "Image";
    FactoidType[FactoidType["Video"] = 4] = "Video";
})(FactoidType || (FactoidType = {}));
class FactoidEvaluator {
    constructor(aFactoid) {
        this.evaluate = () => {
            return false;
        };
    }
}
//# sourceMappingURL=Factoid.js.map