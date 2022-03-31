/**
 * 这2个数组int32View和int16View都是同一数据的以不同格式展示出来的视图
 */
var buffer = new ArrayBuffer(16)
var int32View = new Int32Array(buffer);
console.log('int32View.length', int32View.length)
for (var i = 0; i < int32View.length; i++) {
    int32View[i] = i * 2;
}
console.log('int32View', int32View)

var int16View = new Int16Array(buffer);
for (var i = 0; i < int16View.length; i++) {
    console.log("Entry " + i + ": " + int16View[i]);
}

int16View[0] = 32;
console.log('int32View', int32View)

//转换为数组
console.log(Array.from(int32View))

var indexes = new Uint16Array([
    // 0对应第1个顶点位置数据、第1个顶点法向量数据
    // 1对应第2个顶点位置数据、第2个顶点法向量数据
    // 索引值3个为一组，表示一个三角形的3个顶点
    0, 1, 2,
    0, 2, 3,
])
console.log('indexes', indexes)