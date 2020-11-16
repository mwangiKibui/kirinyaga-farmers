let url;

if(process.env.NODE_ENV === "production"){
    url = `https://client-work.allcomrades.co.ke`;
}else if(process.env.NODE_ENV === "development"){
    url = `http://localhost:4000`;
};

export default url;