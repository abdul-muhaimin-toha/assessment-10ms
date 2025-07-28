# Getting Node.js version 22

FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy the application source code
COPY . .

# Install all dependencies needed for the build
RUN npm install

# Build the Next.js application for production
RUN npm run build

CMD ["npm", "start"]