<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TradePulse</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>

  <!-- TOP BAR -->
  <div class="topbar">
    <h2>TradePulse</h2>
    <div id="balance">Balance: $10,000</div>
  </div>

  <!-- MARKET PRICE -->
  <div class="price-section">
    <h1 id="price">100.00</h1>
    <p>BTC / USDT (Demo Market)</p>
  </div>

  <!-- CHART PLACEHOLDER -->
  <div class="chart-box">
    <p>📊 Live Chart Area (Demo)</p>
  </div>

  <!-- TRADE BUTTONS -->
  <div class="trade-buttons">
    <button class="buy" onclick="trade('buy')">BUY</button>
    <button class="sell" onclick="trade('sell')">SELL</button>
  </div>

  <!-- TRADE HISTORY -->
  <div class="history">
    <h3>Trade History</h3>
    <ul id="trades"></ul>
  </div>

  <script src="script.js"></script>
</body>
</html>body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #0b0f1a;
  color: white;
}

/* TOP BAR */
.topbar {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background: #111827;
  font-weight: bold;
}

/* PRICE SECTION */
.price-section {
  text-align: center;
  margin-top: 40px;
}

#price {
  font-size: 42px;
  color: #00ff99;
}

/* CHART BOX */
.chart-box {
  margin: 20px;
  padding: 40px;
  background: #1f2937;
  border-radius: 12px;
  text-align: center;
  color: #aaa;
}

/* TRADE BUTTONS */
.trade-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px;
}

button {
  padding: 15px 30px;
  border: none;
  font-size: 16px;
  border-radius: 10px;
  color: white;
}

.buy {
  background: #16a34a;
}

.sell {
  background: #dc2626;
}

/* HISTORY */
.history {
  margin: 20px;
  padding: 15px;
  background: #111827;
  border-radius: 10px;
}

.history ul {
  list-style: none;
  padding: 0;
  }let price = 100;
let balance = 10000;

// Update price every 1.5 seconds (fake market)
setInterval(() => {
  price += (Math.random() - 0.5) * 2;
  document.getElementById("price").innerText = price.toFixed(2);
}, 1500);

// Trade function
function trade(type) {
  let profit = (Math.random() * 20 - 10).toFixed(2);
  balance += parseFloat(profit);

  document.getElementById("balance").innerText =
    "Balance: $" + balance.toFixed(2);

  let li = document.createElement("li");
  li.innerText = `${type.toUpperCase()} trade → Profit: $${profit}`;

  document.getElementById("trades").appendChild(li);
}
