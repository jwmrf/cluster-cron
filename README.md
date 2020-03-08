# one-cluster
Package with identify the principal proccess id in a clustering application or work without cluster normally.

## Installation

```
npm install one-cluster
```

## Use Function

const one-cluster = require('one-cluster')
one-cluster() 'Return True if application not have cluster or if is the principal proccess in a cluster application'


### Use With Cronjob Example 

// npm install cron

const one-cluster = require('one-cluster')
var CronJob = require('cron').CronJob;
var job = new CronJob('* * * * * *', function() {
    if(one-cluster()){
        console.log('You will see this message in one cluster proccess');
    }
}, null, true, 'America/Los_Angeles');
job.start();



