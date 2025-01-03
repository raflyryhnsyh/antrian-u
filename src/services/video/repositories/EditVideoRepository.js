const {video:VideoModel} = require('../../../utils/database')

module.exports = async (params) => {
  const { id_video, judul, newFileVideo } = params;
  
  const videos = await VideoModel.update({
    where: {
        id_video:+id_video
    },
    data: {
        judul,
        video: newFileVideo
    }
  });
  return videos;
};