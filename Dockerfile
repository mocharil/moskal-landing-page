# Use the official Node.js image as the base image
FROM node:20-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN npm install -g pnpm && pnpm install

# Copy the entire project to the working directory
COPY . .

# Build the Next.js application
RUN pnpm run build

# Use the official Node.js image for the production environment
FROM node:20-alpine AS production

# Set the working directory inside the container
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Install only the production dependencies
RUN npm install -g pnpm && pnpm install --prod

# Expose the port the application will run on
EXPOSE 3000

# Set the startup command
CMD ["pnpm", "start"]
