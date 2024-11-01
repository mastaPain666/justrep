let g = 9.8;
function calculateFallDistance(time) {
    var distance = 0.5*g*time**2;
    return distance;
}
export {calculateFallDistance};
