var config = {};

config.env = "dev"; //dev,prod

config.baseURL = "";

config.database = "";
config.db1 = "";

if (config.env == "dev") {
	config.databaseURL = "mongodb+srv://user:user@cluster0.qragp.mongodb.net/dbname?retryWrites=true&w=majority";
	config.baseURL = "https://localhost/";
	config.dbName = "livingBookTEST";
} else if (config.env == "prod") {
	config.databaseURL ="mongodb://livingbook:livingbook@cluster0-shard-00-00-bfusp.mongodb.net:27017,cluster0-shard-00-01-bfusp.mongodb.net:27017,cluster0-shard-00-02-bfusp.mongodb.net:27017/trackDB?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
	//config.baseURL = "https://livingtextbook.herokuapp.com/";
	//config.baseURL = "https://18.217.116.224/";
	config.baseURL = "https://livingtextbooks.com/";
	config.dbName = "livingBookPROD";
}
//MongoDB Credentials
//drsarai2020@gmail.com
//erad#2020
module.exports = config;