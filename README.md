# pgmonitoring

A Node.js client for [Pgmonitoring](https://pgmonitoring.com/) server .

This project is not usable yet and will be released soon .


## Usage

```javascript

const Pg_monitoring = require("pg-cli-monitoring")
Pg_monitoring.initial("API_KEY")

// Send Metric: Increments a stat by a value (default is 1)
Pg_monitoring.increment("metric_name")

Pg_monitoring.increment("metric_name" , 75)


// Send Metric: Decrements a stat by a value (default is 1)
Pg_monitoring.decrement("metric_name")

Pg_monitoring.decrement("metric_name" , 75)


```

