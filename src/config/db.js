import mongoose from "mongoose";

const dbConnection = async () => {
	// const uri = "mongodb://localhost:27017/gallerydb"; //devUri
	const uri = process.env.MONGODB_URI;
	const options = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	};
	try {
		await mongoose.connect(uri, options);
		console.log("base de datos online");
	} catch (error) {
		console.log(error);
		throw new Error("db error");
	}
};

export default dbConnection;
