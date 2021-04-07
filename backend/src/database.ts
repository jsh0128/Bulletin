import { Connection, createConnection } from "typeorm";
import "reflect-metadata";

export const getConnection = async (): Promise<Connection> => {
  try {
    const connection = await createConnection();
    console.log("db connection");
    return connection;
  } catch (e) {
    console.log("error " + e);
  }
};
