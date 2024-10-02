ARG IMAGE=node:latest

#COMMON
FROM $IMAGE as builder
WORKDIR /app
COPY . .
RUN npm i

#DEV Image
FROM builder as dev
CMD [""]