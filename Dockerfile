FROM node:10.16.3
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

# Dependencies
COPY package.json ./
RUN npm install

# Project Files
ADD . /app
WORKDIR /app

# Port
EXPOSE 8080
# CMD
CMD ["npm", "start"]
