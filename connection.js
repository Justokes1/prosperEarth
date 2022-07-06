
const RDS_HOSTNAME = "apidatabase-1.cmriopxjxttb.us-east-1.rds.amazonaws.com";
const RDS_PORT = "3306";
const RDS_DB_NAME = "Api Database";
const RDS_USERNAME = "root";
const RDS_PASSWORD = "groupfourteen";

connection.connect((err)=>{
    if(!err)
    {
        console.log("Connected");
    }
    else 
        console.log(err);
});

module.exports = connection;
