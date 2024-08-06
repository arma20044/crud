/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:[
            'placehold.co'
        ]
    },
    logging:{
        fetches: {
            fullUrl:true,
        }
    }
};

export default nextConfig;
