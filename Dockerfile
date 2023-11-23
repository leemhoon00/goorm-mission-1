FROM node as builder

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY ./ /usr/src/app/
RUN npm install
RUN npm run build

RUN rm -rf node_modules
RUN npm install --production
RUN npx prisma generate

FROM node as production

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/prisma ./prisma
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json ./package.json
COPY --from=builder /usr/src/app/views ./views

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]