# one-cluster
Package with identify the principal proccess id in a clustering application or work without cluster normally.

## Installation

```
npm install one-cluster
```

## Use Function

```javascript
const onecluster = require('one-cluster')
onecluster() 'Return True if application not have cluster or if is the principal proccess in a cluster application'


### Use With Cronjob Example 
// npm install cron

const onecluster = require('one-cluster')
var CronJob = require('cron').CronJob;
var job = new CronJob('* * * * * *', function() {
    if(onecluster()){
        console.log('You will see this message in one cluster proccess');
    }
}, null, true, 'America/Los_Angeles');
job.start();



