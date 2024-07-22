#use the latest LTS (long term support) version 12 of node available from the Docker Hub
FROM node20
# Create app directory
WORKDIR usrsrcapp
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@6+)
COPY package.json .
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
# Bundle app source
COPY . .
EXPOSE 18081
CMD [node,server.js]
