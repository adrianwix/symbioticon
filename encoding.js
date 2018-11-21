const clientId = "SBM_celyjYzatiw";
const clientSecret = "xuNKb77dpB4EWAe";

const clientEncoded = Buffer.from(`${clientId}:${clientSecret}`).toString(
	"base64"
);
console.log(clientEncoded);
const clientDecoded = Buffer.from(clientEncoded, "base64").toString("ascii");
console.log(clientDecoded);
