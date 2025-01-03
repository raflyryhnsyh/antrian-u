const {banner:BannerModel} = require('../../../utils/database')

module.exports= async () => {
    const banner = await BannerModel.findMany();
    return banner;
}
