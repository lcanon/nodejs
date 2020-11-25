FROM nginx:1.19.5-alpine

# For using curl within nginx deployment
RUN apk add --update \
   bash

# Build files
COPY dist/ui/ /usr/share/nginx/html/

