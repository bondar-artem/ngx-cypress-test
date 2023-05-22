FROM cypress/base:12.22.8
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install 

RUN $(npm bin)/cypress verify

RUN ["npm","run","start:e2e"]