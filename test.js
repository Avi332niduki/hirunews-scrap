const { BusinessNews } = require('./index');

async function HiruNewsData() {
    try {
        const BusinessNewsData = await BusinessNews();
        console.log(BusinessNewsData);
       
    } catch (error) {
        console.error('Error getting breaking news data:', error.message);
    }
}

HiruNewsData();