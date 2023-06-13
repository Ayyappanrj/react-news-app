#Base image
FROM node:20-alpine3.17
#Working directory
WORKDIR /app
#Copy package.json to /app
COPY package.json .
#npm install
RUN npm install
#Copy all files
COPY . .
#Port expose
EXPOSE 3000
#Run the code
CMD ["npm", "start"]
