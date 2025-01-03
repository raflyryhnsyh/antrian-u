const response = require("../../../utils/response");
const { GetOperatorHistoryRepository, GetWaktuTerlayaniHistoryRepository, AllHistoryRepository, DetailHistoryRepository, PelayananHistoryRepository, LoketHistoryRepository } = require('../repositories');

module.exports={
    getOperatorHistory: async (req, res) => {
        try {
            const history = await GetOperatorHistoryRepository();

            const formattedResult = history.map((format) => ({
                id_operator: format.id_operator,
                nama_operator: format.nama,
                no_loket: format.lokets.no_loket,
                nama_pelayanan: format.lokets.pelayanan.nama_pelayanan,
              }));

            return response({res,message: 'get operator history success',data: formattedResult, code: 200});
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
    getOperatorWaktuTerlayaniHistory: async (req, res) => {
        try {
            const history = await GetWaktuTerlayaniHistoryRepository();

            // Proses rata-rata waktu melayani untuk setiap operator
            const operatorResults = history.map(operator => {
                const totalTime = operator.operators.reduce((acc, current) => {
                  const startTime = new Date(current.waktu_pelayanan);
                  const endTime = new Date(current.waktu_selesai_pelayanan);
          
                  // Cek jika waktu selesai lebih kecil dari waktu mulai (waktu_selesai_pelayanan < waktu_pelayanan)
                  if (endTime < startTime) {
                    console.warn(`Invalid time for ${operator.nama}: ${current.waktu_pelayanan} - ${current.waktu_selesai_pelayanan}`);
                    return acc; // Skip this entry if the time is invalid
                  }
          
                  const diff = (endTime - startTime) / 1000; // dalam detik
                  return acc + diff;
                }, 0);
          
                if (operator.operators.length === 0) {
                  return {
                    nama: operator.nama,
                    rata_waktu_melayani: "00:00:00", // Jika tidak ada data untuk operator ini
                  };
                }
          
                const avgTimeInSeconds = totalTime / operator.operators.length;
          
                // Mengubah waktu rata-rata dalam detik ke format HH:MM:SS
                const hours = Math.floor(avgTimeInSeconds / 3600);
                const minutes = Math.floor((avgTimeInSeconds % 3600) / 60);
                const seconds = Math.floor(avgTimeInSeconds % 60);
                
                const avgTimeFormatted = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
          
                return {
                  nama: operator.nama,
                  rata_waktu_melayani: avgTimeFormatted,
                };
            });

            return response({res,message: 'get operator waktu terlayani history success',data: operatorResults, code: 200});
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
    // postHistory: async (req, res) => {
    //     try {
    //         const history = await GetAllhistoryRepository();
    //         return response({res,message: 'post history success',data: history, code: 200});
    //     } catch (error) {
    //         res.status(500).json({
    //             success: false,
    //             message: error.message,
    //         });
    //     }
    // },
    postDetailHistory: async (req, res) => {
        try {
            const { id_operator } = req.body;

            const history = await DetailHistoryRepository({ id_operator });
            return response({res,message: 'post detail history success',data: history, code: 200});
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
    postAllHistory: async (req, res) => {
        try {
            const { tahun, bulan, hari } = req.body;

            if ($tahun && $bulan) {
                await AllHistoryRepository({ tahun, bulan, hari });
            } else if ($tahun && !$bulan) {
                await AllHistoryRepository({ tahun, bulan, hari });
            } else {
                await AllHistoryRepository({ tahun, bulan, hari });
            }

            return response({res,message: 'post all history success',data: history, code: 200});
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
    postPelayananHistory: async (req, res) => {
        try {
            const history = await PelayananHistoryRepository();
            return response({res,message: 'post pelayanan history success',data: history, code: 200});
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
    postLoketHistory: async (req, res) => {
        try {
            const history = await LoketHistoryRepository();
            return response({res,message: 'post loket history success',data: history, code: 200});
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },    
}