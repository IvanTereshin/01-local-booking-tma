# Deployment

## Production container

This app ships as a static Vite build served by nginx.

```bash
docker build -t tma-01-booking:production .
docker run --rm -p 8080:80 tma-01-booking:production
```

## Dev-server deployment

Current compose path on the demo server:

```text
/Users/ivantereshin/Documents/SERVER/demos/tma-01-booking/docker-compose.yml
```

Target public URL:

```text
https://tma-01-booking.ivantereshin-test.store
```

The container is production-ready locally behind Traefik. Public HTTPS requires DNS
`*.ivantereshin-test.store` to point to the machine that runs Traefik.
