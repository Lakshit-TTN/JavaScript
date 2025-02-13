const PI = 3.14;
function areaOfCircle(radius) {
    return PI * radius * radius;
}
function areaOfRectangle(length, width) {
    return length * width;
}
function areaOfCylinder(radius, height) {
    return 2 * PI * radius * (radius + height);
}
function filterUniqueArrayElements(arr) {
    const uniqueEle = new Set(arr);
    console.log(Array.from(uniqueEle));
}

export default {
    PI,
    areaOfCircle,
    areaOfRectangle,
    areaOfCylinder,
    filterUniqueArrayElements
}