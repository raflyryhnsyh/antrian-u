const {video:VideoModel} = require('../../../utils/database')

module.exports= async ({ judul, newFileVideo, tgl_posting }) => {
    const videos = await VideoModel.create({
        data: {
            judul,
            video: newFileVideo,
            tgl_posting
        }
    });
    return videos;
}
