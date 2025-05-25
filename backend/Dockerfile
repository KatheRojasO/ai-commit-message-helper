FROM node:slim

WORKDIR /app

# Copy package files first for better caching
COPY package.json package-lock.json* ./

## Install global dependencies
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && npm install -g prisma

# Install dependencies
RUN npm install --omit=dev

# Copy the rest of the application
COPY . .

# Generate Prisma client
RUN npx prisma migrate deploy && \
    npx prisma generate

# Expose the port the app runs on
EXPOSE 3000

# Set environment variable
ENV NODE_ENV=production

# Command to run the application
CMD ["npm", "start"]