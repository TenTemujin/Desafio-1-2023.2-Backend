function checkCashRegister(price, cash, cid) {
    const register = {
      PENNY: 0.01,
      NICKEL: 0.05,
      DIME: 0.1,
      QUARTER: 0.25,
      DOLLAR: 1,
      FIVE: 5,
      TEN: 10,
      TWENTY: 20,
      "ONE HUNDRED": 100,
    };
    let change = [];
    var value_0 = cash - price;
    var total = 0;
    for (const [, money] of cid) {
      total += money;
    }
    total = total.toFixed(2);
    if (Number(total) < value_0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (Number(total) === value_0) {
      return { status: "CLOSED", change: cid };
    } else {
      for (let i = cid.length - 1; i >= 0; i--) {
        const [cn, cv] = cid[i];
        const unitValue = register[cn];
        let cashin = cv;
        while (value_0 >= unitValue && cashin > 0) {
          value_0 = (value_0 - unitValue).toFixed(2);
          cashin = (cashin - unitValue).toFixed(2);
          change.push([cn, unitValue]);
        }
      }
      if (Number(value_0) > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      }
      return { status: "OPEN", change };
    }
  }
  