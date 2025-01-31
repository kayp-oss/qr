FROM rust:1.67 as builder

WORKDIR /user/src/api
COPY . .

RUN cargo install --path .

FROM alpine:latest
