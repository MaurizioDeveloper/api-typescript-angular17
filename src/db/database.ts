import mongoose from "mongoose";

const printEnv = (value: string) => {
  console.log(value);
};

export async function conectarDB(){  
  try {
    await mongoose.connect(process.env.DATABASE_URL!)
    console.log("Conexion exitosa");
    
  } catch (error) {
    console.log("Error al conectar con MongoDB: ", error);
    
  }
}

export default mongoose;