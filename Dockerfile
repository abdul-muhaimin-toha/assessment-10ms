# =========================================
# Stage 1: Build the application
# =========================================
FROM node:22-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Next.js application for production
RUN npm run build

# =========================================
# Stage 2: Production image
# =========================================
FROM node:22-alpine AS runner

WORKDIR /app

# Create a non-root user for security
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs
USER nextjs

# Copy only the necessary files from the builder stage
# This includes the .next directory, public assets, and package files
COPY --from=builder --chown=nextjs:nextjs /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Expose the port the app runs on
EXPOSE 3000

# The command to run the application
CMD ["npm", "start"]