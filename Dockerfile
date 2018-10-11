FROM node:10-alpine
LABEL name morphism-playground

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# Install app dependencies
COPY package.json package-lock.json /usr/src/app/
RUN npm install
# Bundle app source
COPY . /usr/src/app
RUN npm run build
EXPOSE 3000
CMD [ "npm", "start" ]
