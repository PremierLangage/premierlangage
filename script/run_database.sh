#!/bin/bash

docker run --name premierlangage \
    -e POSTGRES_USER=django \
    -e POSTGRES_PASSWORD=django_password \
    -e POSTGRES_DB=django_premierlangage \
    -e PGDATA=/var/lib/postgresql/data/pgdata \
    -v premierlangage:/var/lib/postgresql/data \
    -p 5432:5432 \
    -d postgres:13 \
