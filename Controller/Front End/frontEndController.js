const path = require("path")

const frontEndController = {

   
       clientPage: async (req, res) => {
              try {
                  // Construct the correct path by replacing unnecessary parts
                  const pathway = path.join(__dirname, "../../views/frontend/index.html");
                  console.log("Resolved Path for clientPage:", pathway);
                  res.sendFile(pathway);
              } catch (error) {
                  console.error("Error in clientPage:", error.message);
                  res.status(500).send("File not found or server error.");
              }
          },
    
          payPageIp: async (req, res) => {
              try {
                  // Construct the correct path for ajaxPost.html
                  const pathway = path.join(__dirname, "../../views/frontend/ajaxPost.html");
                  console.log("Resolved Path for payPageIp:", pathway);
                  res.sendFile(pathway);
              } catch (error) {
                  console.error("Error in payPageIp:", error.message);
                  res.status(500).send("File not found or server error.");
              }
          },

}

module.exports = frontEndController