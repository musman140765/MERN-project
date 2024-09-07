# Use a smaller, Alpine-based Node.js image
FROM node:14-alpine AS build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install only production dependencies for a smaller image
RUN npm ci --only=production

# Copy the rest of the application code
COPY . .

# Expose the backend port, e.g., 8080
EXPOSE 8888

# Start the application
CMD ["node", "index.js"]

