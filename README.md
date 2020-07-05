# one-cluster
Package with identify the principal process id in a clustering application or work without cluster normally.

## Installation

```
npm install one-cluster
```

## Use Function

```javascript
const onecluster = require('one-cluster')
onecluster() 'Return True if application not have cluster or if is the principal(id 1) process in a cluster application'

onecluster(2) 'You can select the Cluster Process ID to identify' 
'The Major Cluster Process is id 1, for each process the id increment is 1.'
'If you have 3 process, the ids are 1 - 2 - 3'
```

### Use With Cronjob Example 

```
npm install cron
```

```javascript
const onecluster = require('one-cluster')
var CronJob = require('cron').CronJob;
var job = new CronJob('* * * * * *', function() {
    if(onecluster()){
        console.log('You will see this message in one cluster process');
    }
}, null, true, 'America/Los_Angeles');
job.start();
``` 


