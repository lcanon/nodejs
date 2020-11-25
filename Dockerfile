FROM nginx:1.15-alpine

# For using curl within nginx deployment
RUN apk add --update \
   bash

# Build files
COPY dist/ui/ /usr/share/nginx/html/

