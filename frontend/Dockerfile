# Use a smaller base image
FROM node:14-alpine AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy the rest of the application
COPY . .

# Expose the required port
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]

