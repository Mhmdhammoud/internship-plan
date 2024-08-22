class Order {
  tvs = [];
  totalPrice = 0;
  createdAt = new Date();
  userFullName = '';

  constructor(props) {
    this.tvs = props.tvs;
    this.totalPrice = props.tvs.reduce((acc, tv) => acc + tv.price, 0);
    this.userFullName = props.userFullName;
  }

  getTotalPrice() {
    return this.totalPrice;
  }
}

module.exports = Order;
