# Streamsight
Streamsight is an interactive query engine for telemetry ingestion and distributed streaming platforms. <br />

Using Streamsight you can perform live ANSI-SQL queries on top of data from Azure Event Hubs, Apache Kafka and more. <br />
Streamsight displays data in both JSON and Table formats and gives insights into different metrics of the streaming platform of choice.

## Getting started
The easiest way to use Streamsight is to simply build as a Docker image and then run with the environment variables of choice.
A [stable version] can be used from Docker Hub.

### Azure Event Hub example
```
docker run -d -p 4000:4000 -e "service=eventhubs" -e "connectionString=Endpoint=sb://****.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=***************" -e "eventHubName=*****"  streamsight/console
```

### Apache Kafka example
```
docker run -d -p 4000:4000 -e "service=kafka" -e "connectionString=localhost:2181" -e "topic=MyTopic"  streamsight/console
```

## Web UI

The Streamsight dashboard is available at localhost:4000 (or the host port of your choice)

## RESTful API

Steamsight exposes the following endpoints:

|HTTP Request                           | Description                                                   |
|---------------------------------------|---------------------------------------------------------------|
|GET /query?q=                          | Query the streaming platform for data                         |
|GET /stats                             | Returns Total Messages, Events / Second and Error Count       |
|POST /metadata                         | Returns platform specific metadata                            |
|GET /status                            | Healthcheck for Streamsight                                   |

### Test it out

```
curl localhost:4000/query?q=select * from events
```

[stable version]: https://hub.docker.com/r/streamsight/console/
