# pgmonitoring

A Node.js client for [Pgmonitoring](https://pgmonitoring.com/) server .

This project is not usable yet and will be released soon .


## Usage

```javascript

const Pg_monitoring = require("pgmonitoring")
Pg_monitoring.initial("API_KEY")

// Send Metric: Increments a stat by a value (default is 1)

Pg_monitoring.sendmetric("metric_name")

Pg_monitoring.sendmetric("metric_name" , 12)

Pg_monitoring.sendmetric("metric_name" , -21)


```

