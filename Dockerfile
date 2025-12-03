# Multi-stage build for production
# Stage 1: Build frontend
FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Build backend
FROM node:20-alpine AS backend-builder
WORKDIR /app/backend
COPY server/package.json server/package-lock.json* ./
RUN npm ci
COPY server/ .
RUN npm run build

# Stage 3: Production runtime
FROM node:20-alpine
WORKDIR /app

# Install PM2 for process management
RUN npm install -g pm2

# Copy backend
COPY --from=backend-builder /app/backend/dist ./backend/dist
COPY --from=backend-builder /app/backend/package.json ./backend/
COPY --from=backend-builder /app/backend/node_modules ./backend/node_modules

# Copy frontend build
COPY --from=frontend-builder /app/frontend/dist ./frontend/dist

# Create PM2 ecosystem file
RUN echo '{"apps":[{"name":"backend","script":"./backend/dist/index.js","instances":1,"exec_mode":"cluster"},{"name":"frontend","script":"serve","args":"-s frontend/dist -l 3000","instances":1}]}' > ecosystem.config.json

# Install serve for frontend
RUN npm install -g serve

EXPOSE 3000 5000

CMD ["pm2-runtime", "ecosystem.config.json"]

