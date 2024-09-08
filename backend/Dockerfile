# Stage 1: Build
FROM node:14-alpine AS build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application if needed (optional step)
# RUN npm run build

# Stage 2: Production
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy only the necessary files from the build stage
COPY --from=build /usr/src/app /usr/src/app

# Install only production dependencies
RUN npm install --only=production

# Expose the port your application runs on
EXPOSE 5000

# Start the application
CMD ["node", "index.js"]

