export default function costCalculation(cart = []) {
    let total = 0;
    cart.map((c) => (total += c.quantity * c.price));
    return total
}
